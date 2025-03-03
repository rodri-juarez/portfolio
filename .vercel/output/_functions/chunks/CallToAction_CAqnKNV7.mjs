import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderSlot, r as renderTemplate } from './astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href, extraStyles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`${extraStyles}`, "class")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/components/CallToAction.astro", void 0);

export { $$CallToAction as $ };
