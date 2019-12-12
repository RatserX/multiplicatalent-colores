import express, { static } from "express";
import { join } from "path";

const appName = "multiplicatalent-colores";
const expressApp = express();

expressApp.use(static(`./dist/${appName}`));
expressApp.get("/*", function(req, res) {
    res.sendFile(join(__dirname, `./dist/${appName}/index.html`));
});
expressApp.listen(process.env.PORT || 8080);
