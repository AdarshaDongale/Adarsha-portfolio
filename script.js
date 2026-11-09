document.addEventListener("DOMContentLoaded", function () {

    // Welcome message in browser console
    console.log("Welcome to Adarsha Dongale's Portfolio!");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const navbar = document.querySelector(".navbar-collapse");

            if (navbar.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbar);

                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

});