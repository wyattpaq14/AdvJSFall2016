var input = "9.3";
//function to return dollar amount 
function getDollarAmount(amount) {
    return Math.round(amount).toString();
}

//function to return cents
function getCentAmount() {
    
}










'use strict';


function reverseString(str) {
    if (typeof str !== 'string')
        return str;
    return str.split("").reverse().join("");
}


function getMaxOfArray(numArray) {
    if (!Array.isArray(numArray))
        return numArray;
    return Math.max.apply(null, numArray);
}

function strUpper(str) {
    if (typeof str !== 'string')
        return str;
    return str.toUpperCase();
}