// Akshay Kollur QuickSort Algorithm File

// Swap method that swaps the elements of a and b in the arr array
function swap(arr, a, b)
{
    // Quick JS swap technique
    [arr[a], arr[b]] = [arr[b], arr[a]];

}

// Partitions the array into subarray using a pivot point as a separator
function partition(arr, start, end)
{
    // Index of the smaller element
    let i = start - 1;

    // Chooses the last element as the pivot point initially
    let pivot = arr[end];

    for (let j = start; j < end; j++)
    {
        if (arr[j] <= pivot)
        {
            i++;
            // Swap i and j items
            swap(arr, i, j);

        }


    }


    // Swaps the pivot item with the item at index i+1
    swap(arr, i + 1, end);
    return i + 1;







}

// quickSort method calls the partition and recursively sorts arrays
// The quickSort function is exported for utilization inside the quickSortAlgorithmTesting file
export function quickSort(arr, start, end)
{
    if (start < end)
    {
        // Determines the pivot point using partition method
        let pivotPoint = partition(arr, start, end);
        // Recursively sorts left subarray
        quickSort(arr, start, pivotPoint - 1);
        // Recursively sorts right subarray
        quickSort(arr, pivotPoint + 1, end);
    }
}


// Quick test to see if the quickSort JS algorithm works
let numbers = [230, 12, 11, 9, 2, 16, 99, 10, 3, -12];

console.log("\nContents of the array before sorting:");
console.log(numbers.join(", ") + "\n");



quickSort(numbers, 0, numbers.length - 1);
console.log("Contents of the array after sorting:");
console.log(numbers.join(", ") + "\n");









