import express from 'express';
import path from 'path';
import {quotes, colors} from './data';

const port = 4000;
const app = express();

// Add headers for CORS
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/data', function(req, res) {
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    let colorIndex = Math.floor(Math.random() * colors.length);
    res.send({quoteData: quotes[quoteIndex], backgroundColor: colors[colorIndex]});
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('listening on port:' + port);
    }
});
