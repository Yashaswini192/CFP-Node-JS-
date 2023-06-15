//CallBack Function
//any function that has passed as an argument to another function so 
//that it is executed in that other function is called as callback function

function funData(CallBackFunc){
    setTimeout(function (){
        const data = 'call back function';
        CallBackFunc(data);
    },3000);
    
}

function funData2(data){
    console.log("data"+data);
}

funData(funData2);

//Synchronous-executes line by line- Blocking

//console.log(div);

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

function print(){
    console.log('print msg');
}
setTimeout(print, 200);