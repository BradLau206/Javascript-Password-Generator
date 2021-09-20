// Password Generation Variables
const genUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const genLowercase = "abcdefghijklmnopqrstuvwxyz";
const genNumber = "1234567890";
const genSpeciChar = "!@#$%^&*()_+~`,<.>/?[{]}";

// Math.Random Variables (ints)
let randUpper = 0;
let randLower = 0;
let randNum = 0;
let randSpeci = 0;

// HTML Elements
const intLength = document.getElementById("length");
const selectUppercase = document.getElementById("uppercase");
const selectLowercase = document.getElementById("lowercase");
const selectNumbers = document.getElementById("numbers");
const selectSpeciChars = document.getElementById("special-chars");
const btnGenerate = document.getElementById("generate");
const newPassword = document.getElementById("result");

// ---------------------------------------------------------------------

// ---------------------------
// MAIN METHOD
// ---------------------------
function generatePassword() {
    let numOfTypes = checkOptionSelections();
    
    // No Options Selected
    if(numOfTypes===0) {newPassword.innerText="";}

    // Generation Loop
    //for(let i=0; i<intLength; i)

}

function checkOptionSelections() {
    let count = 0;
    if(selectUppercase.checked) {count++;}
    if(selectLowercase.checked) {count++;}
    if(selectNumbers.checked) {count++;}
    if(selectSpeciChars.checked) {count++;}
    return count;
}

// ---------------------------
// GETTER METHODS
// ---------------------------
function getRandUpper() {
    let output = genUppercase.charAt(
        Math.floor(
            Math.random() * genUppercase.length));
    console.log(output);
    return output;
}

function getRandLower() {
    let output = genLowercase.charAt(
        Math.floor(
            Math.random() * genLowercase.length));
    console.log(output);
    return output;
}

function getRandNumber() {
    let output = genNumber.charAt(
        Math.floor(
            Math.random() * genNumber.length));
    console.log(output);
    return output;
}

function getSpeciChar() {
    let output = genSpeciChar.charAt(
        Math.floor(
            Math.random() * genSpeciChar.length));
    console.log(output);
    return output;
}