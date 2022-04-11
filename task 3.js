let myString = window.prompt("Enter string of brackets");

var isValid = function(s) {
    let myArr = new Array();
    for (let i=0; i<s.length; i++) {
        if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
            myArr.push(s[i]);
        } else if ((s[i] === "}" && myArr[myArr.length-1]==="{") || 
                   (s[i] === ")" && myArr[myArr.length-1]==="(") ||
                   (s[i]==="]" && myArr[myArr.length-1]==="[")) {
                       myArr.pop();
        } else {
            return false;
        }
    }  
    if (myArr.length===0) {
        return true;
    } else {
        return false;
    }
}
console.log(isValid(myString));