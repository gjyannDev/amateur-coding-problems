function flipEndChars(str) {
  if (typeof str === "string" && str.length > 1) {
    if (
      str.charAt(0).toLowerCase() ===
        str.charAt(str.length - 1).toLowerCase() ||
      str.charAt(0).toUpperCase() === str.charAt(str.length - 1).toUpperCase()
    ) {
      return "Two's a pair.";
    } else {
      let resOne = str.slice(0, 1);
      let resTwo = str.slice(str.length - 1, str.length);

      return str
        .split("")
        .map((el, i) => {
          if (i === 0) {
            return el.toString().replace(resOne, resTwo);
          } else if (i === str.length - 1) {
            return el.toString().replace(resTwo, resOne);
          } else {
            return el;
          }
        })
        .join("");
    }
  } else {
    return "Incompatible.";
  }
}

console.log(flipEndChars("Cat, dog, and mouse."));
console.log(flipEndChars("ada"));
console.log(flipEndChars("z"));
console.log(flipEndChars([1, 2, 3]));
