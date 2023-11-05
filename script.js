document.addEventListener('DOMContentLoaded', function () {
    const scrollDownButton = document.getElementById('scroll-down-button');

    scrollDownButton.addEventListener('click', function () {
        document.body.style.overflow = 'auto';
        document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
    });

    setTimeout(function () {
        scrollDownButton.style.display = 'block';
    }, 2000);
});
