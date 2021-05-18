class ResultsPage {
  // Métodos
  getButton() {
    return cy.get(".btn");
  }
  getURL(position) {
    return cy.get("a[class='white-text']").eq(position);
  }

  getCard(name) {
    return cy
      .get("div[class='card-content white-text']")
      .each(($el, index, $list) => {
        const text = $el.text();
        if (text.includes(name)) {
          cy.get("div[class='card-content white-text']")
            .eq(index)
            .invoke("attr", "style", "background-color: #4a148c !important")
            .trigger("chage");
        }
      });
  }
}

export default ResultsPage;
