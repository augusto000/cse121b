const PI =3.14;
//let radius = 3;
let area = 0;
/*
area = radius * radius * PI;
console.log(`radius = 3
result is ${area}`);
radius = 4;
area = radius * radius * PI;
console.log(`
                radius = 4
                result is ${area}
            `);
*/            
  function circleArea(radius){
    area = radius * radius * PI;    
    return area;
  } 
  console.log(circleArea(3));
  console.log(circleArea(4));         