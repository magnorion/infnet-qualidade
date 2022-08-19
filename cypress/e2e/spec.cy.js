describe('empty spec', () => {
  it('Inicial', () => {
    cy.visit('http://localhost:3000')
  })

  it('Usuario Invalido', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="username"]').type('lucas@teste.com')
    cy.get('input[name="password"]').type('confia@123')
    cy.get('button.btn').click()

    cy.get('p.alert').should('contain', 'usuario ou senha invalida')
  })  
  
  it('Login', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="username"]').type('lucas@teste.com')
    cy.get('input[name="password"]').type('senha@123')
    cy.get('button.btn').click()

    cy.get('p.alert').should('contain', 'usuario logado')
  })  
})