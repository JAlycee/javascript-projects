function randomFromArray(arr){
  let randomArray = Math.floor(Math.random()*arr.length);
  return arr[randomArray];//Your code here to select a random element from the array passed to the function.
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;