<script>
  import Project from "./Project.svelte";
  export let title;
  export let description;
  export let projects;
</script>

<section>
  <h3 class="title">{title}</h3>
  <p class="description">{description}</p>
  {#each projects as project}
    <Project
      title={project["title"]}
      description={project["description"]}
      screenshotURL={project["screenshotURL"]}
    />
  {/each}
</section>

<style>
  section {
    margin-block-end: 1.5rem;
  }
  .title {
    margin-block-end: 1rem;
  }
  .description {
    margin-block-end: 1rem;
  }
</style>
