

let sliderX = document.getElementById("sliderX");
let sliderY = document.getElementById("sliderY");

sliderY.oninput=()=>{
    document.documentElement.style
    .setProperty('--octaveHeight', sliderY.value+"rem");
    
}
sliderX.oninput=()=>{
    document.documentElement.style
    .setProperty('--octaveWidth', sliderX.value+"rem");
}



//Sound controls


let volumeControl = document.getElementById("volumeRange");
let volumeOutput = document.getElementById("volumeOutput");
volumeOutput.innerHTML = Math.floor(volumeControl.value * 100) + "%";
volumeControl.oninput=()=>{
    volumeControl.nextElementSibling.innerHTML = Math.floor(volumeControl.value *100) + "%";
    mainGainNode.gain.setValueAtTime(mainGainNode.gain.value, audioContext.currentTime);
    mainGainNode.gain.linearRampToValueAtTime(volumeControl.value, audioContext.currentTime + 0.1);
    mainGainNode.gain.value = volumeControl.value;
}


//ADSR
let attackSlider = document.getElementById("attackRange");
attackSlider.nextElementSibling.value = Math.round(attackSlider.value /10 *100)/100 + "s";
let decaySlider = document.getElementById("decayRange");
decaySlider.nextElementSibling.value = Math.round(decaySlider.value /10 *100)/100 + "s";
let releaseSlider = document.getElementById("releaseRange");
releaseSlider.nextElementSibling.value = Math.round(releaseSlider.value /10 *100)/100 + "s";

let sustainSlider = document.getElementById("sustainRange");
sustainSlider.nextElementSibling.value = sustainSlider.value + "%";

attackSlider.oninput=()=>{
    attackSlider.nextElementSibling.value = Math.round(attackSlider.value /10 *100)/100 + "s";
    attackTime = attackSlider.value/10;
    console.log(attackSlider.value/10)
  }
  decaySlider.oninput=()=>{
    decaySlider.nextElementSibling.value = Math.round(decaySlider.value /10 *100)/100 + "s";
    decayTime = decaySlider.value/10;
  }
  releaseSlider.oninput=()=>{
    releaseSlider.nextElementSibling.value = Math.round(releaseSlider.value /10 *100)/100 + "s";
    releaseTime = releaseSlider.value/10;
  }
  sustainSlider.oninput=()=>{
      sustainSlider.nextElementSibling.value =(sustainSlider.value + "%");
      sLevel = sustainSlider.value/100;
      console.log(sustainSlider.value/100);
  }

  // A frequency

  let aFrequencySlider = document.getElementById("aFrequencyRange");
  aFrequencySlider.nextElementSibling.value = aFrequencySlider.value + "Hz";

  aFrequencySlider.oninput=()=>{
    let aValue = aFrequencySlider.value;
    aFrequencySlider.nextElementSibling.value = aValue + "Hz";
    tuneKeyboard(getJustScale(aValue,9,"C"));
  }

  function tuneKeyboard(scale){
    let octaves = document.getElementsByClassName("octave");
    console.log(octaves);
    for(let i=0;i<octaves.length;i++){
        
        let note = octaves[i].firstChild;
        for(let j=0;j<octaves[i].childElementCount;j++){
            
            console.log(note);
            
            let note_octave = note.dataset["octave"];
            console.log(note_octave+"octave");
            let note_notenumber = note.dataset["notenumber"];
            console.log(note_notenumber + "notenumber"); 

            note.dataset["frequency"] = scale[note_octave][note_notenumber];
            
            if(note.nextSibling !== null)
                note = note.nextSibling;
        }
    }
  }
