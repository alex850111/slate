var params=[{aff_id:"1152",adv_sub:"A0149",amount:70,status:"approved",security_token:"c2a32524880"},{aff_id:"1152",adv_sub:"A0188",amount:130,status:"rejected",security_token:"c2a32524880"}],XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;for(var i in params){var requests=new XMLHttpRequest,src="https://shopback.go2cloud.org/aff_c?offer_id=2118",keys=Object.keys(params[i]);for(var j in keys)src+="&"+keys[j]+"="+params[i][keys[j]];requests.open("GET",src,!1),requests.send();var returnValue=requests.responseText}