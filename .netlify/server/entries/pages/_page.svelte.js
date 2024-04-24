import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { W as Window } from "../../chunks/Window.js";
const css = {
  code: "article.svelte-cwcllq.svelte-cwcllq{padding:20px;overflow:hidden}.sprite.svelte-cwcllq.svelte-cwcllq{position:fixed;height:200px;width:200px;z-index:0}.menthe.svelte-cwcllq.svelte-cwcllq{top:0;transform:translateY(200px)}.radiccio.svelte-cwcllq.svelte-cwcllq{left:60%;transform:rotateZ(180deg) translateY(200px)}.frobert.svelte-cwcllq.svelte-cwcllq{top:50%;transform:rotateZ(0deg) translateY(-175px)}.smokestack.svelte-cwcllq.svelte-cwcllq{top:0;transform:translateX(400px) translateY(200px)}article.svelte-cwcllq:has(a:hover) .menthe.svelte-cwcllq{transition:transform 500ms 50ms ease-in;transform:translateY(30px)}article.svelte-cwcllq:has(a:hover) .radiccio.svelte-cwcllq{transform:rotateZ(180deg) translateY(0px);transition:transform 500ms 250ms ease-in}article.svelte-cwcllq:has(a:hover) .frobert.svelte-cwcllq{transform:rotateZ(-90deg) translateY(-175px);transition:transform 500ms 550ms ease-in}article.svelte-cwcllq:has(a:hover) .smokestack.svelte-cwcllq{transform:translateX(400px) translateY(20px);transition:transform 500ms 1000ms ease-in}@media(max-width: 768px){.sprite.svelte-cwcllq.svelte-cwcllq{display:none}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="home svelte-cwcllq">${validate_component(Window, "Window").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-z7hokp"><span>Hi.</span> <span>I&#39;m Eric Brown.</span></h1> <p data-svelte-h="svelte-1gdui3l">I’m a recent graduate of Raritan Valley Community College and an aspiring
      software developer, UI designer and game developer. I love bringing
      creative projects to life with code.</p> <a href="/about" data-svelte-h="svelte-19kdm0u">More about me</a>`;
    }
  })} <img class="sprite menthe svelte-cwcllq" src="/sprites/MENTHE.png" alt="MENTHE"> <img class="sprite radiccio svelte-cwcllq" src="/sprites/RADICCIO.png" alt="RADICCIO"> <img class="sprite frobert svelte-cwcllq" src="/sprites/FROBERT.png" alt="FROBERT"> <img class="sprite smokestack svelte-cwcllq" src="/sprites/SMOKESTACK.png" alt="SMOKESTACK"> </article>`;
});
export {
  Page as default
};
