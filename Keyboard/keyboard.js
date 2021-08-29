var keys = [
    "white key1","black key2","white key3",
    "black key4", "white key5","white key6",
    "black key7", "white key8","black key9",
    "white key10","black key11","white key12"
];

function createKeyboardKeys(octaves, startingOctave, freq){
    let kbCOntainer = document.createElement("div");
    kbCOntainer.className ="keyboardContainer";
    //three below C
    var octave = document.createElement("div");
    for(let i=0;i<3;i++){
        
            octave.className = "octave";
            let key =document.createElement("button");
            createKeyEvents(key);
            key.className = keys[i+9] + " inactive";
            key.id= `${startingOctave-1}${i+9}`;
            octave.appendChild(key);
            key.dataset["octave"] = startingOctave;
            key.dataset["notenumber"] = i+9;
            key.dataset["frequency"] =  freq[startingOctave-1][i+9];
    }
    kbCOntainer.appendChild(octave);

    //main octaves
    for(let j=0;j<octaves;j++){
        var octave = document.createElement("div");
        octave.className = "octave";

        for(let i = 0;i<12;i++){
            let key =document.createElement("button");
            createKeyEvents(key);
            key.className = keys[i] + " inactive";
            key.id = `${startingOctave}${i}`;
            octave.appendChild(key);
            key.dataset["octave"] = startingOctave;
            key.dataset["notenumber"] = i;
            key.dataset["frequency"] =  freq[startingOctave][i];
        }
    kbCOntainer.appendChild(octave);
    startingOctave++;
    }

    //+1
    var octave = document.createElement("div");
    octave.className = "octave";
    let key =document.createElement("button");
    createKeyEvents(key);
    key.className = keys[0] + " inactive";
    key.id = `${startingOctave}${0}`;
    octave.appendChild(key);
    key.dataset["octave"] = startingOctave;
    key.dataset["notenumber"] = 0;
    key.dataset["frequency"] =  freq[startingOctave][0];
    kbCOntainer.appendChild(octave);

    return kbCOntainer;
}

function createKeyEvents(keyElement){
    keyElement.addEventListener("mousedown", notePressed, false);
    keyElement.addEventListener("mouseup", noteReleased, false);
    keyElement.addEventListener("mouseover", notePressed, false);
    keyElement.addEventListener("mouseleave", noteReleased, false);
    keyElement.addEventListener("keydown", notePressed, false);
    keyElement.addEventListener("keyup", noteReleased, false);
}


let keyboardWrapper = document.createElement("div");
keyboardWrapper.className = "keyboardWrapper";

let keyboardHead = document.createElement("header");
keyboardHead.className ="keyboardHead";
keyboardHead.id = "keyboardHeader";


let soundControls = document.getElementById("soundControlContainer");
keyboardHead.appendChild(soundControls);


var scale =  getEqualScale(9, 442);
let keyboard = createKeyboardKeys(5, 2, scale);

keyboardWrapper.appendChild(keyboardHead);
keyboardWrapper.appendChild(keyboard);


document.body.appendChild(keyboardWrapper);


