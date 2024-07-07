document.addEventListener("DOMContentLoaded", () => {
    // Variables globales
    const cartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotalContainer = document.querySelector(".cart-total p");
    const sidebar = document.querySelector(".sidebar");
    const toggleSidebarBtn = document.getElementById("toggleSidebar");
    const navCartLink = document.querySelector("nav ul li a[href='cart.html']");
    let cart = [];
    let isSidebarVisible = false;
  
    // Event listener para el botón de agregar al carrito
    cartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const product = button.getAttribute("data-product");
        const price = parseInt(button.getAttribute("data-price"));
        addToCart(product, price);
      });
    });
  
    // Event listener para el botón de mostrar/ocultar la barra lateral
    toggleSidebarBtn.addEventListener("click", () => {
      isSidebarVisible = !isSidebarVisible;
      if (isSidebarVisible) {
        sidebar.style.right = "0";
        toggleSidebarBtn.textContent = "Cerrar Carrito";
      } else {
        sidebar.style.right = "-250px";
        toggleSidebarBtn.textContent = "Mostrar Carrito";
      }
    });
  
    // Función para agregar un producto al carrito
    function addToCart(product, price) {
      const item = cart.find((i) => i.product === product);
      if (item) {
        item.quantity++;
      } else {
        cart.push({ product, price, quantity: 1 });
      }
      updateCartUI();
    }
  
    // Función para actualizar la interfaz del carrito de compras
    function updateCartUI() {
      cartItemsContainer.innerHTML = "";
      let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
      cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
  
        const itemDetails = document.createElement("div");
        itemDetails.classList.add("cart-item-details");
        itemDetails.innerHTML = `<p>${item.product}</p><p>${item.quantity} x $${item.price}</p>`;
  
        cartItem.appendChild(itemDetails);
        cartItemsContainer.appendChild(cartItem);
      });
  
      cartTotalContainer.textContent = `Total: $${total}`;
      updateCartCount();
    }
  
    // Función para actualizar el contador del carrito en el menú de navegación
    function updateCartCount() {
      const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
      navCartLink.textContent = `Carrito (${cartCount})`;
    }
  });