import { Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

Then("About page is shown", () => {
    cy.get('[id="h\.b1a6f5g30gav"]').first()
        .should('contain', 'About')
});