const express = require("express");
const app = express();
const path = require("path");
const instaData = require("./data.json"); // JSON file ek baar hi load hoga

let port = 3000;
app.use(express.static(path.join(__dirname,"/Public")));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const data = instaData[username];

    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.send("<h1>User not found! 😢</h1>");
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
