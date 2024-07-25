const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.port

//MiddleWares
app.use(express.json())
app.use(cors())


const server = () => {
    app.listen(port, ()=> {
        console.log("Listening on port", port);
    })
}



server() 