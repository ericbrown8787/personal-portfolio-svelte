<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  /* CSS Global Variables */
  :global(:root) {
    --panel-background-color: rgb(0, 0, 0, 0.8);
    --main-text-color: #042f2e;
    --main-background-color: #f0fdfa;
    --accent-color: #f472b6;
    --first-button-color: #00ff00;
    --second-button-color: #ff0000;
    --third-button-color: #0000ff;
    --placeholder-text: whitesmoke;
    --accent-color: #f472b6;
  }

  @font-face {
    font-family: "Fira Code";
    src: url("/fonts/FiraCode-VariableFont_wght.ttf");
  }

  /* CSS Global Reset */
  :global(*, *::before, *::after) {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Fira Code", sans-serif;
  }

  :global(:not(h1, h2, h3, h4, h5, dt)) {
    line-height: 1.5;
  }

  :global(a) {
    text-decoration: none;
    color: var(--main-text-color);
  }

  :global(a:visited) {
    text-decoration: none;
    color: var(--main-text-color);
  }

  main {
    margin-block-start: 8em;
  }
  /* Page Background */
  .app {
    background-color: var(--main-background-color);
    overflow: hidden;
  }
  /* Page Layout */
  .app {
    min-height: 100vh;
  }
</style>
