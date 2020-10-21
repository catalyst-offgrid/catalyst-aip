/// <reference types="Cypress" />

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#app').injectAxe()
  })

  it('Has no detectable accessibility violations on Home page', () => {
    cy.checkA11y()
  })

  it('Has no detectable accessibility violations on Explore page', () => {
    cy.get('[data-cy=link-explore]').click()
    cy.get('#app').injectAxe()
    cy.checkA11y()
  })

  it('Has no detectable accessibility violations on Info page', () => {
    cy.get('[data-cy=link-info]').click()
    cy.get('#app').injectAxe()
    cy.checkA11y()
  })
})
