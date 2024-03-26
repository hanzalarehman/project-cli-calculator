#! /usr/bin/env node
import inquirer from "inquirer";
let play=true
while(play){
let answers=await inquirer.prompt([{
    type:"number",
    name:"num1",
    message:"Enter the first number:?"
},
{
    type:"number",
    name:"num2",
    message:"Enter the second number:?"
},
{
name:"operator" ,   
type:"list",
choices:["+","-","*","/"],
message:"Select an operator:?"
}])
if(answers.operator=="+"){console.log(`${answers.num1}+${answers.num2}=${answers.num1+answers.num2}`)}
else if(answers.operator=="-"){console.log(`${answers.num1}-${answers.num2}=${answers.num1-answers.num2}`)}
else if(answers.operator=="*"){console.log(`${answers.num1}*${answers.num2}=${answers.num1*answers.num2}`)}
else if(answers.operator=="/"){console.log(`${answers.num1}/${answers.num2}=${answers.num1/answers.num2}`)}
else{
    console.log("somthing went wrong")
}
const answerplay = await inquirer.prompt([{
    name: 'playagain',
    type: 'confirm',
    message: 'Do you want to playAGain'
}]);
if (answerplay.playagain == true) {
}
else {
console.log("exist");
play = false;
}
}