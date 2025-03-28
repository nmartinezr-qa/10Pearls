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

        // Se ejecuta todo dentro del then porque el invoke es asincrono
        // asi podemos asignar un valor a components y usarlo en las siguientes lineas
        cy.get('div[id="SIvCob"] a').then(($link) => {
            // Si el link indica que ingles esta disponible quiere decir que el idioma actual es español
            const components = $link.text().includes("English") ? espComponents : engComponents;

            cy.get('input[name="btnK"]').should('have.value', components.search).and('be.visible')

            cy.get('input[name="btnI"]').should('have.value', components.lucky).and('be.visible')

            cy.get('div[id="SIvCob"] a').should('contain', components.availableLanguages).and('be.visible')
        });


        // Cambiamos el idioma
        cy.get('div[id="SIvCob"] a').click()


        // Volvemmos a ejecutar el codigo que asigna el idioma y los componentes
        // se realizan vaalidaciones con el nuevo idioma
        cy.get('div[id="SIvCob"] a').then(($link) => {

            const components = $link.text().includes("English") ? espComponents : engComponents;

            cy.get('input[name="btnK"]').should('have.value', components.search).and('be.visible')

            cy.get('input[name="btnI"]').should('have.value', components.lucky).and('be.visible')

            cy.get('div[id="SIvCob"] a').should('contain', components.availableLanguages).and('be.visible')
        });

    })
})