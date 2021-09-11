const axios = require('axios');
const WebMetaJson = require('web-meta-json');

// Example-1 => GetData
WebMetaJson.GetData('https://babymanisha.com').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error)
});

// Example-2 => ExtractData
const url = 'https://www.google.com';
axios.get(url)
.then(response => {
    console.log(WebMetaJson.ExtractData(response.data, url));
}).catch(error => {
    console.log(error);
})

// Example-2.1 => ExtractData
const htmlData = `
<!DOCTYPE html>
<html>
    <head>
        <title>This is Sample Page</title>
    </head>
    <body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

    </body>
</html>
`
console.log(WebMetaJson.ExtractData(htmlData));