---
layout: inner
pagination: 
  enabled: false
---

# Examples of My Work
---

## Manhattan Distance Pathfinding
*Language: Processing*

Below is an example snippet of a dungeon crawler I made in processing, an MIT-developed language
built on Java tailor made for graphic applications.  In this snippet I applied an algorythm known
as Manhattan Distance to "Pathfind" between two grid tiles and make a boundry for my dungeon.  This
allowed me to create non-rectangular rooms for the levels.

```java
    for (int y = 0; y < roomHeight; y++) {
            for (int x = 0; x < roomWidth; x++) {

                if (room[x][y] != null){ continue; }
                float r = random(1);

                int xCenter = roomWidth / 2;
                int yCenter = roomHeight / 2;
                int radius = min(roomWidth, roomHeight) / 2;

                if (abs(x - xCenter) + abs(y - yCenter) > radius){//if it's past the manhattan distance then wall it off
                    room[x][y] = new Wall();
                    continue;
                }
            }
    }
```
---

## Manhattan Distance Pathfinding
*Language: Processing*

Below is a snippet of my implementation of a merge sort algorythm.  This
is part of a larger C++ project where I implemented merge, insertion, and quicksort
algorythms in order to calculate how efficiently they sorted 2,000, 10,000, amd 100,000
random integers.

```C++
void mergeSort(vector<int>& S, long long& comparisons) {
    if (S.size() < 2)
        return;

    int mid{static_cast<int>(S.size() / 2)};

    vector<int> left(S.begin(), S.begin() + mid);
    vector<int> right(S.begin() + mid, S.end());

    mergeSort(left, comparisons);
    mergeSort(right, comparisons);

    merge(left, right, S, comparisons);
}


void merge(const vector<int>& left, const vector<int>& right,
           vector<int>& result, long long& comparisons) {

    result.resize(left.size() + right.size());

    int i{0}, j{0}, k{0};

    while (i < left.size() && j < right.size()) {
        comparisons++;

        if (left[i] <= right[j])
            result[k++] = left[i++];
        else
            result[k++] = right[j++];
    }

    while (i < left.size())
        result[k++] = left[i++];

    while (j < right.size())
        result[k++] = right[j++];
}
```