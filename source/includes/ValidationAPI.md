# Validation API
When previous API was called, data will be created on ShopBack with parameter and “pending” status. Therefore, we need to use this API to override data status when order has been validated.

### HTTP Request Of Validation API

`GET http://shopback.go2cloud.org/aff_lsr`

| Parameter | Description | Necessary | Example |
| --------- | ----------- | :-------: | ------- |
| offer_id | Validation API ID in ShopBack. | Y | 3456, 4567 |
| aff_id | ShopBack Taiwan Code(fixed) | Y | 1152 |
| amount | Amount of the order has been madein NTD. | Y | 300, 399, 15900 |
| adv_sub | Order ID of the order has been made. | Y | “A0149”, “003-4370-A2” |
| adv_sub2 | String that refer to specific tier set in ShopBack.(define by merchant) | N | “Electronic”/ 2%</br>“Self-Brand” / 10%|
| adv_sub3 | SKU of the order has been made | N | “HP-0052”, “AC-10033” |
| status | Final validated status on merchant site | Y | approved/rejected |


### Response Of Validation API

| String | Description |
| ------ | ----------- |
| sucess=true; | Order has been updated into approved. |
| success=false; | Order has been updated into rejected. |

### Note

1. Each API has its own offer_id, which won’t be the same.
2. Please make sure the OrderID of **Order** and **Validation API** stay the same.
3. The parameter of **Validation API** will be regarded as confirmed information, which will be used as reference of invoice amount.
4. Once the status is updated by **Validation API**, it cannot be reversed.
5. Notice that every response without additional notes means success. Please **DO NOT** make duplicated call and make sure that there’s only one call for each meaningfulorder information.