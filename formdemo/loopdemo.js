/*function loop(){

var entervalue1=document.getElementById("entervalue").value;



entervalue1=Number(entervalue1);
console.log(typeof entervalue1);
//console.log("the value is : " + entervalue1);

//whileloop
while(entervalue1<20)
{
  console.log("the value is :" + entervalue1);
  entervalue1++;
  
}
do{
    console.log("the value is incremented :" +entervalue1);
    entervalue1++;
}
while(entervalue1<30)

for(entervalue1; entervalue1<=40; entervalue1++)
{
    console.log("print :" + entervalue1);
}
}*/

/*
function getresult(){


var text= "Let all live alone happily forever live alone";

console.log(text.length);
console.log(text.indexOf("live"));
console.log(text.indexOf("live", 10));
console.log(text.lastIndexOf("live"));
}
getresult();
*/


function checkstatus()
{

var namelist=["sakthi","ahamad","sahid","arun","gopal"];

console.log(namelist);
console.table(namelist);
console.table(namelist[0]);
console.table(namelist[1]);
console.table(namelist[2]);
console.table(namelist[3]);
console.table(namelist[4]);
console.table(namelist[5]);
console.table(namelist.length);

for (var a=0;a<namelist.length;a++){

  console.log(namelist[a]);

}
console.clear();

var result=namelist.forEach(function(name1){

  console.log(name1);
})
console.log("arrow output");

var result=namelist.forEach(name1=>console.log(name1));


var namelist=["arun","basheer","chrosty","dosa","ele","fear"];
var define1="b";
console.clear();
var result=namelist.filter(name1=>name1.startsWith('a') || name1.endsWith('n'));
console.log(result);


}
checkstatus();



 







