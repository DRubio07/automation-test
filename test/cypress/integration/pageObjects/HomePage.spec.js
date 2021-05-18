class HomePage {
  // Métodos
  getEditInput() {
    return cy.get(".validate");
  }
  getButton() {
    return cy.get(".btn");
  }
  getMessage() {
    return cy.get(".helper-text");
  }
}

export default HomePage;
