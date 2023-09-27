/*
//function declaration
function fullName(first, last){
  return `${first} ${last}`;
}
console.log(fullName("Augusto","Achá"));

//function expresions
 fullName = function(first, last){
           return `${first} ${last}`;
}
console.log(fullName("Augusto", "Achá"));

 fullName = ((first, last) => {
       return `${first} ${last}`;       
});
console.log(fullName("Augusto", "Achá"));
*/

// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}
function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}
//starting point
//encounter();
function isDestroyed(health){
    if ((health <= 0) || (health <= 0)){  
       return true;
    }
    else{
        return false;
    }}
function shipCanFire(){
    if ((shipHealth > 0) && shipAmmo > 0 ){
        return true;
    }
    else{
        return false;
    }    
}
function reloadShip(){
    if ((shipAmmo === 0) && (targetHealth > 0)){
        shipHealth -=1;
        shipAmmo = 3;
    }
}
function isHit(){
      let number = Math.random(); //1 (hit ) 0 ( not hit)
      let rounded_number = (Math.round(number));
      return rounded_number;      
}
