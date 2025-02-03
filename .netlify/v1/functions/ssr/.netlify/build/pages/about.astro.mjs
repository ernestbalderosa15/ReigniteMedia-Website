/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CnkjT9N1.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BuXsgvjT.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Brdcp9b2.mjs';
import { $ as $$Section, a as $$Services } from '../chunks/Services_fuBSpOIT.mjs';
export { renderers } from '../renderers.mjs';

const s1 = new Proxy({"src":"/_astro/company-logo1.DeLnWc58.svg","width":111,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/company/company-logo1.svg";
							}
							
							return target[name];
						}
					});

const s2 = new Proxy({"src":"/_astro/company-logo2.--PfIXVu.svg","width":126,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/company/company-logo2.svg";
							}
							
							return target[name];
						}
					});

const s3 = new Proxy({"src":"/_astro/company-logo3.CJBvufFc.svg","width":147,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/company/company-logo3.svg";
							}
							
							return target[name];
						}
					});

const s4 = new Proxy({"src":"/_astro/company-logo4.CojkUpY9.svg","width":129,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/company/company-logo4.svg";
							}
							
							return target[name];
						}
					});

const s5 = new Proxy({"src":"/_astro/company-logo5.Cx1P6uOn.svg","width":127,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/company/company-logo5.svg";
							}
							
							return target[name];
						}
					});

const s6 = new Proxy({"src":"/_astro/company-logo6.CKOxzqPH.svg","width":125,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/company/company-logo6.svg";
							}
							
							return target[name];
						}
					});

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const sponsors = [
    { logo: s6, alt: "Amazon logo" },
    { logo: s5, alt: "Dribble logo" },
    { logo: s4, alt: "HubSpot logo" },
    { logo: s3, alt: "Notion logo" },
    { logo: s2, alt: "Netflix logo" },
    { logo: s1, alt: "Zoom logo" }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "sponsors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-row items-center"> <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6"> ${sponsors.map((sponsor) => {
    return renderTemplate`<div class="p-4 grayscale transition duration-200 hover:grayscale-0"> ${renderComponent($$result2, "Image", $$Image, { "src": sponsor.logo, "class": "h-12 w-auto mx-auto", "alt": sponsor.alt, "loading": "lazy" })} </div>`;
  })} </div> </div> ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/sections/Sponsors.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:pb-20 md:pt-10"> <div class="text-center space-y-10"> <h2 class="text-5xl font-medium leading-none md:text-6xl">We Navigate the <br> digital landscape <br> for success</h2> <p class="mt-6 mb-8  text-xl font-normal leading-7 sm:mb-12">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="https://calendly.com/ernest-reignitemedia/30min" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">Book a consultation</h2> </a> </div> </div> </div> </div> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "Services", $$Services, {})} </main> ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/pages/about.astro", void 0);

const $$file = "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
