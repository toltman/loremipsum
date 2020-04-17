const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function gen(inputs, res) {
  if (inputs.unit === "words") {
    return text.split(" ").slice(0, parseInt(inputs.count)).join(" ");
  }
  if (inputs.unit === "sentences") {
    return text.split(". ").slice(0, parseInt(inputs.count)).join(". ") + ".";
  }
  if (inputs.unit === "paragraphs") {
    let paraText = "\n\n";
    for (let i = 0; i < inputs.count; i++) {
      paraText = text + paraText;
    }
    return paraText;
  } else {
    console.error("Invalid units in request");
  }
}

module.exports.gen = gen;
