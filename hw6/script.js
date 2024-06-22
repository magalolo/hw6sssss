document.getElementById('limit').addEventListener('input', function() {
    const limit = document.getElementById('limit').value;
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then(res => res.json())
      .then(res => {
        const allProducts = document.querySelector('.all_products');
        allProducts.innerHTML = ''; // Clear any existing products
  
        res.forEach(element => {
          const productElement = document.createElement('div');
          productElement.classList.add('all_products_item');
          productElement.innerHTML = `
            <img src="${element.image}">
            <h2>Name: ${element.title}</h2>
            <h2>Price: ${element.price}</h2>
            <button class="addBtn">Добавить в корзину</button>
            <button class="deleteBtn" style="border-color:red;color:red;margin-top:10px">Удалить</button>
          `;
          allProducts.appendChild(productElement);
  
          productElement.addEventListener('click', function() {
            const modalDetails = document.querySelector('.modalDetale');
            modalDetails.innerHTML = `
              <div class="modalItem" data-id="${element.id}">
                <img class="modalImg" src="${element.image}">
                <h2>Name: ${element.title}</h2>
                <h2>Price: ${element.price}</h2>
                <button id="close">x</button>
              </div>
            `;
  
            const modal = document.getElementById('modal');
            modal.style.display = 'block';
  
            const close = document.getElementById('close');
            close.addEventListener('click', function() {
              modal.style.display = 'none';
            });
          });
        });
      });
  });
  