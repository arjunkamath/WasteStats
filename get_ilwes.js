var request = require('request'),
    username = "yeShatohfai7eikop8bahngo0beifeipi3quu6daewahhah2ae",
    password = "hah5iZ5xohsh2zie3AiThahp5pheighiopoh5cha",
    url = "https://staging-ilwes.lassila-tikanoja.fi/v0/deliveries{?100000133}{?200218179}",
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

request(
    {
        url : url,
        headers : {
            "Authorization" : auth
        }
    },
    function (error, response, body) {
        // Do more stuff with 'body' here
	console.log(body);
	//console.log(response);
	//console.log(error);
    }
);
