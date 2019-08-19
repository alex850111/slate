## Use Case Sample

###### Step 1.

We direct the user to sample merchant website with transaction_id and parameter through the link below. 

```bash
curl -X GET 'http://shopback.go2cloud.org/aff_c?offer_id=2118&aff_id=1059'
```

###### Step 2.

Value of transaction_id is `*start with '102', length is 30*`.

```html
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
    <head>
        <title>302 Found</title>
    </head>
    <body>
        <h1>Found</h1>
        <p>The document has moved <a
                href="https://www.google.com/?test_ref=shopback&amp;sbid=1024207abb8d1b675f59803211155f">here</a>.</p>
    </body>
</html>
```

Keep the transaction_id in Session or Database as representation of this user session.

###### Step 3.

When the order has been made, call Order API with transaction_id.

```bash
curl GET 'http://shopback.go2cloud.org/aff_lsr?offer_id=2118&adv_sub=test_A&amount=1&transaction_id=1024207abb8d1b675f59803211155f'
```

If the response goes `*success=true*`, then the order has been successfully created. If the response goes `*success=false*`, then some errors have occurred while calling **Order API**.

Please follow the above chapter for possible reasons that cause errors.

###### Step 4.

When the order has already been validated on the merchant side, can call **Validation API** to update that order into correct status on ShopBack.

```bash
curl GET 'http://shopback.go2cloud.org/aff_lsr?offer_id=9999&aff_id=1152&adv_sub=test_A&amount=1&status=approved'
```

and the meaning of response will be as the same as above chapter description.

<iframe id="jsemb" src="https://stackblitz.com/edit/js-ye3mfy?embed=1&file=index.js&hidedevtools=0&devtoolsheight=60"></iframe>
