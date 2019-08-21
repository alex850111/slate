var token = "";
function createPix() {
  if (getCookie("utm_source") == "shopback") {
    var offerId, orderId; // Necessary
    var items = [{"productId":"", "price":0, "tier":""},
                {"productId":"", "price":0, "tier":""}];
    for (var i = 0; i < items.length; i++) {
      var product_id = items[i]["productId"], tier = items[i]["tier"]; // Optional
      var conversion_unique_id = offerId + '_' + orderId + '_' + product_id;
      var amount = items[i]["price"]; // Necessary
      var pix = document.createElement("img");
      var src = "https://shopback.go2cloud.org/aff_l?offer_id=" + offerId + "&adv_sub=" + 
          orderId + "&adv_sub2=" + tier + "&adv_sub3=" + product_id + "&adv_sub4=" +
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