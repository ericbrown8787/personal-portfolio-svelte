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
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-block-end: 1rem;
  }

  .info {
    max-width: 500px;
  }
  .title {
    font-size: 1.2rem;
    margin-block: 2%;
  }
  img {
    max-width: 100%;
  }
</style>
