<script>
  import projects from "$lib/data/projects.json";
  import Category from "./Category.svelte";
  const categories = projects["categories"];
</script>

<article class="portfolio">
  <h1 class="page-title">Portfolio</h1>
  <div class="category-container">
    {#each categories as category, index}
      <Category
        title={category["title"]}
        description={category["description"]}
        projects={category["projects"]}
      />
      {#if !(index === categories.length - 1)}
        <hr />
      {/if}
    {/each}
  </div>
</article>

<style>
  .page-title {
    margin-block-end: 2rem;
  }
  .portfolio {
    padding-inline: 1rem;
  }
  .category-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  hr {
    margin-block-start: 2rem;
    margin-block-end: 1rem;
  }
</style>
