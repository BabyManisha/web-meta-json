const WebMetaJson = require('web-meta-json');

WebMetaJson.GetData('https://babymanisha.com').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error)
});