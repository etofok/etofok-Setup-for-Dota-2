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
      rootMargin: "400px",
      threshold: 0.1
    });

    lazySections.forEach(section => observer.observe(section));
    
})();
