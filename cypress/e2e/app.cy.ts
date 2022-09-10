describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can be opened', () => {
    cy.contains('Hello World');
  });
});