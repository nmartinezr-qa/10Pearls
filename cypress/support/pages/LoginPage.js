
class LoginPage {
    NavigateToLoginPage() {
        cy.visit('https://www.saucedemo.com/')
    }

    EnterUsername(username) {
        cy.get('[placeholder="Username"]').type(username)
    }

    EnterPassword(password) {
        cy.get('[placeholder="Password"]').type(password)
    }

    ClickLoginButton() {
        cy.contains("input", "Login").click()
    }

}

module.exports = LoginPage 