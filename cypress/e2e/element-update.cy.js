///<reference types="cypress" />

describe('Request and update a specific element', () => {

    it('Update a specific element from posts', () => {
        cy.request({
            method: 'PUT',
            url: '/posts/24',
            body: {
                id: 24,
                title: 'update test',
                body: 'testtesttesttest testtest test testtest test test testtest',
                userId: 2,
            },
        })
        .then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(24)
            expect(response.body).to.have.property('userId', 2)
            expect(response.body).to.have.property('title', 'update test')
            expect(response.body).to.have.property('body', 'testtesttesttest testtest test testtest test test testtest')
        })
    });

    it('Update a specific element from comments', () => {

    });

    it('Update a specific element from albums', () => {

    });

    it('Update a specific element from photos', () => {

    });

    it('Update a specific element from todos', () => {

    });

    it('Update a specific element from users', () => {

    });
});
