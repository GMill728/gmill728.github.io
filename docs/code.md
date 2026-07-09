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
built on Java tailor made for graphic applications.  In this snippet I used Manhattan distance as 
a grid-based distance metric to generate irregular dungeon boundaries.  This allowed me to create
non-rectangular rooms for the levels.

```java
    for (int y = 0; y < roomHeight; y++) {
            for (int x = 0; x < roomWidth; x++) {

                if (room[x][y] != null){ continue; }
                float r = random(1);

                int xCenter = roomWidth / 2;
                int yCenter = roomHeight / 2;
                int radius = min(roomWidth, roomHeight) / 2;
                if (abs(x - xCenter) + abs(y - yCenter) > radius){
                    
                    //if it's past the manhattan distance then cull
                    room[x][y] = new Wall();
                    continue;
                }
            }
    }
```
---

## Merge Sort Benchmarking
*Language: C++*

Below is a snippet of my implementation of a merge sort algorithms.  This
is part of a larger C++ project where I implemented merge, insertion, and quicksort
algorithms in order to calculate how efficiently they sorted 2,000, 10,000, amd 100,000
random integers.

```cpp
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
```
---

## Fisher-Yates Shuffling
*Language: Java*

Following this example is a summary of a poker game I made in Java.  When
creating the functionality of that game I didn't want to use the standard `.shuffle()` java
method for the card deck.  I knew I had to instead decide on a shuffle algorithm.
I landed on the Fisher-Yates; here is my implementation.

```java
    public void shuffle() {
        top = 0;
        cardsDealt = 0;

        for(int i = deck.length - 1; i > top; i--) {
            int rnd = (int) (Math.random() * (i + 1));

            Card temp = deck[rnd];
            deck[rnd] = deck[i];
            deck[i] = temp;
        }
    }
```
---

## Summary of 5-Card Poker
*Language: Java*

As mentioned above, I wrote 5-card poker in java. While Putting that entire project in my portfolio 
would be a lot of source code, I wanted to showcase some of the functionality I wrote to demonstrate
my thought process on larger systems.  Here is how I wrote the hand ranking and comparison logic.



### compareTo()
To compare the hands together I had a few different ways of doing things.  Since poker hand rankings have a natural ordering, 
I represented them as enums and used their ordinal values to compare relative strength.  
```java
    @Override
    public int compareTo(PokerHand hand){
        if (this.handRank().ordinal() > hand.handRank().ordinal()) {
            return 1; 
        }
        if (this.handRank().ordinal() < hand.handRank().ordinal()) {
            return -1; 
        }
        else{
            return this.tieHigh(hand);
        }
    }
```

### handRank()
To get the ranks of the hands I could have written everything in one large method but I wanted to 
make sure everything was as modular as possible.  For this I wrote many helper methods such as
`.getScore()`, `sortHand()`, and `evaluateHand()` which we'll ge to later.  
These functions allow me to get an array of scores of each card, sort them, and then call 
the `evaluateHand()` method to see what rank the hand is.  Then I can return that as the `handRank()`.

```java
    public HandRank handRank() {
        int[] handScore = this.getScore();
        sortHand(handScore);
        return evaluateHand(handScore);
    }
```

### evaluateHand()
To evaluate hands, rather than tracking integers and assigning unnecessary values, I simply
made a tree of else if statements, each calling their evaluation logics till a hand finds it's match.
It will then return an enum with it's hand rank.  

```java
    private static HandRank evaluateHand(int[] hand) {
        if (isRoyalFlush(hand)) {
            return HandRank.RoyalFlush;
        } else if (isStraightFlush(hand)) {
            return HandRank.StraightFlush;
        } else if (isFourOfAKind(hand)) {
            return HandRank.FourOfAKind;
        } else if (isFullHouse(hand)) {
            return HandRank.FullHouse;
        } else if (isFlush(hand)) {
            return HandRank.Flush;
        } else if (isStraight(hand)) {
            return HandRank.Straight;
        } else if (isThreeOfAKind(hand)) {
            return HandRank.ThreeOfAKind;
        } else if (isTwoPair(hand)) {
            return HandRank.TwoPair;
        } else if (isOnePair(hand)) {
            return HandRank.OnePair;
        } else {
            return HandRank.HighCard;
        }
    }
```