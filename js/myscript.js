// Get Modal Element
var modal = document.getElementById('simpleModal');
// Get Open Modal Button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener ("click", openModal);
// Listen for close click
closeBtn.addEventListener ("click", closeModal);
// Listen for window click
window.addEventListener ("click", clickOutside);

// Function to open Modal
function openModal() {
    modal.style.display = 'block';
}
// Function to close Modal
function closeModal () {
    modal.style.display = 'none';
}
// Function to close Modal By window
function clickOutside (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}