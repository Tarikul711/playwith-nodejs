const express = require("express")



const app = express()

app.get("/", (req, res, next) => {
    res.json({
        "message": "hello world"
    })
})

// server config 
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running now  ${PORT}`)
})