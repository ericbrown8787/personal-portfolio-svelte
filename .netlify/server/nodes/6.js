

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.iR77ODRf.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.aCh3FdRp.js"];
export const stylesheets = ["_app/immutable/assets/6.Dzus2CKM.css"];
export const fonts = [];
