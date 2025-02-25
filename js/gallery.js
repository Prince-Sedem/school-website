function openImage(element) {
    document.getElementById('overlayImage').src = element.src;
    document.getElementById('overlay').classList.remove('hidden');
}
function closeImage() {
    document.getElementById('overlay').classList.add('hidden');
}