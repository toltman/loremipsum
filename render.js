const fs = require("fs");
const textGen = require("./textGen.js");

function form(res) {
  const index = fs.readFileSync("./index.html", { encoding: "utf8" });
  res.write(index);
}

function lorem(inputs, res) {
  const loremText = textGen.gen(inputs);
  res.write(loremText);
}
module.exports.form = form;
module.exports.lorem = lorem;
