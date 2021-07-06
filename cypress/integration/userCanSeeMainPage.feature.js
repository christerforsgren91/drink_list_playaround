describe('User can see main page layout', () => {
  beforeEach(() => {
    cy.intercept('GET', 'www.thecocktaildb.com/api/json/v1/1/search.php?s', {
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
})
