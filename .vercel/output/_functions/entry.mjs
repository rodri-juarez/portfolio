import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D6ctDneU.mjs';
import { manifest } from './manifest_BS2e6_HG.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/es/404.astro.mjs');
const _page5 = () => import('./pages/es/about.astro.mjs');
const _page6 = () => import('./pages/es/contact.astro.mjs');
const _page7 = () => import('./pages/es/work.astro.mjs');
const _page8 = () => import('./pages/es/work/_---slug_.astro.mjs');
const _page9 = () => import('./pages/es.astro.mjs');
const _page10 = () => import('./pages/work.astro.mjs');
const _page11 = () => import('./pages/work/_---slug_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/es/404.astro", _page4],
    ["src/pages/es/about.astro", _page5],
    ["src/pages/es/contact.astro", _page6],
    ["src/pages/es/work.astro", _page7],
    ["src/pages/es/work/[...slug].astro", _page8],
    ["src/pages/es/index.astro", _page9],
    ["src/pages/work.astro", _page10],
    ["src/pages/work/[...slug].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1b0ddd4d-5191-41e3-b6c2-4ddd31de8ac0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
