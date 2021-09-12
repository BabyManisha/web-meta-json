const axios = require('axios');
const cheerio = require('cheerio');

const excludeMetaNames = ['viewport', 'referrer', ];
const excludeLinkNames = ['search', 'preconnect', 'preload', 'stylesheet'];

// Extract the data
ExtractData = (html, url) => {
    const $ = cheerio.load(html);
    var data = {}
    
    data['title'] = $('title').text();

    // Extracting meta content
    $('meta').each((i, md) => {
        let name = $(md).attr('name') || $(md).attr('property');
        if(name && excludeMetaNames.indexOf(name) == -1){
            data[`meta-${name}`] = $(md).attr('content');
        }else if($(md).attr('itemprop') && url){
            data[`meta-itemprop`] = url+$(md).attr('content');
        }
    })

    // Extracting link content
    $('link').each((i, ld) => {
        let name = $(ld).attr('rel');
        if(name && excludeLinkNames.indexOf(name) == -1){
            let size = $(ld).attr('sizes');
            name = size ? `${name}-${size}` : name;
            data[`link-${name}`] = $(ld).attr('href');
        }
    })

    return data;
}

GetData = async (url) => {
    return (
        await axios.get(url)
        .then(response => {
            return ExtractData(response.data, url)
        }).catch(err => {
            console.log(err);
            return {}
        })
    )
}

module.exports = {
    ExtractData: ExtractData,
    GetData: GetData
}