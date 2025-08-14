document.addEventListener('DOMContentLoaded', function() {

    /* listen to FAQ dropdown buttons */
    const questionBtns = document.querySelectorAll('.question-button');

    questionBtns.forEach(function(btn) {

        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;

            if (answer.classList.contains("show")) {
              answer.classList.remove("show");
            } else {
              answer.classList.add("show");
            }

        });
    });


    document.querySelectorAll("img").forEach(img => {
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }
    });


    /* remove context menu for .nocontextmenu elements */
    const nocontextmenus = document.querySelectorAll('.nocontextmenu');
    nocontextmenus.forEach(element => { 

       element.addEventListener('contextmenu', () => {
          event.preventDefault();
          console.log("tik");
       })

    });




}); // DOMContentLoaded





/* magnifiable img */
document.addEventListener('DOMContentLoaded', () => {
    const magnifiableImages = document.querySelectorAll('.magnifiable');
    let overlay = document.querySelector('.magnify-overlay');
    let overlayImg = null; // store img element inside the overlay

    // create the overlay
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('magnify-overlay');
        document.body.appendChild(overlay);

        overlayImg = document.createElement('img');
        overlay.appendChild(overlayImg);
    } else {
        overlayImg = overlay.querySelector('img');
        if (!overlayImg) {
            overlayImg = document.createElement('img');
            overlay.appendChild(overlayImg);
        }
    }

    magnifiableImages.forEach(img => {
        img.addEventListener('click', () => {
            overlayImg.src = img.src;
            overlay.classList.add('active');
        });
    });

    // close the overlay on click
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        setTimeout(() => { overlayImg.src = ''; }, 300);
    });

    // escape to close
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        }
    });
});