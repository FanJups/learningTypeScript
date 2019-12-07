var message:string = "Hello World TypeScriptt" 
console.log(message)

class Greeting { 
    greet():void { 
       console.log("Hello World by Fan Jups!!!") 
    } 
 } 
 var obj = new Greeting(); 
 obj.greet();

var myname:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+myname) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)

var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str2))

var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
//num = "12";
//console.log(num);

var foo = (x:number)=>10 + x 
console.log(foo(100))      //outputs 110

var foo1 = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
 } 
 foo1(100)

 