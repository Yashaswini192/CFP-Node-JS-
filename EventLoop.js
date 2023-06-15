//Event Loop- call stack - callback queue- browser

setTimeout(()=>{
    console.log("timer");
},3000);

console.log("Hii");

setTimeout(()=>{
    console.log("event loop");
},6000);

console.log("Welcome");