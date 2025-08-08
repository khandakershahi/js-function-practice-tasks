/**
 * ### Task-3
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arr){
    const size = arr.length;
    
    let sum = 0;
    for (const element of arr) {
       
        sum += element;
    }
    return sum / size;
}

console.log(make_avg([5, 10, 15]));