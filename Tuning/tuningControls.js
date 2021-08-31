

let justTuningButtonsUl = document.getElementById("justTuningButtons");
let justTuningButtonsList = [];
let justTuningButton = justTuningButtonsUl.firstElementChild;

for(i=0; i<justTuningButtonsUl.childElementCount;i++){
    justTuningButtonsList[i] = justTuningButton;
    justTuningButton.firstChild.addEventListener("mousedown", makeButtonActive, false)
   
    justTuningButton = justTuningButton.nextElementSibling;
    
}


let equalIntonationBtn = document.getElementById("btnEqualIntonation");
equalIntonationBtn.addEventListener("mousedown", makeButtonActive, false);

function makeButtonActive(event){
    let clickedButton = event.currentTarget;
    for(i=0;i<justTuningButtonsList.length;i++)
        justTuningButtonsList[i].firstElementChild.style.backgroundColor = "transparent";
    
    equalIntonationBtn.style.backgroundColor = "transparent";
  
    clickedButton.style.backgroundColor ="#ff914dd0";

    let aValue = aFrequencySlider.value;

    if(clickedButton.value=="btnEqual")
    scale = getEqualScale(10,aValue);
    else
    scale = getJustScale(aValue,10,clickedButton.value);
    //scale = getJustScale(aValue, 10, "C")
    tuneKeyboard(scale);
}

