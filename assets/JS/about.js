document.addEventListener("DOMContentLoaded", function () {
    const carouselEl = document.querySelector('#carouselExampleIndicators');
    const inner = carouselEl.querySelector('.carousel-inner');

    // 1. Manually initialize the Bootstrap Carousel immediately
    const bsCarousel = new bootstrap.Carousel(carouselEl);

    let isDown = false;
    let startX;
    let scrollLeft;
    let dragThreshold = 50;

    // 2. Mouse Down: Start tracking
    inner.addEventListener('mousedown', (e) => {
        isDown = true;
        inner.style.cursor = 'grabbing';
        startX = e.pageX - inner.offsetLeft;
    });

    // 3. Mouse Leave/Up: Calculate and Move
    inner.addEventListener('mouseleave', () => {
        isDown = false;
        inner.style.cursor = 'grab';
    });

    inner.addEventListener('mouseup', (e) => {
        if (!isDown) return;
        isDown = false;
        inner.style.cursor = 'grab';

        const endX = e.pageX - inner.offsetLeft;
        const distance = endX - startX;

        // Use the manual instance we created at the top
        if (distance < -dragThreshold) {
            bsCarousel.next(); // Dragged Left -> Next
        } else if (distance > dragThreshold) {
            bsCarousel.prev(); // Dragged Right -> Prev
        }
    });

    // 4. Prevent images from being "dragged" by the browser default
    inner.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });
});