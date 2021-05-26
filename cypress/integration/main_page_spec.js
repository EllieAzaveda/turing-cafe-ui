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

});
