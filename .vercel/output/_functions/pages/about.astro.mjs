import { a as $$BaseLayout, b as $$Hero } from '../chunks/BaseLayout_BTI3xvsO.mjs';
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderTransition } from '../chunks/astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_R-26eQRM.mjs';
import { $ as $$Footer } from '../chunks/Footer_CROTto-_.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Rodrigo Juarez", "description": "About Rodrigo Juarez Lorem Ipsum", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack" data-astro-cid-kh7btl4r${addAttribute(renderTransition($$result2, "5cn4itco"), "data-astro-transition-scope")}> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "About me", "tagline": "Cordobes. Happy\xB2. Code & trekking.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="w-full" height="auto" src="/assets/fondo.jpeg" alt="Rodrigo Juarez" data-astro-cid-kh7btl4r> ` })} <section class="w-full" data-astro-cid-kh7btl4r> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Before entering the world of technology, I worked for several years in the field of construction,
            the satisfaction of building something new for me account was what caught my attention about programming and
            I connect my previous work with my current one. I am always fascinated by the variety of solutions that exist for the same problem,
            but at the same time the importance of being pragmatic when trying to solve it.
</p> <p data-astro-cid-kh7btl4r>
One of my passions is traveling! Getting to know new places, cultures,
            and people has enriched my life and helped me understand the importance
            of approaching each situation from different perspectives.
</p> </div> </section> </main> <div class="wrapper container" data-astro-cid-kh7btl4r> <div class="gallery" data-astro-cid-kh7btl4r> <figure class="gallery__item gallery__item--1" data-astro-cid-kh7btl4r> <img src="/assets/londres.webp" alt="London" class="gallery__img" data-astro-cid-kh7btl4r> </figure> <figure class="gallery__item gallery__item--2" data-astro-cid-kh7btl4r> <img src="/assets/amsterdam.webp" alt="Amsterdam" class="gallery__img" data-astro-cid-kh7btl4r> </figure> <figure class="gallery__item gallery__item--3" data-astro-cid-kh7btl4r> <img src="/assets/mendoza.webp" alt="Mendoza" class="gallery__img" data-astro-cid-kh7btl4r> </figure> <figure class="gallery__item gallery__item--4" data-astro-cid-kh7btl4r> <img src="/assets/team.webp" alt="Team Wisboo" class="gallery__img" data-astro-cid-kh7btl4r> </figure> </div> <section class="mt-[2rem] sm:mt-0" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>But in addition to traveling and programming I do things like:</p> <p data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Trekking:</strong> It's my escape, where I recharge and appreciate nature's wonders.
</p> <p data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Soccer:</strong> I like to play sports and I enjoy watching a
          good game with friends.
</p> <p data-astro-cid-kh7btl4r>
I try to enjoy each day navigating the digital realm and embracing nature when possible.
<strong data-astro-cid-kh7btl4r>Life is a journey and I am grateful for every step along the way.
</strong> </p> </section> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-kh7btl4r": true })} ` })} `;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/about.astro", "self");

const $$file = "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
