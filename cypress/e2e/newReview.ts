describe("New Review", () => {
  beforeEach(() => {
    cy.login();
  });
  it("successfully fills out bottle info", () => {
    cy.visit(`/reviews/new/bottleInfo`);
    cy.get('[aria-label="name-input"]')
      .should("be.visible")
      .type("Lost Monarch")
      .blur();
    cy.getLocalStorage("name").should("equal", "Lost Monarch");

    cy.get('[aria-label="distiller-input"]')
      .should("be.visible")
      .type("Redwood Empire")
      .blur();
    cy.getLocalStorage("distiller").should("equal", "Redwood Empire");

    cy.get('[aria-label="bottler-input"]')
      .should("be.visible")
      .type("Redwood Empire")
      .blur();
    cy.getLocalStorage("bottler").should("equal", "Redwood Empire");
    cy.get('[aria-label="producer-input"]')
      .should("be.visible")
      .type("Redwood Empire")
      .blur();
    cy.getLocalStorage("producer").should("equal", "Redwood Empire");
    cy.get('[aria-label="type-input"]')
      .should("be.visible")
      .type("Bourye")
      .blur();
    cy.getLocalStorage("type").should("equal", "Bourye");
    cy.get('[aria-label="country-input"]')
      .should("be.visible")
      .type("USA")
      .blur();
    cy.getLocalStorage("country").should("equal", "USA");
    cy.get('[aria-label="region-input"]')
      .should("be.visible")
      .type("Kentucky")
      .blur();
    cy.getLocalStorage("region").should("equal", "Kentucky");
    cy.get('[aria-label="price-input"]')
      .should("be.visible")
      .type("$32.99")
      .blur();
    cy.getLocalStorage("price").should("equal", "$32.99");
    cy.get('[aria-label="age-input"]').should("be.visible").type("6yrs").blur();
    cy.getLocalStorage("age").should("equal", "6yrs");
    cy.get('[aria-label="color-input"]')
      .should("be.visible")
      .type("Amber")
      .blur();
    cy.getLocalStorage("color").should("equal", "Amber");
    cy.get('[aria-label="year-input"]')
      .should("be.visible")
      .type("2021")
      .blur();
    cy.getLocalStorage("year").should("equal", "2021");
    cy.get('[aria-label="batch-input"]')
      .should("be.visible")
      .type("N/A")
      .blur();
    cy.getLocalStorage("batch").should("equal", "N/A");
    cy.get('[aria-label="size-input"]')
      .should("be.visible")
      .type("750mL")
      .blur();
    cy.getLocalStorage("size").should("equal", "750mL");
    cy.get('[aria-label="alcoholPercent-input"]')
      .should("be.visible")
      .type("45%")
      .blur();
    cy.getLocalStorage("alcoholPercent").should("equal", "45%");
    cy.get('[aria-label="proof-input"]').should("be.visible").type("90").blur();
    cy.getLocalStorage("proof").should("equal", "90");
    cy.get('[aria-label="finishing-input"]')
      .should("be.visible")
      .type("None")
      .blur();
    cy.getLocalStorage("finishing").should("equal", "None");

    // NEXT BUTTON
    cy.get("#next-button").click();
    // NEW URL -- /reviews/new/addImage
    cy.url().should(
      "equal",
      `${Cypress.config("baseUrl")}/reviews/new/addImage`
    );
  });
  it("Successfully uploads an image and continues", () => {
    cy.visit("/reviews/new/addImage");
    cy.fixture("lostMonarch.png").then((contents) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: contents.toString(),
        fileName: "lostMonarch.png",
        mimeType: "image/png",
      });
    });
    cy.get("#upload-button").click();
    cy.get("#next-button").click();
    cy.url().should(
      "equal",
      `${Cypress.config("baseUrl")}/reviews/new/setting`
    );
  });
  it("Successfully fills out the settings", () => {
    cy.visit(`/reviews/new/setting`);
    cy.get('[aria-label="date-input"]').should("be.visible").type("05/10/2022");
    cy.get('[aria-label="restTime-input"]').should("be.visible").type("10min");
    cy.get('[aria-label="glassware-input"]')
      .should("be.visible")
      .type("Glencairn");
    cy.get('[aria-label="setting-input"]')
      .should("be.visible")
      .type("Writing some e2e tests!");
    cy.get('[aria-label="nose-input"]')
      .should("be.visible")
      .type(
        "Cherry and dill dominate the nose with more rye spice peeking out, as well as some decedent caramel and sweet oak."
      );
    cy.get('[aria-label="palate-input"]')
      .should("be.visible")
      .type(
        "The palate is similar to the nose. Big crashes of cherry, dill, anise, and rye with carroway seeds."
      );
    cy.get('[aria-label="finish-input"]')
      .should("be.visible")
      .type(
        "Medium-long with dominant oak and rye spice continuing from the palate. There's some cherry there too, but its mostly oak, leather, and rye spice."
      );
    cy.get('[aria-label="thoughts-input"]')
      .should("be.visible")
      .type(
        "This is a solid, middle-of-the-pack bourye that doesn't compromise on flavor. Both bourbon and rye notes are present, though the rye notes do dominate the nose, palate, and finish."
      );
    // NEXT BUTTON
    cy.get("#next-button").click();
    // NEW URL -- /reviews/new/notes
    cy.url().should("equal", `${Cypress.config("baseUrl")}/reviews/new/notes`);
  });
  it("Successfully fills out the notes", () => {
    cy.visit(`/reviews/new/notes`);
    cy.get('[aria-label="pepper-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="cinnamon-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="bakingspice-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="herbal-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="mint-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="cherry-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="strawberry-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="raspberry-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="blackberry-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="blueberry-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="apple-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="banana-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="grape-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="stone-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="tropical-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="coffee-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="tobacco-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="leather-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="oak-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="toasted-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="smokey-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="peanut-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="almond-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="pecan-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="walnut-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="oily-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="floral-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="corn-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="rye-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="wheat-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="malt-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="dough-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="vanilla-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="caramel-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="molasses-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="butterscotch-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="honey-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="chocolate-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="toffee-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get('[aria-label="sugar-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="value-input"]').should("be.visible").clear().type("3");
    cy.get('[aria-label="overallRating-input"]')
      .should("be.visible")
      .clear()
      .type("3");
    cy.get("#review-button").click();
    cy.url().should(
      "equal",
      `${Cypress.config("baseUrl")}/reviews/new/confirm`
    );
  });
  it("Submits the review", () => {
    cy.visit(`/reviews/new/confirm`);
    // BOTTLE
    cy.get('[name="name"]').should("be.visible").type("Lost Monarch");
    cy.get('[name="distiller"]').should("be.visible").type("Redwood Empire");
    cy.get('[name="bottler"]').should("be.visible").type("Redwood Empire");
    cy.get('[name="producer"]').should("be.visible").type("Redwood Empire");
    cy.get('[name="type"]').should("be.visible").type("Bourye");
    cy.get('[name="country"]').should("be.visible").type("USA");
    cy.get('[name="region"]').should("be.visible").type("Kentucky");
    cy.get('[name="price"]').should("be.visible").type("$32.99");
    cy.get('[name="age"]').should("be.visible").type("6yrs");
    cy.get('[name="color"]').should("be.visible").type("Amber");
    cy.get('[name="year"]').should("be.visible").type("2021");
    cy.get('[name="batch"]').should("be.visible").type("N/A");
    cy.get('[name="size"]').should("be.visible").type("750mL");
    cy.get('[name="alcoholPercent"]').should("be.visible").type("45%");
    cy.get('[name="proof"]').should("be.visible").type("90");
    cy.get('[name="finishing"]').should("be.visible").type("None");
    cy.get('[name="imageId"]')
      .invoke("show")
      .should("be.visible")
      .type("dedb9eda-f21d-48a0-94e3-533c7c3a29fa");
    // SETTING
    cy.get('[name="date"]').should("be.visible").type("05/10/2022");
    cy.get('[name="restTime"]').should("be.visible").type("10min");
    cy.get('[name="glassware"]').should("be.visible").type("Glencairn");
    cy.get('[name="setting"]')
      .should("be.visible")
      .type("Writing some e2e tests!");
    cy.get('[name="nose"]')
      .should("be.visible")
      .type(
        "Cherry and dill dominate the nose with more rye spice peeking out, as well as some decedent caramel and sweet oak."
      );
    cy.get('[name="palate"]')
      .should("be.visible")
      .type(
        "The palate is similar to the nose. Big crashes of cherry, dill, anise, and rye with carroway seeds."
      );
    cy.get('[name="finish"]')
      .should("be.visible")
      .type(
        "Medium-long with dominant oak and rye spice continuing from the palate. There's some cherry there too, but its mostly oak, leather, and rye spice."
      );
    cy.get('[name="thoughts"]')
      .should("be.visible")
      .type(
        "This is a solid, middle-of-the-pack bourye that doesn't compromise on flavor. Both bourbon and rye notes are present, though the rye notes do dominate the nose, palate, and finish."
      );
    // NOTES
    cy.get('[name="pepper"]').should("be.visible").clear().type("3");
    cy.get('[name="cinnamon"]').should("be.visible").clear().type("3");
    cy.get('[name="bakingSpice"]').should("be.visible").clear().type("3");
    cy.get('[name="herbal"]').should("be.visible").clear().type("3");
    cy.get('[name="mint"]').should("be.visible").clear().type("3");
    cy.get('[name="cherry"]').should("be.visible").clear().type("3");
    cy.get('[name="strawberry"]').should("be.visible").clear().type("3");
    cy.get('[name="raspberry"]').should("be.visible").clear().type("3");
    cy.get('[name="blackberry"]').should("be.visible").clear().type("3");
    cy.get('[name="blueberry"]').should("be.visible").clear().type("3");
    cy.get('[name="apple"]').should("be.visible").clear().type("3");
    cy.get('[name="banana"]').should("be.visible").clear().type("3");
    cy.get('[name="grape"]').should("be.visible").clear().type("3");
    cy.get('[name="stone"]').should("be.visible").clear().type("3");
    cy.get('[name="tropical"]').should("be.visible").clear().type("3");
    cy.get('[name="coffee"]').should("be.visible").clear().type("3");
    cy.get('[name="tobacco"]').should("be.visible").clear().type("3");
    cy.get('[name="leather"]').should("be.visible").clear().type("3");
    cy.get('[name="oak"]').should("be.visible").clear().type("3");
    cy.get('[name="toasted"]').should("be.visible").clear().type("3");
    cy.get('[name="smokey"]').should("be.visible").clear().type("3");
    cy.get('[name="peanut"]').should("be.visible").clear().type("3");
    cy.get('[name="almond"]').should("be.visible").clear().type("3");
    cy.get('[name="pecan"]').should("be.visible").clear().type("3");
    cy.get('[name="walnut"]').should("be.visible").clear().type("3");
    cy.get('[name="oily"]').should("be.visible").clear().type("3");
    cy.get('[name="floral"]').should("be.visible").clear().type("3");
    cy.get('[name="corn"]').should("be.visible").clear().type("3");
    cy.get('[name="rye"]').should("be.visible").clear().type("3");
    cy.get('[name="wheat"]').should("be.visible").clear().type("3");
    cy.get('[name="malt"]').should("be.visible").clear().type("3");
    cy.get('[name="dough"]').should("be.visible").clear().type("3");
    cy.get('[name="vanilla"]').should("be.visible").clear().type("3");
    cy.get('[name="caramel"]').should("be.visible").clear().type("3");
    cy.get('[name="molasses"]').should("be.visible").clear().type("3");
    cy.get('[name="butterscotch"]').should("be.visible").clear().type("3");
    cy.get('[name="honey"]').should("be.visible").clear().type("3");
    cy.get('[name="chocolate"]').should("be.visible").clear().type("3");
    cy.get('[name="toffee"]').should("be.visible").clear().type("3");
    cy.get('[name="sugar"]').should("be.visible").clear().type("3");
    cy.get('[name="value"]').should("be.visible").clear().type("3");
    cy.get('[name="overallRating"]').should("be.visible").clear().type("3");
    cy.get("#submitreview-button").click();
    cy.url().should("match", /http:\/\/localhost:(\d){4,4}\/reviews\/(\w){4,}/);
  });
});
