let jewels = window.prompt("Enter string of jewels");
let stones = window.prompt("Enter string of stones");

var numJewelsInStones = function myFunc(jewels, stones) {
    let myArr = new Array();
    for (let i=0; i<stones.length; i++) {
        for (let j=0; j<jewels.length; j++) {
            if (stones[i]===jewels[j]) {
                myArr.push(stones[i]);
            }
        }
    } return myArr.length;
}

console.log(numJewelsInStones(jewels, stones));
