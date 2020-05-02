let input: string = prompt("Gib deinen Namen ein", "Nobody");

//Konzept umsetzten: alessio
let sentence: string = input;

function stringReverse(stringR : string, attribute: string) {
    if (attribute == "whitespace") {
        let stringArray:string[] = stringR.split(" ");
        stringArray = stringArray.reverse();
        stringR = stringArray.join(" ");
        return stringR;
    }
    else {
        let stringArray: string[] = stringR.split("");
        stringArray = stringArray.reverse();
        stringR = stringArray.join("");
        return stringR;
    } 
}


function substring(string: string, attribute: string) {
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
let wordArrayA: string[] = substring (sentence , "whitespace") 

let i: number = 0;

while ( i < wordArrayA.length){
    wordArrayA[i] = stringReverse(wordArrayA[i], "char");
    i +=1;
    }



let sentenceA : string = wordArrayA.join(" ");
console.log(sentenceA);

//case 2
let sentenceB = stringReverse(sentence, "whitespace");
console.log(sentenceB);

//Case 3
let sentenceC = stringReverse(sentence, "char");
console.log(sentenceC);
