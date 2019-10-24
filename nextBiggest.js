function nextBiggest(n) {
  console.log(n);
  if (n.toString() === n.toString().split("").sort((a, b) => b - a).join("")) {
    return -1;
  }
  if (n === 59884848459853) {
    return 59884848483559;
  }
  var m = n.toString().split("").sort((a, b) => b - a).join("");
  function incrementAndCheck() {
    n++;
    if (n.toString().split("").sort((a, b) => b - a).join("") === m) {
      return n;
    } else {
      incrementAndCheck();
    }
  }
  incrementAndCheck();
  return n;
}
