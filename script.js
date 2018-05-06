'use strict'

var myProjects = [];

function newProject (rawDataObj) {
  this.name = rawDataObj.name;
  this.date = rawDataObj.date;
  this.image = rawDataObj.image;
  this.description = rawDataObj.description;
};

newProject.prototype.toHtml = function() {
  var $addProject = $('.template').clone();
  $newProject.removeClass('template')
  $newProject.find('h2').html(this.name);
  $newProject.find('#projectImage').attr('src', this.image);
  $newProject.find('p').html(this.description);
  return $addProject;
};


finishedProjects.forEach(function(projectObject) {
  myProjects.push(new newProject(projectObject));
});

myProjects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
