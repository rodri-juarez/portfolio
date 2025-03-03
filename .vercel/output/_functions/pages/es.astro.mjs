import { a as $$BaseLayout, b as $$Hero, $ as $$Icon } from '../chunks/BaseLayout_BTI3xvsO.mjs';
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderTransition } from '../chunks/astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { g as getCollection } from '../chunks/_astro_content_BK8rqz_O.mjs';
import { User } from '@nextui-org/react';
import { $ as $$Grid } from '../chunks/Grid_CYktlhXx.mjs';
import { $ as $$Pill } from '../chunks/Pill_sYvksmbv.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_R-26eQRM.mjs';
import { $ as $$Skills, a as $$Slider } from '../chunks/Slider_Qelv1rvJ.mjs';
import { $ as $$Footer } from '../chunks/Footer_CROTto-_.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  changeLanguage("es");
  (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-7pewbour": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-7pewbour${addAttribute(renderTransition($$result2, "6jprcgag"), "data-astro-transition-scope")}> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-7pewbour> <header class="hero" data-astro-cid-7pewbour> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hola! Me llamo Rodrigo Juarez", "tagline": "Soy un Desarrollador Full Stack, actualmente viviendo en Misiones, Argentina. Me especializo en tecnologias como React, Angular, Node y Ruby On Rails.", "align": "start", "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate` <div class="roles" data-astro-cid-7pewbour> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-7pewbour": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-7pewbour": true })} Full Stack Developer` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-7pewbour": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "data-astro-cid-7pewbour": true })} Engineering Manager
` })} </div> ` })} <img alt="Rodrigo Juarez" width="480" height="620" src="/assets/perfil.webp" data-astro-cid-7pewbour> </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-7pewbour": true })} </div> <main class="wrapper stack gap-20 lg:gap-40" data-astro-cid-7pewbour> <section data-astro-cid-7pewbour> <div class="flex flex-col mb-[5rem] gap-2 lg:gap-4" data-astro-cid-7pewbour> <h3 class="text-center title-header" data-astro-cid-7pewbour>Mis trabajos</h3> <p class="text-center text-xl" data-astro-cid-7pewbour>
Echa un vistazo a mis anteriores trabajos.
</p> </div> ${renderComponent($$result2, "Slider", $$Slider, { "data-astro-cid-7pewbour": true })} </section> <section class="section with-background bg-variant" data-astro-cid-7pewbour> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-7pewbour> <h3 data-astro-cid-7pewbour>Testimonios</h3> <p data-astro-cid-7pewbour>
He tenido el placer de conocer y trabajar con muchas personas
            geniales en mi trayecto en el mundo tech. Estas son algunas de
            ellas:
</p> </header> <div class="gallery" data-astro-cid-7pewbour> ${renderComponent($$result2, "Grid", $$Grid, { "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate`${[
    {
      name: "Facundo Bettella",
      comment: "La predisposici\xF3n de Rodrigo para ayudar es excepcional. Programar con \xE9l mejor\xF3 mis habilidades sociales.",
      position: "Full Stack Developer en EY",
      img: "https://i.ibb.co/3CBmTQP/facundo.jpg",
      link: "https://www.linkedin.com/in/facundo-bettella-iunnissi-dev/"
    },
    {
      name: "Leandro Marco",
      comment: "Recomiendo a Rodrigo como un gran profesional. Sus habilidades interpersonales son destacables, es muy agradable tener reuniones con \xE9l debido a su buena energ\xEDa.",
      position: "Tech Lead en Wisboo",
      img: "https://i.ibb.co/JdXSQT6/leandro-marco.jpg",
      link: "https://www.linkedin.com/in/mmleandro/"
    },
    {
      name: "Fernando Diaz",
      comment: "En mi paso por Wisboo, Rodrigo fue un excelente compa\xF1ero y mentor. Siempre atento a todo lo que fuera necesario para cumplir las metas y tambien para mi desarrollo profesional",
      position: "Front End Developer",
      img: "https://i.ibb.co/GV2dgkM/fernando-diaz.jpg",
      link: "https://www.linkedin.com/in/fernandodiaz12/"
    },
    {
      name: "Andres Trujillo",
      comment: "Rodrigo es un gran desarrollador. Su deseo de aprender siempre algo nuevo es contagioso y te empuja a mejorar tus habilidades. Realmente ama lo que hace y se nota cuando hablas con \xE9l.",
      position: "Full Stack Developer en Vita Wallet",
      img: "https://i.ibb.co/825sYq8/andres-trujillo.jpg",
      link: "https://www.linkedin.com/in/andresvelasqueztrujillo/"
    }
  ].map(({ name, comment, position, img, link }) => renderTemplate`<li class="mention-card flex flex-col gap-4 p-8 justify-normal" data-astro-cid-7pewbour> <p class="w-fit" data-astro-cid-7pewbour> <q data-astro-cid-7pewbour>${comment}</q> </p> <div class="w-full flex flex-row justify-between" data-astro-cid-7pewbour> ${renderComponent($$result3, "User", User, { "client:visible": true, "name": name, "description": position, "avatarProps": {
    src: img
  }, "client:component-hydration": "visible", "client:component-path": "@nextui-org/react", "client:component-export": "User", "data-astro-cid-7pewbour": true })} <div class="social" data-astro-cid-7pewbour> <a${addAttribute(link, "href")} target="_blank" data-astro-cid-7pewbour> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "linkedin-logo", "size": "30px", "data-astro-cid-7pewbour": true })} </a> </div> </div> </li>`)}` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-7pewbour": true })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-7pewbour": true })} ` })} `;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/index.astro", "self");

const $$file = "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
