describe('template spec', () => {
beforeEach(()=>{
  cy.visit('http://localhost:3000/')
})

  // it('passes', () => {
  //   cy.visit('http://localhost:3000/')
  // })
  it('counter should render with 0',()=>{
   
    cy.get("h2").should('have.text',"Counter:0")
  })

  it('on clicking add button counter value increase by 1',()=>{
  
    cy.get('[data-testid="adbtn"]').click()
    cy.get("h2").should('have.text',"Counter:1")
  })

  it('on clicking add button counter value increase by 1',()=>{
   
    cy.get('.subbtn').click()
    cy.get("h2").should('have.text',"Counter:-1")
  })
})