var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
<<<<<<< HEAD
  'skittles'];
  
var array = [1, 2, 3];

function addElementToBeginningOfArray(array, element){
  var array = ['foo', ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift('foo');
  return array;
}

function addElementToEndOfArray(array, element){
  var array = [...array, 'foo'];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo');
  return array;
}

var nbaTraitors = [1, 2, 3];

function accessElementInArray(array, index){
  return nbaTraitors[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(1);
  return array;
}

function removeElementFromBeginningOfArray(array){
  var array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var array = array.slice(0, array.length - 1);
  return array;
}
=======
  'skittles']
  
const array = [] 

function addElementToBeginningOfArray(array, zero){
  ['foo', ...array];
  return array
}

function destructivelyAddElementToBeginningOfArray(array, zero){
  array.unshift('foo')
  return array
}

>>>>>>> 7e6bf8f77f4f9f340600f708a233e7160bc2cf9b
