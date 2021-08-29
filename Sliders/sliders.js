

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