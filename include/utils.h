#ifndef UTILS_H
#define UTILS_H

#include <opencv2/core.hpp>
#include <vector>
#include <string>
#include "stats.h"


void drawBoundingBox(cv::Mat image, std::vector<cv::Point2f> bb);
void drawStatistics(cv::Mat image, const Stats& stats);
void printStatistics(std::string name, Stats stats);
std::vector<cv::Point2f> Points(std::vector<cv::KeyPoint> keypoints);
cv::Rect2d selectROI(const cv::String &video_name, const cv::Mat &frame);

#endif // UTILS_H
