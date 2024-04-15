///<reference types="cypress" />

describe('Request and read elements from posts',() => {


// -----------------POSTS-----------------   

    it('Read elements from posts', () =>{

        cy.request({
            method : 'GET',
            url : '/posts?userId=5'
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].userId).to.equal(5)
            expect(response.body[0]).to.have.property('userId')
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('title')
            expect(response.body[0]).to.have.property('body')
        })

        cy.request({
            method : 'GET',
            url : '/posts?userId=5&id=41'
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].userId).to.equal(5)
            expect(response.body[0].id).to.equal(41)
            expect(response.body[0]).to.have.property('userId')
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('title')
            expect(response.body[0]).to.have.property('body')
        })

    });

// -----------------COMMENTS----------------- 

    it('Read elements from comments', () => {

        cy.request({
            method : 'GET',
            url : '/comments?postId=2'
        })
        .then((response) =>{
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(response.body[0].postId).to.equal(2)
                expect(response.body[0]).to.have.property('postId')
                expect(response.body[0]).to.have.property('id')
            })
        })
        
        cy.request({
            method : 'GET',
            url : '/comments?id=12&postId=3'
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].postId).to.equal(3)
            expect(response.body[0].id).to.equal(12)
            expect(response.body[0]).to.have.property('postId')
            expect(response.body[0]).to.have.property('id')
        })

    });

// -----------------ALBUMS-----------------

    it('Read elements from albums', () => {

        cy.request({
            method : 'GET',
            url : '/albums?userId=2'
        })
        .then((response)=>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].userId).to.equal(2)
            expect(response.body[0]).to.have.property('userId')
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('title')
        })

        cy.request({
            method : 'GET',
            url : '/albums?userId=7&id=70'
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].userId).to.equal(7)
            expect(response.body[0].id).to.equal(70)
            expect(response.body[0]).to.have.property('userId')
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('title')
        })

    });

// -----------------PHOTOS-----------------

    it('Read elements from photos', () => {

        cy.request({
            method : 'GET',
            url : '/photos?albumId=2'
        })
        .then((response)=>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].albumId).to.equal(2)
            expect(response.body[0]).to.have.property('albumId')
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('title')
        })

        cy.request({
            method : 'GET',
            url : '/photos?albumId=75&id=3721'
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].albumId).to.equal(75)
            expect(response.body[0].id).to.equal(3721)
            expect(response.body[0]).to.have.property('albumId')
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('title')
        })

    });

// -----------------TODOS----------------- 

    it('Read elements from todos', () => {

        cy.request({
            method : 'GET',
            url : '/todos?userId=9'
        })
        .then((response)=>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].userId).to.equal(9)
            expect(response.body[0]).to.have.property('userId')
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('title')
            expect(response.body[0]).to.have.property('completed')
        })

        cy.request({
            method : 'GET',
            url : '/todos?userId=7&completed=true'
        })
        .then((response)=>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].userId).to.equal(7)
            expect(response.body[0].completed).to.equal(true)
            expect(response.body[0]).to.have.property('userId')
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('title')
            expect(response.body[0]).to.have.property('completed')
        })

    });

// -----------------USERS-----------------

    it('Read elements from users', () => {

        cy.request({
            method : 'GET',
            url : '/users?id=4'
        })
        .then((response)=>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0].id).to.equal(4)
            expect(response.body[0].name).to.equal('Patricia Lebsack')
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('name')
            expect(response.body[0]).to.have.property('username')
            expect(response.body[0]).to.have.property('email')
            expect(response.body[0]).to.have.property('address')
        })
    });
})