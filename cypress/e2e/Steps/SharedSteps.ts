import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

Given("I navigate to Integræ Solutions homepage", () => {
  cy.visit("/");
});

When("Click on Projects link", () => {
  cy.get('.K1Ci7d > :nth-child(2) > .PsKE7e > .I35ICb > .aJHbb').click()
});

When("Click on About link", () => {
  cy.get('.K1Ci7d > :nth-child(3) > .PsKE7e > .I35ICb > .aJHbb').click()
});

When("Click on Comments link", () => {
  cy.get('.K1Ci7d > :nth-child(4) > .PsKE7e > .I35ICb > .aJHbb').click()
});

When("Click on Donate link", () => {
  cy.get('.K1Ci7d > :nth-child(5) > .PsKE7e > .I35ICb > .aJHbb').click()
});