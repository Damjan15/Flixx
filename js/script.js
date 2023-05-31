const global = {
    currentPage: window.location.pathname
}

// Initialize Application (Routes)
function init() {
    switch (global.currentPage) {
        case "/":
        case "/index.html":
            console.log("Homepage - Movies");
            break;
        case "/shows.html":
            console.log("Shows");
            break;
        case "/movie-details.html":
            console.log("Movies Details");
            break;
        case "/tv-details.html":
            console.log("TV Details");
            break;
        case "/search.html":
            console.log("Search Page");
            break;
        default:
            break;
    }

    highlightActiveLink();
}

// Highlight Active Link
function highlightActiveLink() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    })
}


document.addEventListener("DOMContentLoaded", init);