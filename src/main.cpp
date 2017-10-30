#include <opencv2/features2d.hpp>
#include <opencv2/videoio.hpp>
#include <opencv2/opencv.hpp>
#include <opencv2/highgui.hpp>
#include <vector>
#include <iostream>
#include <iomanip>
#include "stats.h"
#include "utils.h"

using namespace std;
using namespace cv;

const double akaze_thresh = 3e-4;
const double ransac_thresh = 2.5f;
const double nn_match_ratio = 0.8f;
const int bb_min_inliers = 100;
const int stats_update_period = 10;

int main() {
    string input_path = "blais.mp4";
    string video_name = input_path;
    VideoCapture video_in;
    int isCamera;
    cout << "Input :: (0) Camera | (1) Video: ";
    scanf("%d", &isCamera);
    if (!isCamera) {
        int camera_no = input_path[0] - '0';
            video_in.open( camera_no );
    }

    else {
        video_in.open(video_name);
    }

    if(!video_in.isOpened()) {
        cerr << "Couldn't open " << video_name << endl;
        return 1;
    }

    Stats stats, akaze_stats;
    Ptr<AKAZE> akaze = AKAZE::create();
    akaze->setThreshold(akaze_thresh);

    Ptr<DescriptorMatcher> matcher = DescriptorMatcher::create("BruteForce-Hamming");
    marker_tracker::Tracker akaze_tracker(akaze, matcher);

    Mat frame;
    namedWindow(video_name, WINDOW_NORMAL);
    cout << "\nSelect ROI to track" << endl;

    video_in >> frame;
    video_in >> frame;
    cv::resizeWindow(video_name, frame.size());
    imshow(video_name, frame);
    vector<Point2f> bb;
    cv::Rect uBox = cv::selectROI(video_name, frame);
    bb.push_back(cv::Point2f(static_cast<float>(uBox.x), static_cast<float>(uBox.y)));
    bb.push_back(cv::Point2f(static_cast<float>(uBox.x+uBox.width), static_cast<float>(uBox.y)));
    bb.push_back(cv::Point2f(static_cast<float>(uBox.x+uBox.width), static_cast<float>(uBox.y+uBox.height)));
    bb.push_back(cv::Point2f(static_cast<float>(uBox.x), static_cast<float>(uBox.y+uBox.height)));

    akaze_tracker.setFirstFrame(frame, bb, stats);
    Stats akaze_draw_stats;
    Mat akaze_res, res_frame;
    int i = 0;
    for(;;) {
        i++;
        bool update_stats = (i % stats_update_period == 0);
        video_in >> frame;
        // stop the program if no more images
        if(frame.empty()) break;
        akaze_res = akaze_tracker.process(frame, stats);
        akaze_stats += stats;
        if(update_stats) {
            akaze_draw_stats = stats;
        }
        cv::imshow(video_name, akaze_res);
        if(waitKey(1)==27) break; //quit on ESC button
    }
    akaze_stats /= i - 1;

    return 0;
}
