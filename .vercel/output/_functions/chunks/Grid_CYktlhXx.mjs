import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderSlot, r as renderTemplate } from './astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-vc5tsdmu> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/components/Grid.astro", void 0);

export { $$Grid as $ };
