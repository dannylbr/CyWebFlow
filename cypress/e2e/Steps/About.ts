import { Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

Then("About page is shown", () => {
    cy.get('.CGqCRe')
        .should('contain', 'About')
});