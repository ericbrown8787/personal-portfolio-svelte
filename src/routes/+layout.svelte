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
    --main-margin: 3em;
    --first-level-text-color: #ffffff;
    --second-level-text-color: #fdba74;
    --third-level-text-color: #cccccc;
    --panel-background-color: rgb(0, 0, 0, 0.8);
    /* --main-text-color: #042f2e; */
    --main-text-color: whitesmoke;
    --main-background-color: #123;
    --text-background-color: #112;
    /* --main-background-rgb: 240, 253, 250; */
    --accent-color: #f472b6;
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
    line-height: 2;
    /* line-height: clamp(4.688rem, 3.349vw + 3.821rem, 6.5rem); */
  }
  :global(:not(h1, h2, h3, h4)) {
    font-size: clamp(1rem, 0.231vw + 0.94rem, 1.125rem);
  }

  :global(h1, h1 span) {
    color: var(--first-level-text-color);
    font-size: clamp(2.5rem, 1.155vw + 3rem, 3.5rem); /*40-50px*/
  }
  :global(h2) {
    color: var(--second-level-text-color);
    font-size: clamp(1.875rem, 0.577vw + 1.726rem, 2.188rem); /*20-35px*/
  }
  :global(h3) {
    font-size: clamp(1rem, 0.231vw + 0.94rem, 1.125rem);
  }

  :global(a) {
    text-underline-offset: 0.4rem;
    font-variation-settings: "wght" 450;
    color: var(--first-level-text-color);
  }

  :global(a:before) {
    display: inline-block;
    font-size: calc(clamp(1rem, 0.231vw + 0.94rem, 1.125rem) + 3px);
    text-decoration: none;
    content: "=>";
    color: var(--accent-color);
    transition: opacity calc(var(--stage-1-time) * 0.5) ease-in;
    opacity: 0;
  }

  :global(a:hover:before) {
    transition: opacity calc(var(--stage-1-time) * 0.5) ease-in;
    opacity: 1;
  }
  main {
    margin-block-start: var(--main-margin);
    margin-block-end: var(--main-margin);
  }
  @media (max-width: 768px) {
    main {
      /* Ensure header does not cover page content when scrolled to top in mobile view*/
      margin-block-start: calc(
        var(--header-block-padding) * 2 + var(--header-max-height)
      );
    }
  }

  /* Page Background */
  .app {
    background-color: var(--main-background-color);
    overflow: hidden;
  }
  /* Page Layout */
  .app {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
  }
</style>
