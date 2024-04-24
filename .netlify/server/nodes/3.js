import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.BBzDgmqv.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.aCh3FdRp.js","_app/immutable/chunks/Window.D5RBVqTy.js"];
export const stylesheets = ["_app/immutable/assets/3.sTP3CA0E.css","_app/immutable/assets/Window.5nEeorgG.css"];
export const fonts = [];
