class ProductPage {
    constructor() {
        this.pageTitle = '.app_logo';
        this.addToCartButton = '.btn_primary.btn_inventory';
        this.cartIcon = '.shopping_cart_link';
        this.productDescription = '.inventory_item_description';
        this.productname = '.inventory_item_name';
    }
    // Methods
    getPageTitle() {
        return cy.get(this.pageTitle)
    }

    addToCartIcon(itemName) {
        return cy.get('.inventory_item_description')
            .filter((index, el) => Cypress.$(el).find('.inventory_item_name').text().includes(itemName))
            .contains('button', 'Add to cart')
    }

    getCartIcon() {
        return cy.get(this.cartIcon)
    }


}

module.exports = ProductPage 