let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscList = [];
let gainList = [];
let harmonizerGainList = [];
let harmonizerOscList = [];

let harmonizerChecked = document.getElementById("harmonizerCheckbox");

let mainGainNode = null;


let attackTime = attackSlider.value/10;
let decayTime = decaySlider.value/10;
let sLevel = sustainSlider.value/100;
let releaseTime = releaseSlider.value/10;

mainGainNode = audioContext.createGain();
mainGainNode.connect(audioContext.destination);




for (i=0; i<100; i++) {
    oscList[i] = {};
}

for(i=0;i<100;i++){
  gainList[i] = {};
}
for(i=0;i<100;i++){
  harmonizerGainList[i] = {};
}

for(i=0;i<100;i++){
  harmonizerOscList[i] = {};
}



function playTone(freq, gain) {
    let osc = audioContext.createOscillator();
    
    osc.connect(gain);
    
    //let type = wavePicker.options[wavePicker.selectedIndex].value;

/*     sineTerms = new Float32Array([s1,s2,s3,s4,s5]);
    cosineTerms = new Float32Array(sineTerms.length);
    customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);
    osc.setPeriodicWave(customWaveform); */
    let waveType = "sine"
    let waveTypeRadio = document.querySelectorAll('input[name="wave"]');
    for(let w of waveTypeRadio){
      if(w.checked)
      waveType = w.value;
    }
    if(waveType == "square" || waveType=="sawtooth")
    {
      
      mainGainNode.gain.value = volumeControl.value / 3;
    }
    else{
      mainGainNode.gain.value = volumeControl.value;
    }
    osc.type = waveType;
    /*
    if (type == "custom") {
      osc.setPeriodicWave(customWaveform);
    } else {
      osc.type = type;
    }
  */
    

    osc.frequency.value = freq;

    let lfo = audioContext.createOscillator();
    let lfoGain = audioContext.createGain();
    lfo.frequency.setValueAtTime(vibratoSpeed.value, 0);
    lfo.connect(lfoGain);

    lfoGain.gain.setValueAtTime(vibratoAmount.value, 0);
    lfoGain.connect(osc.frequency);
    
    lfo.start();
    osc.start();
  
    return osc;
  }

  function makeGain(){
    let gain = audioContext.createGain();
    return gain;
}


function notePressed_Gain(gainNode, gainAmount){
  const now = audioContext.currentTime;
  gainNode.gain.setValueAtTime(0,0);
  gainNode.gain.linearRampToValueAtTime(gainAmount, now + attackTime);
  gainNode.gain.linearRampToValueAtTime(sLevel * gainAmount, now + attackTime + decayTime);

  gainNode.connect(mainGainNode);
}




  let start;
  function notePressed(event, key) {
    
      var target = event.srcElement;
    const now = audioContext.currentTime;
    let keyPressed;
    let keyValid;

        if(event.code == key){
          keyValid = key;
        }
        if (event.buttons & 1 || keyValid) {
                let  dataset = event.currentTarget.dataset;
                if(event.buttons & 1){
                        dataset = event.currentTarget.dataset;
                }
                else if(event.code == keyValid)
                {
                    dataset = keypressList[event.code];
                    target = document.getElementById(`${dataset["octave"]}${dataset["notenumber"]}`);
                }
                
                if (!dataset["pressed"]) {
                    start = audioContext.currentTime;


                    let _classname = target.className;
                    _classname = _classname.replace("inactive", "active");
                    target.className = _classname;
                
                    let noteOctave = +dataset["octave"];

                    gainList[noteOctave][dataset["notenumber"]] = makeGain();
                    let noteGain = gainList[noteOctave][dataset["notenumber"]];
                    oscList[noteOctave][dataset["notenumber"]] = playTone(dataset["frequency"], gainList[noteOctave][dataset["notenumber"]]);
                   
                    let harmonizerSlider = document.getElementById("harmonizerSlider");
                    let harmonizerNoteNumber = parseInt(`${dataset["notenumber"]}`);
                    harmonizerNoteNumber += parseInt(harmonizerSlider.value)
                    
                    
                    let harmonizerOctave = parseInt(noteOctave);
                    if(harmonizerNoteNumber > 11){
                      harmonizerNoteNumber -= 12;
                      harmonizerOctave += 1;
                    }
                    else if(harmonizerNoteNumber < 0){
                      harmonizerNoteNumber += 12;
                      harmonizerOctave -= 1;
                    }
                    let harmonizerPitch = document.getElementById(harmonizerOctave +""+ harmonizerNoteNumber);
                    harmonizerGainList[noteOctave][dataset["notenumber"]]= makeGain();
                    let harmonizerGain = harmonizerGainList[noteOctave][dataset["notenumber"]];
                    harmonizerOscList[noteOctave][dataset["notenumber"]]= playTone(harmonizerPitch.dataset["frequency"], harmonizerGainList[noteOctave][dataset["notenumber"]]);

                    if(harmonizerChecked.checked == true)
                    notePressed_Gain(harmonizerGain, 1);
                    
                    notePressed_Gain(noteGain,1);
                    
                    dataset["pressed"] = "yes";
                }
            }
  }

 

  
  async function noteReleased(event) {
    let dataset = event.currentTarget.dataset;
    const now = audioContext.currentTime;
    var target = event.srcElement;
    let keyValid;
    if( event.buttons & 1 ){
        dataset = event.currentTarget.dataset;
    }
     else if(event.code){
       dataset = keypressList[event.code];
       target = document.getElementById(`${dataset["octave"]}${dataset["notenumber"]}`);
      }
    
    if (dataset && dataset["pressed"] ) {

     let _classname = target.className;
      _classname = _classname.replace("active", "inactive");
      target.className = _classname;


      let noteOctave = +dataset["octave"];

      let noteGain = gainList[noteOctave][dataset["notenumber"]];
      let harmonizerGain = harmonizerGainList[noteOctave][dataset["notenumber"]];

      let noteOscillator = oscList[noteOctave][dataset["notenumber"]];
      let harmonizerOscillator = harmonizerOscList[noteOctave][dataset["notenumber"]];

      noteReleased_Gain(noteGain, 1, noteOscillator);
      noteReleased_Gain(harmonizerGain, 1, harmonizerOscillator);

      delete gainList[noteOctave][dataset["notenumber"]];
      delete oscList[noteOctave][dataset["notenumber"]];
      delete harmonizerGainList[noteOctave][dataset["notenumber"]];
      delete harmonizerOscList[noteOctave][dataset["notenumber"]];

      delete dataset["pressed"];
    }
  }






  function noteReleased_Gain(gainNode, gainAmount, oscillator){
    let now = audioContext.currentTime;

      if((start + attackTime) >=now){
        let timePassed = now - start;
        //let gainValue = 1/(aTime/timePassed);
        let gainValue = gainNode.gain.value;
        gainNode.gain.setValueAtTime(gainValue,0);

        let timeLeft = attackTime - timePassed;
        //gainNode.gain.linearRampToValueAtTime(gainValue, now + timeLeft);
        gainNode.gain.linearRampToValueAtTime(1 * gainAmount, now + timeLeft);
        gainNode.gain.linearRampToValueAtTime(sLevel * gainAmount, now + timeLeft + decayTime);
        gainNode.gain.linearRampToValueAtTime(0, now + timeLeft + decayTime + releaseTime);
      
    }
    else if((start + attackTime + decayTime)>= now){
      let timePassed = (now - start);
      let TimeMinusAttack = timePassed - attackTime;
      let timePassinvert = decayTime - TimeMinusAttack;
      //let timePassInvertRatio = (dTime-TimeMinusAttack)/dTime;
      let gainBetween = 1 - sLevel;
      ////let gainValue = timePassInvertRatio * gainBetween + sustainLevel;
      let gainValue = gainNode.gain.value;
      gainNode.gain.setValueAtTime(gainValue,0);
      gainNode.gain.linearRampToValueAtTime(sLevel  * gainAmount, now + timePassinvert);

      gainNode.gain.linearRampToValueAtTime(0, now + timePassinvert + releaseTime);
    }
    else if((start + attackTime + decayTime)<= now) {
      let gainValue = gainNode.gain.value;
      gainNode.gain.setValueAtTime(gainValue, 0);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + releaseTime);
    
    }
    
    oscillator.stop(audioContext.currentTime + attackTime + decayTime + releaseTime +1);
  }
