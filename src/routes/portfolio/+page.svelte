<script>
    import projects from '$lib/data/projects.json'
    import Category from './Category.svelte';
    const categories = projects["categories"]
</script>
<article>
    <h2>Portfolio</h2>
    {#each categories as category}
    <Category title={category["title"]} description={category["description"]} projects={category["projects"]}/>        
    {/each}

</article>