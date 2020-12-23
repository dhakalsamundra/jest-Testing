describe('Blog app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('front page can be displayed', () => {
    cy.contains('Name')
  })

  it('Do not save the enpty data', () => {
    cy.get('#button').click()

    cy.contains('Mandatory Field!')
  })

  it('If email is mentioned, it must be the valid email', () => {
    cy.get('#name').type('Samundra')
    cy.get('#email').type('asc')
    cy.get('#button').click()

    cy.contains('Write a proper format of email address')
  })

  it('Availability must be a number', () => {
    cy.get('#name').type('Samundra')
    cy.get('#email').type('xxx@yyy.zzz')
    cy.get('#availability').type('abc')
    cy.get('#button').click()

    cy.contains('Must be a number.')
  })

  it('Maximum character length is 100.', () => {
    cy.get('#name').type('Samundra')
    cy.get('#availability').type('10-20')
    cy.get('#button').click()

    cy.on('window:confirm', () => true)
  })

  it('Save the data if mandatory field is provided', () => {
    cy.get('#name').type('Samundra')
    cy.get('#button').click()

    cy.on('window:confirm', () => true)
  })
})