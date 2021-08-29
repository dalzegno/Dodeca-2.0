let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscList = [];
let gainList = [];

let mainGainNode = null;



let attackTime = attackSlider.value/10;
let decayTime = decaySlider.value/10;
let sLevel = sustainSlider.value/100;
let releaseTime = releaseSlider.value/10;

mainGainNode = audioContext.createGain();
mainGainNode.connect(audioContext.destination);



for (i=0; i<9; i++) {
    oscList[i] = {};
}

for(i=0;i<50;i++){
  gainList[i] = {};
}




function playTone(freq, gain) {
    let osc = audioContext.createOscillator();
    
    osc.connect(gain);
    
    //let type = wavePicker.options[wavePicker.selectedIndex].value;

/*     sineTerms = new Float32Array([s1,s2,s3,s4,s5]);
    cosineTerms = new Float32Array(sineTerms.length);
    customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);
    osc.setPeriodicWave(customWaveform); */

    osc.type = "sine";
    /*
    if (type == "custom") {
      osc.setPeriodicWave(customWaveform);
    } else {
      osc.type = type;
    }
  */
    osc.frequency.value = freq;
    osc.start();
  
    return osc;
  }

  function makeGain(){
    let gain = audioContext.createGain();
    return gain;
}



let start;
  function notePressed(event, key) {
    
      var target = event.srcElement;
      //console.log(event.keydown, "(starttime)note start");
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

                    //console.log(keypressList[event.code], "Note Info");

                    let _classname = target.className;
                    _classname = _classname.replace("inactive", "active");
                    target.className = _classname;
                
                    let octave = +dataset["octave"];
                    gainList[octave][dataset["notenumber"]] = makeGain();
                    let noteGain = gainList[octave][dataset["notenumber"]];
                    oscList[octave][dataset["notenumber"]] = playTone(dataset["frequency"], gainList[octave][dataset["notenumber"]]);
                    noteGain.gain.setValueAtTime(0,0);
                    noteGain.gain.linearRampToValueAtTime(1, now + attackTime);
                    noteGain.gain.linearRampToValueAtTime(sLevel, now + attackTime + decayTime);
                    noteGain.connect(mainGainNode);
                    dataset["pressed"] = "yes";
                }
            }
  }

  
  function noteReleased(event) {
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
        //aTime = attackTime;
 
      let octave = +dataset["octave"];
      let noteGain = gainList[octave][dataset["notenumber"]];
     // oscList[octave][dataset["note"]].connect(mainGainNode);
      if((start + attackTime) >=now){
          let timePassed = now - start;
          //let gainValue = 1/(aTime/timePassed);
          let gainValue = noteGain.gain.value;
          noteGain.gain.setValueAtTime(gainValue,0);

          let timeLeft = attackTime - timePassed;
          //noteGain.gain.linearRampToValueAtTime(gainValue, now + timeLeft);
          noteGain.gain.linearRampToValueAtTime(1, now + timeLeft);
          noteGain.gain.linearRampToValueAtTime(sLevel, now + timeLeft + decayTime);
          noteGain.gain.linearRampToValueAtTime(0, now + timeLeft + decayTime + releaseTime);
        
      }
      else if((start + attackTime + decayTime)>= now){
        let timePassed = (now - start);
        let TimeMinusAttack = timePassed - attackTime;
        let timePassinvert = decayTime - TimeMinusAttack;
        //let timePassInvertRatio = (dTime-TimeMinusAttack)/dTime;
        let gainBetween = 1 - sLevel;
        ////let gainValue = timePassInvertRatio * gainBetween + sustainLevel;
        let gainValue = noteGain.gain.value;
        noteGain.gain.setValueAtTime(gainValue,0);
        noteGain.gain.linearRampToValueAtTime(sLevel, now + timePassinvert);
   
        noteGain.gain.linearRampToValueAtTime(0, now + timePassinvert + releaseTime);
      }
      else if((start + attackTime + decayTime)<= now) {
        let gainValue = noteGain.gain.value;
      noteGain.gain.setValueAtTime(gainValue, 0);
      noteGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + releaseTime);
      }
      oscList[octave][dataset["notenumber"]].stop(now + attackTime + decayTime + releaseTime + 1);
      delete gainList[octave][dataset["notenumber"]];
      delete oscList[octave][dataset["notenumber"]];
      delete dataset["pressed"];
      //console.log("released");
    }
  }
