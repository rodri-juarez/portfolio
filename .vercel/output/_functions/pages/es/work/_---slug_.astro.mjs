import { a as $$BaseLayout, $ as $$Icon, b as $$Hero } from '../../../chunks/BaseLayout_BTI3xvsO.mjs';
import { c as createComponent, a as createAstro, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { g as getCollection } from '../../../chunks/_astro_content_BK8rqz_O.mjs';
import { $ as $$ContactCTA } from '../../../chunks/ContactCTA_R-26eQRM.mjs';
import { $ as $$Pill } from '../../../chunks/Pill_sYvksmbv.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  changeLanguage("es");
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "data-astro-cid-6qmo6puo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-6qmo6puo> <div class="stack gap-15" data-astro-cid-6qmo6puo> <header data-astro-cid-6qmo6puo> <div class="wrapper stack gap-2" data-astro-cid-6qmo6puo> <a class="back-link" href="/work/" data-astro-cid-6qmo6puo>${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "data-astro-cid-6qmo6puo": true })} Work</a> ${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "data-astro-cid-6qmo6puo": true }, { "default": ($$result3) => renderTemplate` <div class="details" data-astro-cid-6qmo6puo> <div class="tags" data-astro-cid-6qmo6puo> ${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-6qmo6puo": true }, { "default": ($$result4) => renderTemplate`${t}` })}`)} </div> <p class="description" data-astro-cid-6qmo6puo>${entry.data.description}</p> </div> ` })} </div> </header> <main class="wrapper" data-astro-cid-6qmo6puo> <div class="stack gap-10 content" data-astro-cid-6qmo6puo> ${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} data-astro-cid-6qmo6puo>`} <div class="content" data-astro-cid-6qmo6puo> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-6qmo6puo": true })} </div> </div> </main> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-6qmo6puo": true })} </div> ` })} `;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/work/[...slug].astro", void 0);

const $$file = "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/work/[...slug].astro";
const $$url = "/es/work/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
