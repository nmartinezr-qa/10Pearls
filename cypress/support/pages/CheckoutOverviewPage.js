class CheckoutOverviewPage {
    constructor() {
        this.checkoutOverviewTitle = '.title'
        this.cartItem = '.cart_item'
        this.totalPrice = '.inventory_item_price'
        this.tax = '.summary_tax_label'
        this.total = '.summary_total_label'
        this.finishButton = '#finish'
    }

    getCartItems() {
        return cy.get(this.cartItem)
    }

    async getItemsValue() {
        let totalPrice = 0;
        cy.get('.inventory_item_price').each(($el) => {
            const price = parseFloat($el.text().replace('$', ''));
            expect(price).to.be.greaterThan(0);
            totalPrice += price;
        })
        return totalPrice
    }

    async getTaxValue() {
        let tax
        cy.get('.summary_tax_label').then(($el) => {
            tax = parseFloat($el.text().replace('Tax: $', ''));
            totalPrice += tax;
        })
        return tax
    }

    async getTotalValue() {
        let total
        cy.get(".summary_total_label").then(($el) => {
            total = parseFloat($el.text().replace('Total: $', ''));
        })
        return total
    }

    getFinishButton() {
        cy.get(this.finishButton)
    }
}

module.exports = CheckoutOverviewPage