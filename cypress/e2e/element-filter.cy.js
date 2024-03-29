///<reference types="cypress" />

describe('Request filtered elements',() => {
    it('Filter elements', () => {
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.typicode.com/posts?userId=10'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(10)
            })
    }) 
});
})