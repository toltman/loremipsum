const fs = require("fs");

function form(res) {
  const index = fs.readFileSync("./index.html", { encoding: "utf8" });
  res.write(index);
}

function lorem(inputs, res) {
  res.write(JSON.stringify(inputs));
}
module.exports.form = form;
module.exports.lorem = lorem;
