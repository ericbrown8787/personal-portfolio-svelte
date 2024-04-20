<article>
  <div class="window-top">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="image-window-content">
    <slot />
  </div>
</article>

<style>
  :root {
    --first-window-color: #99f6e4;
    --second-window-color: #fdba74;
    --third-window-color: #f0abfc;
  }
  article {
    padding: 0;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #99f6e4;
    max-width: 500px;
    box-shadow: 10px 10px 10px black;
    /* gap: 1rem; */
  }

  /* First Window Color */
  :global(.project:nth-child(3n + 3) > article) {
    border: var(--first-window-color);
    background-color: var(--first-window-color);
  }

  :global(.project:nth-child(3n + 3) > article .window-top) {
    background-color: var(--first-window-color);
  }

  /* Second Window Color */
  :global(.project:nth-child(3n + 1) > article) {
    border: 2px solid var(--second-window-color);
    background-color: var(--second-window-color);
  }

  :global(.project:nth-child(3n + 1) > article .window-top) {
    background-color: var(--second-window-color);
  }

  /* Third Window Color */
  :global(.project:nth-child(3n + 2) > article) {
    border: 2px solid var(--third-window-color);
    background-color: var(--third-window-color);
  }

  :global(.project:nth-child(3n + 2) > article .window-top) {
    background-color: var(--third-window-color);
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
    background-color: #99f6e4;
  }
  .window-top div {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    border: 2px solid rgb(15, 15, 15, 0.5);
  }
</style>
