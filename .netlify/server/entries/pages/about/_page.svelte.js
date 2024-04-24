import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { W as Window } from "../../../chunks/Window.js";
const css = {
  code: ".about.svelte-tgd44d{display:flex;flex-direction:column;gap:4rem}.window-container.svelte-tgd44d{max-width:768px}.about__intro.svelte-tgd44d{display:flex;flex-direction:column;gap:2rem}.about__text.svelte-tgd44d{line-height:1.5;font-size:1.1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="about svelte-tgd44d"><div class="window-container svelte-tgd44d">${validate_component(Window, "Window").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="about__heading" data-svelte-h="svelte-8ghni4">I’m Eric.</h1> <section class="about__intro svelte-tgd44d" data-svelte-h="svelte-136dx4g"><p class="about__text svelte-tgd44d">I’m a web developer, UI/UX designer, game developer and general
          purpose programmer from New Jersey. In 2021 I went back to school for
          an IT certificate, but after one semester I realized that I was
          passionate about programming, and I love the human-centered design
          processes of UI/UX and game development. I have a diverse set of
          skills and I consider myself a language-agnostic programmer. You can
          see some of my projects from the past two years in my portfolio, and
          I’m excited to get started on some more.</p> <p class="about__text svelte-tgd44d">I’m open to job opportunities where I can contribute to real projects,
          gain industry experience and learn from other developers. I’m also
          open to freelance work and less formal collaboration like hackathons,
          game jams and independent creative projects. If you’re looking for a
          developer for any of these and think I might be a good fit, don’t
          hesitate to contact me.</p></section> <img src="" alt="My face" class="about-image">`;
    }
  })}</div> </article>`;
});
export {
  Page as default
};
