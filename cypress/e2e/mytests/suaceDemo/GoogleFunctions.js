class GoogleFunctions {
    VisitGoogle() {
        cy.visit('https://www.google.com');
    }

    GetLanguage() {
        return cy.get("html").invoke("attr", "lang").then((lang) => {
            return String(lang);
        });
    }

    SetLanguageAndComponents(lang) {
        let idioma = String(lang);
        let components = idioma.includes("es") ? espComponents : engComponents;

        // Aquí puedes hacer lo que necesites con idioma y components
        console.log("Idioma: ", idioma);
        console.log("Componentes: ", components);

        return { idioma, components };
    }


}

module.exports = new GoogleFunctions()