const express = require("express");
const path = require("path");

const appName = "multiplicatalent-colores";
const expressApplication = express();

expressApplication.use(express.static(`./dist/${appName}`));
expressApplication.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, `./dist/${appName}/index.html`));
});
expressApplication.listen(process.env.PORT || 8080);
