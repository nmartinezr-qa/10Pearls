class CartPage {
    constructor() {
        console.log('CartPage constructor called');
        this.cartItems = '.cart_item';
        this.checkoutButton = 'button[name="checkout"]';
        this.cartItemCount = '.cart_quantity';
    }

    NavigateToCart() {
        cy.get('.shopping_cart_link').click();
    }

    VerifyCartItems(count) {
        cy.get(this.cartItems).should('have.length', count);
    }

    Checkout() {
        cy.get(this.checkoutButton).click();
    }
}

module.exports = CartPage 