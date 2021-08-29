describe('An metadata object', () => {
    it('Loads an image', () => {
      cy.visit('/334245')

      // Shows object image
      cy.contains('div.image').should("exist").should("be.visible")
