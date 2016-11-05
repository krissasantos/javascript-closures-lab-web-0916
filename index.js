// const app = "I don't do much."

function bumpCounter() {
  var counter = 0;
    function addBump(){
      counter ++
      
    }
    function getBumps(){
        return counter
        }
    return {
      addBump,
      getBumps 
      //when returning more than 1 function
    }
        
}




function createAnimal(animalType) {
  return function (deadlyDevice){
    // object = {animalType, deadlyDevice};
    //   return object
     return {animalType, deadlyDevice};
 
  }
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
