///<reference types="cypress" />

describe('Request and create a new element', () => {

// -----------------POSTS----------------- 

    it('Create a new element in posts',()=>{

        cy.request({
            method : 'POST',
            url : '/posts',
            body: {
                title: 'New element',
                body: 'I am the body of the new element and I am here to stay',
                userId: 8,
              },
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(201)
            expect(response.body.id).to.equal(101)
            expect(response.body).to.have.property('userId', 8)
            expect(response.body).to.have.property('title', 'New element')
            expect(response.body).to.have.property('body', 'I am the body of the new element and I am here to stay')
        })

    })

// -----------------COMMENTS-----------------

    it('Create a new element in comments', () => {

        cy.request({
            method : 'POST',
            url : '/comments',
            body: {
                postId: 1,
                name: 'complement to the author',
                email: 'test@hotmail.com',
                body: 'nice post dude ! hope to see more content about this topic !'
            }
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(201)
            expect(response.body.postId).to.equal(1)
            expect(response.body.name).to.exist
            expect(response.body.email).to.equal('test@hotmail.com')
            expect(response.body.body).to.exist
        })

    });

// -----------------ALBUMS-----------------

    it('Create a new element in albums', () => {

        cy.request({
            method : 'POST',
            url : '/albums',
            body : {
                userId : 10,
                id : 101,
                title : 'THE goat album'
            }
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(201)
            expect(response.body.id).to.equal(101)
            expect(response.body.userId).to.equal(10)
            expect(response.body.title).to.exist
        })

    });

// -----------------PHOTOS-----------------

    it('Create a new element in photos', () => {

        cy.request({
            method : 'POST',
            url : '/photos',
            body : {
                albumId : 3,
                title : 'photo of my happy family',
                url : 'https://via.placeholder.com/600/92c952',
                thumbnailUrl : 'https://via.placeholder.com/150/92c952'
            }
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(201)
            expect(response.body.title).to.exist
            expect(response.body.url).to.exist
            expect(response.body.thumbnailUrl).to.exist
        })

    });

// -----------------TODOS-----------------

    it('Create a new element in todos', () => {

        cy.request({
            method : 'POST',
            url : '/todos',
            body : {
                userId : 9,
                title : 'call to cousin for his birthday',
                completed : false
            }
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(201)
            expect(response.body.userId).to.equal(9)
            expect(response.body.title).to.exist
            expect(response.body.completed).to.equal(false)
        })

    });

// -----------------USERS-----------------

    it('Create a new element in users', () => {

        cy.request({
            method : 'POST',
            url : '/users',
            body : {
                name : 'John',
                username : 'johnny',
                email : 'johnnyboy@shelby.com',
            }
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal('John')
            expect(response.body.username).to.equal('johnny')
            expect(response.body.email).to.exist
        })
        
    });
})