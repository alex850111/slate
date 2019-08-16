function createPix() {
    if (getCookie("utm_source") == "shopback") {
        var offerId, orderId; // Necessary
        var currency = "TWD"; // Optional
        var items = [{ "id": "", "price": 0 , "tier": "" }, { "id": "", "price": 0, "tier": "" }];

        for (var i = 0; i < items.length; i++) {
            var product = items[i]["id"], tier = items[i]["tier"]; // Optional
            var amount = items[i]["price"]; // Necessary

            var pix = document.createElement("img");
            var src = "https://shopback.go2cloud.org/aff_l?offer_id=" + offerId + "&adv_sub=" + 
                orderId + "&adv_sub2=" + tier + "&adv_sub3=" + product + "&adv_sub5=" + 
                currency + "&amount=" + amount;
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