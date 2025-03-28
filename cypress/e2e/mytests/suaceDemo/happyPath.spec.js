/// reference types="cypress" />
describe('E2E shopping test', () => {
    beforeEach('Login', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[placeholder="Username"]').type('standard_user');
        cy.get('[placeholder="Password"]').type('secret_sauce');
        cy.contains("input", "Login").click();
    });


    it('Perform Purchase', () => {
        const itemList = ['Bolt T-Shirt', 'Fleece Jacket'];

        // Product Page
        cy.contains('div', "Swag Labs").should('be.visible');
        cy.get('.inventory_item_description')
            .filter((index, el) => Cypress.$(el).find('.inventory_item_name').text().includes(itemList[0]))
            .contains('button', 'Add to cart')
            .click();

        cy.get('.inventory_item_description')
            .filter((index, el) => Cypress.$(el).find('.inventory_item_name').text().includes(itemList[1]))
            .contains('button', 'Add to cart')
            .click();

        // Cart page
        cy.get('.shopping_cart_link').click();
        cy.contains('span', 'Your Cart').should('be.visible');
        cy.get('.cart_item').should('have.length', 2);
        cy.contains('button', 'Checkout').click();

        // Checkout page
        cy.contains('span', 'Checkout: Your Information').should('be.visible');
        cy.get('[placeholder="First Name"]').should("be.visible").type('John');
        cy.get('[placeholder="Last Name"]').should("be.visible").type('Doe');
        cy.get('[placeholder="Zip/Postal Code"]').should("be.visible").type('12345');
        cy.contains('input', 'Continue').click();

        // Checkout overview page
        cy.contains('span', 'Checkout: Overview').should('be.visible');
        cy.get('.cart_item').should('have.length', 2);

        // Verify item names and prices
        let totalPrice = 0;
        cy.get('.inventory_item_price').each(($el) => {
            const price = parseFloat($el.text().replace('$', ''));
            expect(price).to.be.greaterThan(0);
            totalPrice += price;
        })

        // Add tax to total price
        cy.get('.summary_tax_label').then(($el) => {
            const tax = parseFloat($el.text().replace('Tax: $', ''));
            totalPrice += tax;
        })

        // Verify total price including tax
        cy.get(".summary_total_label").then(($el) => {
            const total = parseFloat($el.text().replace('Total: $', ''));
            expect(total).to.equal(totalPrice);
        })

        // Complete purchase
        cy.contains('button', 'Finish').click();

        cy.contains('span', 'Checkout: Complete!').should('be.visible');
        cy.get('.complete-header').should('contain', 'Thank you for your order!');

    });
});