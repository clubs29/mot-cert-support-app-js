const { $ } = require('@wdio/globals')
const Page = require('./page');

class ProjectsPage extends Page {
   
    get cardTitle() { return $('.card-title') }
    get projectLink() { return $('a[href="#/projects/1"]') }

}

module.exports = new ProjectsPage();
