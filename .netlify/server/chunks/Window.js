import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: ':root{--window-deco-box-shadow:3px 3px 0 black;--window-box-shadow:15px 15px 0 black}article.svelte-889nev.svelte-889nev{position:relative;border-radius:15px;overflow:hidden;border:2px solid var(--accent-color);background-color:var(--text-background-color);gap:1rem;max-width:70ch;box-shadow:var(--window-box-shadow);z-index:100}.window-top.svelte-889nev.svelte-889nev{display:flex;padding:7px;padding-block-start:5px;align-items:center;justify-content:flex-end;gap:7px;content:"";width:100%;background-color:var(--accent-color)}.window-top.svelte-889nev div.svelte-889nev{width:30px;height:30px;border-radius:100%;background-color:var(--accent-color);box-shadow:var(--window-deco-box-shadow);color:var(--accent-color);border:3px solid var(--main-background-color)}.window-content.svelte-889nev.svelte-889nev{padding:2rem 1.5rem}',
  map: null
};
const Window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="svelte-889nev"><div class="window-top svelte-889nev" data-svelte-h="svelte-gsjaoa"><div class="svelte-889nev"></div> <div class="svelte-889nev"></div> <div class="svelte-889nev"></div></div> <div class="window-content svelte-889nev">${slots.default ? slots.default({}) : ``}</div> </article>`;
});
export {
  Window as W
};
