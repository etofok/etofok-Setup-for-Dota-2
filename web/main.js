document.addEventListener('DOMContentLoaded', function() {

    /* listen to FAQ dropdown buttons */
    const questionBtns = document.querySelectorAll('.question-button');

    questionBtns.forEach(function(btn) {

        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            //answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

            if (answer.classList.contains("show")) {
              answer.classList.remove("show");
            } else {
              answer.classList.add("show");
            }

        });
    });



    /* remove context menu for .nocontextmenu elements */
    const nocontextmenus = document.querySelectorAll('.nocontextmenu');
    nocontextmenus.forEach(element => { 

       element.addEventListener('contextmenu', () => {
          event.preventDefault();
       })

    });

}); // DOMContentLoaded

