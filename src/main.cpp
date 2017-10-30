#include <opencv2/features2d.hpp>
#include <opencv2/videoio.hpp>
#include <opencv2/opencv.hpp>
#include <opencv2/highgui.hpp>
#include <vector>
#include <iostream>
#include <iomanip>
#include "../include/Tracker.h"
#include "../include/stats.h"
#include "../include/utils.h"

using namespace cv;
using namespace std;

int main() {
    string input_path = "blais.mp4";
    string video_name = input_path;
    VideoCapture video_in;
    int isCamera;
    cout << "Input :: (0) Camera | (1) Video: ";
    scanf("%d", &isCamera);
    if (!isCamera) {
        int camera_no = 0;
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
    Tracker akaze_tracker(akaze, matcher);

    Mat frame;
    namedWindow(video_name, WINDOW_NORMAL);
    cout << "\nSelect ROI to track" << endl;

    while(waitKey(1) != 'c') {
        video_in >> frame;
        cv::resizeWindow(video_name, frame.size());
        imshow(video_name, frame);
    }   
    
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
