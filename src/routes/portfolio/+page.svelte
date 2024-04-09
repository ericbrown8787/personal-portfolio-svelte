<script>
    import projects from '$lib/data/projects.json'
    import Category from './Category.svelte';
    const categories = projects["categories"]
</script>
<article>
    {#each categories as category}
    <Category title={category["title"]} description={category["description"]} projects={category["projects"]}/>        
    {/each}

</article>