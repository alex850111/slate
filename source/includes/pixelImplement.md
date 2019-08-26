# Pixel Implement


``` shell
# 請見 javascript
```

```javascript
function ShopBackCookieSave(name) {
  function ssCalculateExpireDate(days) {
    var d = new Date();
    d.setTime(d.getTime() + (days `*` 24 `*` 60 `*` 60 `*` 1000));
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
  } else {
    console.log("this url doesnt contain" + name + "parameter.");
  }
}
```

``` python
# 請見 javascript
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
/**
 * securityToken, offerId, orderId and amount are necessary
 * The others are optional parameters 
 */
var securityToken = "";
function createPix() {
  if (getCookie("utm_source") == "shopback") {
    var offerId, orderId; 
    var items = [{"productId":"", "price":0, "tier":""},
                {"productId":"", "price":0, "tier":""}];
    for (var i = 0; i < items.length; i++) {
      // concatenate parameters after API call url
      var productId = items[i]["productId"], tier = items[i]["tier"]; 
      var conversionUniqueId = offerId + '_' + orderId + '_' + productId; 
      var amount = items[i]["price"]; 
      var src = "https://shopback.go2cloud.org/aff_l?offer_id=" + offerId + "&adv_sub=" + 
      orderId + "&adv_sub2=" + tier + "&adv_sub3=" + productId + "&conversion_unique_id=" +
      conversionUniqueId + "&amount=" + amount + "&security_token=" + securityToken;
      // create pixel 
      var pix = document.createElement("img");
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