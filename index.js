const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = 4000;

const db = require('./db');
const lifeCareRouter = require('./routes/lifecare_route');

app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyparser.json());

db.on('error', console.error.bind(console, "Mongodb connection error"));

app.get('/', (req, res) => {
    res.send('backend with express!');
})

app.use('/api', lifeCareRouter);

app.listen(process.env.PORT || apiPort, () => console.log(`server is running on port ${process.env.PORT || apiPort}`));
