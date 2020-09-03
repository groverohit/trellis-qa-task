import { getGreeting } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Todos');
  });


  //Test to add a To-Do
  it('should be able to add a todo', () => {
    cy.get('input').type('Todo1').should('have.value', 'Todo1');
    cy.contains('+').click();
    cy.get('p').contains('Todo1');
  });

  //Test to complete a To-Do
  it('should be able to complete a todo', () => {
    cy.contains('Todo1').click();
    cy.contains('Todo1').should('have.class', 'completed');
  });

  //Test to Delete a To-Do
  it('should be able to delete a todo', () => {
    cy.contains('Todo1').next().click();
    cy.contains('Todo1').should('not.exist');
  });

});
