const express = require('express')
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')


dotenv.config();

// import Routes
const authRoute = require('./routes/auth');

const ordersRoute = require('./routes/orders')


//middlewares
app.use(cors());

// middleware

app.use(express.json());
    
// Route middleware 
app.use('/api/user' , authRoute )
app.use('/api/orders', ordersRoute)

// connect to db

mongoose.connect(
    process.env.DB_CONNECT ,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true 
    },
    () => console.log('connected to DB!')
)

// server

app.listen( 9000, () => console.log('Server Up and running'))