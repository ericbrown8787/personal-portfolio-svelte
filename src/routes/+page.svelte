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
  </Window>
  <img class="sprite menthe" src="/sprites/MENTHE.png" alt="MENTHE" />
  <img class="sprite radiccio" src="/sprites/RADICCIO.png" alt="RADICCIO" />
  <img class="sprite frobert" src="/sprites/FROBERT.png" alt="FROBERT" />
  <img
    class="sprite smokestack"
    src="/sprites/SMOKESTACK.png"
    alt="SMOKESTACK"
  />
</article>

<style>
  article {
    padding: 20px;
    overflow: hidden;
  }
  .sprite {
    position: fixed;
    height: 200px;
    width: 200px;
    z-index: 0;
  }
  .menthe {
    bottom: 0;
    /* top: 0; */
    transform: translateY(200px);
  }

  .radiccio {
    left: 50%;
    transform: rotateZ(180deg) translateY(250px);
  }

  .frobert {
    top: 50%;
    transform: rotateZ(0deg) translateY(-175px);
  }

  .smokestack {
    bottom: 0;
    transform: translateX(300px) translateY(250px);
  }
  article:has(a:hover) .menthe {
    transition: transform 500ms 50ms ease-in;
    transform: translateY(30px);
  }

  article:has(a:hover) .radiccio {
    transform: rotateZ(180deg) translateY(40px);
    transition: transform 500ms 250ms ease-in;
  }

  article:has(a:hover) .frobert {
    transform: rotateZ(-90deg) translateY(-175px);
    transition: transform 500ms 550ms ease-in;
  }

  article:has(a:hover) .smokestack {
    transform: translateX(300px) translateY(20px);
    transition: transform 500ms 1000ms ease-in;
  }

  @media (max-width: 768px) {
    .sprite {
      display: none;
    }
  }
</style>
