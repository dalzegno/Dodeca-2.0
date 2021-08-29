
//--------------KEYBINDING CONTROLS------------//
/*
var createSynthContainer = document.createElement("div");
createSynthContainer.className = "createSynthContainer";

var selectOctave = document.createElement("select");
selectOctave.className = "select";
selectOctave.setAttribute("id", "selectOctave");


var octaveNumbers = ["0","1","2","3","4","5","6","7","8"];
octaveNumbers.forEach((index)=>{
    var x = document.createElement("option");
    x.innerHTML = index;
    selectOctave.appendChild(x);
});

var octaveLabel = document.createElement("label");
octaveLabel.textContent = "Octaves: ";
createSynthContainer.appendChild(octaveLabel);

createSynthContainer.appendChild(selectOctave);
var btnCreateSynth = document.createElement("button");
btnCreateSynth.setAttribute("id", "btncreateSynth");
btnCreateSynth.innerHTML = "Create Synth";
createSynthContainer.appendChild(btnCreateSynth);

document.body.appendChild(createSynthContainer);
*/

//--------------------------------------//

//------------ CONTROLS  -------------

// <------->VOLUME
var volumeContainer = document.createElement("div");
volumeContainer.setAttribute("id", "volumeContainer");
var lblVolume = document.createElement("label");
lblVolume.innerHTML = "Volume";
var volumeControl = document.createElement("input");
volumeControl.setAttribute("id", "volumeControl");
volumeControl.type = "range";
volumeControl.setAttribute("min", "0.0");
volumeControl.setAttribute("max", "1.0");
volumeControl.setAttribute("step", "0.001");
volumeControl.setAttribute("value", "0.2");
volumeContainer.appendChild(lblVolume);
volumeContainer.appendChild(volumeControl);
document.body.appendChild(volumeContainer);

// <------->ADSR
var ADSRcontainer = document.createElement("div");
ADSRcontainer.className = "ADSRcontainer";
//----ADSRITEM
function appendADSRItem(item, labeltext, textID){
var ADSRitem = document.createElement("div");
var ADSRlabel = document.createElement("label");
ADSRlabel.className = "lblADSR";
ADSRlabel.innerHTML = `${labeltext}`;
var ADSRtextBox = document.createElement("input");
ADSRtextBox.type = "text";
ADSRtextBox.className = "txtADSR";
ADSRtextBox.setAttribute("id", `${textID}`);
ADSRitem.className = "ADSRitem";
ADSRitem.appendChild(ADSRlabel);
ADSRitem.appendChild(item);
ADSRitem.appendChild(ADSRtextBox);
return ADSRitem;
}
//----ATTACK
var attackControl = document.createElement("input");
attackControl.setAttribute("id", "attackControl");
attackControl.className = "ADSRrange";
attackControl.type = "range";
attackControl.setAttribute("min", "0.0");
attackControl.setAttribute("max", "100.0");
attackControl.setAttribute("step", "0.1");
attackControl.setAttribute("value", "0.9");
var attackItem = appendADSRItem(attackControl, "Attack ", "txtAttack");
//----DECAY
var decayControl = document.createElement("input");
decayControl.setAttribute("id", "decayControl");
decayControl.className = "ADSRrange";
decayControl.type = "range";
decayControl.setAttribute("min", "0.0");
decayControl.setAttribute("max", "100.0");
decayControl.setAttribute("step", "0.1");
decayControl.setAttribute("value", "0.2");
var decayItem = appendADSRItem(decayControl, "Decay ", "txtDecay");
//----SUSTAIN
var sustainControl = document.createElement("input");
sustainControl.setAttribute("id", "sustainControl");
sustainControl.className = "ADSRrange";
sustainControl.type = "range";
sustainControl.setAttribute("min", "0.0");
sustainControl.setAttribute("max", "1.0");
sustainControl.setAttribute("step", "0.01");
sustainControl.setAttribute("value", "1");
var sustainItem = appendADSRItem(sustainControl, "Sustain ", "txtSustain");
//----RELEASE
var releaseControl = document.createElement("input");
releaseControl.setAttribute("id", "releaseControl");
releaseControl.className = "ADSRrange";
releaseControl.type = "range";
releaseControl.setAttribute("min", "0.0");
releaseControl.setAttribute("max", "100.0");
releaseControl.setAttribute("step", "0.1");
releaseControl.setAttribute("value", "2");
var releaseItem = appendADSRItem(releaseControl, "Release ", "txtRelease");
//-----

ADSRcontainer.appendChild(attackItem);
ADSRcontainer.appendChild(decayItem);
ADSRcontainer.appendChild(sustainItem);
ADSRcontainer.appendChild(releaseItem);
document.body.appendChild(ADSRcontainer);



//-------- SINEWAVE CONTROLS
// <------->SINECONTAINER
var Sinecontainer = document.createElement("div");
Sinecontainer.className = "sinecontainer";
var SineHeader = document.createElement("div");
SineHeader.innerHTML = "Custom Waveform";
SineHeader.className = "sineHeader";
Sinecontainer.appendChild(SineHeader);
//----SINEITEM
function appendSineItem(item, labeltext, textID){
var sineitem = document.createElement("div");
var sinelabel = document.createElement("label");
sinelabel.className = "lblsine";
sinelabel.innerHTML = `${labeltext}`;
var sinetextBox = document.createElement("input");
sinetextBox.type = "text";
sinetextBox.className = "txtsine";
sinetextBox.setAttribute("id", `${textID}`);
sineitem.className = "sineitem";
sineitem.appendChild(sinelabel);
sineitem.appendChild(item);
sineitem.appendChild(sinetextBox);
return sineitem;
}
//---SINE1
var s1Control = document.createElement("input");
s1Control.setAttribute("id", "s1Control");
s1Control.className = "sinerange";
s1Control.type = "range";
s1Control.setAttribute("min", "0.0");
s1Control.setAttribute("max", "300.0");
s1Control.setAttribute("step", "0.5");
s1Control.setAttribute("value", "4");
var s1Item = appendSineItem(s1Control, "Sine 1", "txts1");
//---SINE2
var s2Control = document.createElement("input");
s2Control.setAttribute("id", "s2Control");
s2Control.className = "sinerange";
s2Control.type = "range";
s2Control.setAttribute("min", "0.0");
s2Control.setAttribute("max", "300.0");
s2Control.setAttribute("step", "0.5");
s2Control.setAttribute("value", "3");
var s2Item = appendSineItem(s2Control, "Sine 2", "txts2");
//---SINE3
var s3Control = document.createElement("input");
s3Control.setAttribute("id", "s3Control");
s3Control.className = "sinerange";
s3Control.type = "range";
s3Control.setAttribute("min", "0.0");
s3Control.setAttribute("max", "300.0");
s3Control.setAttribute("step", "0.5");
s3Control.setAttribute("value", "2");
var s3Item = appendSineItem(s3Control, "Sine 3", "txts3");
//---SINE4
var s4Control = document.createElement("input");
s4Control.setAttribute("id", "s4Control");
s4Control.className = "sinerange";
s4Control.type = "range";
s4Control.setAttribute("min", "0.0");
s4Control.setAttribute("max", "300.0");
s4Control.setAttribute("step", "0.5");
s4Control.setAttribute("value", "1");
var s4Item = appendSineItem(s4Control, "Sine 4", "txts4");
//---SINE5
var s5Control = document.createElement("input");
s5Control.setAttribute("id", "s5Control");
s5Control.className = "sinerange";
s5Control.type = "range";
s5Control.setAttribute("min", "0.0");
s5Control.setAttribute("max", "300.0");
s5Control.setAttribute("step", "0.5");
s5Control.setAttribute("value", "0");
var s5Item = appendSineItem(s5Control, "Sine 5", "txts5");

Sinecontainer.appendChild(s1Item);
Sinecontainer.appendChild(s2Item);
Sinecontainer.appendChild(s3Item);
Sinecontainer.appendChild(s4Item);
Sinecontainer.appendChild(s5Item);
document.body.appendChild(Sinecontainer);



// ---------------- TUNING

//----A frequency
function appendaFreqItem(item, labeltext, textID){
    var aFreqitem = document.createElement("div");
    var aFreqlabel = document.createElement("label");
    aFreqlabel.className = "lblaFreq";
    aFreqlabel.innerHTML = `${labeltext}`;
    var aFreqtextBox = document.createElement("input");
    aFreqtextBox.type = "text";
    aFreqtextBox.className = "txtaFreq";
    aFreqtextBox.setAttribute("id", `${textID}`);
    aFreqitem.className = "aFreqitem";
    aFreqitem.appendChild(aFreqlabel);
    aFreqitem.appendChild(item);
    aFreqitem.appendChild(aFreqtextBox);
    return aFreqitem;
    }

    var aFreqControl = document.createElement("input");
    aFreqControl.setAttribute("id", "aFreqControl");
    aFreqControl.className = "aFreqrange";
    aFreqControl.type = "range";
    aFreqControl.setAttribute("min", "420.0");
    aFreqControl.setAttribute("max", "460.0");
    aFreqControl.setAttribute("step", "0.5");
    aFreqControl.setAttribute("value", "432");
    var aFreqItem = appendaFreqItem(aFreqControl, "A Frequency", "txtaFreq");
document.body.appendChild(aFreqItem);

var aFreqTxt = document.getElementById("txtaFreq");
aFreqTxt.value = aFreqControl.value;
var aFrequency = aFreqControl.value;
//Event listeners
aFreqControl.addEventListener("change", () =>{
    aFreqTxt.value = aFreqControl.value;
    aFrequency = aFreqTxt.value;
})
aFreqControl.addEventListener("mousemove", () =>{
    aFreqTxt.value = aFreqControl.value;
    aFrequency = aFreqTxt.value;
})


//----------------Just Intonation-----------------
var JustIntonationContainer = document.createElement("div");
JustIntonationContainer.className = "justIntContainer";

var notes = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];

var justnoteDropdown = document.createElement("select");
justnoteDropdown.className = "dropdown";
justnoteDropdown.setAttribute("id", `justNoteDropdown`);
notes.forEach((index) => {
   var n = document.createElement("option");
   n.value = index;
   n.innerHTML = index;
   justnoteDropdown.appendChild(n);
});

var lblJustNote = document.createElement("label");
lblJustNote.innerHTML = "Just Intonation!";

JustIntonationContainer.appendChild(lblJustNote);
JustIntonationContainer.appendChild(justnoteDropdown);
document.body.appendChild(JustIntonationContainer);


//----Equal Temperament
var equalTempBtn = document.createElement("button");
equalTempBtn.setAttribute("id", "eqTempBtn");
equalTempBtn.className = "equalTempBtn";
equalTempBtn.innerHTML = "Equal Temperament";
document.body.appendChild(equalTempBtn);

