/*
You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

Example:
words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat (the letters do not have to be in order)

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat (the letters do not have to be together)

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None / null (the letters cannot be reused)

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

string5 = 'ccc'
find_embedded_word(words, string5) -> None / null

string6 = 'breadmaking'
find_embedded_word(words, string6) -> bird

Complexity analysis variables:

W = number of words in `words`
S = maximal length of each word or string

*/
"use strict";

const words = ["cat", "baby", "dog", "bird", "car", "ax"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "breadmaking";


/*
words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
string1 = 'tcabnihjs'
 -> c a t

'cat' -> c a t
*/


const find_embedded_word = (words, str) =>{

  let output = "";

  for(let i = 0; i< words.length; i++){
      let mappedChars = [];

      output = words[i];  //"cat"  // dog  //baby

      for(let j = 0; j< str.length; j++){
        const strChar = str[j]; //"b a y kkjl"

        // check for match
        if(output.includes(strChar) && !mappedChars.includes(strChar)){   //bbabylkkj
          mappedChars.push(strChar);
        }
      }

    console.log(mappedChars);

    if(output.length === mappedChars.length){
      return output;
    }

  }

}

console.log(find_embedded_word(["cat", "baby", "dog", "bird", "car", "ax"],'bbabylkkj'));