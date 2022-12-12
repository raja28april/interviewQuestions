/**
 * Find the missing number in an array
 * 
 * You are given an array of positive numbers from 1 to n, such that all the numbers from 1 to n are present except one number x.
 * you have to find x. The input array is not sorted. Look at the below array and give it a try before checking the solutiuon
 * 
 * [3,7,1,2,8,4,5]
 * n=8; number missing = 6;
 */


//Brute-force approach

const arr = [3,7,1,2,8,4,5];
const sortedArr = arr.sort((a,b)=>a-b); // O(n)
console.log(sortedArr)

const getMissingNumber = function(sortArr){
    for(let i=1; i<=arr.length;i++){
        if(sortArr[i-1]!==i){
            return i;
        }
    }
    return arr.length+1;
}

const missingNum =  getMissingNumber(sortedArr);//O(n)
console.log(missingNum);
// so total it is O(2n);

const act_sum =arr.reduce((acc,num)=>{
    return acc+num;
},0);
console.log(act_sum);
const len = arr.length+1;
const exp_sum = len*(len+1)/2;
console.log(exp_sum-act_sum);
