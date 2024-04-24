

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BjDsZ4W-.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.aCh3FdRp.js","_app/immutable/chunks/entry.YniKV1-2.js"];
export const stylesheets = [];
export const fonts = [];
