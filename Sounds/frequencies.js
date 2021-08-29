
//------- EQUAL TEMPERAMENT
  function getEqualScale(octaves, a){
      
    let eqScale = [];
    eqScale[0] = [];
    
    a = a * 0.0625;
      eqScale[0][9] = a;
      eqScale[0][10] = a * 1.059463; //Bb
      eqScale[0][11] = a * 1.122462;  //B
      let j;
    for (let i = 1; i<octaves;i++){
        eqScale[i] = [];
        eqScale[i][0] = a * 1.189207; //C
        eqScale[i][1] = a * 1.259921; //C#
        eqScale[i][2] = a * 1.33484; //D
        eqScale[i][3] = a * 1.414214; //Eb
        eqScale[i][4] = a * 1.498307; //E
        eqScale[i][5] = a * 1.587401; //F
        eqScale[i][6] = a  * 1.681793; //F#
        eqScale[i][7] = a * 1.781797; //G
        eqScale[i][8] = a * 1.887749; //Ab
        a = a * 2;
        eqScale[i][9] = a; //A
        eqScale[i][10] = a * 1.059463; //Bb
        eqScale[i][11] = a * 1.122462; //B
    }
    j = octaves +1;
    eqScale[j] = [];
    eqScale[j][0] =  a * 1.189207; //C;

    return eqScale;
}


//----------JUST INTONATION
function getJustScale(a,octaves, fundamentalNote) {
  let aCache = a;
  // -1 Octave
  a = a * 0.03125;
  
  let bb = a * 1.0625;
  let b = a * 1.125;
  let c = a * 1.1875;
  let db = a * 1.25;
  let divThree = a/3;
  let d = a + divThree;
  let divTwelve = a/12;
  let eb = divTwelve * 17;
  let e = a * 1.5;
  let f = a * 1.6;
  let gb = divThree * 5;
  let divNine = a/9;
  let g = divNine * 16;
  let ab = a * 1.9;


  //https://www.sfu.ca/sonic-studio-webdav/handbook/Just_Tuning.html
  var fundamental = 0;
  var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
  var tones = [t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];
  var ratios = [1,  
    (1/15) * 16,
     (1/8) * 9, 
     (1/5) * 6,
      (1/4) * 5, 
      (1/3) * 4, 
   (1/32) * 45,
 (1/2) * 3, 
 (1/5) * 8, 
 (1/3) * 5,
  (1/5) * 9, 
  (1/8) * 15];

 
  let j = 0;
  if(fundamentalNote == "C"){
      fundamental = c;
      j = 0;
  }
  else if(fundamentalNote == "Db"){
    fundamental = db;
    j = 11;
  }
  else if(fundamentalNote == "D"){
    fundamental = d;
    j = 10;
  }
  else if(fundamentalNote == "Eb"){
    fundamental = eb;
    j = 9;
  }
  else if(fundamentalNote == "E"){
    fundamental = e;
    j = 8;
  }
  else if(fundamentalNote == "F"){
    fundamental = f;
    j = 7;
  }
  else if(fundamentalNote == "Gb"){
    fundamental = gb;
    j = 6;
  }
  else if(fundamentalNote == "G"){
    fundamental = g;
    j = 5;
  }
  else if(fundamentalNote == "Ab"){
    fundamental = ab;
    j = 4;
  }
  else if(fundamentalNote == "A"){
    fundamental = a *2;
    j = 3;
  }
  else if(fundamentalNote == "Bb"){
    fundamental = bb;
    j = 2;
  }
  else if(fundamentalNote == "B"){
    fundamental = b;
    j = 1;
  }
  for(let i = 0; i <= 11; i++){
    tones[i] = ratios[j];
    j++
    if(j > 11)
    j=0;
  }


  var justScale = [];
  justScale[0] = [];
      justScale[0][9] = fundamental * tones[9];;   //A
      justScale[0][10] = fundamental * tones[10];  //Bb
      justScale[0][11] = fundamental * tones[11];  //B
  for (i = 1; i < octaves; i++){
    justScale[i] = [];
        if(fundamentalNote == "C"){
          fundamental = fundamental * 2;
        } else{}
          justScale[i][0] = fundamental * tones[0] ;   //C

          if(fundamentalNote == "Db"){
            fundamental = fundamental * 2;
          }else{}
          justScale[i][1] = fundamental * tones[1];    //Db

          if(fundamentalNote == "D"){   
            fundamental = fundamental * 2;
          }else{}
          justScale[i][2]= fundamental * tones[2];      //D

          if(fundamentalNote == "Eb"){   
            fundamental = fundamental * 2;
          }else{}
          justScale[i][3] = fundamental * tones[3];     //Eb

          if(fundamentalNote == "E"){   
            fundamental = fundamental * 2;
          }else{}
          justScale[i][4] = fundamental * tones[4];     //E

          if(fundamentalNote == "F"){   
            fundamental = fundamental * 2;
          }else{}
          justScale[i][5]= fundamental * tones[5];      //F

          if(fundamentalNote == "Gb"){   
            fundamental = fundamental * 2;
          }else{}
          justScale[i][6] = fundamental * tones[6];     //Gb

          if(fundamentalNote == "G"){   
            fundamental = fundamental * 2;
          }else{}
          justScale[i][7] = fundamental * tones[7];      //G

          if(fundamentalNote == "Ab"){   
            fundamental = fundamental * 2;
          }else{}
          justScale[i][8] = fundamental * tones[8];      //Ab

          if(fundamentalNote == "A"){   
            fundamental = fundamental * 2;
          }else{}

          justScale[i][9] = fundamental * tones[9];      //A

          if(fundamentalNote == "Bb"){   
            fundamental = fundamental * 2;
          }else{}
          justScale[i][10] = fundamental * tones[10];    //Bb

          if(fundamentalNote == "B"){   
            fundamental = fundamental * 2;
          }else{}
          justScale[i][11] = fundamental * tones[11];    //B
  
      }
      console.log(justScale[4][9], "BEFORE");
      var tuneCorrection = aCache/(justScale[4][9]);
      console.log(tuneCorrection);
      for(let i = 1; i < justScale.length;i++){
        for(let j = 0; j <= 11;j++){
        justScale[i][j] = justScale[i][j] * tuneCorrection;
        }
      }
      console.log(justScale[4][9], "AFTER");
  return justScale;
}




