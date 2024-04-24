<script>
  import ImageWindow from "../ImageWindow.svelte";
  export let title;
  export let description;
  export let screenshotURL;
  export let sourceURL;
  export let liveURL;
</script>

<article class="project">
  <section class="info">
    <h3 class="title">
      {title}
    </h3>

    <p class="description">{description}</p>

    {#if sourceURL || liveURL}
      <section class="links">
        {#if sourceURL}
          <a href={sourceURL} class="source-link">Github</a>
        {/if}
        {#if liveURL}
          <a href={liveURL} class="live-link">Live</a>
        {/if}
      </section>
    {/if}
  </section>
  {#if screenshotURL}
    <ImageWindow>
      <img src={`/screenshots/${screenshotURL}`} alt="A screenshot" />
    </ImageWindow>
  {/if}
</article>

<style>
  article {
    /* outline: 1px solid red; */
    padding-inline: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
    margin-block-end: 3rem;
  }

  .links {
    margin-block: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .info {
    max-width: 50ch;
  }
  .title {
    font-size: 1.2rem;
    margin-block: 2%;
  }
  img {
    max-width: 100%;
  }
</style>
