var navLinks = document.querySelectorAll(".nav-link");

// Add functionality to nav-link class
for(var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        for(var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}