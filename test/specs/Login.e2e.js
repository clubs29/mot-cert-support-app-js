const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page.js')
const ProjectsPage = require('../pageobjects/projects.page.js')
const dataBuilder = require('../support/databuilder.js')

describe('My Login application', () => {
    
    it('should login with valid credentials', async () => {
        let credentials = await dataBuilder.getUserCredentials("user")

        await browser.url(`http://localhost:3000/#/login`)

     
        await LoginPage.emailInput.setValue(credentials.email)
        await LoginPage.passwordInput.setValue(credentials.password)
        await LoginPage.loginButton.click()

        const element = await ProjectsPage.projectLink
        await expect(element).toHaveText('Project 1')

        const element2 = await $('.col-10')
       await expect(element2).toHaveText('Welcome to Timesheet manager')

       const element3 = await $('.card-title')
       await expect(element3).toHaveText('Projects')
    })

})