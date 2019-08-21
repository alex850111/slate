import requests

# approved
params = [{
    "offer_id":"2118", "aff_id":"1152", "adv_sub":"A0149",
    "amount":70, "status":"approved",
    "security_token":"c2a32524880"
},
# rejected
{
    "offer_id":"2118", "aff_id":"1152", "adv_sub":"A0188",
    "amount":130, "status":"rejected",
    "security_token":"c2a32524880"
}]
# send request
src = "https://shopback.go2cloud.org/aff_c"
for itemParam in params:
    r = requests.get(src, params = itemParam)
