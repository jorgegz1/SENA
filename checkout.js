document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const invoiceItemsElement = document.querySelector('.invoice-items');
    const invoiceTotalElement = document.getElementById('invoice-total');
    const confirmCheckoutButton = document.getElementById('confirm-checkout');

    function updateInvoiceItems() {
        invoiceItemsElement.innerHTML = '';
        if (cart.length === 0) {
            invoiceItemsElement.innerHTML = '<p>No hay productos en el carrito.</p>';
        } else {
            cart.forEach(item => {
                const invoiceItem = document.createElement('div');
                invoiceItem.className = 'invoice-item';
                invoiceItem.innerHTML = `
                    <p>${item.name} - $${item.price}</p>
                `;
                invoiceItemsElement.appendChild(invoiceItem);
            });
        }
    }

    function updateInvoiceTotal() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        invoiceTotalElement.textContent = total;
    }

    confirmCheckoutButton.addEventListener('click', function() {
        alert('Compra confirmada. Gracias por su compra.');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });

    updateInvoiceItems();
    updateInvoiceTotal();
});
