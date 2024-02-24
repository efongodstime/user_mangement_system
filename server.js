const express = require("express");
const path = require("path");
let PORT = 12000;
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let workerRoutes = require("./routes/workerRoutes");

let app = express();

// middleware
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users', workerRoutes); // Mount the user routes

// Connect to MongoDB and automatically add NEW SUPER WORKER into the database
mongoose.connect('mongodb://localhost:27017/workersDb', {
 
})
.then(async () => {
    console.log('Connected to MongoDB');

    // Check if the "master" user exists, if not, insert it
    const User = require('./models/worker');
    const masterUser = {
        ID: '1', // Setting ID as a string
        firstName: "Master",
        lastName: "User",
        email: "masteruser@example.com",
        gebrachtVonLvl1: null,
        supervisor: null,
        lvl2: null,
        lvl3: null,
        superprovBerechtigt: false,
        strasse: "123 Aku road",
        ort: "ENUUG",
        iban: "2002"
    };

    let user = await User.findOneAndUpdate({ ID: '1' }, masterUser, { upsert: true, new: true });
    console.log('Master user Added,master user id is 1, make sure u use 1 at first start.');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
