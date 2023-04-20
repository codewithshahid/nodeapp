const app = require('./app.js');
const path = require('path');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("<h1>Home PageS</h1>")
})
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>")
})

app.get("/register", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname)+'/register.html')
})

app.post("/api/v1/register", (req, res) => {
    res.json({
        Name : req.body.name,
        Email : req.body.email,
        Password : req.body.password,
    })
    
    // res.send(`<h1>Name: ${req.body.name}</h1>`)
})
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>404 Page Not Found</h1>")
})
  

app.listen(process.env.PORT, () => {
    console.log(`Server is Working on Port:${process.env.PORT}`)
})