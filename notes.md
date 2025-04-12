## Getting Started

### Initial Setup
Clone the repo.

Run the following:
```shell
yarn install
yarn generate
```
.. and it will generate all the files shown in `src/day1/`

### How to run and test the code:
To get started with the first example in the course involving linear search:
Go to `src/day1/LinearSearchList.ts`.
Fill in the code.
Run the following to test the code:
```shell
npx jest Linear
```
>Note that: You can partially type out the name of the TypeScript file. Also that, you can run the command in both the root of the project directory or within `src/`.

Here is an example output:
```shell
$ npx jest Linear
 PASS  __tests__/LinearSearchList.ts
  ✓ linear search array (4 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.407 s, estimated 2 s
Ran all test suites matching /Linear/i.
```