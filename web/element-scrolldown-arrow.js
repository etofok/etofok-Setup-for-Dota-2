document.addEventListener('DOMContentLoaded', function() {

    const scrollarrowhero = document.getElementById('scroll-arrow-hero');
    if (!scrollarrowhero) {
        return
    }

    const scrollToLayout = document.getElementById('scroll-to-layout');
    if (!scrollToLayout) {
        return
    }

    scrollarrowhero.addEventListener('click', () => {
      scrollToLayout.scrollIntoView({ behavior: 'smooth' });
    });    

});


document.addEventListener('DOMContentLoaded', function() {

    const logonavbar = document.getElementById('logo-navbar');
    if (!logonavbar) {
        return
    }
    const scrollToTop = document.getElementById('scroll-to-top');
    if (!scrollToTop) {
        return
    }
    logonavbar.addEventListener('click', () => {
        scrollToTop.scrollIntoView({ behavior: 'smooth' });
    });

});

function scrollToSection(section) {
    section.scrollIntoView({ behavior: 'smooth' });
}