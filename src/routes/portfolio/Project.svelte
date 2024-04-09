<script>
    export let title;
    export let description;
    export let screenshotURL;
    export let sourceURL;
    export let liveURL;

    // $: {document.title = title;
    // document.description = description;
    // document.screenshotURL = screenshotURL;
    // document.sourceURL = sourceURL
    // document.liveURL = liveURL}
</script>
<article>
    <h4 class="title">
        {title}
    </h4>
    <p class="description">{description}</p>
    {#if screenshotURL}
    <img src="{screenshotURL}" alt="A screenshot of {title}">
    {/if}
    {#if sourceURL}
    <a href="{sourceURL}" class="source-link">Github</a>
    {/if}
    {#if liveURL}
    <a href="{liveURL}" class="live-link">Live</a>
    {/if}
</article>