const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || require("/etc/secret/.env").PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

app.listen(PORT, () => {
    console.log("Servidor rodando na porta: " + PORT);
})