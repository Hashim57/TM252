
document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to the EduMax Interactive Website!");
    
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", () => {
            alert("You clicked on " + img.alt);
        });
    });
});
