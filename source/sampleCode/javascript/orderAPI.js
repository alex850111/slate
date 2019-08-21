// item-1
var params = [{
	"adv_sub":"A0149", "amount":70,
	"transaction_id":"10267617e7919a09a12",
	"security_token":"c2a32524880"
},
// item-2
{
	"adv_sub":"A0188", "amount":130,
	"transaction_id":"10267617e7919a09a12",
	"security_token":"c2a32524880"
}];
// send request
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
for(var i in params){
	var requests = new XMLHttpRequest();
	var src = "https://shopback.go2cloud.org/aff_c?offer_id=2118";
	var keys = Object.keys(params[i]);
	for(var j in keys)
		src += '&' + keys[j] + '=' + params[i][keys[j]];
	requests.open('GET', src, false);
	requests.send();
	var returnValue = requests.responseText;
}