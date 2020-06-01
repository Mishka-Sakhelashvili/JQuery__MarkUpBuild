var acc = document.getElementsByClassName("accordionBtn");
var slides = $('.slides');
var count = document.getElementsByClassName('slider').length;
var currentSlide = 1;
var containerWidth = $('.slider').width() + 30;
var sliders = document.getElementsByClassName('slider');
var slideIndex = 2;
var i;
var motxovnadi = document.querySelector('.motxovnadi');


function dotLength(){
    var dotContainer = document.getElementById('dotContainer');
    for(i =0; i < count; i++){
      var dot = document.createElement("span");
      dot.classList.add("dot");
      dotContainer.appendChild(dot);
    }
}
dotLength();

if(window.innerWidth > 1100){
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    var i;
    var dots = document.getElementsByClassName('dot');
    
    if (n > sliders.length-1) {
      slideIndex = 2
    }    
    if (n < 2) {
      slideIndex = sliders.length-1
    }
    for (i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove("activeSlider"); 
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dotActive", "");
    }
    sliders[slideIndex-1].classList.add("activeSlider"); 
    dots[slideIndex-1].className += " dotActive";
  }

  function lent(){
    $('.slides').width(count * containerWidth);
    $('.akonk').on('click', function(){
      if( $(this).hasClass('arrRight')){
        goSlides(currentSlide + 1); 
      }
      else{
        goSlides(currentSlide - 1);
      }
      });
  };
lent();
    
  function goSlides(n){
      if(n > count-2){
        n = 1;
      }
      if(n < 1){
        n = count-2;
      }
      slides.animate({left: -containerWidth * (n-1)}, 400, function(){
        currentSlide = n; 
      });
  }
}
else{
  var slideIndex = 1;
  function lent(){
    $('.slides').width(count * containerWidth);
    $('.akonk').on('click', function(){
      if( $(this).hasClass('arrRight')){
        goSlides(currentSlide + 1); 
      }
      else{
        goSlides(currentSlide - 1);
      }
      });
    };
    lent();
    
    function goSlides(n){
      if(n > count){
        n = 1;
      }
      if(n < 1){
        n = count;
      }
      slides.animate({left: -containerWidth * (n-1)}, 400, function(){
        currentSlide = n; 
      });
    }
    showSlides(slideIndex);
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function showSlides(n) {
      var i;
      var dots = document.getElementsByClassName('dot');
      if (n > sliders.length) {
        slideIndex = 1;
      }    
      if (n < 1) {
        slideIndex = sliders.length
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotActive", "");
      }
      dots[slideIndex-1].className += " dotActive";
    }
}

setInterval(function(){
  if(motxovnadi.style.opacity == '1'){
    motxovnadi.style.opacity = '0';
  }else{
    motxovnadi.style.opacity = '1';
} 
}, 3000);

function menuIconShow() {
  document.getElementById('menuIconChange').classList.toggle("changeX");
  var menuIcon = document.getElementById("myTopnav");
  if (menuIcon.className === "topnav") {
    menuIcon.className += " responsive";
  } else {
    menuIcon.className = "topnav";
  }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelContent = this.nextElementSibling;
    if (panelContent.style.maxHeight) {
        panelContent.style.maxHeight = null;
    } else {
        panelContent.style.maxHeight = panelContent.scrollHeight + "px";
    } 
});
}
