// approved
var param = {"aff_id":"1152", "adv_sub":"A0149",
            "amount":70, "status":"approved",
            "security_token":"c2a32524880"};
// rejected
var param = {"aff_id":"1152", "adv_sub":"A0188",
            "amount":130, "status":"rejected",
            "security_token":"c2a32524880"};
// send request
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var requests = new XMLHttpRequest();
var src = "https://shopback.go2cloud.org/aff_c?offer_id=2118";
var keys = Object.keys(param);
for(var i in keys)
    src += '&' + keys[i] + '=' + param[keys[i]];
requests.open('GET', src, false);
requests.send();
var returnValue = requests.responseText;