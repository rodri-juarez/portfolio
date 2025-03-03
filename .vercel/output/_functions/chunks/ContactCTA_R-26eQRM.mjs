import { c as createComponent, m as maybeRenderHead, e as renderComponent, r as renderTemplate } from './astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import i18next, { t } from 'i18next';
import { $ as $$CallToAction } from './CallToAction_CAqnKNV7.mjs';
import { $ as $$Icon } from './BaseLayout_BTI3xvsO.mjs';
/* empty css                         */

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>${t("CONTACT.CALL")}</h2> <div data-astro-cid-rcdzuq3a> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": i18next.language === "es" ? `/es/contact` : `/contact`, "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`${t("CONTACT.MESSAGE")}${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} <br data-astro-cid-rcdzuq3a> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "https://drive.google.com/uc?id=1wnVjbd5s0axWSs4LqrIuxG_uQnZVJR8h&export=download", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`${t("CONTACT.DOWNLOAD")}${renderComponent($$result2, "Icon", $$Icon, { "icon": "download", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </div> </aside> `;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $ };
