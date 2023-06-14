//CallBack Function
//any function that has passed as an argument to another function so 
//that it is executed in that other function is called as callback function

function sum(f, t){
    var d = f + t;
    return d;
}

function div(){
    let g = 4/2;
    console.log(g);
}

sum(3,4,div);

//Synchronous-executes line by line- Blocking

console.log(div);

let d = 5 * 3;
console.log(d);

console.log("hello");

//Asynchronous- doesnot execute line by line - Non-Blocking

const h = 34;
console.log(h);

setTimeout(() =>{
    console.log("non blocking");
}, 100);

console.log("Hii");

setTimeout(()=>{
    console.log("asynchronous");
},50);