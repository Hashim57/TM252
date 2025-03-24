
document.addEventListener("DOMContentLoaded", function () {
    const contrastToggle = document.getElementById("toggle-contrast");
    if (contrastToggle) {
        contrastToggle.addEventListener("click", function () {
            document.body.classList.toggle("high-contrast");
        });
    }
});



    

