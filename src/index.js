const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 3000;

require("./db/conn");
const Register = require("./models/register");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/", (req, res) =>{
    res.render("index");
})

app.post("/register", async(req, res) =>{
    try {
        const registerEmp = new Register({
            fname : req.body.fname,
            email: req.body.email,
            mob: req.body.mob,
            password: req.body.password,
            createdAt: Date.now(),
        })
        const register = await registerEmp.save();
        res.status(201).render("formsub");
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})