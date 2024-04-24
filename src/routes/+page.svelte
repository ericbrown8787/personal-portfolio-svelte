<script>
  import Window from "./Window.svelte";
</script>

<article class="home">
  <Window>
    <h1>
      <span>Hi.</span>
      <span>I'm Eric Brown.</span>
    </h1>
    <p>
      I’m a recent graduate of Raritan Valley Community College and an aspiring
      software developer, UI designer and game developer. I love bringing
      creative projects to life with code.
    </p>
    <a href="/about">More about me</a>
    <img class="sprite menthe" src="/sprites/MENTHE.png" alt="MENTHE" />
    <!-- <img class="sprite radiccio" src="/sprites/RADICCIO.png" alt="RADICCIO" /> -->
    <!-- <img class="sprite frobert" src="/sprites/FROBERT.png" alt="FROBERT" /> -->
    <!-- <img
      class="sprite smokestack"
      src="/sprites/SMOKESTACK.png"
      alt="SMOKESTACK"
    /> -->
  </Window>
</article>

<style>
  .sprite {
    position: absolute;
    z-index: 500;
    height: 300px;
    width: 300px;
  }
  .menthe {
    bottom: 0;
    transform: translateY(250px);
  }
</style>
