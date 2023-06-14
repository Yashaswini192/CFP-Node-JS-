//Hoisting ->js declarations are hoisted--> a variable can declared after it has been used.
//we can assign the variables but we can declare later

x = 7;

function abc(){
  var  y = x * x;
  console.log(y);
}
abc();
var x;

 g = "Hello" ;
console.log(g);
var g;


