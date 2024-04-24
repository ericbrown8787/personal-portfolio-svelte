<script>
  export const year = new Date().getFullYear();
</script>

<footer class="page-footer">
  <nav class="footer-nav">
    <ul class="footer-nav__links">
      <li class="footer-nav__link">
        <a href="https://github.com/ericbrown8787">GitHub</a>
      </li>
      <li class="footer-nav__link">
        <a href="https://codepen.io/ericbrown8787">CodePen</a>
      </li>
      <li class="footer-nav__link">
        <a href="https://jackalopetracks.itch.io/">Itch.io</a>
      </li>
      <li class="footer-nav__link">
        <a href="https://www.linkedin.com/in/ericbrown8787/">LinkedIn</a>
      </li>
    </ul>
  </nav>
  <p class="copyright" id="copyright">Copyright {year} Eric Brown</p>
</footer>

<style>
  /* Page Footer */
  .page-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-nav__links {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
  }
</style>
