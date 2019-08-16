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
ShopBackCookieSave("utm_source");
