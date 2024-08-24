const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }

    let biggerNum = 0;
    let output = 0;
    let smallerNum = 0;

    if (num1>num2){
        biggerNum = num1;
        smallerNum = num2;
    } else if (num2>num1){
        biggerNum = num2;
        smallerNum = num1;
    }



    for (let i = smallerNum; i<=biggerNum; i++){
        output += i;
    }

    return output;


};
console.log(sumAll(10, [90, 1]))
// Do not edit below this line
module.exports = sumAll;
