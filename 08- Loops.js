
for(let i=0; i<3; i++) {
    console.log(i)
  }
  
  // program to add first n natural numbers
  const prompt = require('prompt-sync')();
  let sum = 0
  let n = prompt("Enter the value of n")
  n = Number.parseInt(n)
  for (let i = 0; i < n; i++){
    sum += (i + 1)
  }
  console.log(`Sum of first ${n}  natural numbers is  ${sum}`)
  
  // for in loop
  let obj = {
    Hrutuja: 90,
    Anushka: 80,
    Kartik: 70,
  }
  for (let a in obj);
  console.log(`Marks of ${90} are ${obj[90]}`);
  
  // for of loop
  const cars = ["BMW" , "Volvo" , "Mini" ];
  
  let text = "";
  for (let x of cars) {
    text += x;
  }
  console.log(text); 
  
  //while loop
  const prompt = require('prompt-sync')();
  let n = prompt("Enter the value of n")
  n = Number.parseInt(n);
  let i = 0;
  while(i<n) {
    console.log(i)
    i++;
  }
  
  // do while loop
  const prompt = require('prompt-sync')();
  let n = prompt("Enter the value of n")
  n = Number.parseInt(n);
  let i = 0;
  do {
    console.log(i)
    i++;
  } while (i < n)