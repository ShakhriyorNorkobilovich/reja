// -Task: findDoublers function tuzing, unga faqat bitta string argument pass bolib, 
// agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// masalan: getReverse("hello") return true return qiladi
  

function findDoublers(nimadrBor) {
  
  const hisoblash = {};
  for (const bukv of nimadrBor) {
    if (hisoblash[bukv]) {
      return true;
    }
    hisoblash[bukv] = 1;
  } return false;
}


const hasDoublers = findDoublers("piytpildiq");
console.log(hasDoublers); 

