import { a as $$BaseLayout, b as $$Hero, $ as $$Icon } from '../chunks/BaseLayout_BTI3xvsO.mjs';
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderTransition } from '../chunks/astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { User } from '@nextui-org/react';
import { $ as $$Grid } from '../chunks/Grid_CYktlhXx.mjs';
import { $ as $$Pill } from '../chunks/Pill_sYvksmbv.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_R-26eQRM.mjs';
import { $ as $$Skills, a as $$Slider } from '../chunks/Slider_Qelv1rvJ.mjs';
import { $ as $$Footer } from '../chunks/Footer_CROTto-_.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6${addAttribute(renderTransition($$result2, "wwdvwa7n"), "data-astro-transition-scope")}> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, my name is Rodrigo Juarez", "tagline": "I am a full-stack developer currently based in Misiones, Argentina. I specialize in technologies like React, Angular, Node and Ruby On Rails.", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Developer` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Engineering Manager
` })} </div> ` })} <img alt="Rodrigo Juarez" width="480" height="620" src="/assets/perfil.webp" data-astro-cid-j7pv25f6> </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </div> <main class="wrapper stack gap-20 lg:gap-40" data-astro-cid-j7pv25f6> <section data-astro-cid-j7pv25f6> <div class="flex flex-col mb-[5rem] gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 class="text-center title-header" data-astro-cid-j7pv25f6>My Work</h3> <p class="text-center text-xl" data-astro-cid-j7pv25f6>Take a look at my previous works.</p> </div> ${renderComponent($$result2, "Slider", $$Slider, { "data-astro-cid-j7pv25f6": true })} </section> <section class="section with-background bg-variant" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Testimonials</h3> <p data-astro-cid-j7pv25f6>
I've met many great people during my time in the tech industry. Here are a few of them:
</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${[
    {
      name: "Facundo Bettella",
      comment: "Rodrigo's willingness to help is exceptional. Programming with him improved my soft skills.",
      position: "Full Stack Developer at EY",
      img: "https://i.ibb.co/3CBmTQP/facundo.jpg",
      link: "https://www.linkedin.com/in/facundo-bettella-iunnissi-dev/"
    },
    {
      name: "Leandro Marco",
      comment: "I recommend Rodrigo as a great professional. His interpersonal skills are remarkable, it is very pleasant to have meetings with him due to his good energy.",
      position: "Tech Lead at Wisboo",
      img: "https://i.ibb.co/JdXSQT6/leandro-marco.jpg",
      link: "https://www.linkedin.com/in/mmleandro/"
    },
    {
      name: "Fernando Diaz",
      comment: "During my time at Wisboo, Rodrigo was an excellent colleague and mentor. Always attentive to everything that was necessary to meet the goals and also for my professional development.",
      position: "Full Stack Developer",
      img: "https://i.ibb.co/GV2dgkM/fernando-diaz.jpg",
      link: "https://www.linkedin.com/in/fernandodiaz12/"
    },
    {
      name: "Andres Trujillo",
      comment: "Rodrigo's contagious desire to learn pushes you to improve your skills. He loves his work, and it shows.",
      position: "Full Stack Developer at Vita Wallet",
      img: "https://i.ibb.co/825sYq8/andres-trujillo.jpg",
      link: "https://www.linkedin.com/in/andresvelasqueztrujillo/"
    }
  ].map(({ name, comment, position, img, link }) => renderTemplate`<li class="mention-card flex flex-col gap-4 p-8" data-astro-cid-j7pv25f6> <p class="w-fit" data-astro-cid-j7pv25f6> <q data-astro-cid-j7pv25f6>${comment}</q> </p> <div class="w-full flex flex-row justify-between" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "User", User, { "client:visible": true, "name": name, "description": position, "avatarProps": {
    src: img
  }, "client:component-hydration": "visible", "client:component-path": "@nextui-org/react", "client:component-export": "User", "data-astro-cid-j7pv25f6": true })} <div class="social items-end" data-astro-cid-j7pv25f6> <a${addAttribute(link, "href")} target="_blank" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "linkedin-logo", "size": "30px", "data-astro-cid-j7pv25f6": true })} </a> </div> </div> </li>`)}` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/index.astro", "self");

const $$file = "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
