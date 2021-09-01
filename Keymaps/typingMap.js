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


function getKeysDown(option){
    keys = [];
    if(option == "upper"){
  keys = ['Digit1','KeyQ','Digit2','KeyW','Digit3',
    'KeyE','Digit4','KeyR','Digit5','KeyT','Digit6','KeyY','Digit7',
    'KeyU','Digit8','KeyI','Digit9','KeyO','Digit0','KeyP','Minus'];
    }
    else if(option == "lower"){
  keys = ['KeyA',
  'KeyZ','KeyS',
  'KeyX','KeyD',
  'KeyC','KeyF',
  'KeyV','KeyG',
  'KeyB','KeyH',
  'KeyN','KeyJ',
  'KeyM','KeyK',
  'Comma','KeyL',
  'Period','Semicolon',
  'Slash', 'Quote'];
    }
    return keys;
  }
  
function createKeyMap(note, keysDownList){
    keymap = new Array;
    if(note == "C"){
      keymap = [];
    keymap = [
        keysDownList[1], keysDownList[2], keysDownList[3], keysDownList[4],
        keysDownList[5], keysDownList[7], keysDownList[8], keysDownList[9],
        keysDownList[10], keysDownList[11], keysDownList[12], keysDownList[13],
        keysDownList[15], keysDownList[16], keysDownList[17], keysDownList[18], keysDownList[19],
    ]
            }
    else if(note == "D"){
      keymap = [];
        keymap = [
            keysDownList[0], keysDownList[1], keysDownList[2], keysDownList[3],
            keysDownList[5], keysDownList[6], keysDownList[7], keysDownList[8],
            keysDownList[9], keysDownList[10], keysDownList[11],keysDownList[13],
            keysDownList[14],keysDownList[15],keysDownList[16],keysDownList[17], keysDownList[19],
            keysDownList[20], keysDownList[21]
        ]
    }
    else if(note == "E"){
      keymap = [];
        keymap = [
            keysDownList[0], keysDownList[1],keysDownList[3],keysDownList[4],
            keysDownList[5],keysDownList[6], keysDownList[7],keysDownList[8],
            keysDownList[9], keysDownList[11],keysDownList[12],keysDownList[13],
            keysDownList[14],keysDownList[15], keysDownList[17],keysDownList[18],keysDownList[19],
            keysDownList[20]
        ]
    }
    else if(note == "F"){
      keymap = [];
        keymap = [
            keysDownList[1], keysDownList[2],keysDownList[3],keysDownList[4],
            keysDownList[5],keysDownList[6], keysDownList[7],keysDownList[9],
            keysDownList[10], keysDownList[11],keysDownList[12],keysDownList[13],
            keysDownList[15],keysDownList[16], keysDownList[17],keysDownList[18],keysDownList[19],
            keysDownList[20]
        ]
    }
    else if(note == "G"){
      keymap = [];
        keymap = [ keysDownList[0],
            keysDownList[1], keysDownList[2],keysDownList[3],keysDownList[4],
            keysDownList[5],keysDownList[7], keysDownList[8],keysDownList[9],
            keysDownList[10], keysDownList[11],keysDownList[13],keysDownList[14],
            keysDownList[15],keysDownList[16], keysDownList[17],keysDownList[18],keysDownList[19]
        ]
    }
    
    else if(note == "A"){
      keymap = [];
        keymap = [ keysDownList[0],
            keysDownList[1], keysDownList[2],keysDownList[3],keysDownList[5],
            keysDownList[6],keysDownList[7], keysDownList[8],keysDownList[9],
            keysDownList[11], keysDownList[12],keysDownList[13],keysDownList[14],
            keysDownList[15],keysDownList[16], keysDownList[17],keysDownList[19],keysDownList[20]
        ]
    }
    
    else if(note == "B"){
      keymap = [];
        keymap = [ keysDownList[0],
            keysDownList[1], keysDownList[3],keysDownList[4],keysDownList[5],
            keysDownList[6],keysDownList[7], keysDownList[9],keysDownList[10],
            keysDownList[11], keysDownList[12],keysDownList[13],keysDownList[14],
            keysDownList[15],keysDownList[17], keysDownList[18],keysDownList[19],
            keysDownList[20],keysDownList[21]
        ]
    }
    return keymap;
}

var kmapContainerLow =document.createElement("div");
kmapContainerLow.className = "keyboardMap kmapLow";
kmapContainerLow.setAttribute("id", "kmapLow");

document.getElementById("bottomBar").appendChild(kmapContainer);
document.getElementById("bottomBar").appendChild(kmapContainerLow);
/* 
document.body.appendChild(kmapContainer);
document.body.appendChild(kmapContainerLow);
 */



createTypingMap(kmapContainer, kmapUpper, "1");
createTypingMap(kmapContainerLow, kmapLower, "A");



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
function disableKey(e) {
    if (!e) {
      e = window.event;
    }
    if (e.keyCode >= 65 && e.keyCode <= 90) // A to Z
    {
      e.returnValue = false;
      e.cancel = true;
    }
  };



  var octavePick1 = document.getElementById("octavePicker1");
  var notepick1 = document.getElementById("notePicker1");
  var notepickA = document.getElementById("notePickerA");
  var octavePickA = document.getElementById("octavePickerA");


  notepick1.onkeydown = disableKey;
  notepickA.onkeydown = disableKey;
  octavePickA.onkeydown = disableKey;

//Initial typing maps
notepick1.selectedIndex = 0;
notepickA.selectedIndex = 0;
octavePick1.selectedIndex = 2;
octavePickA.selectedIndex = 3;
createTypingKeyMap("upper", notepick1.value, "1");
createTypingKeyMap("lower", notepickA.value, "A");
