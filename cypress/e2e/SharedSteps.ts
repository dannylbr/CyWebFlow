import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

Given("I navigate to Integræ Solutions homepage", () => {
  cy.visit("/");
});

Then("Elegant text is shown", () => {
  cy.xpath('//*[@id=\"h.3a4bb1d2f4063c83_0\"]/div/div/p/span')
  .should('have.text', 'Elegant.')
});