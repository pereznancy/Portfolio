'use strict'

var myProjects = [];

//this takes the place of the usual constructor.
//instead of using this.name, this.wtv, this will automatically capture that
function Project (rawProjectObj) {
  var keys = Object.keys(rawProjectObj);
  for (var index = 0; index <keys.length; index++) {
    var key = keys[index];
    var value = rawProjectObj[key];
    this[key]=value;
    }
  }


//this should duplicate the template and fill it in with the finished projects
Project.prototype.toHtml = function() {
  var $addProject = $('.template-article').clone();
  $addProject.removeClass('template-article');
  $addProject.addClass('my-project');
  $addProject.attr('id', this.id);
  $addProject.find('h2').html(this.name);
  $addProject.find('h5').html(this.date);
  $addProject.find('#image1').attr('src', this.image1);
  $addProject.find('#image2').attr('src', this.image2);
  $addProject.find('p').html(this.description);
  return $addProject;
};


finishedProjects.forEach( function(project) {
  myProjects.push(new Project(project));
});

//appending wtv is in the myProjects array to the "projects" section
myProjects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});


// function renderMenu() {
//   var projectList = document.getElementById('projects');
//   for (var index = 0; index < projects.length; index++) {
//     projects.innerHTML += `<h2 data-project-id="${projects[index].id}">${projects[index].title</h2>}`
//   }
// }
