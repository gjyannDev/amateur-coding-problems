const objOne = {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: "",
  },
  bathroom: {
    stereo: 220,
    signature: "",
  },
  signature: "",
};

const objTwo = {
  bedroom: {
    bag: 100,
    guitar: 1000,
    signature: "",
  },
  musicroom: {
    piano: 220,
    signature: "",
  },
  signature: "",
};

function signAll(obj, name) {
  for (const prop in obj)
    prop === "signature" ? (obj[prop] = name) : (obj[prop]["signature"] = name);
  
  return obj;
}

console.log(signAll(objOne, "Marky"));
console.log(signAll(objTwo, "Rocky"));
