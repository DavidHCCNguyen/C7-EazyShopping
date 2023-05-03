var addToCartButton = document.querySelectorAll(".button");
var checkoutCart = document.querySelector(".checkout-cart");
var productCartItems = [];
var cartTotals = document.createElement("p");
var totalEl = document.createElement("strong");

// Obtains data from the Server APi and displaying in JSON format using the specified parameters
let fakeStoreUrl = "https://fakestoreapi.com/products?limit=18";
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
      // Load data from local storage
      const storedItems = JSON.parse(localStorage.getItem('productCartItems'));
      if (storedItems && storedItems.length > 0) {
        // Append the new product to the existing array
        productCartItems = storedItems;
        productCartItems.push(product);
      } else {
        // Create a new array with the new product
        productCartItems = [product];
      }
      localStorage.setItem('productCartItems', JSON.stringify(productCartItems)); // Save the updated array to local storage
      updateCheckoutSummary();
    });
  });
  
  
  function updateCheckoutSummary() {
    const cartList = document.querySelector('.checkout-summary-item');
    cartList.innerHTML = '';
  
    // Load data from local storage
    const storedItems = JSON.parse(localStorage.getItem('productCartItems'));
    if (storedItems && storedItems.length > 0) {
      productCartItems = storedItems;
    }
  
    productCartItems.forEach(function(item, index) {
      const li = document.createElement('li');
      const name = document.createElement('p');
      name.textContent = item.name;
      li.appendChild(name);
      const price = document.createElement('p');
      price.textContent = '$' + item.price;
      li.appendChild(price);
  
      // Create a remove button for each item
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', function() {
        productCartItems.splice(index, 1); // Remove the item from the productCartItems array
        localStorage.setItem('productCartItems', JSON.stringify(productCartItems)); // Save the updated array to local storage
        updateCheckoutSummary(); // Update the checkout summary display
      });
      li.appendChild(removeBtn);
  
      cartList.appendChild(li);
  
      cartList.setAttribute('style', "display:block;");
      price.setAttribute('style', "font-size: 20px;font-family: 'Slabo 27px', serif; position:relative; left:350px; bottom:50px;");
      name.setAttribute('style', "font-size: 20px;font-family: 'Slabo 27px', serif; width: 350px;");
      li.setAttribute('style', "width:fit-content;")
      removeBtn.setAttribute('style', 
      "background-color: #1779ba; border: none; color: white; padding: 5px 15px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;");
    });
  
    let total = 0.00;
  
    for (var i = 0; i < productCartItems.length; i++) {
      total += parseFloat(productCartItems[i].price);
    }
  
    cartTotals.textContent = "$" + total.toFixed(2);
    totalEl.textContent = "Total";
    cartList.appendChild(cartTotals);
    cartList.appendChild(totalEl);
  
    cartTotals.setAttribute('style', "font-weight:bold; font-size: 25px;font-family: 'Slabo 27px', serif; position:relative; left:350px;");
    totalEl.setAttribute('style', "font-weight:bold; font-size: 25px;font-family: 'Slabo 27px', serif; position:relative; bottom:50px;");
    checkoutCart.setAttribute('style', 'display:block;');
  };



     $( function() {
        $( "#message" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        $( "#opener" ).on( "click", function() {
          $( "#message" ).dialog( "open" );
        });
      } );