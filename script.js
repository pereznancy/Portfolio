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
  var templateFiller = Handlebars.compile($('#template-article').html());
  var filledTemplate = templateFiller(this);
  return filledTemplate;
};


finishedProjects.forEach( function(project) {
  myProjects.push(new Project(project));
});

//appending wtv is in the myProjects array to the "projects" section
myProjects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

$(document).ready(function(){
  Project.prototype.toHtml();
});

//manual slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//if menu clicked, X will show so user knows to exit menu
$('.icon-menu').on('click', function(event) {
  $(this).toggleClass('icon-cross');
})

$('#main-menu a').on('click', function () {
  let choice = $(this).data('tab');
  $('.tabs').hide();
  $('#' + choice).fadeIn(500);
})

$(document).ready(function() {
  $('.tabs').hide();
  $('#hi').show();
})
