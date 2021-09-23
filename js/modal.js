// Get the modal
let modal = document.getElementById("addIdeaModal");
let modal2 = document.getElementById("updateProfileInfoModal");
let modal3 = document.getElementById("gtdInfoModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    }
}
