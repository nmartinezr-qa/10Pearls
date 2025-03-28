// <reference types="cypress" />
const LoginPage = require('../../../support/pages/LoginPage.js');
const ProductPage = require('../../../support/pages/ProductPage.js');
const CartPage = require('../../../support/pages/CartPage.js');
const CheckoutPage = require('../../../support/pages/CheckoutInfoPage.js');
const CheckoutOverviewPage = require('../../../support/pages/CheckoutOverviewPage.js');
const CheckoutCompletePage = require('../../../support/pages/CheckoutCompletePage.js');

describe('E2E shopping test', () => {
    beforeEach('Login', () => {
        const loginPage = new LoginPage()
        loginPage.NavigateToLoginPage()
        loginPage.EnterUsername('standard_user')
        loginPage.EnterPassword('secret_sauce')
        loginPage.ClickLoginButton()
    })

    it('Perform Purchase', async () => {
        // Page Object Instances
        const productPage = new ProductPage()
        const cartPage = new CartPage()
        const checkoutPage = new CheckoutPage()
        const checkoutOverviewPage = new CheckoutOverviewPage()
        const checkoutCompletePage = new CheckoutCompletePage()

        // Test Data
        const itemList = ['Bolt T-Shirt', 'Fleece Jacket']

        // Product Page
        productPage.getPageTitle().should('be.visible').and('contain', 'Swag Labs')
        productPage.addToCartIcon(itemList[0]).click()
        productPage.addToCartIcon(itemList[1]).click()
        productPage.getCartIcon().click({ force: true })

        // Cart page
        cartPage.VerifyCartItems(2)
        cartPage.Checkout()

        // Checkout page
        checkoutPage.EnterUserInfo('John', 'Doe', '12345')
        checkoutPage.Continue()

        // Checkout overview page
        checkoutOverviewPage.getCartItems().should('have.length', 2)
        /*
        const itemPrice = await checkoutOverviewPage.getItemsValue()
        const tax = await checkoutOverviewPage.getTaxValue()
        const totalPrice = itemPrice + tax
        const total = await checkoutOverviewPage.getTotalValue()
        expect(total).to.equal(totalPrice)
        */
        checkoutOverviewPage.getFinishButton().click({ force: true })

        // Checkout complete page
        checkoutCompletePage.getThankYouMessage().should('be.visible').and('contain', 'Thank you for your order!')

    })
})