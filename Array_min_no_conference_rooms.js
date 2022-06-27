/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
*/


/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    if (intervals.length <= 1) { return intervals.length; }

    const startTimes = [];
    const endTimes = [];

    intervals.forEach(x => {
        startTimes.push(x[0]);
        endTimes.push(x[1]);
    });

    startTimes.sort((a, b) => a - b);
    endTimes.sort((a, b) => a - b);

    let startPointer = 0;
    let endPointer = 0;
    let rooms = 0;

    while (startPointer < intervals.length) {
        if (startTimes[startPointer++] >= endTimes[endPointer]) {
            ++endPointer;
        } else {
            ++rooms
        }
    }

    return rooms;
};