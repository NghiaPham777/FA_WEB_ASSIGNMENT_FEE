const list_mobile = JSON.parse(MOBILE_DATA);

var url_string = window.location.href
var url = new URL(url_string);
var item_code = url.searchParams.get("item_code");


const item = list_mobile.find(element => element.item_code === item_code);

const productDetail = document.querySelector(".product-item-details");

productDetail.querySelector("#product-item-details-image img").src = item.imageLink