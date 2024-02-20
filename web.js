var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
console.log(n);

if (n >= 70 ) {
   return a +  " and " + b + " have " + n + " % match" + ",  you were made for each other!";
   
} 

if (n > 30 && n <= 70) {
   return a +  " and " + b + " have " + n + " % match" + ",  there's still a chance don't give up!";
   
}

if (n <= 30) {
    return a +  " and " + b + " have " + n + " % match" + ", maybe move on? ";
   
}
//js file that will be updated 
