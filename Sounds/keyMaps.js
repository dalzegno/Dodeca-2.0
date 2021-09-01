let keypressList = [];




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
 if(document.getElementById(`${octave}${notenum}`)!== null)
   keypressList[keymap[i]] = document.getElementById(`${octave}${notenum}`).dataset;
    
   notenum++;
    }

}


function createKeyMapEvents(keymaplist, keyDownEventList, keyUpEventList) {

  for(let i = 0; i < keymaplist.length; i++){
      keyDownEventList[i] = function logkey(e){
      if(e.code == keymaplist[i]){
      notePressed(e, keymaplist[i]);
      
      }
    }
    
    document.addEventListener('keydown', keyDownEventList[i],false );
      
  }
    for(let i = 0; i < keymaplist.length; i++){

         keyUpEventList[i] = function logkey(e){
            if(e.code == keymaplist[i])
            noteReleased(e);
        } 
        document.addEventListener('keyup', keyUpEventList[i], false);
        
    }
  }

 


//CREATE KEY BINDINGS FOR UPPER KEYBOARD TYPINGS


notepick1.addEventListener("change", () =>{
    notepicker1();
})
octavePick1.addEventListener("change", ()=>{
   octavepicker1();
})

function notepicker1(){
  removeKeyMapEvents(keymap,removeUpperKeyDownEvents,removeUpperKeyUpEvents);
    removeUpperKeyDownEvents = [];
    removeUpperKeyUpEvents = [];

    let note1 = notepick1.value;
    let octave1 = octavePick1.value;
    createTypingKeyMap("upper", notepick1.value, "1");
    var keylistUpper = getKeysDown("upper");
    var keymap = createKeyMap(note1, keylistUpper);
    createKeyBindings(note1, octave1, keymap);
    

    createKeyMapEvents(keymap,removeUpperKeyDownEvents,removeUpperKeyUpEvents);

}
function octavepicker1(){
    removeKeyMapEvents(keymap,removeUpperKeyDownEvents,removeUpperKeyUpEvents);
    removeUpperKeyDownEvents = [];
    removeUpperKeyUpEvents = [];

    let note1 = notepick1.value;
    let octave1 = octavePick1.value;
    createTypingKeyMap("upper", notepick1.value, "1");
    var keylistUpper = getKeysDown("upper");
    var keymap = createKeyMap(note1, keylistUpper);
    createKeyBindings(note1, octave1, keymap);
    createKeyMapEvents(keymap,removeUpperKeyDownEvents,removeUpperKeyUpEvents);


  }

//CREATE KEY BINDINGS FOR LOWER KEYBOARD TYPINGS

notepickA.addEventListener("change", () =>{
    notepickerA();
})
octavePickA.addEventListener("change", ()=>{
    octavepickerA();
})

function notepickerA(){
  removeKeyMapEvents(keymap,removeLowerKeyDownEvents,removeLowerKeyUpEvents);
  removeLowerKeyDownEvents = [];
  removeLowerKeyUpEvents = [];

    let noteA = notepickA.value;
    let octaveA = octavePickA.value;
    createTypingKeyMap("lower", notepickA.value, "A");
    var keylistUpper = getKeysDown("lower");
    var keymap = createKeyMap(noteA, keylistLower);
    createKeyBindings(noteA, octaveA, keymap);
    createKeyMapEvents(keymap,removeLowerKeyDownEvents,removeLowerKeyUpEvents);
}
function octavepickerA(){
    removeKeyMapEvents(keymap,removeLowerKeyDownEvents,removeLowerKeyUpEvents);
    removeLowerKeyDownEvents = [];
    removeLowerKeyUpEvents = [];


    let noteA = notepickA.value;
    let octaveA = octavePickA.value;
    createTypingKeyMap("lower", notepickA.value, "A");
    var keylistLower = getKeysDown("lower");
    var keymap = createKeyMap(noteA, keylistLower);
    createKeyBindings(noteA, octaveA, keymap);
    createKeyMapEvents(keymap,removeLowerKeyDownEvents,removeLowerKeyUpEvents);
}







function removeKeyMapEvents(keymaplist,removeKeyupList, removeKeydownList) {

  for(let i = 0; i < removeKeyupList.length; i++){
    
    document.removeEventListener('keydown', removeKeyupList[i],false );
      
  }
    for(let i = 0; i < removeKeydownList.length; i++){
        document.removeEventListener('keyup', removeKeydownList[i],false);
        
      }
    }
  
  let removeUpperKeyDownEvents = [];
  let removeUpperKeyUpEvents = [];
  let removeLowerKeyDownEvents = [];
  let removeLowerKeyUpEvents = [];

  var keylistLower = getKeysDown("lower");
  var keymaplower = createKeyMap("C", keylistLower);
  createKeyBindings("C", 4, keymaplower);
  createKeyMapEvents(keymaplower, removeLowerKeyDownEvents, removeLowerKeyUpEvents);

  var keylistUpper = getKeysDown("upper");
  var keymap = createKeyMap("C", keylistUpper);
  createKeyBindings("C", 3, keymap);
  createKeyMapEvents(keymap,removeUpperKeyDownEvents,removeUpperKeyUpEvents);



  octavePick1.onkeydown = function(e) {
    if (!e) {
      e = window.event;
    }
    if (e.keyCode >= 65 && e.keyCode <= 90) // A to Z
    {
      e.returnValue = false;
      e.cancel = true;
    }
  };