import { Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

Then("Elegant text is shown", () => {
    cy.xpath('//*[@id=\"h.3a4bb1d2f4063c83_0\"]/div/div/p/span')
    .should('have.text', 'Elegant.')
  });