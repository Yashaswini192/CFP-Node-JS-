function sum(CallBackFunc){
    setTimeout(function (){
        const result = 'Hii';
    CallBackFunc(result);
    }, 3000);     
}

function printMsg(result){
    console.log("welcome "+result);
}

sum(printMsg);


//2.

function data(funData2){
    setTimeout(function (){
        const data = "processed";
        funData2(data);
    },4000);
}
function funData2(data){
    console.log("data "+data);
}
data(funData2);

//3.

function add(add2){
    setTimeout(function (){
        var a = 4;
        var b = a * a;
        add2(b);
    }, 5000);
}

function add2(b){
    console.log("result="+b);
}
add(add2);

//4.

function arr(arr2){
    setTimeout(function (){
        const car = ["audi",'BMW'];
        arr2(car);
    },7000);
}

function arr2(car){
    console.log("Cars="+car);
}

arr(arr2);

//5.

function firstName(LastName){
    setTimeout(function (){
        const name = "Yashvi";
        LastName(name);
    },8000);
}

function LastName(name){
    console.log(name+'Reddy');
}

firstName(LastName);



