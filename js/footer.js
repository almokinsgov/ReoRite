document.addEventListener("DOMContentLoaded", function () {
  const footerSection = document.createElement("section");
  footerSection.className = "footer-links";
  footerSection.innerHTML = `
    <section class="links" style="text-align:center; padding-top: 1rem;">
      <a href="https://github.com/almokinsgov/ReoRite/wiki" target="">📄 Check out the Wiki</a><br>
      <a href="https://reorite.nz/compare" target="">🔊 Hear the difference, check out the comparison page</a><br>
      🔎 <u>Try the API (coming soon)</u><br>
      <a href="https://drive.google.com/drive/folders/1eWqhweSHGdlaSAIIxqr0xQ9kK-32VJzN?usp=drive_link" target="_blank">📄 Read the Research Paper</a><br>
      <a href="https://github.com/almokinsgov/ReoRite" target="_blank">💻 GitHub Repository</a><br>
      <a href="mailto:amorangim@hotmail.com">📬 Contact</a><br>
      <img src="https://reorite.nz/assets/logo_tp_bg.png" alt="ReoRite Logo" class="logo" style="margin-top: 1rem;" />
    </section>
    <footer>
      <p>© 2024 Amorangi Mathews – ReoRite.nz</p>
    </footer>
  `;
  document.body.appendChild(footerSection);
});
