var subjects = ["Frodo", "Sam", "Gandalf", "Aragorn", "Legolas", "Gimli"];
var verbs = ["bekämft", "verliebt sich in", "schmiedet ein heimliches Bündnis mit", "zerstört", "hasst", "schließt Frieden mit"];
var objects = ["einen Ork", "den einen Ring", "den dunklen Herrscher Sauron", "Saruman", "einen Ork", "Gollum"];
var verses = [""];
var min = objects.length;
while (min > 0) {
    getVerse();
}
function getVerse() {
    var verse = "";
    var rnd;
    rnd = Math.floor(Math.random());
    verse.concat[subjects[rnd], " "];
    subjects.splice(rnd, 1);
    rnd = Math.floor(Math.random());
    verse.concat[verbs[rnd], " "];
    verbs.splice(rnd, 1);
    rnd = Math.floor(Math.random());
    objects.concat(objects[rnd], " ");
    objects.splice(rnd, 1);
    return verse;
}
function printVerses(verse) {
    var i = 0;
    while (i < verses.length) {
        document.write('<p class="text">' + verse[i] + '</p>');
        i = i + 1;
    }
}
