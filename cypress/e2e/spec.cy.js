describe('empty spec', () => {
  it('Inicial', () => {
    cy.visit('http://localhost:3000')
  })

  it('Campo Username', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="username"]')
  })  
  
  it('Login', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="username"]').type('lucas@teste.com')
    cy.get('input[name="password"]').type('senha@123')
    cy.get('button.btn').click()

    cy.get('p.alert').should('contain', 'usuario logado')
  })  
})