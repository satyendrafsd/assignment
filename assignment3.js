// question 1
function astrogru(children, spousesName, location, job){
    console.log(
        `You will be a ${job} in ${location} and married to ${spousesName} with ${children} kids.`
    )

}
astrogru(2, "Tina", "China", "teacher");


// question 2

function compare(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
    {
        console.log("Can't be compare")
    }
    else if(num1 > num2){
        console.log(`${num1} is greater`);
    }
    else if(num1 == num2){
        console.log(`${num1} and ${num2} is same`);
    }
    else{
        console.log(`${num2} is greater`);
    }
}

compare(12, 23);

compare(12, 'asc');
compare(34,34);