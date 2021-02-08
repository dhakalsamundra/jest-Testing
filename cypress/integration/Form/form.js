/* eslint-disable no-undef */
Given('I open the form page in the browser', () => {
  cy.visit('http://localhost:3000')
})

When('I type the input', (datatable) => {
  datatable.hashes().forEach(element => {
    cy.get('#name').type(element.fullName)
    cy.get('#email').type(element.email)
    cy.get('#availability').type(element.availability)
    cy.get('#flexiable').type(element.flexiable)
  })
})

When('I type the  availability input', (datatable) => {
  datatable.hashes().forEach(element => {
    cy.get('#name').type(element.fullName)
    cy.get('#email').type(element.email)
    cy.get('#availability').type(element.availability)
    cy.get('#flexiable').type(element.flexiable)
  })
})

When('Input the field expect fullName', (datatable) => {
  datatable.hashes().forEach(element => {
    cy.get('#email').type(element.email)
    cy.get('#availability').type(element.availability)
    cy.get('#flexiable').type(element.flexiable)
  })
})

When('I input more than maxumim character length in fullName', (datatable) => {
  datatable.hashes().forEach(element => {
    cy.get('#name').type(element.fullName)
    cy.get('#email').type(element.email)
    cy.get('#availability').type(element.availability)
    cy.get('#flexiable').type(element.flexiable)
  })
})

And('I click on the Register Button', () => {
  cy.get('#button').click()
})

Then('Window alert will be shown', () => {
  cy.on('window:alert', function(alertText){
    expect(alertText).eq('Your data has been saved to our database..')
  })
})

Then('error on email validation', () => {
  cy.contains('Write a proper format of email address')
})

Then('error on Availability RegEx', () => {
  cy.contains('Must be a number.')
})

Then('error on Mandatory field', () => {
  cy.contains('Mandatory Field!')
})

Then('error on FullName maximum length', () => {
  cy.contains('Maximun length is 100.')
})

