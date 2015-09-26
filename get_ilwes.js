var http = require('http');

var request = http.request({'hostname': 'www.staging-ilwes.lassila-tikanoja.fi/',
                            'auth': 'naich9ahseixa2aigh3woXaexaibaeshaph2Se5iw8uzeir6tu:juoqu7ohdeelahshohk5Toh8TeeBoyie7iB2iela'
                           }, 
                           function (response) {
                             console.log('STATUS: ' + response.statusCode);
                             console.log('HEADERS: ' + JSON.stringify(response.headers));
                             response.setEncoding('utf8');
                             response.on('data', function (chunk) {
                               console.log('BODY: ' + chunk);
                             });
                           });
request.end();
