////to import in node js u use require

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const expressRoute = require('./routes/expense');

dotenv.config()
const app = express();

//routes
app.use('/expenses',expressRoute);


//midware
app.use(express.json());
app.use(cors());

//DB connection
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log('DB connected')
}).catch((err)=>{
    console.log(err);
})

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+process.env.PORT)
})




