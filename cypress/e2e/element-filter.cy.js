///<reference types="cypress" />

describe('Request filtered elements',() => {

// -----------------POSTS-----------------   
    
    it('Filter elements from posts', () => {
        cy.request({
            method : 'GET',
            url : '/posts?userId=10'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(10)
            })
        })

        cy.request({
            method : 'GET',
            url : '/posts?userId=10&id=91'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(10)
                expect(response.body[0].id).to.equal(91)
            })
        })

        cy.request({
            method : 'GET',
            url : '/posts?id=55'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(6)
            })
        }) 
    });

// -----------------COMMENTS-----------------   

    it('Filter elements from comments', () => {

        cy.request({
            method : 'GET',
            url : '/comments?postId=92'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].postId).to.equal(92)
            })
        })

        cy.request({
            method : 'GET',
            url : '/comments?postId=10&id=48'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].postId).to.equal(10)
                expect(response.body[0].id).to.equal(48)
            })
        })

        cy.request({
            method : 'GET',
            url : '/comments?id=266'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].postId).to.equal(54)
            })
        }) 

    });

// -----------------ALBUMS-----------------   

    it('Filter elements from albums', () => {

        cy.request({
            method : 'GET',
            url : '/albums?userId=9'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(9)
            })
        })

        cy.request({
            method : 'GET',
            url : '/albums?userId=10&id=94'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(10)
                expect(response.body[0].id).to.equal(94)
            })
        })

        cy.request({
            method : 'GET',
            url : '/albums?id=72'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(8)
            })
        }) 
        
    });

// -----------------PHOTOS-----------------

    it('Filter elements from photos', () => {

        cy.request({
            method : 'GET',
            url : '/photos?albumId=81'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].albumId).to.equal(81)
            })
        })

        cy.request({
            method : 'GET',
            url : '/photos?albumId=67&id=3324'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].albumId).to.equal(67)
                expect(response.body[0].id).to.equal(3324)
            })
        })

        cy.request({
            method : 'GET',
            url : '/photos?id=999'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].albumId).to.equal(20)
            })
        }) 

    });

// -----------------TODOS-----------------   

    it('Filter elements from todos', () => {

        cy.request({
            method : 'GET',
            url : '/todos?userId=2'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(2)
            })
        })

        cy.request({
            method : 'GET',
            url : '/todos?userId=3&id=52'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(3)
                expect(response.body[0].id).to.equal(52)
            })
        })

        cy.request({
            method : 'GET',
            url : '/todos?id=156'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].userId).to.equal(8)
            })
        })

    });

// -----------------USERS-----------------

    it('Filter elements from users', () => {

        cy.request({
            method : 'GET',
            url : '/users?id=10'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].name).to.equal('Clementina DuBuque')
            })
        })

        cy.request({
            method : 'GET',
            url : '/users?name=Clementine Bauch&id=3'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].email).to.equal('Nathan@yesenia.net')
                expect(response.body[0].id).to.equal(3)
            })
        })

        cy.request({
            method : 'GET',
            url : '/users?email=Lucio_Hettinger@annie.ca'
        })
        .then((response) => {
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].id).to.equal(5)
            })
        })

    });
    
})