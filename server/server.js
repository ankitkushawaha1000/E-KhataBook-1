const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
// import connectDB from './config/db';

const app = express();
app.use(cors())

connectDB();

app.use(express.json({extended: false}))


// app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))



const PORT = process.env.PORT || 4000

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
