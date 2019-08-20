# Pixel Implement


``` shell
# 請見 javascript
```

```javascript
function ShopBackCookieSave(name) {
    function ssCalculateExpireDate(days) {
        var d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        d.toUTCString();
        return d;
    }
    function getParams(name) {
        if (name = (new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)")).exec(location.search))
            return decodeURIComponent(name[1]);
    }
    if (getParams(name)) {
        document.cookie = name + "=" + getParams(name) + ";expires= " + ssCalculateExpireDate(30) + "; path=/";
        console.log("save " + name + "cookie successfully");
        return;
    } else {
        console.log("this url doesnt contain" + name + "parameter.");
        return;
    }
}
```

### Referral Handle

content

content

content

content

<aside class="notice"></br></br></br></br></aside>

content

content

### Conversion Handle

```javascript
var token = "";
function createPix() {
  if (getCookie("utm_source") == "shopback") {
    var offerId, orderId; // Necessary
    var items = [{"productId":"", "price":0, "tier":""},
                {"productId":"", "price":0, "tier":""}];
    for (var i = 0; i < items.length; i++) {
      var product = items[i]["productId"], tier = items[i]["tier"]; // Optional
      var conversion_unique_id = offer_id + '_' + order_id + '_' + product_id;
      var amount = items[i]["price"]; // Necessary
      var pix = document.createElement("img");
      var src = "https://shopback.go2cloud.org/aff_l?offer_id=" + offerId + "&adv_sub=" + 
          orderId + "&adv_sub2=" + tier + "&adv_sub3=" + product + "&adv_sub4=" +
          conversion_unique_id + "&amount=" + amount + "&security_token=" + token;
      pix.setAttribute("width", "1");
      pix.setAttribute("height", "1");
      pix.setAttribute("src", decodeURIComponent(src));
      document.body.appendChild(pix);
    }
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0)
      return c.substring(name.length);
  }
  return "";
}
```

###   
</br>
<iframe id="jsemb" src="https://stackblitz.com/edit/js-ye3mfy?embed=1&file=index.html&hidedevtools=0&devtoolsheight=60"></iframe>