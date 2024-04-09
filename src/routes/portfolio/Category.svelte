<script>
    import Project from './Project.svelte';
    export let title;
    export let description;
    export let projects;
</script>
<section>
    <h2>{title}</h2>
    <p>{description}</p>
    {#each projects as project}
    <Project title={project["title"]} description={project["description"]}/>    
    {/each}
</section>