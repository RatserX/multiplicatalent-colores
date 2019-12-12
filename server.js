const express = require("express");
const path = require("path");

const appName = "multiplicatalent-colores";
const expressApp = express();

expressApp.use(express.static(`./dist/${appName}`));
expressApp.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, `./dist/${appName}/index.html`));
});
expressApp.listen(process.env.PORT || 8080);
