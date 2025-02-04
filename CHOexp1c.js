//Write a javascript program that demonstrates variable scopes by declaring variables with different scopes and observing their behavior, 
//include variables declared within functions as well as those declared outside of any function.


console.log("Aarya");   
console.log("2310997004");

let a =7;
{
    let b=25;
    console.log("Variable within blockb="+b);
    console.log("Variable global within block a="+a);
}

//console.log("Variable within block b="+b);

function demo() {
    let c =34;
    console.log("Varieable within function c="+c);
    console.log("Variable global within function a="+a);
}
demo();
//console.log("Variable within function c="+c);
console.log("Variable global in general area a="+a);