
    document.addEventListener('DOMContentLoaded', () => {
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartTotalContainer = document.querySelector('.cart-total p');
        let totalAmount = 0;

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.getAttribute('data-name');
                const price = parseInt(button.getAttribute('data-price'));
                const image = button.getAttribute('data-image');

                // Crear el elemento del producto para el carrito
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                
                const productImage = document.createElement('img');
                productImage.src = image;
                productImage.alt = name;

                const productInfo = document.createElement('p');
                productInfo.textContent = `${name} - $${price}`;

                cartItem.appendChild(productImage);
                cartItem.appendChild(productInfo);

                // Añadir el producto al carrito
                cartItemsContainer.appendChild(cartItem);

                // Actualizar el total
                totalAmount += price;
                cartTotalContainer.textContent = `Total: $${totalAmount}`;
            });
        });
    });
