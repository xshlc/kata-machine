-- start of my memo --

## See `notes.md`.

<img src="https://miro.medium.com/v2/resize:fit:4080/1*Uzrw9faXdYgg20I6NjUTBw.png" />

source: https://www.bigocheatsheet.com/

---

### Big O Cheatsheets
##### DFS and BFS
![](/images/dfs-and-bfs.jpg)
##### Recursions
![](/images/recursion.jpg)
##### Leetcode Algorithms
![](/images/algos.jpg)
##### Sorting Algorithms
![](/images/sorting.jpg)
##### Data Structures
![](/images/ds.jpg)
##### Java Collections
![](/images/java-collections.jpg)
source: https://www.lavivienpost.com/big-o-notation-cheat-sheet-leetcode-big-o/

---

<img src="https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png" />

source: https://www.bigocheatsheet.com/

---

<img src="https://miro.medium.com/v2/resize:fit:1400/0*DzREjb9hiUgrWeWT.png" />
-- end of my memo --

## Developed live on twitch
[ThePrimeagen](https://twitch.tv/ThePrimeagen)

## Naming
### Lig-Machine
Lengthy Instrumentation Generating Massive Anticompetitive Computational Help for Intermediate Coders // n9

### Ligmata
Literal Improvement Gaining Master and Tutelage on Algorithms
Let's Intelligently Generate Multiple Algorithm Training Assessments // permdaddy

### Sugma Nuts
Studious Users Get Major Abilities. New Useful Training for Students

### Ligma Farts
Learn Intermediate Groundbreaking Massive Algorithms. Free Algorithm Research & Training System


### If you have a suggestion
make an issue and we will come up with the potential name.

### WARNING
I have just started to add algorithms, so the number of supported algorithms is
limited at the moment, but will grow fairly quick.

### WARNING
OUT OF DATE.  We have quite a few more.  need to update
### Supported Algorithm
* Insertion sort
* Merge sort
* QuickSort
* Prim's MST (Adjacency List)
* Dijkstra's Shortest Path (Adjacency List)

### Supported Data Structures
* Singly linked list
* Doubly linked list
* Queue
* Stack
* Graph with Adjacency List
* Graph with Adjacency Matrix (untested)

### How It Works

Make sure you have [Node.js](https://nodejs.org/en/) and yarn installed: `npm install --global yarn`

clone the repo and install the dependencies

```bash
yarn install
```

edit the `ligma.config.js` file
```javascript
module.exports = {
    dsa: [
        "InsertionSort",
        "MergeSort",
        "Queue",
        "Stack",
        "QuickSort",
        "DijkstraList",
        "PrimsList",
    ],
}
```

create a day of katas, this will use the list in the `ligma.config.js`.
```bash
yarn generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

`yarn generate` will also update the `tsconfig.json` and `jest.config` to point
the latest `day` folder via tspaths.  This allows us to avoid updating anything
for testing each day.

#### Testing
```
yarn test
```

I have yet to create a testing strategy for next sets of algorithms, but we
will get there when i cross that bridge.

### Help wanted
A simple way to specify test, thinking something like `tests.json` and `cat
test.json 2> /dev/null` to specify the tests to run.  tests.json wouldn't be
committed.
