

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Dgy9bRsj.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.aCh3FdRp.js","_app/immutable/chunks/Window.D5RBVqTy.js"];
export const stylesheets = ["_app/immutable/assets/2.QiMTYhxR.css","_app/immutable/assets/Window.5nEeorgG.css"];
export const fonts = [];
