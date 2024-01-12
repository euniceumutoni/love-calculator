var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
console.log(n);

if (n >= 70 ) {
   alert(a +  " and " + b + " have " + n + " % match" + ",  you were made for each other!");
   
} 

if (n > 30 && n <= 70) {
   alert(a +  " and " + b + " have " + n + " % match" + ",  there's still a chance don't give up!");
   
}

if (n <= 30) {
    alert(a +  " and " + b + " have " + n + " % match" + ", maybe move on? ");
   
}
