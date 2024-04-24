import * as universal from '../entries/pages/contact/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/4.CSls5kae.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.aCh3FdRp.js","_app/immutable/chunks/Window.D5RBVqTy.js"];
export const stylesheets = ["_app/immutable/assets/4.Cw2ys2Td.css","_app/immutable/assets/Window.5nEeorgG.css"];
export const fonts = [];
