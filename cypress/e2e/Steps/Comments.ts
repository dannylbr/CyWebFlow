import { Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

Then("Comments page is shown", ()=>{
    cy.get('.CGqCRe')
    .should('have.text', 'Comments')
});