function findAndRemove(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = {}
    for ( const [k, v] of Object.entries(obj[key])) {
      (!Number.isNaN(Number(v))) ? acc[key][k] = Number(v) : null
    }
    return acc
  }, {})
}

console.log(
  findAndRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "vet",
      travel: "world",
    },
  })
);
console.log(
  findAndRemove({
    kitchen: {
      ["gold spoons"]: "900",
      piano: "550",
      notes: "ga0r76ba22g4e",
    },
    cellar: {
      reminder: "dog",
      bottle: "750",
    },
  })
);
