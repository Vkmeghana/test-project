const express = require("express");


const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(5000, console.log(`Server Started on PORT ${PORT}`));