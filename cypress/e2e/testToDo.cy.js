describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');

    // ввод текстовых значений
    cy.text('1');
    cy.tap();

    cy.text("2");
    cy.tap();

    cy.text("3");
    cy.tap();

    // проверка видимости значений
    cy.visible('1');
    cy.visible('2');
    cy.visible('3');

    // проверка "зачеркивания элемента" после галочки
    cy.get(':nth-child(2) > .TodoItem_checkbox__Tf0FQ').click();
    cy.get(':nth-child(2) > span').should('be.visible').should('have.css', 'text-decoration').and('match', /line-through/) 
    
    // проверка удаления элемента
    cy.get(':nth-child(3) > button').click();
    cy.get('ul > :nth-child(3)').should('be.not.have')
   
  })
  
})