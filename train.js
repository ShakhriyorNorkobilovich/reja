//H-task shunday function tuzing, u string qabul qilib teskari qilib return qilsin

function qaytar(inputString) {
    
  const qaytarilgan = inputString.split('').reverse().join('');
  return qaytarilgan;
}


const past = qaytar("shoptoli");
console.log(past); 

