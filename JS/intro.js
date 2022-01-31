let a=10;
console.log(a);
let b=[1,2,3,'s',4];
console.log("hello world");

c=20;//global
var d=30;//Functional scope
let e=50;//block scope
//Funtions
function fun()
{
    let a=69;
    console.log(a);
    var b=6969;
}
fun();
function sqrt(n)
{
    return Math.sqrt(n);
}
console.log(sqrt(16));

//Functions Hoisting
var sqrt_new=function(n)
{
    console.log(Math.sqrt(n));
}
sqrt_new(10);
//Array
let arr=[1,2,3,4,"Mango","Apple"];
console.log(arr);
for(var i=0;i<6;i++)
{
    console.log(arr[i]);
}
arr.push("banana");//insert at back
console.log(arr);
arr.pop();//remove from back
arr.unshift("Kiwi");//insert at front
console.log(arr);
arr.shift()//remove from front
arr.indexOf("Apple")//finds index

var sum=(a,b)=> a+b;
console.log(sum(9,6));

let myDate=new Date;
console.log(myDate.getTime);

function x(p){
    p();
    return function xyz(){
        console.log("Hello xyz"); 
    }
     
}
console.log(y); 
function y(){
    console.log("Hello"); 
}
// x(y);