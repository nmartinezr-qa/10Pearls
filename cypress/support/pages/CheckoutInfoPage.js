class CheckoutInfoPage {
    constructor() {
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.postalCodeInput = '#postal-code';
        this.continueButton = '#continue';
    }

    EnterUserInfo(firstName, lastName, postalCode) {
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.postalCodeInput).type(postalCode);
    }

    Continue() {
        cy.get(this.continueButton).click();
    }

}

module.exports = CheckoutInfoPage;