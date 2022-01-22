const list_mobile = JSON.parse(MOBILE_DATA);
console.log(localStorage.getItem("cart"));
cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

list_mobile.forEach(element => {
    const item = document.getElementById(element.item_code)
    item.querySelector(".product-name").innerHTML = element.name
    item.querySelector(".product-image").src = element.imageLink
    item.querySelector(".product-description").innerHTML = element.description
    item.querySelector(".product-price").innerHTML = element.price + "USD"
    item.querySelector(".product-quantity-stock").innerHTML = element.quantity_stock + "units in stock"
    item.querySelector(".btn-details").addEventListener("click", function() { window.location = "/details.html?item_code=" + element.item_code })
    item.querySelector(".btn-order-now").addEventListener("click", function() {
        var found = cart.find(value => value.code === element.item_code);
        if (found !== undefined) {
            const item_add = {
                code: element.item_code,
                quantity: cart.find(value => value.code === element.item_code).quantity + 1
            }

            const item_remove_index = cart.indexOf(cart.find(value => value.code === element.item_code));

            cart.push(item_add);
            cart.splice(item_remove_index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(localStorage.getItem("cart"))
        } else if (found === undefined) {
            const item_add = {
                code: element.item_code,
                quantity: cart.filter(function(item) {
                    return item.code === element.item_code
                }).length + 1
            }
            cart.push(item_add);
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(localStorage.getItem("cart"))
        }

        console.log(cart)
    })
});



function onClickViewCart() {

    window.location = "/cart.html"
}