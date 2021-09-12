const http = require('http');
const url = require('url');
const WebMetaJson = require('./index.js');

http.createServer(function (req, res) {
    const q = url.parse(req.url, true).query;
    if(q.data){
        let response = WebMetaJson.ExtractData(q.data, q.url)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    }else if(q.url){
        WebMetaJson.GetData(q.url).then(response => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response));
        }).catch(error => {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 'message': 'Something went wrong!'}));
        });
    }else{
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 'message': 'Please provide url (https://babymanisha.com) or data (<html><head><title>Example</title></head><body><h1>Hello World!</h1></body></html>) or both as inputs.' }));
    }
}).listen(9000);