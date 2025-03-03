import { a as $$BaseLayout, b as $$Hero } from '../../chunks/BaseLayout_BTI3xvsO.mjs';
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderTransition } from '../../chunks/astro/server_BSZcTAk4.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_R-26eQRM.mjs';
import { $ as $$Footer } from '../../chunks/Footer_CROTto-_.mjs';
/* empty css                                    */
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("es");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Rodrigo Juarez", "description": "About Rodrigo Juarez Lorem Ipsum", "data-astro-cid-iq5dhm5n": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack" data-astro-cid-iq5dhm5n> <main class="wrapper about" data-astro-cid-iq5dhm5n${addAttribute(renderTransition($$result2, "7g6dy7j5"), "data-astro-transition-scope")}> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mi historia", "tagline": "Cordobes. Feliz \xB2. Codigo, f\xFAtbol y trekking.", "data-astro-cid-iq5dhm5n": true }, { "default": ($$result3) => renderTemplate` <img width="w-full" height="auto" src="/assets/fondo.jpeg" alt="Rodrigo Juarez" data-astro-cid-iq5dhm5n> ` })} <section class="w-full" data-astro-cid-iq5dhm5n> <div class="content" data-astro-cid-iq5dhm5n> <p data-astro-cid-iq5dhm5n>
Antes de adentrarme al mundo tech trabaje varios años en el rubro de la construcción,
            la satisfacción de construir algo nuevo por mi cuenta fue lo que me llamó la atención de la programación y lo que conectó mi anterior oficio con el actual.
            Nunca deja de fascinarme la variedad de soluciones a un mismo problema que existen pero a la vez la importancia de ser pragmático a la hora de buscar resolverlo.
</p> <p data-astro-cid-iq5dhm5n>
¡Una de mis pasiones es viajar! Conocer nuevos lugares, culturas y personas ha enriquecido mi vida y me ha ayudado a entender
            la importancia de abordar cada situación desde diferentes perspectivas.
</p> </div> </section> </main> <div class="wrapper container" data-astro-cid-iq5dhm5n> <div class="gallery" data-astro-cid-iq5dhm5n> <figure class="gallery__item gallery__item--1" data-astro-cid-iq5dhm5n> <img src="/assets/londres.webp" alt="Londres" class="gallery__img" data-astro-cid-iq5dhm5n> </figure> <figure class="gallery__item gallery__item--2" data-astro-cid-iq5dhm5n> <img src="/assets/amsterdam.webp" alt="Amsterdam" class="gallery__img" data-astro-cid-iq5dhm5n> </figure> <figure class="gallery__item gallery__item--3" data-astro-cid-iq5dhm5n> <img src="/assets/mendoza.webp" alt="Mendoza" class="gallery__img" data-astro-cid-iq5dhm5n> </figure> <figure class="gallery__item gallery__item--4" data-astro-cid-iq5dhm5n> <img src="/assets/team.webp" alt="Team Wisboo" class="gallery__img" data-astro-cid-iq5dhm5n> </figure> </div> <section class="mt-[2rem] sm:mt-0" data-astro-cid-iq5dhm5n> <p data-astro-cid-iq5dhm5n>
Pero además de viajar y programar hago cosas como:
</p> <p data-astro-cid-iq5dhm5n> <strong data-astro-cid-iq5dhm5n>Trekking:</strong> me sirve como escape, un momento para recargar energías y apreciar las maravillas del aire libre.
</p> <p data-astro-cid-iq5dhm5n> <strong data-astro-cid-iq5dhm5n>Futbol:</strong> me gusta practicar deporte y disfruto de mirar un buen partido entre amigos.
</p> <p data-astro-cid-iq5dhm5n>
Trato de disfrutar cada día mientras navego por el ámbito digital durante el día y abrazo la tranquilidad de la naturaleza cada vez que surge la oportunidad.
<strong data-astro-cid-iq5dhm5n>La vida es un viaje y estoy agradecido por cada paso en el camino.</strong> </p> </section> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-iq5dhm5n": true })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-iq5dhm5n": true })} ` })} `;
}, "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/about.astro", "self");

const $$file = "/home/rodrigo/Escritorio/Proyects/new-brand/src/pages/es/about.astro";
const $$url = "/es/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
