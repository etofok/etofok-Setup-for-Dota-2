document.addEventListener('click', (event) => {
    const img = event.target.closest('.magnifiable');
    if (!img) return;

    // Ensure overlay exists
    let overlay = document.querySelector('.magnify-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('magnify-overlay');
        document.body.appendChild(overlay);

        const overlayImg = document.createElement('img');
        overlay.appendChild(overlayImg);
    }

    const overlayImg = overlay.querySelector('img');
    overlayImg.src = img.src;
    overlay.classList.add('active');
});

// Close overlay
document.addEventListener('click', (event) => {
    const overlay = document.querySelector('.magnify-overlay');
    if (!overlay) return;

    if (event.target === overlay) {
        overlay.classList.remove('active');
        setTimeout(() => { overlay.querySelector('img').src = ''; }, 300);
    }
});

// Escape to close
document.addEventListener('keydown', (event) => {
    const overlay = document.querySelector('.magnify-overlay');
    if (event.key === 'Escape' && overlay?.classList.contains('active')) {
        overlay.classList.remove('active');
    }
});