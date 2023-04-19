import {app} from "./app.js";


app.get("/", (req, res) => {
    res.send("<h1>Home PageS</h1>")
})
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>")
})

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>404 Page Not Found</h1>")
})
  

app.listen(process.env.PORT, () => {
    console.log(`Server is Working on Port:${process.env.PORT}`)
})