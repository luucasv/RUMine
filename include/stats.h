#ifndef STATS_H
#define STATS_H

struct Stats {
    int matches;
    int inliers;
    double ratio;
    int keypoints;
    double fps;

	
	Stats();
	Stats& operator+=(const Stats& op);
	Stats& operator/=(int num);
};

#endif // STATS_H
