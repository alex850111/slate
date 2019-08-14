# Order API

This API is used for order data postback. Once the purchase is done and API get called, ShopBack will receive the data and keep it in system for further validation.

### HTTP Request Of Order API

`GET http://shopback.go2cloud.org/aff_lsr`

| Parameter | Description | Necessary | Example |
| --------- | ----------- | :-------: | ------- |
| offer_id | Order API ID in ShopBack. | Y | 1234, 2345 |
| amount | Amount of the order has been madein NTD. | Y | 300, 399, 15900 |
|adv_sub | Order ID of the order has been made. | Y | “A0149”, “003-4370-A2” |
| adv_sub2 | String that refer to specific tier set in ShopBack.(define by merchant) | N |“Electronic”/ 2%</br>“Self-Brand” / 10% |
| adv_sub3 | SKU of the order has been made | N | “HP-0052”, “AC-10033” |
| transaction_id | Hash value for ShopBack to identify each user and give cashback</br>(default to expire after postback) | Y | 10267617e7919a09a12c2a32524880 |

### Response Of Order API

| String | Description |
| ------ | ----------- |
| sucess=true; | Order has created successfully by API call. |
| success=false;</br>err_msg=Invalid Trans. | ID Transaction_id is in wrong format.|
| success=false;</br>err_msg=Request offer #1234 does not match session offer #2345. | This transaction_id wasn’t distributed by your offer.|
| success=false;</br>err_msg=Duplicate recorded with Trans. ID | This transaction_id has already expired.|