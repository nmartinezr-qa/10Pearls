class CheckoutCompletePage {
    constructor() {
        this.thankYouMsg = '.complete-header';
    }

    getThankYouMessage() {
        cy.get(this.thankYouMsg)
    }
}

module.exports = CheckoutCompletePage 