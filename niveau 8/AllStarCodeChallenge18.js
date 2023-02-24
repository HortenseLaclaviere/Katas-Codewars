// DESCRIPTION:
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.


function strCount(str, letter){   
    let arr = str.split("");
    let count = 0;
    console.log(arr);
    for (i=0; i<arr.length; i++){
        if (arr[i] == letter){
            count += 1;
        }
    }
    return count;
  };


console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));

