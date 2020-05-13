let subjects: string[] = ["Frodo", "Sam", "Gandalf", "Aragorn", "Legolas", "Gimli"];
let verbs: string[] = ["bekämft", "verliebt sich in", "schmiedet ein heimliches Bündnis mit", "zerstört", "hasst", "schließt Frieden mit"];
let objects: string[] = ["einen Ork", "den einen Ring", "den dunklen Herrscher Sauron", "Saruman", "einen Ork", "Gollum"];

let verses: string[] = [""];
let verse: string = "";
let min:number = objects.length;

function main() {
    while(min > 0) {
        getVerse();
        verses.push(verse);
        min = min - 1;
    }
    printVerses(verses);
    console.log(verses);
}


function getVerse(){
    let rnd: number;
    rnd = Math.floor(Math.random());
    verse.concat[subjects[rnd], " "];
    subjects.splice(rnd, 1);
    rnd = Math.floor(Math.random());
    verse.concat[verbs[rnd], " "];
    verbs.splice(rnd, 1);
    rnd = Math.floor(Math.random());
    objects.concat(objects[rnd]," ");
    objects.splice(rnd, 1);
    return verse;
}

function printVerses(verse: string[]) {
    let i:number = 0;
    while(i < verses.length) {
        document.write('<p class="text">' + verse[i] + '</p>');
        i = i + 1;
    }
}