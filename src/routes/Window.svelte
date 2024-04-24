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
    --window-deco-box-shadow: 3px 3px 0 black;
    --window-box-shadow: 15px 15px 0 black;
  }
  article {
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid var(--accent-color);
    background-color: var(--text-background-color);
    gap: 1rem;
    max-width: 70ch;
    box-shadow: var(--window-box-shadow);
  }

  .window-top {
    display: flex;
    padding: 7px;
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
