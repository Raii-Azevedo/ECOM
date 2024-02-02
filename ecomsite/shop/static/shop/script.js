// Creating The Cart Logic
if(localStorage.getItem('cart')==null){
    var cart = {}; // {} -> Indicates a JSON object
}
else {
    cart = JSON.parse(localStorage.getItem('cart')); // To make sure the items in the 'cart' are the same
}


// Use CLASS to access the Add Cart Button
$(document).on('click', '.atc', function(){
    console.log('The Add Card Button is clicked');

    // Associating the ID of the object to the Cart Button
    var item_id = this.id.toString();
    console.log(item_id);

    // Checking it the item is in the cart --> Saving Items in the cart
    if(cart[item_id]!=undefined){
        cart[item_id] = cart[item_id] + 1;
    }
    else{
        cart[item_id] = 1;
    }
    console.log(cart);
    // Saving items in the cart
    localStorage.setItem('cart',JSON.stringify(cart));
});


