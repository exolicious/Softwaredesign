var input = prompt("Gib deinen Namen ein", "Nobody");
//Konzept umsetzten: alessio
var sentence = input;
function stringReverse(stringR, attribute) {
    if (attribute == "whitespace") {
        var stringArray = stringR.split(" ");
        stringArray = stringArray.reverse();
        stringR = stringArray.join(" ");
        return stringR;
    }
    else {
        var stringArray = stringR.split("");
        stringArray = stringArray.reverse();
        stringR = stringArray.join("");
        return stringR;
    }
}
function substring(string, attribute) {
    if (attribute == "whitespace") {
        /*string.split(" ");
        return string;*/
        return string.split(" ");
    }
    else {
        // string.split("");
        //return string;
        return string.split("");
    }
}
//case 1
var wordArrayA = substring(sentence, "whitespace");
var i = 0;
while (i < wordArrayA.length) {
    wordArrayA[i] = stringReverse(wordArrayA[i], "char");
    i += 1;
}
var sentenceA = wordArrayA.join(" ");
console.log(sentenceA);
//case 2
var sentenceB = stringReverse(sentence, "whitespace");
console.log(sentenceB);
//Case 3
var sentenceC = stringReverse(sentence, "char");
console.log(sentenceC);
