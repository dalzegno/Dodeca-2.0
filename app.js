//var createSynth = document.getElementById("btncreateSynth");
//var selectOctave = document.getElementById("selectOctave");

var x = createContainer();
x.container.className = "container";
x.container.setAttribute("id", "keybContainer");
x.keyboard.className = "keyboard";
var scale =  getEqualScale(9, aFrequency);

var justscale = getJustScale(aFrequency, 9, "C");
createOctaves(8, x.keyboard, scale);

// JUST INTONATION SELECT
var justNote = document.getElementById("justNoteDropdown");

justNote.addEventListener("change", () =>{
  note = justNote.value;
  var node  = document.getElementById("keybContainer");
  node.remove();
  var y = createContainer();
  y.container.className = "container";
  y.container.setAttribute("id", "keybContainer");
  y.keyboard.className = "keyboard";
  
  console.log(justNote.value);
  var justscale = getJustScale(aFrequency, 9, note);
  console.log(justscale);
  createOctaves(8, y.keyboard, justscale);

notepicker1();
octavepicker1();
notepickerA();
octavepickerA();
})


//EQUAL TEMPERAMENT BUTTON
var eqBtn = document.getElementById("eqTempBtn");
eqBtn.addEventListener("click", ()=>{
  var node  = document.getElementById("keybContainer");
  node.remove();
  var y = createContainer();
  y.container.className = "container";
  y.container.setAttribute("id", "keybContainer");
  y.keyboard.className = "keyboard";
  
  var scale =  getEqualScale(9, aFrequency);
  createOctaves(8, y.keyboard, scale);

notepicker1();
octavepicker1();
notepickerA();
octavepickerA();
})


// Creates key bindings, Initial Octave
var keylistUpper = getKeysDown("upper");
var keymap = createKeyMap("C", keylistUpper);
createKeyBindings("C", 3, keymap);
createKeyEvents(keymap);

var keylistLower = getKeysDown("lower");
var keymaplower = createKeyMap("C", keylistLower);
createKeyBindings("C", 2, keymaplower);
createKeyEvents(keymaplower);




function createKeyEvents(keymaplist) {
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