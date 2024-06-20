const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

// Event listener untuk klik tombol toggle
menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('open');
});

