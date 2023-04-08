let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

document.getElementById("image1").addEventListener("click", function() {
    if (image2.style.display == "block") {
        image2.style.display = "none";
        image3.style.display = "none"

    }
    else { 
        image2.style.display = "block";
        image3.style.display = "block";

    }
  });
