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
    --first-level-text-color: #ffffff;
    --second-level-text-color: #fdba74;
    --third-level-text-color: #cccccc;
    --panel-background-color: rgb(0, 0, 0, 0.8);
    /* --main-text-color: #042f2e; */
    --main-text-color: whitesmoke;
    --main-background-color: #112;
    /* --main-background-color: rgb(var(--main-background-rgb)); */
    --main-background-rgb: 240, 253, 250;
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
    color: var(--third-level-text-color);
    font-family: "Fira Code", sans-serif;
    line-height: 1.6;
    /* line-height: clamp(4.688rem, 3.349vw + 3.821rem, 6.5rem); */
  }
  :global(:not(h1, h2, h3, h4)) {
    font-size: clamp(1rem, 0.231vw + 0.94rem, 1.125rem);
  }

  :global(h1, h1 span) {
    color: var(--first-level-text-color);
    font-size: clamp(2.5rem, 1.155vw + 2.201rem, 3.125rem); /*40-50px*/
  }
  :global(h2) {
    color: var(--second-level-text-color);
    font-size: clamp(1.875rem, 0.577vw + 1.726rem, 2.188rem); /*20-35px*/
  }
  :global(h3) {
    font-size: clamp(1.25rem, 1.155vw + 0.951rem, 1.875rem);
  }

  main {
    margin-block-start: 4em;
  }
  /* Page Background */
  .app {
    background-color: var(--main-background-color);
    overflow: hidden;
  }
  /* Page Layout */
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }
</style>
