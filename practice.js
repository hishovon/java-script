
// ........Problem ---> 1.........//


function mindGame(input)
{

 //this checks if the input is a number or not,if not it returns an error message.......//

 if(typeof(input)!="number"){
    return "error:the input parameter must be a number"
}


let first = input*3;
let second = first + 10;
let third = second/2;
let forth = third - 5;
return forth ;

// Since input*3 is called "first" and then first sum with 10 its called "second" again second divide by 2 is called "third" and last third minus by 5 is called forth then we return forth... // 

}


//............Problem ---> 2............//




function evenOdd(text)

{

  //this checks if the input is a string or not,if not it returns an error message



if(typeof(text)!="string") {
return "error" ;}

let  number=text.length;

if(number%2==0) { //checks if the number is divibled by 0 or not if 0 returns even...

return "even";
}

else {
return "odd";
}
}




// ............Problem ---> 3...............//


function isLGSeven(number)

{
    //This checks if the input is a number or not,if not it returns an error message...//

if(typeof(number)!="number"){
    return "error";
    }


let calculate= number-7 ;   //for storing the  difference of the input number and 7...//


if(calculate<7){ //checking if the number is less than 7 then return minus ans...//

    return calculate;
}
else
{
return number*2;
}
}




// ........Problem ----> 4..............//

function findingBadData(array)
{

      //this checks if the input is a array or not,if not it returns an error message....//


    if(typeof(array)!="object"){
        return "error";
        }
let data=0;   //for storing the number of bad data...//

for (let i=0;i<array.length;i++)  //checking if the number is negative or not...//

{
    

if (array[i]<0){
    data++;
}

}
return data;   //return the  bad  data amount....// 


}




// .............Problem ----> 5..................//



function gemsToDiamond(gems1,gems2,gems3)

{

 //this checks if the 3 input is a number or not,if not it returns an error message.... //



    if(typeof(gems1,gems2,gems3)!="number"){
        return "error";
        }

let diamonds1=gems1*21; //for the first condition we multiply gems1 by 21....//

let diamonds2=gems2*32; //for the first condition we multiply gems2 by 32....//

let diamonds3=gems3*43; //for the first condition we multiply gems3 by 43...//


let Total=diamonds1+diamonds2+diamonds3; // Total number of diamond//


// If the total number of diamonds is greater than 1000,if it is true then returns the "Total" otherwise start "else if" and return "Total -2000" ...//

if (Total<1000)  

return Total;

else if(Total>1000*2) 
return Total-2000;

}

