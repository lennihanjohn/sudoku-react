# JS Technical Interview - Sudoku

## Instructions

Your task is to create a working Sudoku (9x9 puzzle) application. A sudoku puzzle is a deceptively simple concept: Given a 9x9 grid consisting of 9 3x3 subgrids, the user must fill each missing space such that: 
- All the digits from 1 through 9 show up in each column.
- All the digits from 1 through 9 show up in each row.
- All the digits from 1 through 9 show up in each subgrid.

If you have never heard of a Sudoku, I invite you to Google it (it is very fun!)

The test consists of 2 parts: 
- You must create a "solver" algorithm, that, given an initial grid, can solve the puzzle. This solver should be able to solve what is considered to be "easy" puzzles using some of the straightforward Sudoku solving techniques. A few example puzzles that should be solvable have been included in this repository.
- You must create the UI (in React) for this Sudoku. The UI will have three main parts: 
    - The grid, pre-filled with an initial puzzle
    - The ability for a user to input their own solution, submit it, and have the application tell them whether the solution is correct or not
    - A "Show Solution" button that fills the Sudoku grid with the right answer (optionally, a "Reset" button to go back to the initial puzzle state). 

## Versions
It is recommended, although not required, to use the following versions of npm & Node.js (as this will make it easier for us to test): 
- npm (develop with v6.9.0)
- Node.js (develop with v10.16.3)

## Notes

- Approach this project as you would any new project i.e. use whatever best practices, styles etc. you would normally use.
- You can set up your project using whatever structure you want. 
- The only requirements are listed above, but feel free to go further with it (bonus marks will be given for any extras!) 
- Feel free to use StackOverflow or any other online resource as you would normally do (although please do not search for the answer directly!).
- You should be using Git as you normally would in a project.
- When done, please provide us with a link to a Git repository with the solution. Please include a README that has instructions on how to install and run the application.
- Some example initial puzzles are provided in `initialBoards.js`. Please note that the `0`s denote spaces that are empty.  
