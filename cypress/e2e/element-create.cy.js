///<reference types="cypress" />

describe('Request and create a new element', () => {
    it('Create a new element',()=>{
        cy.request({
            method : 'POST',
            url : 'https://jsonplaceholder.typicode.com/posts',
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
})