///<reference types="cypress"/>

describe('Request and delete an element',()=>{
    it('Delete a specific element', () => {
        cy.request({
            method : 'DELETE',
            url : 'https://jsonplaceholder.typicode.com/posts/28'
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })
    })
})