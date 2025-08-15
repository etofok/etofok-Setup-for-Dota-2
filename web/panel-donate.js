document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.getElementById('placeholder-panel-donate');
  if (!placeholder) return;

  fetch('html/panel-donate.html')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.text();
    })
    .then(html => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        placeholder.replaceWith(...tempDiv.childNodes);
    })
    .catch(err => {
        console.error('Failed to load overlay:', err);
    });
});