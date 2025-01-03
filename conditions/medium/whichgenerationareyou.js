function generation(x, y) {
  const ancestor = [
    {
      maleAncestorOne: "father",
      maleAncestorTwo: "grandfather",
      maleAncestorThree: "great grandfather",
    },

    {
      femaleAncestorOne: "mother",
      femaleAncestorTwo: "grandmother",
      femaleAncestorThree: "great grandmother",
    },
  ];

  const descendant = [
    {
      maleDescendantOne: "son",
      maleDescendantTwo: "grandson",
      maleDescendantThree: "great grandson",
    },

    {
      femaleDescendantOne: "daughter",
      femaleDescendantTwo: "granddaughter",
      femaleDescendantThree: "great granddaughter",
    },
  ];

  if (y == "f") {
    if (x > 0) {
      return x === 1
        ? descendant[1].femaleDescendantOne
        : x === 2
        ? descendant[1].femaleDescendantTwo
        : x === 3
        ? descendant[1].femaleDescendantThree
        : "me!";
    } else {
      return x === -1
        ? ancestor[1].femaleAncestorOne
        : x === -2
        ? ancestor[1].femaleAncestorTwo
        : x === -3
        ? ancestor[1].femaleAncestorThree
        : "me!";
    }
  } else if (y == "m") {
    if (x > 0) {
      return x === 1
        ? descendant[0].maleDescendantOne
        : x === 2
        ? descendant[0].maleDescendantTwo
        : x === 3
        ? descendant[0].maleDescendantThree
        : "me!";
    } else {
      return x === -1
        ? ancestor[0].maleAncestorOne
        : x === -2
        ? ancestor[0].maleAncestorTwo
        : x === -3
        ? ancestor[0].maleAncestorThree
        : "me!";
    }
  } else {
    console.error("Invalid Character it must be (f/m)");
  }
}