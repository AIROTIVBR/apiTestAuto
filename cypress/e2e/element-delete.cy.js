///<reference types="cypress"/>

describe('Request and delete an element',()=>{

    it('Delete a specific element from posts', () => {
        cy.request({
            method : 'DELETE',
            url : 'https://jsonplaceholder.typicode.com/posts/28'
        })
        .should((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })
    });

    it('Delete a specific element from comments', () => {

    });

    it('Delete a specific element from albums', () => {

    });

    it('Delete a specific element from photos', () => {

    });

    it('Delete a specific element from todos', () => {

    });

    it('Delete a specific element from users', () => {

    });
    
})