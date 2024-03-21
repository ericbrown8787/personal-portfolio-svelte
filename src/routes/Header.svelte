<script>
    import logo from '$lib/images/logo.svg'
</script>    
    <header class="page-header">
      <article class="logo">
        <img src="{logo}" alt="My logo" class="logo__image" />
        <h1 class="logo__heading">Eric Brown</h1>
      </article>
      <label for="hamburger-menu" class="hamburger-menu-input">
        <img class="nav-open-input" src="{logo}" alt="" />
        <p class="nav-close-input">X</p>
      </label>
      <input
        type="checkbox"
        name="hamburger-menu"
        id="hamburger-menu"
        unchecked
      />

      <nav class="site-nav">
        <ul class="site-nav-links">
          <li class="site-nav-links__link">
            <a href="/">Home</a>
          </li>
          <li class="site-nav-links__link">
            <a href="/about">About</a>
          </li>
          <li class="site-nav-links__link">
            <a href="/">Portfolio</a>
          </li>
          <li class="site-nav-links__link">
            <a href="/">Resume</a>
          </li>
          <li class="site-nav-links__link">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <style>
        /* Resets */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

a {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
  color: black;
}

a:hover {
  font-weight: 400;
}

nav ul {
  list-style: none;
}

nav ul li a {
  text-decoration: none;
}

/* Full page */
body {
  background-color: #f0fdfa;
}

main {
  padding: 1rem;
}

/* Page Header */
.logo {
  display: flex;
  align-items: center;
}
.page-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  /* background-color: rgb(0, 0, 0, 0.1); */
  padding-inline: 10px;
  padding-block: 10px;
  border-block-end: 1px solid #f472b6;
}

.site-nav {
  position: absolute;
  top: -100px;
  grid-row: 2;
  grid-column: span 2;
  text-align: center;
  padding: 20px;
}

.site-nav-links {
  display: none;
  flex-direction: column;
  gap: 10px;
}

.site-nav-links__link {
  font-size: 1.3rem;
}

.logo__image {
  max-width: 50px;
}

/* Hamburger Menu for mobile nav*/
#hamburger-menu {
  display: none;
}

.hamburger-menu-input {
  justify-self: right;
}

.nav-open-input {
  width: 40px;
}

.nav-close-input {
  display: none;
  width: 40px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.page-header:has(#hamburger-menu:checked) .site-nav {
  position: unset;
}

.page-header:has(#hamburger-menu:checked) .site-nav .site-nav-links {
  display: flex;
}

.page-header:has(#hamburger-menu:checked)
  .hamburger-menu-input
  .nav-close-input {
  display: block;
}

.page-header:has(#hamburger-menu:checked)
  .hamburger-menu-input
  .nav-open-input {
  display: None;
}

/* Page Footer */
.page-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-nav {
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .hamburger-menu-input {
    display: none;
  }
  .site-nav {
    position: unset;
    grid-row: 1;
    grid-column: 2;
  }
  .site-nav-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}
    </style>