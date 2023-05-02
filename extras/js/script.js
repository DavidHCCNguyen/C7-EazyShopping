
var addToCartButton = document.querySelectorAll('.button');
var checkoutCart = document.querySelector(".checkout-cart");
var productCartItems = []; 
var cartTotals = document.createElement('p');
var totalEl = document.createElement('strong');

// Obtains data from the Server APi and displaying in JSON format using the specified parameters
let fakeStoreUrl = 'https://fakestoreapi.com/products?limit=18'
fetch(fakeStoreUrl)
    .then(function(response) {
        return response.json()
    })
    .then (function(data) {
        let productTitle = document.querySelectorAll('.product-title');
        let productPrice = document.querySelectorAll('.product-price');
        let productRating = document.querySelectorAll('.product-rating');
        
        
        for (var i = 0; i < data.length; i++) {
        // Loop utilized to display each product's title, price, rating and image to the home page. 
        productTitle[i].textContent = data[i].title;
        productPrice[i].textContent = "$" + data[i].price;
        productRating[i].textContent = "Rating: " + data[i].rating.rate + " ⭐️";
        addToCartButton[i].setAttribute('data-product-name', data[i].title);
        addToCartButton[i].setAttribute('data-product-price', data[i].price);

            for (var j = 0; j < data.length; j++) {
                var productImage = document.getElementsByTagName("img")[j]
                productImage.setAttribute("src", data[j].image);
            }

    }
    });


    addToCartButton.forEach(function(button) {
        button.addEventListener('click', function() {
            var product = {
                name: button.dataset.productName,
                price: button.dataset.productPrice,
            };
            productCartItems.push(product);
            updateCheckoutSummary();
    
        });
    
    });
    
     function updateCheckoutSummary() {
        const cartList = document.querySelector('.checkout-summary-item');
        cartList.innerHTML = '';
        
        productCartItems.forEach(function(item) {
            const li = document.createElement('li');
            const name = document.createElement('p');
            name.textContent = item.name;
            li.appendChild(name);
            const price = document.createElement('p');
            price.textContent = '$' + item.price;
            li.appendChild(price);
            cartList.appendChild(li);
            
            cartList.setAttribute('style', "display:block;");
            price.setAttribute('style', "font-size: 20px;font-family: 'Slabo 27px', serif; position:relative; left:400px; bottom:50px;");
            name.setAttribute('style', "font-size: 20px;font-family: 'Slabo 27px', serif; width: 350px;");
            li.setAttribute('style', "width:fit-content;")
            
        });
        console.log(productCartItems);
        let total = 0.00;
    
        for (var i = 0; i < productCartItems.length; i++) {
    
              total += parseFloat(productCartItems[i].price);
              
            
        }
        
        console.log(total);
        
        
        
        cartTotals.textContent = "$" + total.toFixed(2);
        totalEl.textContent = "Total";
        cartList.appendChild(cartTotals);
        cartList.appendChild(totalEl);
        
        
        cartTotals.setAttribute('style', "font-weight:bold; font-size: 25px;font-family: 'Slabo 27px', serif; position:relative; left:400px;");
        totalEl.setAttribute('style', "font-weight:bold; font-size: 25px;font-family: 'Slabo 27px', serif; position:relative; bottom:50px;");
        checkoutCart.setAttribute('style', 'display:block;');
    
     };
