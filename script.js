const myAtoi = s => {
  s = s.trim();
  result = "";
  isPositive = true;
  if (s[0] === "-") isPositive = false;
  if (["-", "+"].includes(s[0])) s = s.slice(1);
  for (i = 0; i < s.length; i++) {
    if (s[i] != +s[i] || s[i] === " ") break;
    if (!result && s[i] === "0") continue;
    result += s[i];
  }
  if (!result) return 0;
  if ((+result | 0) != result) return isPositive ? 2147483647 : -2147483648;
  return isPositive ? +result : -1 * result;
};

console.log(myAtoi(" 00001999900qqq"));
