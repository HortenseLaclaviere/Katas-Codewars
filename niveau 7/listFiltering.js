// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  let arr = [];
  for (i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      arr.push(l[i]);
    }
  }
  return arr;
}

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

// function filter_list2(l){
//    return l.filter(number => Number.isInteger(number));
// }

// console.log(filter_list2([1, 2, "aasf", "1", "123", 123]))
