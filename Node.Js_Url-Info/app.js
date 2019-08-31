var http = require ('http');
var url = require ('url');

const myUrl_1 = "http://127.0.0.1:8080/test?a=100&b=200";
const myUrl_2 = "https://spiced.academy/program/full-stack-web-development/";

const myUrlObj1 = url.parse(myUrl_1, true);
const myUrlObj2 = url.parse(myUrl_2, true);


function investigateUrl (urlObj){
    var protocol = urlObj.protocol;
    console.log('The protocol is ', protocol);

    var host = urlObj.host;
    console.log('The host is ', host);

    var hostname = urlObj.hostname;
    console.log('The hostname is ', hostname);

    var port = urlObj.port;
    console.log('The port is ', port);

    var pathname = urlObj.pathname;
    console.log('The pathname is ', pathname);

    var query = urlObj.query;
    var keyNames = Object.keys(query);

    if(keyNames.length){
        console.log('The query is ', urlObj.search.toString());
        for(let i = 0; i < keyNames.length; i++){
            console.log("The value of the " + keyNames[i] + " parameter is " + query[keyNames[i]]);
        }
    } else console.log("The query is null.");
}


investigateUrl(myUrlObj1);
investigateUrl(myUrlObj2);
//
// http.createServer((request, response) => {
//     investigateUrl(request);
//     response.end();
// }).listen(8080);
