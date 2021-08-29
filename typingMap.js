var kmapBlackUpper = ["1","2","3","4","5","6","7","8","9","0","+"];
var kmapWhiteUpper = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
var kmapUpper = ["1","Q","2","W","3","E", "4","R","5", "T","6","Y","7","U", "8","I","9","O","0", "P", "+"]
var kmapBlackLower = ["A","S","D","F","G","H","J","K","L",";"];
var kmapWhiteLower = ["Z","X","C","V","B","N","M",",",".", "/"];
var kmapLower = ["A","Z","S","X","D","C","F","V","G","B","H","N","J","M","K",",", "L",".",";","/", "''"];
var notes = ["C","D","E","F","G","A","B"];

var kmapContainer = document.createElement("div");
kmapContainer.className = "keyboardMap";
kmapContainer.setAttribute("id", "kmapUpper");



var kmapContainerLow =document.createElement("div");
kmapContainerLow.className = "keyboardMap kmapLow";
kmapContainerLow.setAttribute("id", "kmapLow");

document.body.appendChild(kmapContainer);
document.body.appendChild(kmapContainerLow);

createTypingMap(kmapContainer, kmapUpper, "1");
createTypingMap(kmapContainerLow, kmapLower, "A");


//CREATE KEY BINDINGS FOR UPPER KEYBOARD TYPINGS
var octavePick1 = document.getElementById("octavePicker1");
var notepick1 = document.getElementById("notePicker1");

notepick1.addEventListener("change", () =>{
    notepicker1();
})
octavePick1.addEventListener("change", ()=>{
   octavepicker1();
})

function notepicker1(){
    let note1 = notepick1.value;
    let octave1 = octavePick1.value;
    createTypingKeyMap("upper", notepick1.value, "1");
    var keylistUpper = getKeysDown("upper");
    var keymap = createKeyMap(note1, keylistUpper);
    createKeyBindings(note1, octave1, keymap);
    createKeyEvents(keymap);
}
function octavepicker1(){
    let note1 = notepick1.value;
    let octave1 = octavePick1.value;
    createTypingKeyMap("upper", notepick1.value, "1");
    var keylistUpper = getKeysDown("upper");
    var keymap = createKeyMap(note1, keylistUpper);
    createKeyBindings(note1, octave1, keymap);
    createKeyEvents(keymap);
}

//CREATE KEY BINDINGS FOR LOWER KEYBOARD TYPINGS
var notepickA = document.getElementById("notePickerA");
var octavePickA = document.getElementById("octavePickerA");
notepickA.addEventListener("change", () =>{
    notepickerA();
})
octavePickA.addEventListener("change", ()=>{
    octavepickerA();
})

function notepickerA(){
    let noteA = notepickA.value;
    let octaveA = octavePickA.value;
    createTypingKeyMap("lower", notepickA.value, "A");
    var keylistUpper = getKeysDown("lower");
    var keymap = createKeyMap(noteA, keylistLower);
    createKeyBindings(noteA, octaveA, keymap);
    createKeyEvents(keymap);
}
function octavepickerA(){
    let noteA = notepickA.value;
    let octaveA = octavePickA.value;
    createTypingKeyMap("lower", notepickA.value, "A");
    var keylistLower = getKeysDown("lower");
    var keymap = createKeyMap(noteA, keylistLower);
    createKeyBindings(noteA, octaveA, keymap);
    createKeyEvents(keymap);
}

//Initial typing maps
notepick1.selectedIndex = 0;
notepickA.selectedIndex = 0;
octavePick1.selectedIndex = 2;
octavePickA.selectedIndex = 1;
createTypingKeyMap("upper", notepick1.value, "1");
createTypingKeyMap("lower", notepickA.value, "A");


function createTypingMap(container, kmap, id){
    var whiteNoteKeyContainer = document.createElement("div");
whiteNoteKeyContainer.className = "whiteContainer";
var blackNoteKeyContainer = document.createElement("div");
blackNoteKeyContainer.className = "blackContainer";
for(let i = 0; i<kmapUpper.length;i++){
    if(i % 2 == 0){
var blackNoteKey = document.createElement("div");
blackNoteKey.className = "blackNoteKey";
blackNoteKey.setAttribute("id",`typing${id}${i}`);
blackNoteKey.innerHTML = kmap[i];
blackNoteKeyContainer.appendChild(blackNoteKey);
}
else{
var whiteNoteKey = document.createElement("div");
whiteNoteKey.className = "whiteNoteKey";
whiteNoteKey.setAttribute("id",`typing${id}${i}`);
    
whiteNoteKey.innerHTML = kmap[i];
whiteNoteKeyContainer.appendChild(whiteNoteKey);
}
var noteDropdown = document.createElement("select");
noteDropdown.className = "dropdown";
noteDropdown.setAttribute("id", `notePicker${kmap[0]}`)
notes.forEach((index) => {
   var n = document.createElement("option");
   n.value = index;
   n.innerHTML = index;
   noteDropdown.appendChild(n);
});
}
var octaveDropdown = document.createElement("select");
octaveDropdown.className = "dropdown";
octaveDropdown.setAttribute("id", `octavePicker${kmap[0]}`)

for(let i = 1; i<8; i++){
    var o = document.createElement("option");
   o.value = i;
   o.innerHTML = i;
   octaveDropdown.appendChild(o);
}
var pickers = document.createElement("div");
pickers.className = "pickers";
pickers.appendChild(octaveDropdown);
pickers.appendChild(noteDropdown);
container.appendChild(pickers);
container.appendChild(blackNoteKeyContainer);
container.appendChild(whiteNoteKeyContainer);
}




function createTypingKeyMap(option, note, id){
var kmap = [];
var keysdow;
if(option == "upper"){
    kmap = getKeysDown("upper");
}
else if (option == "lower"){
    kmap = getKeysDown("lower");
}
for(let i = 0; i < kmap.length; i++){
    if(i%2== 0){
    var k = document.getElementById(`typing${id}${i}`);
    k.className = "invisKey"
    }
}
var km = createKeyMap(note, kmap);
for(let i = 0; i < kmap.length; i++){
    for(let j = 0; j < km.length; j++){
    if(kmap[i] == km[j]){
        if(i % 2 == 0){
            var k = document.getElementById(`typing${id}${i}`);
            k.className = "blackNoteKey"
        }
    }
    }
    }
}

console.log("HELLO! :)");