const express=require('express');
const app=express();
const Routes=require('./routes/routes');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const cors=require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', Routes);

const PORT = process.env.PORT || 5000;
const URL='mongodb+srv://vishwas:vishwas@cluster0.xvugw.mongodb.net/crud?retryWrites=true&w=majority'


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => { 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})


