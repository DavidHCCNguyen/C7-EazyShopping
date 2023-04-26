



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
        
        productTitle[i].textContent = data[i].title;
        productPrice[i].textContent = "$" + data[i].price;
        productRating[i].textContent = "Rating: " + data[i].rating.rate + " ⭐️";
        $('img').attr('src', data[i].image);

    }
    });
