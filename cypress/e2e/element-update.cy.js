///<reference types="cypress" />

describe('Request and update a specific element', () => {

// -----------------POSTS-------------------- 

    it('Update a specific element from posts', () => {

        cy.request({
            method: 'PATCH',
            url: '/posts/24',
            body: {
                id: 24,
                title: 'update test/ posts',
                body: 'testtesttesttest testtest test testtest test test testtest',
                userId: 2,
            },
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(24)
            expect(response.body).to.have.property('userId', 2)
            expect(response.body).to.have.property('title', 'update test/ posts')
            expect(response.body).to.have.property('body', 'testtesttesttest testtest test testtest test test testtest')
        })

    });

// -----------------COMMENTS-----------------

    it('Update a specific element from comments', () => {
        
        cy.request({
            method: 'PATCH',
            url: '/comments/6',
            body: {
                name: 'update test/ comments',
                email: 'testingapi@gmail.com',
                body: 'testtesttesttest testtest test testtest test test testtest',
                postId: 4 ,
            },
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(6)
            expect(response.body).to.have.property('postId', 4)
            expect(response.body).to.have.property('name', 'update test/ comments')
            expect(response.body).to.have.property('email', 'testingapi@gmail.com')
            expect(response.body).to.have.property('body', 'testtesttesttest testtest test testtest test test testtest')
        })

    });

// -----------------ALBUMS--------------------

    it('Update a specific element from albums', () => {

        cy.request({
            method: 'PATCH',
            url: '/albums/5',
            body: {
                title: 'update test/ albums',
            },
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(5)
            expect(response.body).to.have.property('title', 'update test/ albums')
        })

    });
    
// -----------------PHOTOS--------------------

    it('Update a specific element from photos', () => {

        cy.request({
            method: 'PATCH',
            url: '/photos/21',
            body: {
                title: 'update test/ photos',
                url: 'https://via.placeholder.com/600/92c952',
                thumbnailUrl: 'https://via.placeholder.com/150/92c952',
            },
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(21)
            expect(response.body).to.have.property('title', 'update test/ photos')
            expect(response.body).to.have.property('url', 'https://via.placeholder.com/600/92c952')
            expect(response.body).to.have.property('thumbnailUrl', 'https://via.placeholder.com/150/92c952')
        })

    });

// -----------------TODOS--------------------

    it('Update a specific element from todos', () => {

        cy.request({
            method: 'PATCH',
            url: '/todos/57',
            body: {
                userId: 10,
                title: 'update test/ todos',
                completed: true
            },
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(57)
            expect(response.body).to.have.property('userId', 10)
            expect(response.body).to.have.property('title', 'update test/ todos')
            expect(response.body).to.have.property('completed', true)
        })

    });

// -----------------USERS--------------------

    it('Update a specific element from users', () => {

        cy.request({
            method: 'PATCH',
            url: '/todos/57',
            body: {
                id: 7,
                name: 'Vitória Amorim',
                username: 'AIROTIVBR',
                email: 'vitamorim4002@gmail.com',
                website: 'linktr.ee/vitoriamorim',
            },
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(7)
            expect(response.body).to.have.property('name', 'Vitória Amorim')
            expect(response.body).to.have.property('username', 'AIROTIVBR')
            expect(response.body).to.have.property('email', 'vitamorim4002@gmail.com')
            expect(response.body).to.have.property('website', 'linktr.ee/vitoriamorim')
        })

    });
});
