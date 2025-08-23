document.addEventListener('DOMContentLoaded', async () => {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  try {
    if (headerPlaceholder) {
      const headerResp = await fetch('partials/header.html');
      const headerHtml = await headerResp.text();
      headerPlaceholder.innerHTML = headerHtml;
    }
    if (footerPlaceholder) {
      const footerResp = await fetch('partials/footer.html');
      const footerHtml = await footerResp.text();
      footerPlaceholder.innerHTML = footerHtml;
    }
    document.dispatchEvent(new Event('partialsLoaded'));
  } catch (err) {
    console.error('Failed to load partials', err);
  }
});
