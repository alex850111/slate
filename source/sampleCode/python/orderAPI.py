import requests

# item-1
params = {
    "offer_id":"2118", "adv_sub":"A0149", "amount":70,
    "transaction_id":"10267617e7919a09a12",
    "security_token":"c2a32524880"
}
# item-2
params = {
    "offer_id":"2118", "adv_sub":"A0188", "amount":130,
    "transaction_id":"10267617e7919a09a12",
    "security_token":"c2a32524880"
}

src = "https://shopback.go2cloud.org/aff_c"
r = requests.get(src, params = params)
