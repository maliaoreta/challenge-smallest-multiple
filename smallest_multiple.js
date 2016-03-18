/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  
  var numCheck = 1;
  var multiple = 10;

  while (numCheck <= ceiling) {

    if (multiple%numCheck === 0) {
      numCheck += 1;
    }
    else {multiple += 1;
    numCheck = 1;
    }
  }
  
  return multiple;
};