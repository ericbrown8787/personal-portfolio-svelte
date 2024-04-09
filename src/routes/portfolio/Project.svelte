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
    <h3 class="title">
        {title}
    </h3>
    <p class="description">{description}</p>
    <img src="{screenshotURL}" alt="A screenshot of {title}">
    <a href="{sourceURL}" class="source-link">Github</a>
    <a href="{liveURL}" class="live-link">Live</a>
</article>