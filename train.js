// //E-TASK: E-Task: Shunday function 
// tuzing, u bitta string argumentni qabul 
// qilib osh stringni teskari qilib return 
// qilsin masalan: getReverse("hello") return 
// qilsin "olleh"

function qaytar(inputString) {
    
    const qaytarilgan = inputString.split('').reverse().join('');
    return qaytarilgan;
  }
  

  const past = qaytar("aziza");
  console.log(past); 
  