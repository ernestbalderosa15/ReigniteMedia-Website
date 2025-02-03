import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, i as renderSlot, b as createAstro, a as renderComponent } from './astro/server_CnkjT9N1.mjs';
import 'kleur/colors';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Brdcp9b2.mjs';
import { $ as $$Card } from './Card_BrJE9TbQ.mjs';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="px-5 flex justify-center overflow-hidden lg:block"> <div class="w-full max-w-[1280px] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/sections/Section.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-10 mb-20 sm:flex-row"> <h2 class="orangehead text-center sm:text-left text-3xl sm:text-4xl">${sectionTitle}</h2> <p class="w-auto text-center sm:text-left sm:w-[580px]"> ${description} </p> </div>`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/ui/SectionTitle.astro", void 0);

const $$Astro = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { index, titleTop, titleBottom, img, alt, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true, "data-astro-cid-qzn24t3o": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`h-[300px] w-full sm:h-full lg:gap-[60px] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[50px] rounded-[45px] ${index === 1 ? "bg-gray" : index === 2 ? "bg-orange" : "bg-dark text-gray"}`, "class")} data-astro-cid-qzn24t3o> <h3${addAttribute(`flex flex-col col-span-2 lg:col-span-1`, "class")} data-astro-cid-qzn24t3o> <span${addAttribute(`w-[fit-content] ${index === 1 ? "orangehead" : "whitehead"}`, "class")} data-astro-cid-qzn24t3o>${titleTop}</span> <span${addAttribute(`w-[fit-content] ${index === 1 ? "orangehead" : "whitehead"}`, "class")} data-astro-cid-qzn24t3o>${titleBottom}</span> </h3> <picture class="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center" data-astro-cid-qzn24t3o> ${renderComponent($$result2, "Image", $$Image, { "src": img, "alt": alt, "class": "h-[100px] w-auto sm:h-auto sm:w-3/4 object-cover", "data-astro-cid-qzn24t3o": true })} </picture> </div> ` })} `;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/ui/ServiceCard.astro", void 0);

const c1 = new Proxy({"src":"/_astro/card-pic1.LmmlwL7_.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/pics/card-pic1.png";
							}
							
							return target[name];
						}
					});

const c2 = new Proxy({"src":"/_astro/card-pic2.BeQ4x_k2.png","width":210,"height":148,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/pics/card-pic2.png";
							}
							
							return target[name];
						}
					});

const c3 = new Proxy({"src":"/_astro/card-pic3.D4d3JTsx.png","width":210,"height":210,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/pics/card-pic3.png";
							}
							
							return target[name];
						}
					});

const c4 = new Proxy({"src":"/_astro/card-pic4.CPZGvqT8.png","width":210,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/pics/card-pic4.png";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 1,
      titleTop: "Web",
      titleBottom: "Development",
      img: c1,
      alt: "SEO",
      link: "https://google.com"
    },
    {
      index: 2,
      titleTop: "Social Media",
      titleBottom: "Content Creation",
      img: c2,
      alt: "SEO",
      link: "https://google.com"
    },
    {
      index: 3,
      titleTop: "Mobile App",
      titleBottom: "Development",
      img: c3,
      alt: "SEO",
      link: "https://google.com"
    },
    {
      index: 1,
      titleTop: "Lead",
      titleBottom: "Generation",
      img: c4,
      alt: "SEO",
      link: "https://google.com"
    }
  ];
  const description = "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-5"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Services", "description": description })} <div class="grid lg:grid-cols-2 lg:grid-rows-2 gap-10"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": card.index, "titleTop": card.titleTop, "titleBottom": card.titleBottom, "img": card.img, "alt": card.alt, "link": card.link })}`)} </div> </div> ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/sections/Services.astro", void 0);

export { $$Section as $, $$Services as a, $$SectionTitle as b };
