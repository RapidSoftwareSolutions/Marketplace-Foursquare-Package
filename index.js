"use strict";

global.PACKAGE_NAME = "Foursquare";

const express       = require('express'),
    bodyParser      = require('body-parser'),
    API             = require('rapi-js-package'),
    fs              = require('fs'),
    lib             = require('./lib'),
    _               = lib.callback;

const PORT          = process.env.PORT || 8080;
const app           = express();

const apiVersion    = new Date().toISOString().slice(0, 10).replace(/-/g,"");

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, (req, res) => { res.send(metadata); });

let mfile = fs.readFileSync('./metadata.json', 'utf-8'),
    cfile = fs.readFileSync('./control.json',  'utf-8');

let metadata = JSON.parse(mfile),
    control  = JSON.parse(cfile);

for(let func in control) {
    let options = {
        parseUri: true,
        hasSkip:  true,
        query:    {},
        //debug:    true
    };

    let {
        method, 
        args,
        url
    } = control[func];

    app.post(`/api/${PACKAGE_NAME}/${func}`, _(function* (req, res) {
        let response;
        let opts = {};
        let r    = {
            callback     : "",
            contextWrites: {}
        };

        req.body.args = lib.clearArgs(req.body.args);

        try {
            for(let arg in args) {
                let argarr      = arg.split('|');
                opts[args[arg] + '|' + argarr[0]] = req.body.args[argarr[1]];
            }

            method == 'GET' ? options.query = opts : options.body = opts;
            options.isRawBody = method == 'POST';
            options.method    = method;

            options.query['v|string'] = apiVersion;

            if(func == 'updateUserPhoto') 
                options.files = [req.body.args['photo']];

            response              = yield new API(url).request(options);
            r.callback            = 'success';
            r.contextWrites['to'] = response;
        } catch(e) {
            console.log(e);
            r.callback            = 'error';
            r.contextWrites['to'] = e.status_code ? e : { status_code: "API_ERROR", status_msg:  e.message ? e.message : e };
        }

        res.status(200).send(r);
    }))
}

app.listen(PORT);
module.exports = app;