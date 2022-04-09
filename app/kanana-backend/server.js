const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')   

const app = express()
const port = 5000

app.use(express.json());
app.use(cors())

const user = 'admin-ray'
const password = 'raystu123'
const database02 = 'moana-cms'

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

        // Creating the schema
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

const moana = mongoose.model('moanacms', moanaCms)


// UPDATING from FRONT to BACKEND
// UPDATING from FRONT to BACKEND
// UPDATING from FRONT to BACKEND
// UPDATING from FRONT to BACKEND
app.get('/test/:content', async (req,res) => {
    
        const id = '62515fdaf9477e1167b035c1'
        const message = req.params.content
    
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

// ===========

// READING COMMUNITY PROJECT - BRIEF CONTENT ONE
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

// Pushing in new DATA to DOCUMENT
// Pushing in new DATA to DOCUMENT
// Pushing in new DATA to DOCUMENT
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

app.get('/find',(req,res) => {

    moana.find({editor: 'test'}).updateOne( {$set: {editor: 'test'}})
    .then((result) => {
        // console.log('hitting ray')
        res.send(result)
    })
    .catch(err => { 
        console.log(err)
    })
})


// making an UPDATE =========
// making an UPDATE =========
// making an UPDATE =========
app.get('/update', async (req,res) => {

    const id = '62515fdaf9477e1167b035c1'
    const message = 'chanegd by ray and working'

    try{
        await moana.findById(id, (err, newContents) => {
            newContents.contents = message;
            newContents.save();
            res.send('POST UPDATED')
        })
    } catch(e){
        console.log(e)
    }

})

app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log(`Server listening on Port ${port}`);
})