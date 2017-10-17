var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){

  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

// var array = ['1'];
// console.log(destructivelyAddElementToBeginningOfArray(array, 'foo'));

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  // var arr = array.slice(1);
  return array.shift();
}

var number = [1,2,3]

console.log(destructivelyRemoveElementFromBeginningOfArray(number));
