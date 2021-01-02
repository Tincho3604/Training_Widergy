# Training-JS

These are different exercises to practice JavaScript!

After elbowing your solution, run the command `yarn test [exercise number]` (for example: `yarn test 1`), to run the tests and know if your solution gives a correct result !.

# Statements

## Exercise 1: Arrays 101

### sum: (array [num]) => num

Calculate the sum of the elements of the array. For example if the array is [1, 3, 6, 9] the function returns 19.

### reverse: (array [X]) => array [X]

Returns the reverse. For example if the array is [1, 2, 3] it returns [3, 2, 1].

### rotations: (array [X], num) => array [X]

We define rotation as the shift of the numbers in an array to the left. For example, if our array is: [1, 2, 3, 4, 5] and we want to rotate it 2 times, the result is: [3, 4, 5, 1, 2].

### plateauMasLarga: (array [X]) => num

We define plateau as the sequence of consecutive equal values. The idea of ​​this function is to return the longest plateau. For example, if our array is: [1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 3] the expected result is 5.

---

## Exercise 2: Functions, Loops and Arrays

### f1: (array [num]) => array [num]

Where each element of the returned array contains half of each element of the input array.

### f2: (array [num], func) => array [num]

Where each element of the returned array is the corresponding element of the input array to which the function received by parameter was applied.

### f3: (array [num], num) => array [num]

Where the returned array contains only the numbers greater than the number received by parameter.

### f4: (array [num], func) => array [num]

Where the returned array contains only the numbers that fulfill the function received by parameter, that is, they return true if we apply this function to them.

### f5: (array [num], num) => num

Where the number returned is the first that is less than the number received by parameter, in case of not finding it, it returns -1.

### f6: (array [num], func) => num

Where the number returned is the first one that fulfills the function returned by parameter.

---

## Exercise 3: Multidimensional Arrays

### maximum: (array [array [num]]) => num

Returns the maximum value of the array.

### multiplyMatrices: (array [array [num]], array [array [num]]) => array [array [num]]

Returns the multiplication of the matrices. Suppose you always receive matrices with the correct dimensions to multiply. (https://www.mathsisfun.com/algebra/matrix-multiplying.html).

### isDegrade: (array [array [num]]) => bool

Returns true if the array is a degrade.
We define degrade as follows: A matrix where all the cells on the diagonal have the same value and the numbers on the right are smaller and on the left are larger.
For example: The following matrix is ​​a degrade:
[[4, 6, 8, 19]
[2, 4, 9, 40]
[1, 2, 4, 10]
[-2.0, 2, 4]]
The empty matrix is ​​considered a degrade.

### isDamero: (Board) => bool

We define Board as the matrix of 1 and 0 (array [array [num]]). The empty board is not a checkerboard.
This function returns true if the input board is an alternating black and white cell board.

### isRegularQuantity (Board) => bool

Returns true if the input board is a checkerboard and it is a square matrix (The height of the matrix is ​​equal to the length).

---

## Exercise 4: Arrays and html

All the htmls in this code can be returned as strings.
A user wants to be able to see his invoices, an invoice is represented by a code that can have letters and numbers (a string) and by a value that represents how much must be paid in the period of the invoice.

## How would you represent an invoice?

### How would you view an invoice with html?

It is reasonable to expect that the user has more than one invoice to view, but this is a number that we do not know.

### How would you go about viewing all the invoices?


After implementing this view the functional guys realized that some data was missing and asked us to implement a couple of additional functions.
The first thing they want us to add is an interest calculator,
For this we must show in addition to the value and the code of each invoice how much its value will be if it is not paid before expiration. The client defined that the aggregate interest will be 3.5%.

They also want us to add a functionality that tells the user how many bills he can pay given a given amount of money.
For example, if we have two invoices that owe $ 600 and one $ 100 and we only have $ 700, the only invoices that we can pay are the second and one of the first two (It does not matter which one).

The design girls have not yet defined what this last functionality will look like so for now we just have to add the logic.

---
## Exercise 5: Strings

### capitalize: (string) => string

Capitalize all the words in the string. For example if the string is 'hello world widegy' the result should be 'hello world widegy'.

### inverse: (string) => string

Returns the inverse of the phrase (Words are separated by a ''). For example, for 'Hello World Widergy' its inverse would be: 'Widergy World Hello'.

### sanitize: (string, string) => string

Sanitizes all occurrences of the second string in the first string. For example, if we receive 'This is a test exercise' and 'test' the result would be: 'This is a ###### exercise' (You can assume that the second string is never empty).

### countArrays: (array [string], array [string]) => array [num]

Count the appearance of the strings of the second array in the first.
For example if we receive ['aba', 'baba', 'aba', 'xzxb'] and ['aba', 'ab', 'xzxb'] then we must return [2, 0, 1] since 'aba' appears twice, 'ab' none and 'xzxb' once. (You can assume that the second array is never empty).

### isSubsequence: (string, string) => bool

Returns true if the second string is a subsequence of the first (You can assume that the second string is not empty)

---

## Exercise 6: Objects 101

### list: (Object) => string

List an object as a string. For example for {a: 1, b: 2} the result of listing would be 'a: 1, b: 2'

### invert: (Object) => Object

Returns an object whose keys are the values ​​and vice versa.

### sortById (array [Object]) => array [Object]

Given an array of objects that have a numeric attribute "id", sort the array according to it (You can assume that the ids are not repeated if it is easier for you).

### A utility wants to add a new menu to its virtual office. This menu will have a certain amount of subOptions (which have the same structure as an Option), a title and a function that it executes when it is selected.

Develop a function that prints (in the console) the menu so that the entire tree of options can be displayed (Being able to discern which option is a child of which and to what level it belongs)

### Using the menu defined in the previous point: A flag was added to each option that indicates if the user can view that option. Develop a function that returns the first visible option (This would be the first leaf where all its parents are visible, in a tree where all the nodes are visible it would be the leftmost leaf).
