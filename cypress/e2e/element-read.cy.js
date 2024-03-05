///<reference types="cypress" />

describe('Request and read elements',() => {

    it('Displaying all elements', () =>{
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.typicode.com/posts'
        })
        .then((response) =>{
            response.body.forEach(element => {
                cy.log(element.id)
                expect(response.status).to.equal(200)
                expect(element).to.have.property('userId')
                expect(element).to.have.property('id')
                expect(element).to.have.property('title')
                expect(element).to.have.property('body')
            })
        })
    })

    it('Displaying a specific element', () =>{
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.typicode.com/posts/5'
        })
        .then((response) =>{
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(5)
            expect(response.body).to.have.property('userId')
            expect(response.body).to.have.property('id')
             expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('body')
        })
    })
})