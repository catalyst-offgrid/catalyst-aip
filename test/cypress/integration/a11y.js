/// <reference types="Cypress" />

describe('Accessibility tests', () => {
  it('Has no detectable accessibility violations on Home page', () => {
    cy.visit('/')
    cy.get('#app').injectAxe()
    cy.checkA11y()
  })

  it('Has no detectable accessibility violations on Explore page', () => {
    cy.visit('/explore')
    cy.get('#app').injectAxe()
    cy.checkA11y()
  })

  it('Has no detectable accessibility violations on Explore page', () => {
    cy.visit('/info')
    cy.get('#app').injectAxe()
    cy.checkA11y()
  })
})
