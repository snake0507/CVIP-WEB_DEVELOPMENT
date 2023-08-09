 //print in js
 console.log("hello world",4+6);
 alert("me");

 //Javascript console API
 //document.write("hi");
 console.warn("savdhan");
 console.error("error 404");
 console.assert(4==5);
 console.assert(4==(8-4));

 //javascript variables
 var number1 = 30;
 var number2 = 39;
 console.log(number1 + number2);

 //DATATYPES IN JS
 var str = "string hu mai";
 var num = 45.69;
 var marks={mahek: 99, meghal: 98};
console.log(marks);

var a = true;
var b = false;
console.log(a);

var arr = [1,2,3,4,5,];
console.log(arr);

// operators
var a= 30;
var b= 39;
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);

//  assignment operators
var  c= 3;
c=c+2;
console.log(c);

// comparison operators
var x= 1;
var y =0;
console.log(x==y);
console.log(x>=y);

// logical operators
console.log( true && true);
console.log(true && false);
console.log(false && false);

console.log( true || true);
console.log(true  || false);
console.log(false || true);
console.log(false || false);

console.log(!false);
console.log(!true);

// FUNCTIONS IN JS

function avg(a,b){
c=(a+b)/2;
return c;
}
c1 = avg(11,5);
console.log(c1);

age=16;
if (age>18)
console.log("YOU CAN DO NASHE");

else console.log("SCHOOL JA BSDK");

// loops in js

// var arr=[1,2,3,4,5,6];
// console.log(arr);
// for (var i =0; i<arr.length;i++){
//   console.log(arr[i])
// }


// // const ac= 0;
// // ac++;

// var arr=[1,2,3,4,5,6];
// let j=0;
// while (j<arr.length){
//   console.log(arr[j]);
//   j++;
// }

// do{ console.log(arr[j]);
//   j++;
// }
// while (j< arr.length);

let ari = ["fan","lol","jii",3,4,null,true];
// array methods
ari.push("mahek");
console.log(ari);
ari.unshift("megh");
console.log(ari);

let string="MAHEK IS A CODER CODER";
console.log(string.length);
console.log(string.indexOf("CODER"));
console.log(string.lastIndexOf("CODER"));

console.log(string.slice(0,5));
D=string.replace("MAHEK","MEGHAL");
console.log(D);

let myDate = new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getTime());

// DOM MANIPULATIOON

let e =document.getElementById('btn');
console.log(e);

let elemclass =document.getElementsByClassName('container');
console.log(elemclass);

// elemclass[0].style.background="yellow";
elemclass[0].classList.add("bg-primary");

console.log(e.innerHTML);
console.log(e.innerText);

console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);
tn= document.getElementsByTagName('div');
console.log(tn);

createdElement= document.createElement('p');
createdElement.innerText="This is fake";
tn[0].appendChild(createdElement);

createdElement2= document.createElement('b');
createdElement2.innerText="This is more fake";
tn[0].replaceChild(createdElement2,createdElement);

// selecting using query

sel = document.querySelectorAll('.container');
console.log(sel);

// EVENTS IN JS
function clicked(){
  console.log("the button was clicked");
}
window.onload= function(){
  console.log("the document was loaded");
}

firstC.addEventListener('mouseover',function(){
  console.log("mouse on container")
});
firstC.addEventListener('mouseup',function(){
  console.log("mouse up when clicked on container")
});


// settimeout and set interval

// arrow functions

sum = (a, b) => {

return a+b;
}
sum(11,22);

logkaro = ()=>{
  console.log("logyyyyy");
  document.querySelectorAll('.container')[1].innerHTML="<b> set timeout fired</b>";
}
setTimeout(logkaro,2000)

a= setInterval(logkaro,2000);

// js local storage
localStorage.setItem('name','mahek');
localStorage.getItem('name');

JSON

obj = {name : "mahek", length: 1};
jso =JSON.stringify(obj);
console.log(jso);