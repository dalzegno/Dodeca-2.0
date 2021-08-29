let keypressList = [];


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

  function createKeyBindings(note, octave, keymap){
    
let notenum = 0;
switch(note){
    case "C": notenum = 0; break;
    case "D": notenum = 1; break;
    case "E": notenum = 3; break;
    case "F": notenum = 5; break;
    case "G": notenum = 6; break;
    case "A": notenum = 8; break;
    case "B": notenum = 10; break;
}
for(let i = 0; i < keymap.length; i++){
  
    if(notenum == 12){
        octave++;
        notenum = 0;
    }
 keypressList[keymap[i]] = [];
   keypressList[keymap[i]] = document.getElementById(`${octave}${notenum}`).dataset;
    notenum++;
    }

}

function createKeyMapEvents(keymaplist) {
  for(let i = 0; i < keymaplist.length; i++){
      document.addEventListener('keydown', logkey);
      function logkey(e){
          if(e.code == keymaplist[i])
          notePressed(e, keymaplist[i]);
      }
  }
    for(let i = 0; i < keymaplist.length; i++){
        document.addEventListener('keyup', logkey);
        function logkey(e){
          if(e.code == keymaplist[i])
          noteReleased(e);
      }
    }
  }


var keylistLower = getKeysDown("lower");
var keymaplower = createKeyMap("C", keylistLower);
createKeyBindings("C", 3, keymaplower);
createKeyMapEvents(keymaplower);

var keylistUpper = getKeysDown("upper");
var keymap = createKeyMap("C", keylistUpper);
createKeyBindings("C", 4, keymap);
createKeyMapEvents(keymap);