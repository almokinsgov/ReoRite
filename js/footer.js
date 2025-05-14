document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.className = "footer-banner";
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-section logo-section">
        <img src="https://reorite.nz/assets/logo_tp_bg.png" alt="Reo Rite Logo" class="footer-logo" />
      </div>
      <div class="footer-section">
        <h4>Learn More</h4>
        <ul>
          <li><a href="https://github.com/almokinsgov/ReoRite/wiki" target="_self">📄 Wiki</a></li>
          <li><a href="https://reorite.nz/compare" target="_self">🔊 Comparison Page</a></li>
          <li><a href="https://drive.google.com/drive/folders/1eWqhweSHGdlaSAIIxqr0xQ9kK-32VJzN" target="_blank">📄 Research Paper</a></li>
          <li><a href="https://github.com/almokinsgov/ReoRite" target="_blank">💻 GitHub Repo</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Coming Soon</h4>
        <ul>
          <li>🔎 Public API</li>
          <li>📢 Audio Playback Tools</li>
          <li>📘 Pronunciation Guide</li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:amorangim@hotmail.com">📬 Email Amorangi</a></li>
          <li><a href="https://reorite.nz" target="_self">🌐 ReoRite.nz</a></li>
          <li><a href="https://forms.gle/8BLGX1gi6eQzUNbW" target="_blank">💬 Share feedback</a></li>

        </ul>
      </div>
    </div>
    <div class="footer-note">© 2025 Amorangi Mathews – ReoRite.nz</div>
  `;
  document.body.appendChild(footer);
});
