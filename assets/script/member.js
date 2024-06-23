function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Menggunakan pengguliran halus
    });
}

// Tampilkan tombol saat digulir
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

// Event listener untuk klik tombol toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('open');
});
