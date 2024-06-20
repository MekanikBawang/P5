document.addEventListener('DOMContentLoaded', function() {
    Swal.fire({
        title: 'Selamat Datang Di Web/Blogger Kami &#128527;&#128075;',
        text: 'Maap baru 1 postingan blog :v',
        icon: 'info',
        confirmButtonText: 'Ok Bre&nbsp;&#128076; '
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Jangan lupa Lihat Juga Sosial Media Kami iaaak &#128568; :V',
                text: ' Ige ama Wea ya :v ',
                icon: 'success',
                confirmButtonText: 'Done Bang :V'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Gausah Basa Basi\nLangsung Baee :v',
                        text: '!!!!',
                        icon: 'warning',
                        confirmButtonText: 'SIIP&#128077;'
                    });
                }
            });
        }
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

// Event listener untuk klik tombol toggle
menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('open');
});

