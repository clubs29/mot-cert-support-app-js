const { $ } = require('@wdio/globals')
const Page = require('./page');

class ProjectsPage extends Page {
 
   get cardTitle() { return $('.card-title') }
   get manageProjectsLink() { return $('a[href="#/manage/projects"]') }

}

module.exports = new ProjectsPage();