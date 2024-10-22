# lab1 README
Author: Akshay Kollur

Class: CSE2331 Foundations II


## More Info

### Description
This project is a submission for lab1 for the class CSE 2331. It is written in JavaScript. It is a project on the different sorting algorithms. For my submission I chose to do the Quick Sort algorithm.

### What is Quick Sort?
Quick Sort is a divide and conquer sorting algorithm that selects a "pivot" element in the array. It then partitions the array into sub-arrays around the "pivot" then recursively sorts these sub-arrays. 

### Running time for Quick Sort
The best case running time for this algorithm is nlog(n) times. The worst case running time for this algorithm is n^2 times.

### Quick Sort Benefits
Quick Sort is often best since the partitioning is very efficient and reliable. It has an overall low overhead.

### Quick Sort Drawbacks
If the Quick Sort "pivot" selections are bad, it will take a while to process and sort. For example, if the selected "pivot" are at either end of the array it will take a while to sort. The algorithm is not completely effective.

## Users
For users, the project is relatively simple to understand. It utilizes VSCode and the user may need to download or use that to make their lives easier. The implementation of the Quick Sort and testing is all in the src files titled: "quickSortAlgorithm.js" and "quickSortAlgorithmTesting.js". If the user simply right clicks on that file then hit "run code", the code will run. It will display the content in the terminal with the various console.logs. 

## Testing
I developed the testing drivers file to be easily understandable. There are multiple functions that run when you hit "run code". It will activate the testing and various test cases will be seen in the console and you may be able to trace them easily. There are 7 test cases that implement and test various different cases of input for the Quick Sort algorithm.

## Problem 2: Find a way to compute how much time your code takes to execute. Generate an array of size 1000 that contains random values, run your code on that array, and compute the time it takes the code to execute.
I found a way by making a function that generates an array of a specified size and then returns it. I then called the console.time function to start a timer, then I called the quickSort function on that array. Then I called the console.timeEnd function and it returned me the time it took for the array to sort. I computed the time for execution was roughly 0.2ms to 0.3ms.
