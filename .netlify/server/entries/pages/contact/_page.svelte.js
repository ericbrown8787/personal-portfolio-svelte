import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { W as Window } from "../../../chunks/Window.js";
const css = {
  code: ':root{--field-spacing:1.2rem;--label-spacing:calc(var(--field-spacing) / 2)}form.svelte-1ctf47j.svelte-1ctf47j{display:flex;flex-direction:column;gap:var(--field-spacing)}.form-field.svelte-1ctf47j.svelte-1ctf47j{display:flex;flex-direction:column;gap:var(--label-spacing)}.form-field.svelte-1ctf47j label.svelte-1ctf47j::after,legend.svelte-1ctf47j.svelte-1ctf47j::after{display:block;content:"";background-color:var(--accent-color);height:2px;width:5ch}.form-field.svelte-1ctf47j input.svelte-1ctf47j,.form-field.svelte-1ctf47j textarea.svelte-1ctf47j{color:whitesmoke;background-color:black}legend.svelte-1ctf47j.svelte-1ctf47j::after{margin-block-end:1rem}fieldset.svelte-1ctf47j.svelte-1ctf47j{border:none;display:flex;flex-direction:column;gap:1rem}input[type="radio"].svelte-1ctf47j.svelte-1ctf47j{height:1.5rem;width:1.5rem;margin-inline-start:2rem;accent-color:var(--accent-color)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="form-container">${validate_component(Window, "Window").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-jvnkra">Contact Me</h1> <form class="svelte-1ctf47j" data-svelte-h="svelte-1xg51vn"><section class="form-field svelte-1ctf47j"><label for="name" class="svelte-1ctf47j">Name</label> <input type="text" name="first-name" id="first-name" required class="svelte-1ctf47j"></section> <section class="form-field svelte-1ctf47j"><label for="organization" class="svelte-1ctf47j">Organization</label> <input type="text" name="organization" id="organization" class="svelte-1ctf47j"></section> <section class="form-field svelte-1ctf47j"><label for="email" class="svelte-1ctf47j">Email</label> <input type="email" name="email" id="email" class="svelte-1ctf47j"></section> <section class="form-field svelte-1ctf47j"><label for="message" class="svelte-1ctf47j">Message</label> <textarea name="message" id="message" placeholder="Type your message!" rows="8" required class="svelte-1ctf47j"></textarea></section> <fieldset class="svelte-1ctf47j"><legend class="svelte-1ctf47j">Would you like a reply?</legend> <div><input type="radio" id="yes-reply" name="reply" value="yes-reply" checked class="svelte-1ctf47j"> <label for="yes-reply">Yes, please reply!</label></div> <div><input type="radio" id="no-reply" name="reply" value="no-reply" class="svelte-1ctf47j"> <label for="no-reply">No reply needed!</label></div></fieldset> <input type="submit" value="Submit"></form>`;
    }
  })} </div>`;
});
export {
  Page as default
};
