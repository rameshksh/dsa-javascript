/***
 *
 * We are required to write a JavaScript function that takes in a string str.
 * Our function should create all permutations of the input string and
 * remove duplicates, if present.
 * This means, we have to shuffle all letters from the input in all possible
 * orders.
 */

 const str = 'aabb';
 const permute = (str = '') => {
    if (!!str.length && str.length < 2 ){
       return str
    }
    const arr = [];
    for (let i = 0; i < str.length; i++){
       let char = str[i]
       if (str.indexOf(char) != i)
          continue
          let remainder = str.slice(0, i) + str.slice(i + 1, str.length)
          for (let permutation of permute(remainder)){
             arr.push(char + permutation)
          }
    }
    return arr
 }
 console.log(permute(str));

 /******************************************** */