function createLoop(gainNode){

    if(delayCheckbox.checked ==true){
        delay = audioContext.createDelay(11);
        feedback = audioContext.createGain();
        delayGain = audioContext.createGain();
        if(delayList.length == 0)
          delayItem=0;
          else
        delayItem=delayList.length ++;
    
        delayList[delayItem] = [delay, feedback, delayGain];
    
       delayList[delayItem][0].delayTime.value = delayTimeSlider.value;
      delayList[delayItem][1].gain.value = delayFeedbackSlider.value;
      delayList[delayItem][2].gain.value = delayGainSlider.value;
     
      delayList[delayItem][0].connect(delayList[delayItem][1]);
      delayList[delayItem][1].connect(delayList[delayItem][0]);
        
        delayList[delayItem][0].connect( delayList[delayItem][2]);
        gainNode.connect(delayList[delayItem][0]);
        delayList[delayItem][2].connect(mainGainNode)
      
        let dItem = document.createElement("li");
        dItem.value = delayItem;
        dItem.onclick = () => {delayList.pop(delayList[dItem.value]);
        console.log(delayList)}
        dItem.appendChild(document.createTextNode(delayItem));
        console.log(delayList)
    
        createLoopDiv(delayItem);

        let looperUl = document.getElementById("looperList")

        let loopGainSlider = document.getElementById("loopGainSlider"+delayItem)
        loopGainSlider.value = delayList[delayItem][2].gain.value;
        loopGainSlider.oninput=()=>{
            let id = loopGainSlider.id.replace("loopGainSlider", "");
            delayList[id][2].gain.value = loopGainSlider.value
            console.log(id);
        }
     /*    
        let loopTimeSlider = document.getElementById("loopTimeSlider"+delayItem)
        loopTimeSlider.value = delayList[delayItem][0].value;
        loopTimeSlider.oninput=()=>{
            let id= loopTimeSlider.id.replace("loopTimeSlider", "");
            delayList[id][0].delayTime.value = loopTimeSlider.value
            console.log(loopTimeSlider.value)
        }
        */
        let loopDeleteBtn = document.getElementById("looperDelete"+delayItem)
        loopDeleteBtn.onclick =()=>{
            let id = loopDeleteBtn.value;
            delayList[id][0].disconnect();
            delayList[id][1].disconnect();
            delayList[id][2].disconnect();

            looperUl.removeChild(document.getElementById("liLooper"+id))
        }

        let loopMuteBtn = document.getElementById("looperMute" +delayItem)
        loopMuteBtn.onclick=()=>{
            let id = loopMuteBtn.value;
            delayList[id][2].gain.value = 0;
        }
        
      }
}

function createLoopDiv(id){
    let looper = document.createElement("li");
    looper.id="liLooper"+id;
    let looperMuteBtn = document.createElement("button");
    looperMuteBtn.value = id;
    looperMuteBtn.innerHTML = "Mute";
    looperMuteBtn.id = "looperMute" + id; 
    looperMuteBtn.className ="loopMute"
    let looperDeleteBtn = document.createElement("button");
    looperDeleteBtn.innerHTML = "Delete"; 
    looperDeleteBtn.className ="loopDelete"
    looperDeleteBtn.id = "looperDelete" + id;
    looperDeleteBtn.value = id;
    let looperIdLabel = document.createElement("label");
    looperIdLabel.innerHTML = id;

    let loopTime = document.createElement("div");
    loopTime.className = "loopRange"
    let loopTimeLabel = document.createElement("label");
    loopTimeLabel.innerHTML = "TBA"
    let loopTimeSlider = document.createElement("input");
    loopTimeSlider.id = "loopTimeSlider"+id;
    loopTimeSlider.type = "range"; loopTimeSlider.max = 11; loopTimeSlider.min=0.1; loopTimeSlider.step=0.1;
    loopTime.appendChild(loopTimeLabel)
    loopTime.appendChild(loopTimeSlider)

    let loopGain = document.createElement("div")
    loopGain.className = "loopRange"
    let loopGainLabel = document.createElement("label")
    loopGainLabel.innerHTML = "Gain"
    let loopGainSlider = document.createElement("input")
    loopGainSlider.id = "loopGainSlider"+id;
    loopGainSlider.type = "range"; loopGainSlider.min = 0; loopGainSlider.max = 1; loopGainSlider.step = 0.01;
    loopGain.appendChild(loopGainLabel)
    loopGain.appendChild(loopGainSlider)


    looper.appendChild(looperMuteBtn)
    looper.appendChild(looperDeleteBtn)
    looper.appendChild(looperIdLabel)
    looper.appendChild(loopTime)
    looper.appendChild(loopGain)

    let looperUl = document.getElementById("looperList")

    looperUl.appendChild(looper)

}