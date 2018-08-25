function palindrome(str) {

  let onlyCharsReg = /\w/g;
  let charsReg = /[a-zA-Z0-9]/;

  let onlyChars = str.match(onlyCharsReg).filter((elem) => charsReg.test(elem)).map((elem) => elem.toLowerCase());
  
  let reversed = [...onlyChars].reverse();

  return reversed.join("") == onlyChars.join("");
}



console.log(palindrome("eye"));