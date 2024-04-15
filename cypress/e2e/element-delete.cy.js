///<reference types="cypress"/>

describe('Request and delete an element',()=>{

// -----------------POSTS----------------- 

    it('Delete a specific element from posts', () => {

        cy.request({
            method : 'DELETE',
            url : '/posts/2'
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })

    });

// -----------------COMMENTS-----------------

    it('Delete a specific element from comments', () => {

        cy.request({
            method : 'DELETE',
            url : '/comments/5'
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })

    });

// -----------------ALBUMS--------------------

    it('Delete a specific element from albums', () => {

        cy.request({
            method : 'DELETE',
            url : '/albums/48'
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })

    });

// -----------------PHOTOS--------------------

    it('Delete a specific element from photos', () => {

        cy.request({
            method : 'DELETE',
            url : '/photos/4537'
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })

    });

// -----------------TODOS--------------------

    it('Delete a specific element from todos', () => {

        cy.request({
            method : 'DELETE',
            url : '/todos/31'
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })

    });

// -----------------USERS--------------------

    it('Delete a specific element from users', () => {

        cy.request({
            method : 'DELETE',
            url : '/users/6'
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })

    });
    
})