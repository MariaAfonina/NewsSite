"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./entities/index");
const routes_1 = require("./routes");
const bp = require("body-parser");
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bp.json());
(0, routes_1.routes)(app);
index_1.connection.connect().then(() => {
    app.listen(8085, () => {
        console.log('Server is listening at 8085');
    });
}).catch(err => {
    console.error(err);
});
