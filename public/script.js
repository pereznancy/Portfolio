'use strict'

//this takes the place of the usual constructor.
//instead of using this.name, this.wtv, this will automatically capture that
function Project (rawProjectObj) {
  const keys = Object.keys(rawProjectObj);
  for (var index = 0; index <keys.length; index++) {
    var key = keys[index];
    var value = rawProjectObj[key];
    this[key]=value;
    }
  }

  Project.all = [];


//this should duplicate the template and fill it in with the finished projects
Project.prototype.toHtml = function() {
  var templateFiller = Handlebars.compile($('#template-article').html());
  var filledTemplate = templateFiller(this);
  return filledTemplate;
};

Project.loadAll = function(rawData) {
  rawData.forEach( function(project) {
    Project.all.push(new Project(project));
  }); 
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });
}



Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
  } else {
    $.ajax({
      type:'GET',
      url: './finishedProjects.json',
      success: function(finishedProjects) {
        localStorage.setItem("rawData", JSON.stringify(finishedProjects));
        Project.loadAll(finishedProjects);
      },
      error: function(err){
        console.log(err);
      }
    })
  }
}


//appending wtv is in the myProjects array to the "projects" section


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
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
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
