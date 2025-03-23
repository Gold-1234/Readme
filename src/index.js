import express from "express"
import { marked } from 'marked';
import path from "path";


const app = express()
const PORT = 3000

app.use(express.static('src'))


app.get('/', (req, res) => {
	res.sendFile(path.resolve("./index.html"))
})

app.listen(PORT,() => {
	console.log(`app listening on port ${PORT}`);
	
})