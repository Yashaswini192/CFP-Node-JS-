var a = 5;
var a = 12;  
console.log(a);

function abc(){
    var a = 2;
    console.log(a);
}

abc();

function sum(b,c){  //function with return value
    return b + c;
}
const val = sum(3,7);
console.log(val);

function div(){
    const r = 6/3;
    return r;
}
console.log(div());

const s = function(n){
    return n * n;
};

const square = s(4);
console.log(square);

let g = 6; 
//let g = 7;

console.log(g);

function msg(){
    let g = "hello";
    console.log(g);
}

const h = 4;              //using const we cannot change the value
//const h = 8;
console.log(h);

function ex(){
    const h = 8;
    console.log(h);
}

ex();

//1.syntax
var add = function(e,f){    //regular function
    return e + f;
};

let add2 = (x,y) => {           //arrow function
    return x + y;
}

//2.arguments binding
let myfunc={            //regular function
    showArgs(){console.log(arguments);}
};
myfunc.showArgs(3,6,7,8);

/*let myFunct={             //arrow function
    showargs:()=>{console.log(arguments);}
};
myFunct.showargs(2,4,5,6);*/

//3.duplicate named parameters

function sub(y,y){                       //RF
    return y - y;
}   
console.log(sub(4,2));

//let func = (y,y) => y / y;      //AF

//4.new keyword

let ab= (x,y) => console.log( x + y);

//new add(4,5);             // we cant new keyword for arrow function

console.log(new sum(4,3));

function fruit(color){
    this.color = color;
}
const fruit1 = new fruit('Purple');   
console.log("creating constructor using new keyword-",fruit1.color);

//anonymous function
let p = function(){
    console.log("anonymous function");
};
p();

