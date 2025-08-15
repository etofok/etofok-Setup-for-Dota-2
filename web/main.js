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


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".lazy-section");
  const toc = document.getElementById("table-of-contents");

  sections.forEach((sec) => {
    const sectionName = sec.dataset.section; // e.g., section-0-preface
    if (!sectionName) return;

    // Only proceed if sectionName matches "section-" + digit
    if (!/^section-\d/.test(sectionName)) return;

    // Ensure section has an ID for linking
    if (!sec.id) {
      sec.id = sectionName;
    }

    // Remove "section-" and split number from text
    const cleanName = sectionName.replace(/^section-/, ""); // "0-preface"
    const [num, ...titleParts] = cleanName.split("-");
    const title = titleParts.join(" ");
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    // Create clickable list item
    const li = document.createElement("li");
    li.innerHTML = `<b>${num}.</b> <a href="#${sec.id}">${formattedTitle}</a>`;
    toc.appendChild(li);
  });
});