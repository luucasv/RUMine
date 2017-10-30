#include "../include/stats.h"

Stats::Stats() : matches(0),
        inliers(0),
        ratio(0),
        keypoints(0),
        fps(0.){}

Stats& Stats::operator+=(const Stats& op) {
    matches += op.matches;
    inliers += op.inliers;
    ratio += op.ratio;
    keypoints += op.keypoints;
    fps += op.fps;
    return *this;
}

Stats& Stats::operator/=(int num) {
    matches /= num;
    inliers /= num;
    ratio /= num;
    keypoints /= num;
    fps /= num;
    return *this;
}
