
describe('Home Page',()=>{
    it('app deve estar online',()=>{
        cy.visit('/')
        cy.get('h1').should('have.text','Seja um parceiro entregador pela Buger Eats')

    });
});
