// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(number1, number2)
{
  var num = Math.max(number1, number2);
  return num;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) 
{
  var max = words[0].length;
  words.map(v => max = Math.max(max, v.length));
  result = words.filter(v => v.length == max);
  console.log(result);
  return result;
}



// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers)
{
  var result = numbers.reduce((e , n)=> e+n ,0 )
  return result;
  
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg)
{
  var result = numbersAvg.reduce((e, n) => e + n, 0)/numbersAvg.length;
     return result;
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr){
  var arrayLength = wordsArr.length;
  var  joined = wordsArr.join('');
  var   result = joined.length / arrayLength;
  console.log(joined.length);
  console.log(wordsArr.length);
  return result;

}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique)
{
  var unique = wordsUnique.filter((v, i, a) => a.indexOf(v) === i); 
  return unique;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, find){

  var findvalue = wordsFind.filter( e => e==find)
  console.log(findvalue);

}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount)
 {
  var count = {};
  wordsCount.forEach(function (i)
   {
      count[i] = (count[i] || 0) + 1; 
    });
  console.log(count);
}
 
function avg(arr){
  if(!arr.length){// returning null for empty array
    return null;
  }
  let sum = add(arr); // adding mixed array
  let average = sum/arr.length; //calculating average
  return (average.toFixed(2)*100)/100; // handling floating point arithmetic errors
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
