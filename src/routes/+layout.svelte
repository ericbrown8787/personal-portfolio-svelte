<script>
    import Header from './Header.svelte'
    import Footer from './Footer.svelte'
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
:global(:root){
    --main-text-color: #042F2E;
    --main-background-color: #F0FDFA; 
    --accent-color: #f472b6;
    --first-button-color: #00FF00;
    --second-button-color:  #FF0000;
    --third-button-color: #0000FF;
    --placeholder-text: whitesmoke;
}

/* CSS Global Reset */
:global(*,
*::before,
*::after ){
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: monospace;
}
:global(a) {
  text-decoration: none;
  color: var(--main-text-color);
}

:global(a:visited) {
  text-decoration: none;
  color: var(--main-text-color);
}

:global(nav ul) {
  list-style: none;
}

:global(nav ul li a) {
  text-decoration: none;
}

/* Page Background */
.app{
    background-color: var(--main-background-color);
}

/* Page Layout */
.app{
    min-height: 100vh;
}

</style>