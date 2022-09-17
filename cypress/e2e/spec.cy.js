describe('empty spec', () => {
  it('Inicial', () => {
    cy.visit('/')
  })

  it('Usuario Invalido', () => {
    cy.visit('/')
    cy.get('input[name="username"]').type('lucas@teste.com')
    cy.get('input[name="password"]').type('confia@123')
    cy.get('button.btn').click()

    cy.get('p.alert').should('contain', 'usuario ou senha invalida')
  })  
  
  it('Login', () => {
    cy.visit('/')
    cy.get('input[name="username"]').type('lucas@teste.com')
    cy.get('input[name="password"]').type('senha@123')
    cy.get('button.btn').click()

    cy.get('p.alert').should('contain', 'usuario logado')
  })  
})