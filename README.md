## web-meta-json
Package used to get the META data information of any given website(URL) as JSON

*   v1.0.0 - Support only URL as input.
*   v2.0.0 - Support both URL or HTML content as input.


----

### How to use it
1. Install `web-meta-json`
    ```
    npm i web-meta-json --save
    ```

2. Import `web-meta-json`
    ```
    const WebMetaJson = require('web-meta-json');
    ```

3. Call the `GetData` function in `WebMetaJson` and send the URL(example: https://babymanisha.com) as a parameter, which will return promise as output.
    ```
    WebMetaJson.GetData('https://babymanisha.com').then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
    ```

4. #v2.0.0 - Call the `ExtractData` function in `WebMetaJson` and send the raw html data as a first param and URL(example: https://babymanisha.com) as a second parameter (optional), which will return JSON as output.
    ```
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
    ```
*   Refer [this](./example.js) for more examples.
----

### Sample output format
*   Title will shows with `title` keyword
*   All `<meta>` tag contents will be shows with keywords that start with key `meta-`
*   All `<link>` tag contents will be shows with keywords that start with key `link-`

    Example-1: https://babymanisha.com
    ```
    {
        "title":"BabyManisha.Sunkara - Personal Portfolio Template",
        "meta-keywords":"BabyManisha, Profile, Maneesha",
        "meta-description":"BabyManisha\\'s Profile",
        "link-shortcut icon":"images/star.png"
    }
    ```

    Example-2: https://medium.com/@maneeshamanshumahadevsunkara/babymanisha-sunkara-68690a68cba8
    ```
    {
        "title":"“BabyManisha.Sunkara”. Senior Front-End Developer | by BabyManisha. Sunkara | Medium",
        "meta-theme-color":"#000000",
        "meta-twitter:app:name:iphone":"Medium",
        "meta-twitter:app:id:iphone":"828256236",
        "meta-al:ios:app_name":"Medium",
        "meta-al:ios:app_store_id":"828256236",
        "meta-al:android:package":"com.medium.reader",
        "meta-fb:app_id":"542599432471018",
        "meta-og:site_name":"Medium",
        "meta-og:type":"article",
        "meta-article:published_time":"2021-08-12T07:15:03.545Z",
        "meta-title":"“BabyManisha.Sunkara”. Senior Front-End Developer | by BabyManisha. Sunkara | Medium",
        "meta-og:title":"“BabyManisha.Sunkara”",
        "meta-twitter:title":"“BabyManisha.Sunkara”",
        "meta-twitter:site":"@Medium",
        "meta-twitter:app:url:iphone":"medium://p/68690a68cba8",
        "meta-al:android:url":"medium://p/68690a68cba8",
        "meta-al:ios:url":"medium://p/68690a68cba8",
        "meta-al:android:app_name":"Medium",
        "meta-description":"Senior Front-End Developer. ““BabyManisha.Sunkara”” is published by BabyManisha. Sunkara.",
        "meta-og:description":"Senior Front-End Developer",
        "meta-twitter:description":"Senior Front-End Developer",
        "meta-og:url":"https://medium.com/@maneeshamanshumahadevsunkara/babymanisha-sunkara-68690a68cba8",
        "meta-al:web:url":"https://medium.com/@maneeshamanshumahadevsunkara/babymanisha-sunkara-68690a68cba8",
        "meta-og:image":"https://miro.medium.com/max/960/1*8JSHHvur3cyfEly_K0TqgQ.jpeg",
        "meta-twitter:image:src":"https://miro.medium.com/max/960/1*8JSHHvur3cyfEly_K0TqgQ.jpeg",
        "meta-twitter:card":"summary_large_image",
        "meta-article:author":"https://medium.com/@maneeshamanshumahadevsunkara",
        "meta-twitter:creator":"@ManshuMahadev",
        "meta-author":"BabyManisha. Sunkara",
        "meta-robots":"index,follow,max-image-preview:large",
        "meta-twitter:label1":"Reading time",
        "meta-twitter:data1":"2 min read",
        "link-apple-touch-icon-152x152":"https://miro.medium.com/fit/c/152/152/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
        "link-apple-touch-icon-120x120":"https://miro.medium.com/fit/c/120/120/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
        "link-apple-touch-icon-76x76":"https://miro.medium.com/fit/c/76/76/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
        "link-apple-touch-icon-60x60":"https://miro.medium.com/fit/c/60/60/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
        "link-mask-icon":"https://cdn-static-1.medium.com/_/fp/icons/Medium-Avatar-500x500.svg",
        "link-author":"https://medium.com/@maneeshamanshumahadevsunkara",
        "link-canonical":"https://medium.com/@maneeshamanshumahadevsunkara/babymanisha-sunkara-68690a68cba8",
        "link-alternate":"android-app://com.medium.reader/https/medium.com/p/68690a68cba8"
    }
    ```
----

### Total Time of Execution - On an Average 20 ms

| URL                       | URL Load Time | WEB-META-JSON Response Time |
| -----------               | -----------   |-----------                  |
| https://babymanisha.com   | 170 ms        | 200 ms                      |
| https://www.google.com    | 550 ms        | 670 ms                      |
| https://medium.com/@maneeshamanshumahadevsunkara/babymanisha-sunkara-68690a68cba8 | 288 ms | 298 ms |


----
### Pro Tip
It also has the API service refer [this](https://rapidapi.com/babymaneesha/api/web-meta-json/) for more information.


----

Reach babymaneesha@gmail.com, if you need any further assistance on this.

Happy Coding!

--

Thanks

BabyManisha.Sunkara