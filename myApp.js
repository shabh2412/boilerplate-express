const env = require("dotenv").config();
let express = require("express");
let app = express();
// console.log("Hello World");
app.use("/public", express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
	// res.send("Hello Express");
	res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/json", (req, res) => {
	let str = "Hello json";
	console.log(process.env.MESSAGE_STYLE);
	if (process.env.MESSAGE_STYLE === "uppercase") {
		str = str.toUpperCase();
	}
	res.json({
		message: str,
	});
});

module.exports = app;
