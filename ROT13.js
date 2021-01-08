function rot13(str) {
let newStr = "";

// This for loop will go through each character of the string and determine if it's a letter or not, if it is, then it will shift that letter 13 places. Since it's using ASCII, it determines whether it should add 13 or subtract 13. It starts with A, which is 65 and ends with Z, which is 90. After the shift, it will return it back to the letter.
for(let i = 0; i < str.length; i++){
let hold = str.charCodeAt(i); // convert English char to ASCII
console.log("current " + hold);
if(hold < 77.5 && hold > 64.5){
  hold = hold + 13;
}else if(hold > 77.5 && hold < 90.5){
  hold = hold - 13;
}
newStr+=String.fromCharCode(hold);  // convert ASCII to English char, then add it to newStr
console.log("after " + hold);
}
console.log(newStr);
  return newStr;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
