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
  article {
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid var(--accent-color);
    gap: 1rem;
    max-width: 70ch;
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
    color: var(--accent-color);
    border: 2px solid var(--main-background-color);
    border: 2px solid rgb(15, 15, 15, 0.5);
  }
  .window-content {
    padding: 1rem;
  }
</style>
