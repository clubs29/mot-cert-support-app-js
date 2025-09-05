const { $ } = require('@wdio/globals')
const Page = require('./page');

class ManageProjectsPage extends Page {
 
   get projectNameInput() { return $('#name') }
   get projectDescriptionInput() { return $('#description') }
   get submitButton() { return $('.btn-primary') }
   get projects() { return $$('tbody tr') }

}

module.exports = new ManageProjectsPage();