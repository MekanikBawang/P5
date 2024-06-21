function zoomImage(img) {
    var container = img.closest('.kartu').querySelector('.zoom-container');
    var zoomedImage = container.querySelector('img');
    zoomedImage.src = img.src;
    container.style.display = 'flex';
}

function closeZoom(closeBtn) {
    var container = closeBtn.closest('.zoom-container');
    container.style.display = 'none';
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}