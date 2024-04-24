import * as universal from '../entries/pages/portfolio/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/portfolio/+page.js";
export const imports = ["_app/immutable/nodes/5.BRpSncdb.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.aCh3FdRp.js"];
export const stylesheets = ["_app/immutable/assets/5.DjXgiOlK.css"];
export const fonts = [];
