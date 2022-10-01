// describe("New Review", () => {
//   beforeEach(() => {
//     cy.login();
//   });

//   afterEach(() => {
//     cy.cleanupUser();
//   });

//   it("Should show the form component", () => {
//     cy.viewport(1500, 1000);
//     cy.visitAndCheck("/reviews");
//     cy.findByRole("link", { name: "New Review" }).click();
//     cy.url().should("contain", "new/bottleInfo");
//     cy.waitForReact();
//   });

// it("Allows a user to create a new review", () => {
//   const emptyState = {
//     name: "",
//     type: "",
//     distiller: "",
//     bottler: "",
//     producer: "",
//     country: "",
//     region: "",
//     price: "",
//     age: "",
//     year: "",
//     batch: "",
//     alcoholPercent: "",
//     proof: "",
//     size: "",
//     color: "",
//     finishing: "",
//     imageId: "",
//     date: "",
//     setting: "",
//     glassware: "",
//     restTime: "",
//     nose: "",
//     palate: "",
//     finish: "",
//     thoughts: "",
//     cherry: 0,
//     strawberry: 0,
//     raspberry: 0,
//     blackberry: 0,
//     blueberry: 0,
//     apple: 0,
//     banana: 0,
//     grape: 0,
//     stone: 0,
//     citrus: 0,
//     tropical: 0,
//     pepper: 0,
//     bakingSpice: 0,
//     cinnamon: 0,
//     herbal: 0,
//     mint: 0,
//     coffee: 0,
//     tobacco: 0,
//     leather: 0,
//     oak: 0,
//     toasted: 0,
//     smokey: 0,
//     peanut: 0,
//     almond: 0,
//     pecan: 0,
//     walnut: 0,
//     oily: 0,
//     floral: 0,
//     corn: 0,
//     rye: 0,
//     wheat: 0,
//     malt: 0,
//     dough: 0,
//     vanilla: 0,
//     caramel: 0,
//     molasses: 0,
//     butterscotch: 0,
//     honey: 0,
//     chocolate: 0,
//     toffee: 0,
//     sugar: 0,
//     overallRating: 0,
//     value: 0,
//   };

//   cy.visitAndCheck("/reviews/new/bottleInfo");

//   cy.findByLabelText("Name").type("Eagle Rare").blur();
//   cy.findByLabelText("Distiller").type("Buffalo Trace").blur();
//   cy.findByLabelText("Bottler").type("Buffalo Trace").blur();
//   cy.findByLabelText("Producer").type("Sazerac").blur();
//   cy.findByLabelText("Type").type("Bourbon").blur();
//   cy.findByLabelText("Country of Origin").type("USA").blur();
//   cy.findByLabelText("Region").type("Kentucky").blur();
//   cy.findByLabelText("Price").type("34.99").blur();
//   cy.findByLabelText("Age").type("10yrs").blur();
//   cy.findByLabelText("Color").type("Amber").blur();
//   cy.findByLabelText("Year").type("2022").blur();
//   cy.findByLabelText("Batch / Barrel").type("N/A").blur();
//   cy.findByLabelText("Size").type("750mL").blur();
//   cy.findByLabelText("Alcohol Percent").type("45").blur();
//   cy.findByLabelText("Proof").type("90").blur();
//   cy.findByLabelText("Finishing").type("None").blur();

//   cy.findByRole("button", { name: /next/i }).click();
//   cy.log("First page done");

//   cy.location("pathname").should("include", "/reviews/new/addImage");
//   cy.waitForReact();
//   cy.wait("@imageRouteLoaded");
//   const imageForm = cy.react("ImageForm", { props: { confirmed: false } });
//   expect(imageForm).to.be.visible();

//   // const bottleInfoState = {
//   //   name: "Eagle Rare",
//   //   type: "Bourbon",
//   //   distiller: "B",
//   //   bottler: "Buffalo Trace",
//   //   producer: "Sazerac",
//   //   country: "USA",
//   //   region: "Kentucky",
//   //   price: "34.99",
//   //   age: "10yrs",
//   //   year: "2022",
//   //   batch: "N/A",
//   //   alcoholPercent: "45",
//   //   proof: "90",
//   //   size: "750mL",
//   //   color: "Amber",
//   //   finishing: "None",
//   //   imageId: "",
//   //   date: "",
//   //   setting: "",
//   //   glassware: "",
//   //   restTime: "",
//   //   nose: "",
//   //   palate: "",
//   //   finish: "",
//   //   thoughts: "",
//   //   cherry: 0,
//   //   strawberry: 0,
//   //   raspberry: 0,
//   //   blackberry: 0,
//   //   blueberry: 0,
//   //   apple: 0,
//   //   banana: 0,
//   //   grape: 0,
//   //   stone: 0,
//   //   citrus: 0,
//   //   tropical: 0,
//   //   pepper: 0,
//   //   bakingSpice: 0,
//   //   cinnamon: 0,
//   //   herbal: 0,
//   //   mint: 0,
//   //   coffee: 0,
//   //   tobacco: 0,
//   //   leather: 0,
//   //   oak: 0,
//   //   toasted: 0,
//   //   smokey: 0,
//   //   peanut: 0,
//   //   almond: 0,
//   //   pecan: 0,
//   //   walnut: 0,
//   //   oily: 0,
//   //   floral: 0,
//   //   corn: 0,
//   //   rye: 0,
//   //   wheat: 0,
//   //   malt: 0,
//   //   dough: 0,
//   //   vanilla: 0,
//   //   caramel: 0,
//   //   molasses: 0,
//   //   butterscotch: 0,
//   //   honey: 0,
//   //   chocolate: 0,
//   //   toffee: 0,
//   //   sugar: 0,
//   //   overallRating: 0,
//   //   value: 0,
//   // };

//   // ADD IMAGE
//   // cy.findByLabelText(/upload an image/i, { timeout: 8000 }).attachFile(
//   //   "lostMonarch.png"
//   // );
//   // cy.findByRole("button", { name: /upload image/i }).click();
//   // cy.findByText("Successfully uploaded!", { timeout: 8000 }).should(
//   //   "be.visible"
//   // );
//   // cy.findByRole("link", { name: /next/i }).click();

//   // cy.location("pathname", { timeout: 8000 }).should(
//   //   "include",
//   //   "/reviews/new/setting"
//   // );

//   // // SETTING
//   // cy.findByLabelText(/date/i).type("01/01/2022").blur();
//   // cy.findByLabelText(/rest time/i)
//   //   .type("10min")
//   //   .blur();
//   // cy.findByLabelText(/glassware/i)
//   //   .type("Copita")
//   //   .blur();
//   // cy.findByLabelText(/setting/i)
//   //   .type("Having a dram after a long day at work")
//   //   .blur();
//   // cy.findByLabelText(/nose/i)
//   //   .type(
//   //     "Nutty as all hell, toffee, caramel, cinnamon, burnt sugar, sweet oak, old rickhouse, black pepper, clove, confectioner sugar, grape, plum, almost smells finished."
//   //   )
//   //   .blur();
//   // cy.findByLabelText(/palate/i)
//   //   .type(
//   //     "Black peppercorns, cinnamon, caramel, salty tortilla chips, fudge, pecans, confectioners sugar, light clove."
//   //   )
//   //   .blur();
//   // cy.findByLabelText(/finish/i)
//   //   .type(
//   //     "Strong, sweet oak, black peppercorn, big caramel notes round the palate. Mint, chocolate, there's a really light fruit note that I can't quite place, but it's well balanced with the darker flavors of the finish."
//   //   )
//   //   .blur();
//   // cy.findByLabelText(/thoughts/i)
//   //   .type(
//   //     "Really good stuff. Dark flavors dominate with the caramel, dark chocolate, and peppercorns. There's small waves of a light fruit note I still can't quite place, maybe green grapes? It's really well balanced with the caramel, oak, and chocolate, plus the baking spices and mint make the finish last for a long, long time."
//   //   )
//   //   .blur();

//   // cy.findByRole("button", { name: /next/i }).click();

//   // cy.location("pathname", { timeout: 8000 }).should(
//   //   "include",
//   //   "/reviews/new/notes"
//   // );

//   // // TASTING NOTES
//   // cy.findByLabelText(/coffee/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/tobacco leaf/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/leather/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/oak/i).type("3").blur();
//   // cy.findByLabelText(/toasted/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/smokey/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/peanut/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/almond/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/pecan/i).type("3").blur();
//   // cy.findByLabelText(/walnut/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/oily/i).type("3").blur();
//   // cy.findByLabelText(/floral/i)
//   //   .type("3")
//   //   .blur();

//   // cy.findByLabelText(/cherry/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/strawberry/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/raspberry/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/blackberry/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/blueberry/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/apple/i).type("3").blur();
//   // cy.findByLabelText(/banana/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/grape/i).type("3").blur();
//   // cy.findByLabelText(/stone fruit/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/citrus/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/tropical/i)
//   //   .type("3")
//   //   .blur();

//   // cy.findByLabelText(/corn/i).type("3").blur();
//   // cy.findByLabelText(/rye/i).type("3").blur();
//   // cy.findByLabelText(/wheat/i).type("3").blur();
//   // cy.findByLabelText(/malt/i).type("3").blur();
//   // cy.findByLabelText(/dough \/ bread/i)
//   //   .type("3")
//   //   .blur();

//   // cy.findByLabelText(/black pepper/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/cinnamon/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/baking spice/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/herbal/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/mint/i).type("3").blur();

//   // cy.findByLabelText(/vanilla/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/caramel/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/molasses/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/butterscotch/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/honey/i).type("3").blur();
//   // cy.findByLabelText(/chocolate/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/toffee/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/powdered sugar/i)
//   //   .type("3")
//   //   .blur();

//   // cy.findByLabelText(/value for money/i)
//   //   .type("3")
//   //   .blur();
//   // cy.findByLabelText(/overall rating/i)
//   //   .type("3")
//   //   .blur();

//   // cy.findByRole("button", { name: /review/i }).click();

//   // cy.location("pathname", { timeout: 8000 }).should(
//   //   "include",
//   //   "/reviews/new/confirm"
//   // );

//   // cy.findByRole("button", { name: /submit review/i }).click();
//   // cy.location("pathname", { timeout: 8000 }).should(
//   //   "match",
//   //   /\/reviews\/(\d|\w)+/i
//   // );
// });
// });

// describe("New Review", () => {
//   beforeEach(() => {
//     cy.login();
//   });
//   afterEach(() => {
//     cy.cleanupUser();
//   });
//   it("successfully fills out bottle info", () => {
//     cy.visit(`/reviews/new/bottleInfo`);
//     cy.get('[aria-label="name-input"]')
//       .should("be.visible")
//       .type("Lost Monarch")
//       .blur();
//     cy.getLocalStorage("name").should("equal", "Lost Monarch");

//     cy.get('[aria-label="distiller-input"]')
//       .should("be.visible")
//       .type("Redwood Empire")
//       .blur();
//     cy.getLocalStorage("distiller").should("equal", "Redwood Empire");

//     cy.get('[aria-label="bottler-input"]')
//       .should("be.visible")
//       .type("Redwood Empire")
//       .blur();
//     cy.getLocalStorage("bottler").should("equal", "Redwood Empire");
//     cy.get('[aria-label="producer-input"]')
//       .should("be.visible")
//       .type("Redwood Empire")
//       .blur();
//     cy.getLocalStorage("producer").should("equal", "Redwood Empire");
//     cy.get('[aria-label="type-input"]')
//       .should("be.visible")
//       .type("Bourye")
//       .blur();
//     cy.getLocalStorage("type").should("equal", "Bourye");
//     cy.get('[aria-label="country-input"]')
//       .should("be.visible")
//       .type("USA")
//       .blur();
//     cy.getLocalStorage("country").should("equal", "USA");
//     cy.get('[aria-label="region-input"]')
//       .should("be.visible")
//       .type("Kentucky")
//       .blur();
//     cy.getLocalStorage("region").should("equal", "Kentucky");
//     cy.get('[aria-label="price-input"]')
//       .should("be.visible")
//       .type("$32.99")
//       .blur();
//     cy.getLocalStorage("price").should("equal", "$32.99");
//     cy.get('[aria-label="age-input"]').should("be.visible").type("6yrs").blur();
//     cy.getLocalStorage("age").should("equal", "6yrs");
//     cy.get('[aria-label="color-input"]')
//       .should("be.visible")
//       .type("Amber")
//       .blur();
//     cy.getLocalStorage("color").should("equal", "Amber");
//     cy.get('[aria-label="year-input"]')
//       .should("be.visible")
//       .type("2021")
//       .blur();
//     cy.getLocalStorage("year").should("equal", "2021");
//     cy.get('[aria-label="batch-input"]')
//       .should("be.visible")
//       .type("N/A")
//       .blur();
//     cy.getLocalStorage("batch").should("equal", "N/A");
//     cy.get('[aria-label="size-input"]')
//       .should("be.visible")
//       .type("750mL")
//       .blur();
//     cy.getLocalStorage("size").should("equal", "750mL");
//     cy.get('[aria-label="alcoholPercent-input"]')
//       .should("be.visible")
//       .type("45%")
//       .blur();
//     cy.getLocalStorage("alcoholPercent").should("equal", "45%");
//     cy.get('[aria-label="proof-input"]').should("be.visible").type("90").blur();
//     cy.getLocalStorage("proof").should("equal", "90");
//     cy.get('[aria-label="finishing-input"]')
//       .should("be.visible")
//       .type("None")
//       .blur();
//     cy.getLocalStorage("finishing").should("equal", "None");

//     // NEXT BUTTON
//     cy.get("#next-button").click();
//     // NEW URL -- /reviews/new/addImage
//     cy.url().should(
//       "equal",
//       `${Cypress.config("baseUrl")}/reviews/new/addImage`
//     );
//   });
//   it("Successfully fills out the settings", () => {
//     cy.visit(`/reviews/new/setting`);
//     cy.get('[aria-label="date-input"]')
//       .should("be.visible")
//       .type("05/10/2022")
//       .blur();
//     cy.getLocalStorage("date").should("equal", "05/10/2022");
//     cy.get('[aria-label="restTime-input"]')
//       .should("be.visible")
//       .type("10min")
//       .blur();
//     cy.getLocalStorage("restTime").should("equal", "10min");
//     cy.get('[aria-label="glassware-input"]')
//       .should("be.visible")
//       .type("Glencairn")
//       .blur();
//     cy.getLocalStorage("glassware").should("equal", "Glencairn");
//     cy.get('[aria-label="setting-input"]')
//       .should("be.visible")
//       .type("Writing some e2e tests!")
//       .blur();
//     cy.getLocalStorage("setting").should("equal", "Writing some e2e tests!");
//     cy.get('[aria-label="nose-input"]')
//       .should("be.visible")
//       .type(
//         "Cherry and dill dominate the nose with more rye spice peeking out, as well as some decedent caramel and sweet oak."
//       )
//       .blur();
//     cy.getLocalStorage("nose").should(
//       "equal",
//       "Cherry and dill dominate the nose with more rye spice peeking out, as well as some decedent caramel and sweet oak."
//     );
//     cy.get('[aria-label="palate-input"]')
//       .should("be.visible")
//       .type(
//         "The palate is similar to the nose. Big crashes of cherry, dill, anise, and rye with carroway seeds."
//       )
//       .blur();
//     cy.getLocalStorage("palate").should(
//       "equal",
//       "The palate is similar to the nose. Big crashes of cherry, dill, anise, and rye with carroway seeds."
//     );
//     cy.get('[aria-label="finish-input"]')
//       .should("be.visible")
//       .type(
//         "Medium-long with dominant oak and rye spice continuing from the palate. There's some cherry there too, but its mostly oak, leather, and rye spice."
//       )
//       .blur();
//     cy.getLocalStorage("finish").should(
//       "equal",
//       "Medium-long with dominant oak and rye spice continuing from the palate. There's some cherry there too, but its mostly oak, leather, and rye spice."
//     );
//     cy.get('[aria-label="thoughts-input"]')
//       .should("be.visible")
//       .type(
//         "This is a solid, middle-of-the-pack bourye that doesn't compromise on flavor. Both bourbon and rye notes are present, though the rye notes do dominate the nose, palate, and finish."
//       )
//       .blur();
//     cy.getLocalStorage("thoughts").should(
//       "equal",
//       "This is a solid, middle-of-the-pack bourye that doesn't compromise on flavor. Both bourbon and rye notes are present, though the rye notes do dominate the nose, palate, and finish."
//     );
//     // NEXT BUTTON
//     cy.get("#next-button").click();
//     // NEW URL -- /reviews/new/notes
//     cy.url().should("equal", `${Cypress.config("baseUrl")}/reviews/new/notes`);
//   });
//   it("Successfully fills out the notes", () => {
//     // SPICE NOTES
//     cy.visit(`/reviews/new/notes`);
//     cy.get('[aria-label="pepper-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("pepper").should("equal", "3");
//     cy.get('[aria-label="cinnamon-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("cinnamon").should("equal", "3");
//     cy.get('[aria-label="bakingspice-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("bakingSpice").should("equal", "3");
//     cy.get('[aria-label="herbal-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("herbal").should("equal", "3");
//     cy.get('[aria-label="mint-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("mint").should("equal", "3");
//     // FRUIT NOTES
//     cy.get('[aria-label="cherry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("cherry").should("equal", "3");
//     cy.get('[aria-label="strawberry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("strawberry").should("equal", "3");
//     cy.get('[aria-label="raspberry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("raspberry").should("equal", "3");
//     cy.get('[aria-label="blackberry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("blackberry").should("equal", "3");
//     cy.get('[aria-label="blueberry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("blueberry").should("equal", "3");
//     cy.get('[aria-label="apple-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("apple").should("equal", "3");
//     cy.get('[aria-label="banana-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("banana").should("equal", "3");
//     cy.get('[aria-label="grape-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("grape").should("equal", "3");
//     cy.get('[aria-label="stone-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("stone").should("equal", "3");
//     cy.get('[aria-label="tropical-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("tropical").should("equal", "3");
//     // EARTH NOTES
//     cy.get('[aria-label="coffee-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("coffee").should("equal", "3");
//     cy.get('[aria-label="tobacco-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("tobacco").should("equal", "3");
//     cy.get('[aria-label="leather-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("leather").should("equal", "3");
//     cy.get('[aria-label="oak-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("oak").should("equal", "3");
//     cy.get('[aria-label="toasted-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("toasted").should("equal", "3");
//     cy.get('[aria-label="smokey-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("smokey").should("equal", "3");
//     cy.get('[aria-label="peanut-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("peanut").should("equal", "3");
//     cy.get('[aria-label="almond-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("almond").should("equal", "3");
//     cy.get('[aria-label="pecan-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("pecan").should("equal", "3");
//     cy.get('[aria-label="walnut-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("walnut").should("equal", "3");
//     cy.get('[aria-label="oily-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("oily").should("equal", "3");
//     cy.get('[aria-label="floral-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("floral").should("equal", "3");
//     // GRAIN NOTES
//     cy.get('[aria-label="corn-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("corn").should("equal", "3");
//     cy.get('[aria-label="rye-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("rye").should("equal", "3");
//     cy.get('[aria-label="wheat-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("wheat").should("equal", "3");
//     cy.get('[aria-label="malt-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("malt").should("equal", "3");
//     cy.get('[aria-label="dough-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("dough").should("equal", "3");
//     // SWEET NOTES
//     cy.get('[aria-label="vanilla-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("vanilla").should("equal", "3");
//     cy.get('[aria-label="caramel-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("caramel").should("equal", "3");
//     cy.get('[aria-label="molasses-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("molasses").should("equal", "3");
//     cy.get('[aria-label="butterscotch-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("butterscotch").should("equal", "3");
//     cy.get('[aria-label="honey-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("honey").should("equal", "3");
//     cy.get('[aria-label="chocolate-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("chocolate").should("equal", "3");
//     cy.get('[aria-label="toffee-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("toffee").should("equal", "3");
//     cy.get('[aria-label="sugar-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("sugar").should("equal", "3");
//     cy.get('[aria-label="value-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("value").should("equal", "3");
//     cy.get('[aria-label="overallRating-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.getLocalStorage("overallRating").should("equal", "3");
//     cy.get("#review-button").click();
//     cy.url().should(
//       "equal",
//       `${Cypress.config("baseUrl")}/reviews/new/confirm`
//     );
//   });
//   it("Submits the review", () => {
//     cy.visit(`/reviews/new/confirm`);
//     // BOTTLE
//     cy.get('[name="name"]').should("be.visible").type("Lost Monarch");
//     cy.get('[name="distiller"]').should("be.visible").type("Redwood Empire");
//     cy.get('[name="bottler"]').should("be.visible").type("Redwood Empire");
//     cy.get('[name="producer"]').should("be.visible").type("Redwood Empire");
//     cy.get('[name="type"]').should("be.visible").type("Bourye");
//     cy.get('[name="country"]').should("be.visible").type("USA");
//     cy.get('[name="region"]').should("be.visible").type("Kentucky");
//     cy.get('[name="price"]').should("be.visible").type("$32.99");
//     cy.get('[name="age"]').should("be.visible").type("6yrs");
//     cy.get('[name="color"]').should("be.visible").type("Amber");
//     cy.get('[name="year"]').should("be.visible").type("2021");
//     cy.get('[name="batch"]').should("be.visible").type("N/A");
//     cy.get('[name="size"]').should("be.visible").type("750mL");
//     cy.get('[name="alcoholPercent"]').should("be.visible").type("45%");
//     cy.get('[name="proof"]').should("be.visible").type("90");
//     cy.get('[name="finishing"]').should("be.visible").type("None");
//     cy.get('[name="imageId"]')
//       .invoke("show")
//       .should("be.visible")
//       .type("dedb9eda-f21d-48a0-94e3-533c7c3a29fa");
//     // SETTING
//     cy.get('[name="date"]').should("be.visible").type("05/10/2022");
//     cy.get('[name="restTime"]').should("be.visible").type("10min");
//     cy.get('[name="glassware"]').should("be.visible").type("Glencairn");
//     cy.get('[name="setting"]')
//       .should("be.visible")
//       .type("Writing some e2e tests!");
//     cy.get('[name="nose"]')
//       .should("be.visible")
//       .type(
//         "Cherry and dill dominate the nose with more rye spice peeking out, as well as some decedent caramel and sweet oak."
//       );
//     cy.get('[name="palate"]')
//       .should("be.visible")
//       .type(
//         "The palate is similar to the nose. Big crashes of cherry, dill, anise, and rye with carroway seeds."
//       );
//     cy.get('[name="finish"]')
//       .should("be.visible")
//       .type(
//         "Medium-long with dominant oak and rye spice continuing from the palate. There's some cherry there too, but its mostly oak, leather, and rye spice."
//       );
//     cy.get('[name="thoughts"]')
//       .should("be.visible")
//       .type(
//         "This is a solid, middle-of-the-pack bourye that doesn't compromise on flavor. Both bourbon and rye notes are present, though the rye notes do dominate the nose, palate, and finish."
//       );
//     // NOTES
//     cy.get('[name="pepper"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="cinnamon"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="bakingSpice"]').should("be.visible").clear().type("3");
//     cy.get('[name="herbal"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="mint"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="cherry"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="strawberry"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="raspberry"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="blackberry"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="blueberry"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="apple"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="banana"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="grape"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="stone"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="tropical"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="coffee"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="tobacco"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="leather"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="oak"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="toasted"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="smokey"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="peanut"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="almond"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="pecan"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="walnut"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="oily"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="floral"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="corn"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="rye"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="wheat"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="malt"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="dough"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="vanilla"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="caramel"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="molasses"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="butterscotch"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.get('[name="honey"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="chocolate"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="toffee"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="sugar"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="value"]').should("be.visible").clear().type("3").blur();
//     cy.get('[name="overallRating"]')
//       .should("be.visible")
//       .clear()
//       .type("3")
//       .blur();
//     cy.get("#submitreview-button").click();
//     cy.url().should("match", /http:\/\/localhost:(\d){4,4}\/reviews\/(\w){4,}/);
//   });
//   it("Successfully uploads an image and continues", () => {
//     cy.visit("/reviews/new/addImage");
//     cy.fixture("lostMonarch.png").then((contents) => {
//       cy.get('input[type="file"]').attachFile({
//         fileContent: contents.toString(),
//         fileName: "lostMonarch.png",
//         mimeType: "image/png",
//       });
//     });
//     cy.get("#upload-button").click();
//     cy.get("img");
//     cy.get("#next-button").click();
//     cy.url().should(
//       "equal",
//       `${Cypress.config("baseUrl")}/reviews/new/setting`
//     );
//   });
// });
