<script>
  import Project from "./Project.svelte";
  export let title;
  export let description;
  export let projects;
</script>

<section class="category">
  <div class="info-container">
    <h2 class="title">{title}</h2>
    <p class="description">{description}</p>
  </div>

  <!-- <div class="project-container"> -->
  {#each projects as project, index}
    <Project
      title={project["title"]}
      description={project["description"]}
      screenshotURL={project["screenshotURL"]}
      sourceURL={project["sourceURL"]}
      liveURL={project["liveURL"]}
    />
    <!-- {#if !(index === projects.length - 1)}
        <hr />
      {/if} -->
  {/each}
  <!-- </div> -->
</section>

<style>
  .category {
    display: flex;
    flex-direction: column;
    /* max-width: 1200px; */
    gap: 5rem;
  }

  .title {
    margin-block-end: 1rem;
  }

  .description {
    max-width: 90ch;
    margin-block-end: 1rem;
  }
</style>
