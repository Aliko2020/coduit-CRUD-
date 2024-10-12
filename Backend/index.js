const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const feeds = require('./Model/feeds');
require("dotenv").config()



const app = express()
app.use(express.json())
app.use(cors())

const Port = process.env.PORT || 3001
const url = process.env.DBURL

app.get('/feeds',(req,res)=>{
    feeds.find({}).then((feed)=>{
        res.json(feed)
    }).catch((err)=> console.log(err))
})

//get feed by id
app.get("/feeds/:id", (req, res) => {
    const feedId = req.params.id;

    feeds.findById(feedId)
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



app.post('/feeds/addfeed', async (req, res) => {
    try {
        const newFeed = new feeds(req.body); 
        await newFeed.save(); 
    
        res.status(201).json({ message: 'Feed created successfully!' }); 
      } catch (error) {
        console.error('Error creating feed entry:', error);
        res.status(500).json({ message: 'Error adding feed entry' }); 
      }
});



app.listen(Port,()=>{
    mongoose.connect(url)
    console.log(`Sever running on port: ${Port}`);
})