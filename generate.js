// ---------------------------
// VARIABLES
// ---------------------------

// Password Generation Variables
const genUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const genLowercase = "abcdefghijklmnopqrstuvwxyz";
const genNumber = "1234567890";
const genSpeciChar = "!@#$%^&*()_+~`,<.>/?[{]}";

// HTML Elements
const selectUppercase = document.getElementById("uppercase");
const selectLowercase = document.getElementById("lowercase");
const selectNumbers = document.getElementById("numbers");
const selectSpeciChars = document.getElementById("special-chars");
const btnGenerate = document.getElementById("generate");
const newPassword = document.getElementById("result");

// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //

// ---------------------------
// MAIN METHOD
// ---------------------------
function generatePassword() {
    // Get All Selected Options (add all selected global strings into one giant string)
    var randChars = mergeSelectionStrings();

    // Get length of new password
    var genLength = parseInt(document.getElementById("length").value);

    // Generate Password
    let output = "";
    for(let i = 0; i < genLength; i++) {
      output += randChars.charAt(Math.floor(Math.random() * randChars.length));
    }
    
    // Display new Password
    newPassword.innerText = output;
}

// ---------------------------
// HELPER METHODS
// ---------------------------
function mergeSelectionStrings() {
    var randChars = "";
    if(selectUppercase.checked) {randChars += genUppercase;}
    if(selectLowercase.checked) {randChars += genLowercase;}
    if(selectNumbers.checked) {randChars += genNumber;}
    if(selectSpeciChars.checked) {randChars += genSpeciChar;}
    return randChars;
}

