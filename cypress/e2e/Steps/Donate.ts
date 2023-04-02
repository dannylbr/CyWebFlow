import { Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

Then("Donate page is shown", ()=>{
    cy.get('.CGqCRe')
    .should('have.text', 'Donate')
});