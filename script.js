document.addEventListener('DOMContentLoaded', function () {
    const scrollDownButton = document.getElementById('scroll-down-button');
    const menuButton = document.getElementById('menu-button');
    const navbar = document.querySelector('.navbar');

    scrollDownButton.addEventListener('click', function () {
        document.body.style.overflow = 'auto';
        document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
    });

    menuButton.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    setTimeout(function () {
        scrollDownButton.style.display = 'block';
    }, 2000);
});
