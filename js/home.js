let funfact1 = document.getElementById("funfact1");
let funfact2 = document.getElementById("funfact2");
let funfact3 = document.getElementById("funfact3");
let funfact4 = document.getElementById("funfact4");
let funfact5 = document.getElementById("funfact5");


// document.getElementById("clicktosee").addEventListener("click", function() {
//     if (funfact1.style.display == "block") {
//         funfact1.style.display = "none";
//         funfact2.style.display = "none";
//         funfact3.style.display = "none";
//         funfact4.style.display = "none";
//         funfact5.style.display = "none";
//     }
//     else { 
//         funfact1.style.display = "block";
//         funfact2.style.display = "block";
//         funfact3.style.display = "block";
//         funfact4.style.display = "block";
//         funfact5.style.display = "block";
//     }
//   });

  const skipLink = document.querySelector('#skip-link');

  // skipLink.addEventListener('keydown', function(event) {
  //   if (event.keyCode === 9) { // tab key
  //     skipLink.style.position = 'static';
  //     skipLink.style.width = 'auto';
  //     skipLink.style.height = 'auto';
  //     skipLink.style.overflow = 'visible';
  //   }
  // });

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  
  console.log(slideIndex)
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
  console.log(dots)
}
  