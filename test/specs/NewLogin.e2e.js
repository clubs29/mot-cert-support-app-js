const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const ProjectsPage = require('../pageobjects/projects.page')
const ManageProjectsPage = require('../pageobjects/manageProjects.page')

describe('My Login application', () => {

   beforeEach(async () => {
       await browser.reloadSession()

       await LoginPage.open("#/login")
       await LoginPage.emailInput.setValue("admin@test.com")
       await LoginPage.passwordInput.setValue("password123")
       await LoginPage.loginButton.click()
   });

   it('should login with valid credentials', async () => {
       const element = await ProjectsPage.cardTitle
       await expect(element).toHaveText('Projects')
   })

   it('should add a new project', async () => {
       await ProjectsPage.manageProjectsLink.click()

       await ManageProjectsPage.projectNameInput.setValue('Project 3')
       await ManageProjectsPage.projectDescriptionInput.setValue('Ate cake')
       await ManageProjectsPage.submitButton.click()

       const projects = await ManageProjectsPage.projects
       await expect(projects.length).toBe(3)
   });

})