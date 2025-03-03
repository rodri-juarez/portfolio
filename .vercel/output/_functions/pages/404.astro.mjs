import { a as $$BaseLayout, b as $$Hero } from '../chunks/BaseLayout_BTI3xvsO.mjs';
import { c as createComponent, e as renderComponent, r as renderTemplate } from '../chunks/astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })} ` })}`;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/404.astro", void 0);

const $$file = "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
