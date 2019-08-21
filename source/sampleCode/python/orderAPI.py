import requests

# item-1
params = [{
    "offer_id":"2118", "adv_sub":"A0149", "amount":70,
    "transaction_id":"10267617e7919a09a12",
    "security_token":"c2a32524880"
},
# item-2
{
    "offer_id":"2118", "adv_sub":"A0188", "amount":130,
    "transaction_id":"10267617e7919a09a12",
    "security_token":"c2a32524880"
}]
# send request
src = "https://shopback.go2cloud.org/aff_c"
for itemParam in params:
    r = requests.get(src, params = itemParam)
