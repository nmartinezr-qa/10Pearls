/// reference types="cypress" />
"use strict";
const googleFunctions = require('./GoogleFunctions.js')

describe('Google Test', () => {
    it('Change Page Language', () => {

        const espComponents = {
            'language': 'Español',
            'search': 'Buscar con Google',
            'lucky': 'Voy a tener suerte',
            'availableLanguages': 'English',
        }

        const engComponents = {
            'language': 'English',
            'search': 'Google Search',
            'lucky': 'I\'m Feeling Lucky',
            'availableLanguages': 'Español',
        }

        googleFunctions.VisitGoogle()

        // Check language and components
        let components = String(cy.get('div[id="SIvCob"] a')).includes("English") ? engComponents : espComponents

        cy.get('input[name="btnK"]').should('have.value', components.search).and('be.visible')

        cy.get('input[name="btnI"]').should('have.value', components.lucky).and('be.visible')

        cy.get('div[id="SIvCob"] a').should('contain', components.availableLanguages).and('be.visible')


        cy.get('div[id="SIvCob"] a').should('be.visible').click()


        components = String(cy.get('div[id="SIvCob"] a')).includes("Español") ? espComponents : engComponents


        cy.get('input[name="btnK"]').should('have.value', components.search).and('be.visible')

        cy.get('input[name="btnI"]').should('have.value', components.lucky).and('be.visible')

        cy.get('div[id="SIvCob"] a').should('contain', components.availableLanguages).and('be.visible')

    })
})