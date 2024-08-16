const repeatString = function(text, num) {
    if (num < 0) {
        return "ERROR";
    }
    
    let repeatedString = "";
    
    for (let i = 0; i < num; i++) {
        repeatedString += text;
    }
    
    return repeatedString;
}



console.log(repeatString ('goodbye',-1));
// Do not edit below this line
module.exports = repeatString;
