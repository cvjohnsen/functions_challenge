/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/


// let number = maxOfTwoNumbers(100,200);
// console.log (number)  

function maxOfTwoNumbers (num1, num2){
  // ADD YOUR CODE HERE
  if(num1 > num2){
  return num1;
  } else {
     return num2; 
  }
};
console.log(maxOfTwoNumbers(100,200))



maxOfThree();

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
 
  function maxOfThree (num1, num2, num3) {
     // ADD YOUR CODE HERE
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
};
console.log (maxOfThree (50, 150, 300));


/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (vowel) => {
  // ADD YOUR CODE HERE

    if (vowel === 'a'||'e'||'i'||'o'||'u') {
        return true;
    }
    else {
    return false;
    }
}
console.log (vowelChecker ("e"));


/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

function sumArray(num) {
  // ADD YOUR CODE HERE
  let total =0
  for (let i=0; i<num.length; i++){
    total += num[i]
  }
  return total;
};
console.log(sumArray([1,2,3,4]));

function multiply(num2) {
	let total = 1;
	for (let i = 0; i < num2.length; i++) {
		total = (total * num2[i]);
	}
	return total;
}

console.log(multiply([1,2,3,4]));


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/



/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

function reverseString () {
  // ADD YOUR CODE HERE
  reverseString = (str) => {
 str = str.split('').reverse().join('')
 console.log(str)
};

console.log (reverseString('Hello World'))
};

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/

function findLongestWord (arr1) {
  // ADD YOUR CODE HERE
  let long=""
  for(let i=0; i<arr1.length; i++){
  if(arr1[i].length > long.length){
    long = arr1[i]
    }
  }
return long
};
console.log(long.length)


/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
function filterLongWords (arr, num) {
  // ADD YOUR CODE HERE
  let long=[]
  for(let j=0; j<arr.length; j++){
  if(arr[j].length > num){ 
    long.push(arr[j])
    }
  }
return long
};   

console.log ( long )


