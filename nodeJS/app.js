/*
   © Copyright 2015 IBM Corp.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

// require packages
var express = require('express');
var bodyParser = require('body-parser');
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); // for parsing application/json

app.all('/*', function (req, res) {

    'use strict';

    // Log all incoming request to stdout
    console.log('-----------------------------------------------------------------');
    var mDate = new Date();
    console.log('date: ' + mDate.getTime() + ' ------ ' + mDate);
    console.log(req.method + ' ' + req.originalUrl);
    console.log('HEADERS:');
    console.log(req.headers);
    console.log('BODY:');
    console.log(JSON.stringify(req.body));
    console.log('-----------------------------------------------------------------');

    res.send('').end();
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, appEnv.bind, function () {
    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});
