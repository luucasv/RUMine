#include <opencv2/features2d.hpp>
#include <opencv2/videoio.hpp>
#include <opencv2/opencv.hpp>
#include <opencv2/highgui.hpp>
#include <vector>
#include <iostream>
#include <iomanip>
#include "stats.h"
#include "utils.h"

class Tracker {
  public:
    Tracker(cv::Ptr<cv::Feature2D> _detector, cv::Ptr<cv::DescriptorMatcher> _matcher) :
        detector(_detector),
        matcher(_matcher)
    {}
    void setFirstFrame(const cv::Mat frame, std::vector<cv::Point2f> bb, Stats& stats);
    cv::Mat process(const cv::Mat frame, Stats& stats);
    cv::Ptr<cv::Feature2D> getDetector() {
        return detector;
    }
  protected:
    cv::Ptr<cv::Feature2D> detector;
    cv::Ptr<cv::DescriptorMatcher> matcher;
    cv::Mat first_frame, first_desc;
    std::vector<cv::KeyPoint> first_kp;
    std::vector<cv::Point2f> object_bb;
};
