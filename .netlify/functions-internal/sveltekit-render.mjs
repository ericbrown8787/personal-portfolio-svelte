import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/FiraCode-VariableFont_wght.ttf","hexagons.svg","screenshots/allthefishes.png","screenshots/bustinthrough.png","screenshots/cardflip.png","screenshots/climbing.png","screenshots/emptyinstance.png","screenshots/meetthefishes.png","screenshots/platformticket.png","screenshots/stylestage.png","screenshots/theykeepthelightsonatnight.png","sprites/FROBERT.png","sprites/MENTHE.png","sprites/RADICCIO.png","sprites/SMOKESTACK.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.RPIw-qoK.js","app":"_app/immutable/entry/app.DE2guG8B.js","imports":["_app/immutable/entry/start.RPIw-qoK.js","_app/immutable/chunks/entry.BWt34m_7.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/entry/app.DE2guG8B.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.aCh3FdRp.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
