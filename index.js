const axios = require('axios');
const cheerio = require('cheerio');

const excludeMetaNames = ['viewport', 'referrer', ];
const excludeLinkNames = ['search', 'preconnect', 'preload', 'stylesheet'];

// Extract the data
const extractData = (html, url) => {
    const $ = cheerio.load(html);
    var data = {}
    
    data['title'] = $('title').text();

    // Extracting meta content
    $('meta').each((i, md) => {
        let name = $(md).attr('name') || $(md).attr('property');
        if(name && excludeMetaNames.indexOf(name) == -1){
            data[`meta-${name}`] = $(md).attr('content');
        }else if($(md).attr('itemprop')){
            data[`meta-itemprop`] = url+$(md).attr('content');
        }
    })

    // Extracting link content
    $('link').each((i, md) => {
        let name = $(md).attr('rel');
        if(name && excludeLinkNames.indexOf(name) == -1){
            let size = $(md).attr('sizes');
            name = size ? `${name}-${size}` : name;
            data[`link-${name}`] = $(md).attr('href');
        }
    })

    return data;
}

module.exports.GetData = async (url) => {
    return (
        await axios.get(url)
        .then(response => {
            return extractData(response.data, url)
        }).catch(err => {
            console.log(err);
        })
    )
}