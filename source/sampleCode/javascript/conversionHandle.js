document.cookie = "utm_source=shopback; expires=" + (new Date().getTime() + 2592000000) + "; path=/";
/* 為求測試方便直接寫入 cookie ， 根據 redirect url
 * 寫入正確 cookie 請參閱 Referral Handle 
 */

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

/* 請修改以下各變數值並於 console 中執行 createPix()
 * console 中將會顯示產生出的 url 
 * 實際 pixel tracking 請見右側 code block
 */
function createPix() {
    var token = "";
    if (getCookie("utm_source") == "shopback") {
        var offerId, orderId; // Necessary
        var items = [{ "productId": "", "price": 0 , "tier": "" },
                     { "productId": "", "price": 0, "tier": "" }];
        for (var i = 0; i < items.length; i++) {
            var product_id = items[i]["productId"], tier = items[i]["tier"]; // Optional
            var conversion_unique_id = offerId + '_' + orderId + '_' + product_id; //Optional
            var amount = items[i]["price"]; // Necessary
            var src = "https://shopback.go2cloud.org/aff_l?offer_id=" + offerId + "&adv_sub=" + 
                orderId + "&adv_sub2=" + tier + "&adv_sub3=" + product_id + "&conversion_unique_id=" +
                conversion_unique_id + "&amount=" + amount + "&security_token=" + token;
            console.log(src + "\n");
        }
    }
}
