const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors")
require("dotenv").config()
const Feed = require('./Model/FeedsModel')

const app = express()
app.use(express.json())
app.use(cors())

const Port = process.env.PORT || 3001
const url = process.env.DBURL

app.get('/feeds',(req,res)=>{
    Feed.find({}).then((van)=>{
        res.json(van)
    }).catch((err)=> console.log(err))
})
//get feed by id
app.get("/feeds/:id", (req, res) => {
    const feedId = req.params.id;

    Feed.findById(feedId)
        .then((feed) => {
            if (!feed) {
                // Handles case where van with the given ID is not found
                res.status(404).json({ message: "feed not found" });
            } else {
                res.json(feed); 
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: "Error fetching feed details" });
        });
});

// add a feed
app.post('/feeds/addfeed',async (req,res)=>{
    try {
        const feed = await Feed.create(req.body)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(Port,()=>{
    mongoose.connect(url)
    console.log(`Sever running on port: ${Port}`);
})