



let fakeStoreUrl = 'https://fakestoreapi.com/products/1'
fetch(fakeStoreUrl)
    .then(function(response) {
        return response.json()
    })
    .then (function(data) {
        let productTitle = document.querySelector('.product-title');
        //let ImageEl = document.getElementsByTagName('img');
        let productPrice = document.querySelector('.product-price');
        let productDescription = document.querySelector('.product-description');
        
        productTitle.textContent = data.title;
        //productImage = ImageEl.attr('src', data.image);
        productPrice.textContent = data.price;
        productDescription.textContent = data.description;
    })
