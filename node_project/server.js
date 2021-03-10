'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const db = require('./models');
const dbConfig = require('./config/db.config');
const Role = require('./models/role.model');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        //initialize database with standard roles
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if(err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if(err) {
                    console.log("error", err);
                }
                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if(err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    })
}

app.get('/', (req, res) => {
    //res.status(200).send('login');
    res.json({message: "Welcome to login"});
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
const HOST = "localhost"
app.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`)
});
