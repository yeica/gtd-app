// Get the modal
let modal = document.getElementById("addIdeaModal");
let modal2 = document.getElementById("updateProfileInfoModal");
let modal3 = document.getElementById("gtdInfoModal");
let modal4 = document.getElementById("aboutIdeaModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    }
}
