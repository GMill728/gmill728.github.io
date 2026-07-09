---
layout: inner
pagination: 
  enabled: false
---

# Examples of My Work

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
