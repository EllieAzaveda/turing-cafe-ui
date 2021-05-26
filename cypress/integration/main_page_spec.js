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

  it('Should display all reservations on the main page', () => {
    cy.get('.card').should('have.length', 1)
  });

  it('Should be able to add a new reservation to the main page', () => {
    cy.get('form > [data-cy=name]').type('New name')
      .get('form > [data-cy=date]').type('10/31')
      .get('form > [data-cy=time]').type('7:45')
      .get('form > [data-cy=number]').type('8')
      .get('form > [data-cy=submit-button]').click()
      .get('.card').should('have.length', 2)
  });

  it('Should be able to delete a reservation from the main page', () => {
    cy.get('.card > button').click()
      .get('div').find('.card').should('have.length', 0)
  });

});
