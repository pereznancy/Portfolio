'use strict'

var myProjects = [];

function Project (rawProjectObj) {
  var keys = Object.keys(rawProjectObj);
  for (var index = 0; index <keys.length; index++) {
    var key = keys[index];
    var value = rawProjectObj[key];
    this[key]=value;
    }
  }

//   this.name = rawDataObj.name;
//   this.date = rawDataObj.date;
//   this.image = rawDataObj.image;
//   this.description = rawDataObj.description;
// };x

Project.prototype.toHtml = function() {
  var $addProject = $('#projects').clone();
  $addProject.removeClass('projects');
  $addProject.attr('id', this.id);
  $addProject.find('h2').html(this.name);
  $addProject.find('#projectImage').attr('src', this.image);
  $addProject.find('p').html(this.description);
  return $addProject;
};


finishedProjects.forEach(function(projectObject) {
  myProjects.push(new Project(projectObject));
});

myProjects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});


// function renderMenu() {
//   var projectList = document.getElementById('projects');
//   for (var index = 0; index < projects.length; index++) {
//     projects.innerHTML += `<h2 data-project-id="${projects[index].id}">${projects[index].title</h2>}`
//   }
// }
