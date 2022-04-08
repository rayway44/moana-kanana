const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcrypt')

const port = 8081;
const app = express();
app.use(cors());
app.use(express.json());

//basic api for testing

app.get('/', (req, res) => {
    res.send('<h1>its not working for now</h1>')
})


//mongodb enivroment variables

const mongoDbData = {
    mongoUser: process.env.DB_USER,
    mongoPassword: process.env.DB_PASSWORD,
    mongoCluster: process.env.DB_CLUSTER,
    mongoDatabase: process.env.DB_NAME
}

//calling our schemas from external js files
const Admin = require('./schemas/Admin')
const Abouts = require('./schemas/About')




app.post('/allAboutsData', async (req, res) => {
    Abouts.find({}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})




app.post('/createText', async (req, res) => {

    const text = new Abouts({
        about_text: req.body.text,
        about_id: req.body.id
    })

    await text.save().then(() => console.log(req.body))
    res.send(req.body.text);
})





app.post('/createAdmin', async (req, res) => {
    const email = await req.body.email

    await Admin.findOne({ email: email }, async (err, result) => {
        if (result === null) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const admin = new Admin({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email
            })

            admin.save().then(() => console.log('Admin Created'))
            res.send(admin);
        } else {
            res.send(`${err}An account with this email already exists!`)
        }
    })
})



app.post('/adminLogin', (req, res) => {
    const data = req.body
    const email = data.email
    const password = data.password
    Admin.findOne({ email: email })
        .then(admin => {
            console.log('backend data', data)
            if (admin) {
                bcrypt.compare(password, admin.password, function (err, result) {
                    if (err) {
                        res.send(err)
                    }
                    if (result) {
                        res.send(true)
                        console.log('data sent')
                    } else {
                        res.send('Password does not match!')
                    }
                })
            } else {
                res.send(data)

            }
        })
})








app.post('/updateAboutUsText', (req, res) => {

    let text = req.body.text
    console.log(req.body)
    let document = Abouts.find({})
    let documentText = document.about_text
    Abouts.findOneAndUpdate({ about_text: documentText }, { about_text: text }, { new: true }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("backend text", text)
            res.send(req.body)

        }
    })
})

app.get('/getText', async (req, res) => {
    Abouts.find({},
        (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send(data[0].about_text)
                console.log(data[0].about_text)
            }
        })
})




//connect to our mongoDB with mongoose and env varaibles
mongoose.connect(`mongodb+srv://${mongoDbData.mongoUser}:${mongoDbData.mongoPassword}@${mongoDbData.mongoCluster}.7mzzx.mongodb.net/${mongoDbData.mongoDatabase}?retryWrites=true&w=majority`)


//server port listener
app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log(`Server listening on Port ${port}`);
})