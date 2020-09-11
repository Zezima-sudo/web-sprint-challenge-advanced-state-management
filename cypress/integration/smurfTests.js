const { initialState } = require("../../smurfs/src/reducers")

describe('Runs the app', function() {
    it('visits port 3000', function() {
        cy.visit('http://localhost:3000/')
    })
})

describe('Clears cookies', function(){
    it('should have nothing stored in memory', function(){
        cy.clearCookies()

    })
})