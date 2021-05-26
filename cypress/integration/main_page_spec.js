describe('Show main page of Turing Cafe App', () => {

  beforeEach(() => {
    cy.fixture('stubbingData.json')
      .then(mockData => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should display the title, and subtitle of the page upon loading', () => {
    cy.contains('.app-title', 'Turing Cafe Reservations')
  });

  it('Should display the form to add a new reservation', () => {
    cy.get('[data-cy=name]').should('be.visible')
      .get('[data-cy=date]').should('be.visible')
      .get('[data-cy=time]').should('be.visible')
      .get('[data-cy=number]').should('be.visible')
      .get('[data-cy=submit-button]').should('be.visible')
  });

});
