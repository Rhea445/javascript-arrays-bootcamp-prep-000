var chocolateBars = ["snickers" , "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,b){
  var new = [b, ...a]
  return new
}