const express = require("express");
const notemodel = require("./notemodel");

const app = express();

app.use(express.json());

app.post('/', async ( req, res) => {
 const data =  req.body
 await notemodel.create({
    title: data.title,
    description: data.description
 })
 res.status(201).json({
    message: "note created successfully"
 })
})

module.exports = app;
