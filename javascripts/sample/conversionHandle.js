function getCookie(e){for(var o=e+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){var i=t[r].trim();if(0==i.indexOf(o))return i.substring(o.length)}return""}function createPix(){if("shopback"==getCookie("utm_source"))for(var e,o,t=[{productId:"",price:0,tier:""},{productId:"",price:0,tier:""}],r=0;r<t.length;r++){var i=t[r].productId,c=t[r].tier,u=offer_id+"_"+order_id+"_"+product_id,d=t[r].price,n="https://shopback.go2cloud.org/aff_l?offer_id="+e+"&adv_sub="+o+"&adv_sub2="+c+"&adv_sub3="+i+"&adv_sub4="+u+"&amount="+d+"&security_token="+token;console.log(n+"\n")}}document.cookie="utm_source=shopback; expires="+((new Date).getTime()+2592e6)+"; path=/";var token="";