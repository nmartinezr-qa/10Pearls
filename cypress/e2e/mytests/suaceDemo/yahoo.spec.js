///reference types="cypress" />

describe('Yahoo Search Test', () => {
    it('Search for 10Pearls', () => {
        // Visit Yahoo
        cy.visit('https://www.yahoo.com')

        // Type in the search box and hit Enter
        cy.get('input[name="p"]').should('be.visible').type('10Pearls{enter}')


    })
})