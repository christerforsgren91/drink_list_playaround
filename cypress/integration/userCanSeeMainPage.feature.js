describe('User can see main page layout', () => {
  beforeEach(() => {
    cy.intercept('GET', 'www.thecocktaildb.com/api/json/v1/1/search.php?s**', {
      fixture: 'drinks.json',
    })
    cy.visit('/')
  })

  it('is expected to show header', () => {
    cy.get('[data-cy=logo]').should('exist')
  })

  it('is expected to show list of drinks', () => {
    cy.get('[data-cy=drink-card]').should('have.length', 25)
    cy.get('[data-cy=name]').should('contain', 'GG')
  })

  it('is expected to show drink information', () => {
    cy.get('[data-cy=drink-card]').onClick().within(() => {
      cy.get('[data-cy=drink-title]').should('contain', 'GG')
      cy.get('[data-cy=drink-img]').should('exist')
      cy.get('[data-cy=glass]').should('contain', 'Collins Glass')
      cy.get('[data-cy=drink-instruction]').should('contain', 'Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.')
      cy.get('[data-cy=drink-ingridient]').should('have.length', 15)
      cy.get('[data-cy=drink-measure]').should('have.length', 15)
      cy.get('[data-cy=close-button]').should('should', 'exist')
    })
  })
})
