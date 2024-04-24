<article>
  <div class="window-top">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="window-content">
    <slot />
  </div>
</article>

<style>
  :global(:root) {
    --window-deco-box-shadow: 2px 2px 0 var(--text-background-color);
    --window-box-shadow: 15px 15px 0 black;
  }
  article {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid var(--accent-color);
    background-color: var(--text-background-color);
    gap: 1rem;
    /* max-width: 70ch; */
    max-width: fit-content;
    box-shadow: var(--window-box-shadow);
    z-index: 100;
  }

  .window-top {
    display: flex;
    padding: 10px;
    padding-block-start: 5px;
    align-items: center;
    justify-content: flex-end;
    gap: 7px;
    content: "";
    /* height: 30px; */
    width: 100%;

    background-color: var(--accent-color);
  }
  .window-top div {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: var(--accent-color);
    box-shadow: var(--window-deco-box-shadow);
    color: var(--accent-color);
    border: 3px solid var(--main-background-color);
    /* border: 2px solid rgb(15, 15, 15, 0.5); */
  }
  .window-content {
    padding: 2rem 1.5rem;
  }
</style>
