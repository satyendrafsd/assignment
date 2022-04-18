/*
/
Requirements: "1. Write a JavaScript program to compute the exponent of a number. Note : The exponent of a number
says how many

times the base number is used as a factor.
82= 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

*/
function power(a, n){
    if(n==0)
        return 1;
    let sub = power(a, parseInt(n/2));

    let subsum = sub * sub;
    if(n%2 == 0)
        return subsum;
    else return a * subsum;
}

console.log(power(8, 2))


/*

2. Write a JavaScript program for binary search.
Sample array: [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'"
*/

function binarySearch(arr, low, high, ele){
    if(low > high)
        return -1
    let mid = parseInt((low + high)/2)
    if(arr[mid] === ele)
        return mid;
    else if(arr[mid] > ele )
        return binarySearch(arr, low, mid-1, ele);
    else return binarySearch(arr, mid+1, high, ele);
}

let arr = [0,1,2,3,4,5,6];
console.log(binarySearch(arr, 0, arr.length-1, 5));