describe('home page spec', () => {
  it('passes', () => {
    cy.visit('https://sq-worksheet1.renatomedeiros2001.workers.dev/')
  })
  it('h1 contains "MEI"', () => {
    cy.visit('https://sq-worksheet1.renatomedeiros2001.workers.dev/');
    cy.get('h1').contains('MEI')
  })
  it('h2 contains "2024/25"', () => {
    cy.visit('https://sq-worksheet1.renatomedeiros2001.workers.dev/');
    cy.get('h2').contains('2024/25')
  })
})