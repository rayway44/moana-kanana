const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config();

const app = express()
const port = 5000

app.use(express.json());
app.use(cors())

const user = process.env.MOANA_DB_USER
const password = process.env.MOANA_DB_PASSWORD
const database02 = process.env.MOANA_DB_DATABASE

const uriRay = `mongodb+srv://${user}:${password}@cluster0.rw4si.mongodb.net/${database02}?retryWrites=true&w=majority`

        // Create connection to MongoDB
        mongoose.connect(uriRay, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })  

        // Checking connection to MongoDB
        mongoose.connection.on('connected', ()=>{
            console.log('you are connected MONGO server')
        })

        // Creating the SCHEMA
        const moanaCms = new mongoose.Schema({
            editor:{
                type: String,
                required: true,
            },
            contents:{
                type: String,
                required: true,
            }

        })
        
        // Creating a MOANA MODEL if one is not there
        const moana = mongoose.model('moanacms', moanaCms)

// READING WHO WE ARE contents
// READING WHO WE ARE contents
app.get('/pullOne', async (req,res) => {

    const id = '62518c9cc571fb641e582f54'
    moana.findById({_id:id})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch(err => { 
        console.log(err)
    })
})

// UPDATING WHO WE ARE contents
// UPDATING WHO WE ARE contents
app.get('/updateOne/:contentOne', async (req,res) => {

    const id = '62518c9cc571fb641e582f54'
        const message = req.params.contentOne
    
        try{
            await moana.findById(id, (err, newContents) => {
                newContents.contents = message;
                newContents.save();
                res.send(`your new message is: ${message}`)
            })
        } catch(e){
            console.log(e)
        }
})

// =====================

// READING COMMUNITY PROJECT - BRIEF CONTENT ONE
// READING COMMUNITY PROJECT - BRIEF CONTENT ONE
app.get('/pullTwo', async (req,res) => {

    const id = '62518d025a55dad2d2942d1b'
    moana.findById({_id:id})
    .then((result) => {
        console.log(`${result.contents}`)
        res.send(result.contents)
    })
    .catch(err => { 
        console.log(err)
    })

})

// UPDATING COMMUNITY BREIF ONE
// UPDATING COMMUNITY BREIF ONE
app.get('/updateTwo/:contentTwo', async (req,res) => {

    const id = '62518d025a55dad2d2942d1b'
        const message = req.params.contentTwo
    
        try{
            await moana.findById(id, (err, newContents) => {
                newContents.contents = message;
                newContents.save();
                res.send(`your new message is: ${message}`)
            })
        } catch(e){
            console.log(e)
        }
})

// =====================

// READING COMMUNITY BRIEF TWO
// READING COMMUNITY BRIEF TWO
app.get('/pullThree', async (req,res) => {

    const id = '62518d5842524e78df57c526'
    moana.findById({_id:id})
    .then((result) => {
        console.log(`${result.contents}`)
        res.send(result.contents)
    })
    .catch(err => { 
        console.log(err)
    })

})

// UPDATING COMMUNITY BREIF TWO
// UPDATING COMMUNITY BREIF TWO
app.get('/updateThree/:contentThree', async (req,res) => {

    const id = '62518d5842524e78df57c526'
        const message = req.params.contentThree
    
        try{
            await moana.findById(id, (err, newContents) => {
                newContents.contents = message;
                newContents.save();
                res.send(`your new message is: ${message}`)
            })
        } catch(e){
            console.log(e)
        }
})

// =====================

// GRAB ALL DOCUMENTS ENDPOINT
// GRAB ALL DOCUMENTS ENDPOINT
app.get('/',(req,res) => {

    // moana.findById({_id:'62515fdaf9477e1167b035c1'})
    moana.find({})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch(err => { 
        console.log(err)
    })

})

// =====================

// Pushing in new DATA to MOANA-CMS
// Pushing in new DATA to MOANA-CMS
app.get('/push', async (req,res) => {

    const newPost = 
    new moana({editor:"test", contents:'third post we on'});

    try{
        await newPost.save();
        res.send('NEW POST created');
    } catch(e){
        console.log(e)
    }

})

// LISTENING TO PORT
// LISTENING TO PORT
app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log(`Server listening on Port ${port}`);
})