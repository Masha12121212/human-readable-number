module.exports = function toReadable (number) {


    let firstN;
    let secN;
    let thN;
    let numB = number.toString();
    let teen = "";
    
  
    // length
    if (numB.length === 2) {
      firstN = "";
      numB = `0${numB}`;}
    else if (numB.length === 1) {
      firstN = "";
      numB = `00${numB}`;}
     else { numB = numB;}
  
   
         // tens
    
     let nubM = '';
      let nubS = Number(numB[1]);
      switch (nubS){
       case 2:
        nubM = 'twenty';
        break;
      case 3:
        nubM = 'thirty';
        break;
      case 4:
        nubM = 'forty';
        break;
      case 5:
        nubM = 'fifty';
          break;
      case 6:
        nubM = 'sixty';
        break;
      case 7:
        nubM = 'seventy';
        break;
      case 8:
        nubM = 'eighty';
        break;
      case 9:
        nubM = 'ninety';
        break;
      default: nubM = '';
             }
      secN = nubM;
  
    // teen
  
    if (Number(numB[1]) === 1){
      teen = 'teen';}
    else{ teen = '';}
     // lastpart
  
       nubM = '';
      nubS = Number(numB[2]);
      switch (nubS){
       case 2:
        nubM = 'two';
        break;
      case 3:
        nubM = 'three';
        break;
      case 4:
        nubM = 'four';
        break;
      case 5:
        nubM = 'five';
          break;
      case 6:
        nubM = 'six';
        break;
      case 7:
        nubM = 'seven';
        break;
      case 8:
        nubM = 'eight';
        break;
      case 9:
        nubM = 'nine';
        break;
        case 1:
          nubM = 'one';
        break;
      default: nubM = '';
             }
      thN = nubM;
    
    // thousands
  
         let numBB = Number(numB[0]);
    switch (numBB) {
      case 9:
    firstN = 'nine hundred';
        break;
      case 8:
      firstN = 'eight hundred';
         break;
      case 7:
      firstN = 'seven hundred';
         break;
      case 6:
      firstN = 'six hundred' ;
        break;
      case 5:
      firstN = 'five hundred';
        break;
      case 4:
      firstN = 'four hundred';
        break;
      case 3:
      firstN = 'three hundred';
        break;
      case 2:
      firstN = 'two hundred';
         break;
      case 1:
      firstN = 'one hundred';
        break;
      default: firstN = '';
    }
     // 11-12-10
    if (numB.substring(1) === '11'){
      secN = 'eleven';
      thN = "";
    teen = '';}
    else if (numB.substring(1) === '12'){
       secN = 'twelve';
      thN = '';
    teen = '';}
       else if (numB.substring(1) === '10'){
       secN = 'ten';
      thN = '';
       teen = '';}
          else if (numB.substring(1) === '13'){
       secN = 'thirteen';
      thN = '';
          teen = '';}
             else if (numB.substring(1) === '15'){
       secN = 'fifteen';
      thN = '';
             teen = '';}
             else if (numB.substring(1) === '18') {
              secN = 'eighteen';
             thN = '';
                    teen = '';}
  
    let second = Number(numB[1]);
    let first = Number(numB[0]);
    let thirdn = Number(numB[2]);
    if (teen !== ''){
      second = 0;
    }
    if (thN === '') {
      thirdn = 0;
    }
   // 100
    if (second === 0 & thirdn === 0 & first > 0) {
    return firstN ;}
      // 101
    else if (second === 0 & thirdn > 0 & first > 0) {
  return firstN + ' ' + thN + teen;}
      // 001
  else if (second === 0 & first === 0 & thirdn > 0) {
    return thN + teen;
  }
     // 011
  else if (second > 0 & first === 0 & thirdn > 0)  {
    return secN + ' ' + thN + teen;}
    // 010
    else if (second > 0 & first === 0 & thirdn === 0)  {
    return secN;}
      // 110
    else if (second > 0 & first > 0 & thirdn === 0)  {
    return firstN + ' ' + secN;}
      // 111
    else if (second > 1 & first > 0 & thirdn > 0)  {
    return firstN + ' ' + secN + ' ' + thN + teen;}
      else if (second === 1 & first > 0 & thirdn > 0)  {
    return firstN + ' ' + secN + ' ' + thN + teen;}
      // 0
    else if (number === 0)  {
    return 'zero';}
  }