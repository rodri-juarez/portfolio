import { a as $$BaseLayout, b as $$Hero } from '../../chunks/BaseLayout_BTI3xvsO.mjs';
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { g as getCollection } from '../../chunks/_astro_content_BK8rqz_O.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_R-26eQRM.mjs';
import { $ as $$PortfolioPreview } from '../../chunks/PortfolioPreview_DC12z-tZ.mjs';
import { $ as $$Grid } from '../../chunks/Grid_CYktlhXx.mjs';
export { renderers } from '../../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  changeLanguage("es");
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Rodrigo Juarez", "description": "Learn about Rodrigo Juarez's most recent projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/work.astro", void 0);

const $$file = "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/work.astro";
const $$url = "/es/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
