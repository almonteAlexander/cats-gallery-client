describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('can be opened', () => {
    cy.contains('Hello World');
  });
});