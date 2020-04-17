const render = require("./render.js");
const queryString = require("querystring");

// Serve a page that takes inputs
function get(req, res) {
  if (req.method.toLowerCase() === "get") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    render.form(res);
    res.end();
  }
}

// Handle POST method
function post(req, res) {
  if (req.method.toLowerCase() === "post") {
    req.on("data", (postBody) => {
      const inputs = queryString.parse(postBody.toString());
      res.writeHead(200, { "Content-Type": "text/html" });
      render.lorem(inputs, res);
      res.end();
    });
  }
}

module.exports.get = get;
module.exports.post = post;
