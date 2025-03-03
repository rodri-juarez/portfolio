import { a as $$BaseLayout, b as $$Hero, $ as $$Icon } from '../../chunks/BaseLayout_BTI3xvsO.mjs';
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderTransition } from '../../chunks/astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { $ as $$Footer } from '../../chunks/Footer_CROTto-_.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_CAqnKNV7.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("es");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Rodrigo Juarez", "description": "Learn about Rodrigo Juarez's most recent projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack about gap-20"${addAttribute(renderTransition($$result2, "cf4pf5y3"), "data-astro-transition-scope")}> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Manteng\xE1monos en contacto!", "tagline": "Escr\xEDbeme un mensaje y me pondr\xE9 en contacto contigo en breve.", "align": "center" })} <section class="flex flex-col gap-10 lg:flex-row"> <div class="flex flex-col w-[50%] h-auto gap-10"> <div class="flex flex-col gap-2"> <label for="mail">Email</label> <p id="mail" class="text-2xl">juarezr100@gmail.com</p> </div> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "https://drive.google.com/uc?id=1wnVjbd5s0axWSs4LqrIuxG_uQnZVJR8h&export=download", "extraStyles": "w-[20rem] h-[4rem] items-center" }, { "default": ($$result3) => renderTemplate`${t("CONTACT.DOWNLOAD")}${renderComponent($$result3, "Icon", $$Icon, { "icon": "download", "size": "1.2em" })} ` })} </div> ${renderComponent($$result2, "ContactUs", null, { "submit": t("FORM.SUBMIT"), "name": t("FORM.NAME.LABEL"), "message": t("FORM.MESSAGE.LABEL"), "namePlaceholder": t("FORM.NAME.PLACEHOLDER"), "messagePlaceholder": t("FORM.MESSAGE.PLACEHOLDER"), "emailPlaceholder": t("FORM.EMAIL.PLACEHOLDER"), "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/rodrigo/Escritorio/Proyects/new-brand/src/components/ContactUS", "client:component-export": "ContactUs" })} </section> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/contact.astro", "self");

const $$file = "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/contact.astro";
const $$url = "/es/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
