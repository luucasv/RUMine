#include "../include/Tracker.h"

#include <opencv2/features2d.hpp>
#include <opencv2/videoio.hpp>
#include <opencv2/opencv.hpp>
#include <opencv2/highgui.hpp>
#include <vector>
#include <iostream>
#include <iomanip>
#include "stats.h"
#include "utils.h"

using cv::Mat;
using cv::Point2f;
using cv::Point;
using cv::String;
using std::string;
using std::stringstream;
using std::vector;

void Tracker::setFirstFrame(const Mat frame, vector<Point2f> bb, Stats& stats) {
  cv::Point *ptMask = new cv::Point[bb.size()];
  const Point* ptContain = { &ptMask[0] };
  int iSize = static_cast<int>(bb.size());
  for (size_t i=0; i<bb.size(); i++) {
      ptMask[i].x = static_cast<int>(bb[i].x);
      ptMask[i].y = static_cast<int>(bb[i].y);
  }
  first_frame = frame.clone();
  cv::Mat matMask = cv::Mat::zeros(frame.size(), CV_8UC1);
  cv::fillPoly(matMask, &ptContain, &iSize, 1, cv::Scalar::all(255));
  detector->detectAndCompute(first_frame, matMask, first_kp, first_desc);
  drawBoundingBox(first_frame, bb);
  object_bb = bb;
  delete[] ptMask;
}

Mat Tracker::process(const Mat frame, Stats& stats) {
  TickMeter tm;
  vector<KeyPoint> kp;
  Mat desc;
  tm.start();
  detector->detectAndCompute(frame, noArray(), kp, desc);
  stats.keypoints = (int)kp.size();
  vector< vector<DMatch> > matches;
  vector<KeyPoint> matched1, matched2;
  matcher->knnMatch(first_desc, desc, matches, 2);
  for(unsigned i = 0; i < matches.size(); i++) {
      if(matches[i][0].distance < nn_match_ratio * matches[i][1].distance) {
          matched1.push_back(first_kp[matches[i][0].queryIdx]);
          matched2.push_back(      kp[matches[i][0].trainIdx]);
      }
  }
  stats.matches = (int)matched1.size();
  Mat inlier_mask, homography;
  vector<KeyPoint> inliers1, inliers2;
  vector<DMatch> inlier_matches;
  if(matched1.size() >= 4) {
      homography = findHomography(Points(matched1), Points(matched2),
                                  RANSAC, ransac_thresh, inlier_mask);
  }

  tm.stop();
  stats.fps = 1. / tm.getTimeSec();

  if(matched1.size() < 4 || homography.empty()) {
      Mat res;
      hconcat(first_frame, frame, res);
      stats.inliers = 0;
      stats.ratio = 0;
      return res;
  }

  for(unsigned i = 0; i < matched1.size(); i++) {
      if(inlier_mask.at<uchar>(i)) {
          int new_i = static_cast<int>(inliers1.size());
          inliers1.push_back(matched1[i]);
          inliers2.push_back(matched2[i]);
          inlier_matches.push_back(DMatch(new_i, new_i, 0));
      }
  }
  stats.inliers = (int)inliers1.size();
  stats.ratio = stats.inliers * 1.0 / stats.matches;
  vector<Point2f> new_bb;
  perspectiveTransform(object_bb, new_bb, homography);
  Mat frame_with_bb = frame.clone();
  if(stats.inliers >= bb_min_inliers) {
      drawBoundingBox(frame_with_bb, new_bb);
  }
  return frame_with_bb;
}
