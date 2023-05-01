
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
        
            for (var j = 0; j < data.length; j++) {
                var productImage = document.getElementsByTagName("img")[j]
                productImage.setAttribute("src", data[j].image);
            }

    }
    });
