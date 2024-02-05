/*let a = 6;
let b = 5;
let c = 8;
console.log("average of a and b is", (a+b)/2);
console.log("average of b and c is", (b+c)/2);
console.log("average of a and c is", (a+c)/2);
*/

//Function

let a = 6;
let b = 5;
let c = 8;
function Avg(x,y){
  console.log( "Done");
  return Math.round((x+y)/2);
}

console.log("average of a and b is", Avg(a,b));
console.log("average of b and c is", Avg(b,c));
console.log("average of a and c is", Avg(a,c));

const sum = (p,q)=>{
  return p+q;
}
console.log(sum(2,8));




