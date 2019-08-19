## Use Case Sample

###step 1 

user click from shopback and get redirected to merchant site with parameters that set by above submitting.

https://www.example.com/?test_ref=shopback&sbid=1024207abb8d1b675f59803211155f

###step 2 

```shell
#item-1
curl -X GET "http://shopback.go2cloud.org/aff_lsr"
#item-2
curl -X GET "http://shopback.go2cloud.org/aff_lsr"
```

call order api when the conversion is made

</br></br></br></br>

###step 3 

```shell
#approved
curl -X GET "http://shopback.go2cloud.org/aff_lsr"
#rejected
curl -X GET "http://shopback.go2cloud.org/aff_lsr"
```

call validation api when the status of this conversion has been updated.

</br></br></br></br>

###   
</br>
<iframe id="jsemb" src="https://stackblitz.com/edit/js-ye3mfy?embed=1&file=index.html&hidedevtools=0&devtoolsheight=60"></iframe>