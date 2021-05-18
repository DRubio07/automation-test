/// <reference types="Cypress" />
import HomePage from "../integration/pageObjects/HomePage.spec";
import ResultsPage from "../integration/pageObjects/ResultsPage.spec";

before(function () {
  cy.visit("http://localhost:3000/shows");
});

describe("Suite Test", function () {
  it("Test Case Search Batman", function () {
    const homePage = new HomePage();
    const resultsPage = new ResultsPage();

    homePage.getEditInput().type("Batman");

    homePage.getButton().click();

    resultsPage.getURL(1).then(function ($link) {
      const href = $link.prop("href");
      cy.request(href)
        .its("body")
        .should("include", "<title>")
        .and("include", "Batman</h1>")
        .and("include", "</html>");
    });

    /*Validación de acceder a otra URL
    cy.get("a[class='white-text']").eq(2).invoke("attr", "href").then((href) => {
        cy.visit(href);
      });
    cy.url().should("include", "https://www.tvmaze.com/shows/975/batman");
    cy.go("back");
    */

    resultsPage.getCard("Batman Unlimited");

    resultsPage.getButton().click();

    homePage.getEditInput().should("have.value", "");
  });
});
