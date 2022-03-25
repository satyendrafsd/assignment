// question 1
for(let i=1;i<=100;i++){
    if(i%15 ===0){
        console.log("IndBuzz");
    }
    else if(i%3 ===0){
        console.log("Relevel");
    }
    else if(i%5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

//question 2
// check for even odd
let n = 23;
if(n%2 === 0){
    console.log(`${n} is even`);
}
else{
    console.log(`${n} is odd`);
}