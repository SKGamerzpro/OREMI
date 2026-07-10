```javascript
// ==========================
// OREMI v1.0
// JavaScript
// ==========================

// About SE Popup
const popup = document.getElementById("sePopup");

function showSEInfo() {
    popup.style.display = "flex";
}

function closeSEInfo() {
    popup.style.display = "none";
}

// Close popup when clicking outside it
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

// Welcome message (shown once when the page loads)
window.addEventListener("load", () => {
    console.log("Welcome to Oremi!");
});

// Card hover animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});

// Smooth scrolling for future navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
```
