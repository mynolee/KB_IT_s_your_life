function leftPad(str, len, ch) {
  str = String(str);
  if (ch === undefined) {
    ch = ' ';
  } else {
    ch = String(ch);
  }
  if (str.length >= len) {
    return str;
  }
  if (str.length < len) {
    const difValue = len - str.length;
    const realStr = str;
    str = '';
    for (let i = 0; i < difValue; i++) {
      str += ch;
    }
    str = str + realStr;
    return str;
  }
}

console.log(leftPad('abc', 5, '*')); //"**abc"
console.log(leftPad('123', 2, '0')); //"123"
console.log(leftPad('7', 4, '0')); //"0007"
console.log(leftPad('hi', 5)); //"     hi"
