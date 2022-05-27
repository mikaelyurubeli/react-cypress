describe('Login DBDS', () => {

    it('login', () => {
        cy.visit('/login')
        cy.wait(5000)

        cy.get('input[name="new-email"]')
            .first().focus()
            .type('NDST005{enter}')
        
        cy.get('input[name="new-password"]')
            .first().focus()
            .type('MaybankWinner1!')

        cy.get('button[data-testid="button-login"]').click();
        
        cy.location('pathname', {timeout: 2000}).should('eq', '/dbds/dashboard')
    })
})