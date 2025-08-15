(() => {
    const lazySections = document.querySelectorAll(".lazy-section");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const src = el.getAttribute("data-src");

          if (src) {
            fetch(src)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
              })
              .then(html => {
                el.innerHTML = html;
                el.classList.add("loaded");
                obs.unobserve(el);
              })
              .catch(err => {
                console.error(`Error loading ${src}:`, err);
                el.innerHTML = `<p style="color:red;">Failed to load content.</p>`;
              });
          }
        }
      });
    }, {
      rootMargin: "600px",
      threshold: 0.1
    });

    lazySections.forEach(section => observer.observe(section));
    
})();


function loadLazySection(el) {
    const url = el.dataset.src;
    if (!url) return;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
            return res.text();
        })
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            el.replaceWith(...tempDiv.childNodes);
        })
        .catch(err => console.error(`Failed to load ${url}:`, err));
}
