//--------------ADSR

var txtAttack = document.getElementById("txtAttack");
var txtDecay = document.getElementById("txtDecay");
var txtSustain = document.getElementById("txtSustain");
var txtRelease = document.getElementById("txtRelease");
txtAttack.value = attackControl.value/10;
txtDecay.value = decayControl.value/10;
txtSustain.value = sustainControl.value;
txtRelease.value = releaseControl.value/10;

attackControl.addEventListener("mousemove", () =>{
    attackTime = attackControl.value/10;
    
    txtAttack.value = attackTime;
})
decayControl.addEventListener("mousemove", ()=>{
    decayTime = decayControl.value/10;
    
    txtDecay.value = decayTime;
})
sustainControl.addEventListener("mousemove", ()=>{
    sLevel = sustainControl.value;
    
    txtSustain.value = sLevel;
})
releaseControl.addEventListener("mousemove", ()=>{
    releaseTime = releaseControl.value/10;
    txtRelease.value = releaseTime;
})

attackControl.addEventListener("click", () =>{
    attackTime = attackControl.value/10;
    
    txtAttack.value = attackTime;
    console.log(attackControl.value);
})
decayControl.addEventListener("click", ()=>{
    decayTime = decayControl.value/10;
    
    txtDecay.value = decayTime;
})
sustainControl.addEventListener("click", ()=>{
    sLevel = sustainControl.value;
    
    txtSustain.value = sLevel;
})
releaseControl.addEventListener("click", ()=>{
    releaseTime = releaseControl.value/10;
    txtRelease.value = releaseTime;
})

//------------------

//----------CUSTOM WAVEFORMS

let txtS1 = document.getElementById("txts1");
let txtS2 = document.getElementById("txts2");
let txtS3 = document.getElementById("txts3");
let txtS4 = document.getElementById("txts4");
let txtS5 = document.getElementById("txts5");
txtS1.value = s1Control.value;
txtS2.value = s2Control.value;
txtS3.value = s3Control.value;
txtS4.value = s4Control.value;
txtS5.value = s5Control.value;
s1 = s1Control.value;
s2 = s2Control.value;
s3 = s3Control.value;
s4 = s4Control.value;
s5 = s5Control.value;

s1Control.addEventListener("mousemove", ()=>{
    txtS1.value = s1Control.value;
    s1 = s1Control.value;
})
s2Control.addEventListener("mousemove", ()=>{
    txtS2.value = s2Control.value;
    s2 = s2Control.value;
})
s3Control.addEventListener("mousemove", ()=>{
    txtS3.value = s3Control.value;
    s3 = s3Control.value;
})
s4Control.addEventListener("mousemove", ()=>{
    txtS4.value = s4Control.value;
    s4 = s4Control.value;
})
s5Control.addEventListener("mousemove", ()=>{
    txtS5.value = s5Control.value;
    s5 = s5Control.value;
})

s1Control.addEventListener("click", ()=>{
    txtS1.value = s1Control.value;
    s1 = s1Control.value;
})
s2Control.addEventListener("click", ()=>{
    txtS2.value = s2Control.value;
    s2 = s2Control.value;
})
s3Control.addEventListener("click", ()=>{
    txtS3.value = s3Control.value;
    s3 = s3Control.value;
})
s4Control.addEventListener("click", ()=>{
    txtS4.value = s4Control.value;
    s4 = s4Control.value;
})
s5Control.addEventListener("click", ()=>{
    txtS5.value = s5Control.value;
    s5 = s5Control.value;
})