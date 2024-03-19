// Qlink -> https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1?page=1&sortBy=submissions

// Solution ->
// O(n**2)
function subarraySum(arr, n, s)
{
    for(let i = 0; i< arr.length; i++) {
        let sum = arr[i]
        if(sum == s) return [i+1, i+1]
        for(let j = i+1; j < arr.length; j++) {
            sum += arr[j]
            if(sum == s) return [i+1, j+1]
        }
    }
    return [-1]
}

console.log(subarraySum([1, 4, 5, 6, 0], 5, 0))