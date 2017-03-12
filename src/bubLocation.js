var getDXY = [
        /*  0*/ {x: 1.000, y: 0.000},
        /* 15*/ {x: 0.966, y: 0.259},
        /* 30*/ {x: 0.866, y: 0.500},
        /* 45*/ {x: 0.707, y: 0.707},
        /* 60*/ {x: 0.500, y: 0.866},
        /* 75*/ {x: 0.259, y: 0.966},
        /* 90*/ {x: 0.000, y: 1.000},
        /*105*/ {x:-0.259, y: 0.966},
        /*120*/ {x:-0.500, y: 0.866},
        /*135*/ {x:-0.707, y: 0.707},
        /*150*/ {x:-0.866, y: 0.500},
        /*165*/ {x:-0.966, y: 0.259},
        /*180*/ {x:-1.000, y: 0.000},
        /*195*/ {x:-0.966, y:-0.259},
        /*210*/ {x:-0.866, y:-0.500},
        /*225*/ {x:-0.707, y:-0.707},
        /*240*/ {x:-0.500, y:-0.866},
        /*255*/ {x:-0.259, y:-0.966},
        /*270*/ {x: 0.000, y:-1.000},
        /*285*/ {x: 0.259, y:-0.966},
        /*300*/ {x: 0.500, y:-0.866},
        /*315*/ {x: 0.707, y:-0.707},
        /*330*/ {x: 0.866, y:-0.500},
        /*345*/ {x: 0.966, y:-0.259}
];

var bubArr = [];

function findAngle(bubNum){
  // console.log("bubNum/6 = "+((bubNum/6)|0));
  // console.log("bubNum%6 = "+bubNum%6);
  for(var i = 0; i < ((bubNum/6)|0); i++){
    for(var j = 0 + (i%6); j < getDXY.length; j+=4){
      //console.log('j is '+ j);
      bubArr.push(getDXY[j]);
      //console.log("\t" + bubArr[bubArr.length-1].x + "," + bubArr[bubArr.length-1].y);
    }
  }
  if(bubNum%6 !== 0){
    var leftOverNum = ((24 / (bubNum%6))|0);
    for(i = 0; i < (bubNum%6); i++){
      bubArr.push(getDXY[(((bubNum/6)|0))%6+i*leftOverNum]);
    //console.log("\t" + bubArr[bubArr.length-1].x + "," + bubArr[bubArr.length-1].y);
    }
  }
  // console.log(bubArr);
  // console.log(bubArr.length);
  return bubArr;
}
export default findAngle;
