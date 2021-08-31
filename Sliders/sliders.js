

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

let positionSlider = document.getElementById("keyboardPositionRange");
positionSlider.oninput=()=>{
  let octaves = document.getElementsByClassName("octave");
  let scaleX = (sliderX.value -sliderX.min);
  console.log(positionSlider.value / scaleX);
  for(i=0; i<octaves.length;i++){
    //octaves[i].style.right = (positionSlider.value /12)* scaleX+"rem";
    octaves[i].style.right = (positionSlider.value *sliderX.value/sliderX.min)+"rem";
  }
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
  }

  // A frequency

  let aFrequencySlider = document.getElementById("aFrequencyRange");
  aFrequencySlider.nextElementSibling.value = aFrequencySlider.value + "Hz";

  aFrequencySlider.oninput=()=>{
    let aValue = aFrequencySlider.value;
    aFrequencySlider.nextElementSibling.value = aValue + "Hz";
    scale = getEqualScale(9, aValue);
    //scale = getJustScale(aValue, 10, "C")
    tuneKeyboard(scale);
  }

  function tuneKeyboard(scale){
    let octaves = document.getElementsByClassName("octave");
    for(let i=0;i<octaves.length;i++){
        
        let note = octaves[i].firstChild;
        for(let j=0;j<octaves[i].childElementCount;j++){
            let note_octave = note.dataset["octave"];
            let note_notenumber = note.dataset["notenumber"];

            note.dataset["frequency"] = scale[note_octave][note_notenumber];
            
            if(note.nextSibling !== null)
                note = note.nextSibling;
        }
    }
  }


  ////// Vibrato

  let vibratoSpeed = document.getElementById("vibratoSpeed");
  let vibratoAmount = document.getElementById("vibratoAmount");

  vibratoSpeed.nextElementSibling.value = vibratoSpeed.value ;
  vibratoAmount.nextElementSibling.value = vibratoAmount.value ;

  vibratoSpeed.oninput=()=>{
    vibratoSpeed.nextElementSibling.value = vibratoSpeed.value ;
  }
  vibratoAmount.oninput=()=>{
    vibratoAmount.nextElementSibling.value = vibratoAmount.value ;
  }


  /////// Harmonizer

  let harmonizerSlider = document.getElementById("harmonizerSlider");
  harmonizerSlider.nextElementSibling.value= harmonizerSlider.value;
    
  harmonizerSlider.oninput =()=>{
    harmonizerSlider.nextElementSibling.value= harmonizerSlider.value;
  }

  let harmonizerGainSlider = document.getElementById("harmonizerGain");
  harmonizerGainSlider.nextElementSibling.value = harmonizerGainSlider.value;
  harmonizerGainSlider.oninput=()=>{
    harmonizerGainAmount = harmonizerGainSlider.value;
    harmonizerGainSlider.nextElementSibling.value = harmonizerGainSlider.value;
  }
  
  ////// Delay
  let delayTimeSlider=document.getElementById("delayTime");
  let delayFeedbackSlider=document.getElementById("delayFeedback");
  let delayGainSlider=document.getElementById("delayGain");
  delayTimeSlider.previousElementSibling.value=delayTimeSlider.value+"s";
  delayFeedbackSlider.previousElementSibling.value=Math.floor(delayFeedbackSlider.value *100) +"%";
  delayGainSlider.previousElementSibling.value=Math.floor(delayGainSlider.value *100)+"%" 

 /*  feedback.gain.value = delayFeedbackSlider.value;
  delay.delayTime.value = delayTimeSlider.value;
  delayGain.gain.value = delayGainSlider.value; */

  delayTimeSlider.oninput=()=>{
    delayTimeSlider.previousElementSibling.value=delayTimeSlider.value+"s";
    
  }
  delayFeedbackSlider.oninput=()=>{
    delayFeedbackSlider.previousElementSibling.value=Math.floor(delayFeedbackSlider.value *100) +"%";
   
  }
  delayGainSlider.oninput=()=>{
    delayGainSlider.previousElementSibling.value=Math.floor(delayGainSlider.value *100)+"%" ;
   
  }

  let delayCheckbox = document.getElementById("delayCheckbox");
  delayCheckbox.onchange=()=>{
    if(delayCheckbox.checked == true){
      
    console.log("checked")
    }
    else if(delayCheckbox.checked == false){
      
      for(i=0;i<delayList.length;i++)
      {
        console.log(delayList)
      delayList[i][0].disconnect();
      delayList[i][1].disconnect();
      delayList[i][2].disconnect();
      
      }
      delayList = [];
      
    console.log("unchecked")
    
    }
  }