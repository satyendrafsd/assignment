/*
Write a method that accepts an array of integers and updates every element with multiplication of previous
and next elements.

*/
function updateArray(arr){
    let n = arr.length;
    let newArr = Array(n).fill(1);
    if(n ===1){
        return arr;
    }

    newArr[0] = arr[1];
    for(let i=1;i<n-1;i++){
        newArr[i] = arr[i-1] * arr[i+1]
    }
    newArr[n-1] = arr[n-2];

    return newArr;

}
let arr =  [1,3,4,5,5]
console.log(updateArray(arr));


/* 
    Practice Problem-2:
    Move all negative numbers to the end and positive to the beginning of the array without using any
    predefined sorting method"
*/

function moveNegativeToTheEnd(arr){
    n = arr.length;
    i=0;
    j=n-1;
    while(i<j){
        while(i<j && arr[i] >= 0){
            i++;
        }
        while(j>i && arr[j] < 0){
            j--;
        }

        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++;
        j--;

    }
    console.log(arr);
}

let a = [-4, 6, -1, 2, 3, -9, 10, 23, -45, 90];
moveNegativeToTheEnd(a);