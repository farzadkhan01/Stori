const toggleFunctionality = function () {
    const toggleBtn = document.getElementById('toggle');

    const menuContainer = document.querySelector('.toggle-pages');

    const bars = document.querySelectorAll('.bar');

    if (toggleBtn && menuContainer) {
        toggleBtn.addEventListener('click', function () {
            bars.forEach(bar => bar.classList.toggle('show'));
            menuContainer.classList.toggle('show');
        });

        if (menuContainer.classList.contains('show')) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'auto';
        }

    } else {
        console.error("Missing elements: Check if 'toggle' ID and 'toggle-pages' class exist.");
    }
};

toggleFunctionality();
