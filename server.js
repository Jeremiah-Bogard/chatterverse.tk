const express = require("express")
const app = express()

const { createRoom, getRooms } = require("./database")

const PORT = process.env.PORT || 3000

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.render("index.ejs", {
		rooms: getRooms(),
	})
})

app.post("/create-room", (req, res) => {})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
