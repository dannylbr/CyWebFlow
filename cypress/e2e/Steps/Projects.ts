import { Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

Then("Projects page is shown", ()=>{
    cy.get('.CGqCRe')
    .should('have.text', 'Projects')
});