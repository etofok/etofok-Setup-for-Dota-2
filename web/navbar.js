document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // --- Navbar scroll handling ---
    function handleScroll() {
        if (window.scrollY >= 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user loads the page scrolled down
    handleScroll();


    // --- Handle back/forward navigation ---
    window.addEventListener('popstate', (event) => {
        const panel = document.getElementById('donateOverlay');

        if (panel.style.display === 'flex' && (!event.state || !event.state.panelOpen)) {
            panel.style.display = 'none';
        }
    });
});


// --- Toggle Donate Panel ---
function toggleDonatePanel(event) {
    event.preventDefault();
    const panel = document.getElementById('donateOverlay');

    if (panel.style.display === 'flex') {
        panel.style.display = 'none';

        // Remove panelOpen from history state if present
        if (history.state && history.state.panelOpen) {
            history.replaceState({}, document.title, window.location.pathname + window.location.search);
        }
    } else {
        panel.style.display = 'flex';

        // Push state for browser history
        history.pushState({ panelOpen: true }, 'Donate Panel Open', '#donate-panel-open');
    }
}


// --- Event delegation for clicks on overlay ---
document.addEventListener('click', (event) => {
    const overlay = event.target.closest('#donateOverlay');
    if (overlay) {
        toggleDonatePanel(event);
    }
});
