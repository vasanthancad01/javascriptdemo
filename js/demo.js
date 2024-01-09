
//welcome message using string
console.log("welcome to great kirikalan magic show")
//addition of two numbers
var a=10;
let b=20;
console.log(a-b);
//function demo inside function  
function addition(){

var a=15;
let b=30;
const c=30;

console.log(b);
}
addition()

//function demo outside function

function addition1(){

var a=80;
let b=90;
const c=100;
}
addition()

console.log(b);

//array in table 
a=[10,20,30,40];
console.table(a);

//array in log 
b=[50,60,70,80];
console.log(b);

var a=[100,200];
console.table(a);

var a=[10,20,30,40];
console.log(typeof a);

var a="abc";
console.log(typeof a);
a=parseInt(a);
console.log(a, typeof a);

var q="abc";
p=Number(q);
console.log(typeof p);

//additon operator 

var f1=30;
var f2=20;
console.log(f1+f2);

//subtraction operator
 
var f1=30;
var f2=20;
console.log(f1-f2);

//multiplication operator

var f1=30;
var f2=20;
console.log(f1*f2);

//division operator

var f1=30;
var f2=20;
console.log(f1/f2);

//expo operator 
var f1=30;
var f2=20;
console.log(f1**f2);

//modulus operator
var f1=30;
var f2=20;
console.log(f1%f2);

//post increment operator
var s=10;
s++;
console.log(s);

//post decrement operator 
var s=11;
s--;
console.log(s);

//pre increment operator
var s=12;
++s;
console.log(s);

//pre decrement operator 
var s=13;
--s;
console.log(s);


//comparison operator
// = operator 
var f1=30;
var f2=20;
console.log(f1==f2);

// != operator
var f1=30;
var f2=20;
console.log(f1!=f2);

//datatype comparison
var f1=30;
var f2=20;
console.log(f1===f2);

//
var f1=30;
var f2=20;
console.log(f1!==f2);

//greater or less than
var f1=30;
var f2=20;
console.log(f1>f2);
console.log(f1<f2);

//greater or less than eqaul too
var f1=30;
var f2=20;
console.log(f1>=f2);
console.log(f1<=f2);

//ternary operator 
var f1=30;
var f2=20;
console.log(f1>f2?"car":"bike");

//
var f1="car";
var f2="bike";
var result= f1 > f2;
console.log(result);


//ternary operator 
var m=36;
console.log((30<m && m<50) ?"grade C" : (51<m && m>80) ? "grade B" : (81<m && m>100) ? "Distinction" : "No grade");

//function
/*
function grades(m,k){


var mark=(30<m && m<50) ?"grade C" : (51<m && m>80) ? "grade B" : (81<m && m>100) ? "Distinction" : "No grade");
console.log(k,mark);


}
grades(25,"karthick");
*/

//function 
 var a=(m,k)=>{
     var mark=(30<m && m<50) ?"grade C" : (51<m && m>80) ? "grade B" : (81<m && m>100) ? "Distinction" : "No grade";
     return ("k", mark);


 }
  


 //function callig in variable

 var add=(a,b)=>a+b;
 console.log(add(5,10));

 //conditional statements 

 function employeeidcheck(m){

   if(0<m && m<1000)
   {
    console.log("Production department");
   }
   else if(1001<m && m<3000){

    console.log("Service department");

   }
   else{

    console.log("employee not found");

   }

 }
   //employeeidcheck(prompt());

   //employee team check 

   function employeeidcheck1(m){

    if(0<m && m<10000)
    {
        if(1<m && m>500)
        { 
       
          console.log("Production department A");
   
        }
        else if(500<m && m>1000)
        {
          console.log("Production department B");
         
        }  
    }
    else{
      
      
         console.log("not in the list");
      
    }
}
      //employeeidcheck1(prompt("enter value"));

      //switch case

      function switchcheck(m){
       switch(m){ 
           case 'a':
             console.log("Number obtained");
             break;

            case 'b':
             console.log("Number passed");
             break;
             
            case 'c':
            console.log("Program error");
            break;
             
            default:
                console.log("Unidentified");
                
       }

         }
         switchcheck(prompt("Type Number"));



      