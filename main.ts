//TASK ONE (1);
// 1.Miles-to-Kilometers Converter (Operators):
// Create a variable named miles and assign a numeric value representing distance in miles.
let miles=130;

// Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// Store the converted distance in kilometers in a variable named kilometers.
let kilometer= 1.60934;

let calculate=miles*kilometer

// Use console.log to print a message in the following format:
console.log(`the distance of ${miles} kms equals to ${calculate} miles`);




//TASK TWO (2) ;

//prompt the user for a random number
 let dynamicNum = 25 ;
import inquirer from "inquirer"
 let compareNum = await inquirer.prompt(
    {
      name : "number", 
      type: "number",
      message: "enter a number",
    }
 );
 // Compare the entered value with the dynamicNum
  if(compareNum.number > dynamicNum ){
    console.log(`${compareNum.number} is greater then ${dynamicNum}`)
 } else if(compareNum.number < dynamicNum ){
    console.log(`${compareNum.number} is less then ${dynamicNum}`)
 } else if(compareNum.number === dynamicNum ){
    console.log(`${compareNum.number} is equal to ${dynamicNum}`)
 } else {
    console.log("Invalid value please enter a number");
 }




 //Task 3
 let friend : string = "aqsa"
 let userName : any = await inquirer.prompt(
    {
      name : "friend", 
      type: "input",
      message: "enter a name",
    }
 );
switch(userName.friend){
   case "aqsa" :
      console.log(`Hi ${userName.friend} you're my known friend `);
   break;
   default:
      console.log(`Hi ${userName.friend} I don't know who are you? `);
}



//Task 4 (by using function)
//Set up two different variables with different values.
let number1 = 20;
let number2 = 2;
//create function.
 function multiplyNum(val1: any, val2: any){
  return val1 * val2 ;
 }
 //Call a function with these variables as arguments and output the result using console.log. 
let callFirst = multiplyNum(number1, number2)
console.log(`here first call result: ${callFirst}`);

//Create a second call to the function with two more numbers as arguments. 
let callSecond = multiplyNum(20, 3)
console.log(`here second call result: ${callSecond}`);



//Task 5 (calculator project by using )
//Set up two variables containing number values.
let numOne = 21;
let numTwo = 4;
//Set up a variable to hold an operator (+ or -)
let operator = "+";
//Create a function that takes two numbers and an operator as parameters, performs the corresponding operation, and returns the result. 
function calculator(val1:any, val2: any, operator:any){
 if(operator === "+"){
   return val1 + val2
 }else if(operator === "-"){
   return val1 - val2
 } else{
   return "unexpected action performed!";
 }
}
//Call the function with the variables and operator, and output the result using console.log. 
let result1 = calculator(numOne, numTwo, operator);
 console.log(`you're Add result is : ${result1}`);


 // //Update the operator value and call the function again with the updated arguments. 
numOne = 31 ;
numTwo = 2 ;
operator = "-";
let result2 = calculator(numOne, numTwo, operator);
 console.log(`you're subtract result is : ${result2}`);



 //Task 6 (anonymous function)
//Assign a function expression to a variable, with one parameter that outputs the provided argument to the console.  
const anonymous = function (val1: any){
   console.log(val1) ;
}
//• Pass an argument into the function.
anonymous("i am anonymous function");

//• Create the same function as a normal function declaration.
function simple (val: any){
    console.log(val);
}
simple("i am simple function");