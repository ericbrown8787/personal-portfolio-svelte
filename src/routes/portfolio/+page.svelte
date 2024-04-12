<script>
    import projects from '$lib/data/projects.json'
    import Category from './Category.svelte';
    const categories = projects["categories"]
</script>
<article>
    <h2 class="page-title">Portfolio</h2>
    {#each categories as category}
    <Category title={category["title"]} description={category["description"]} projects={category["projects"]}/>        
    {/each}

</article>

<style>
    .page-title{
        margin-block-end: 2rem;
    }
    
</style>