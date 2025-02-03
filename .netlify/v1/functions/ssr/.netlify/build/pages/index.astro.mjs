/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, h as renderScript, b as createAstro } from '../chunks/astro/server_CnkjT9N1.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Brdcp9b2.mjs';
import { $ as $$Card } from '../chunks/Card_BrJE9TbQ.mjs';
import { b as $$SectionTitle, $ as $$Section, a as $$Services } from '../chunks/Services_fuBSpOIT.mjs';
/* empty css                                 */
import 'clsx';
import { $ as $$MainLayout } from '../chunks/MainLayout_BuXsgvjT.mjs';
export { renderers } from '../renderers.mjs';

const larrow = new Proxy({"src":"/_astro/icon3.TAKuw7u8.svg","width":21,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/icon3.svg";
							}
							
							return target[name];
						}
					});

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 0,
      title: "For Desmirage, an upcoming US-based perfume brand, we designed a sleek and immersive e-commerce website that captures the essence of luxury and sophistication. Our strategy included a high-converting landing page, an engaging product showcase, and a seamless shopping experience. Additionally, we implemented an SEO-driven content strategy that increased organic traffic by 180% in three months.",
      link: "https://www.figma.com/proto/3SbalMoniZDvEMALsAshM6/Desmirage-(Copy)-(Copy)?page-id=0%3A1&node-id=7-352&p=f&viewport=663%2C632%2C0.78&t=v3yyQFeFRxB8MJYw-1&scaling=min-zoom&content-scaling=fixed"
    },
    {
      index: 1,
      title: "For Jojorganic, a premium skincare and haircare brand, we crafted a visually appealing and user-friendly online store that emphasizes their commitment to organic beauty. We also developed a targeted social media marketing campaign, resulting in a 40% increase in engagement and a 30% boost in online sales. Our email marketing strategy further enhanced customer retention, leading to a higher repeat purchase rate.",
      link: "https://www.figma.com/proto/7kMc9B4fDMkNBm3wJV0tWy/Jojorganic-(Copy)-(Copy)?page-id=77%3A2&node-id=77-3&viewport=-1476%2C-401%2C0.65&t=14YqxdkdRmANRn8i-1&scaling=min-zoom&content-scaling=fixed"
    },
    {
      index: 1,
      title: "For Kohinoor, a renowned Indian gold jewelry company in the US, we revamped their digital presence with a modern, mobile-first website showcasing their exquisite collections. Our SEO and PPC strategy led to a 50% increase in website traffic, while our conversion-optimized product pages boosted sales by 25%. We also launched a storytelling-based branding campaign that strengthened Kohinoor\u2019s image as a trusted heritage brand.",
      link: "https://www.figma.com/proto/GJK1xMAQNdoeLdInPaG4Wm/Kohinoor?page-id=0%3A1&node-id=0-22&viewport=3331%2C2693%2C0.57&t=WQLI0WvPt0Lculap-1&scaling=min-zoom&content-scaling=fixed"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Projects", "description": "Explore our recent projects. Click the link to open the Figma file." })} ${maybeRenderHead()}<div class="flex flex-col lg:flex-row justify-between rounded-[45px] p-1"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex p-[60px] h-full bg-dark text-gray rounded-[45px] m-[1px]"> <div class="flex flex-col gap-5"> <p>${card.title}</p> <a${addAttribute(card.link, "href")} class="flex items-center gap-[15px]" target="_blank"> <span class="text-orange">Website Demo</span> <picture> ${renderComponent($$result3, "Image", $$Image, { "src": larrow, "alt": "Arrow pointing up right" })} </picture> </a> </div> </div> ` })}`)} </div> ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/sections/Cases.astro", void 0);

const decorForm = new Proxy({"src":"/_astro/contact-pic.BrB0SfUf.png","width":692,"height":649,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/pics/contact-pic.png";
							}
							
							return target[name];
						}
					});

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden" data-astro-cid-2lkv3ujd> <form class="bg-gray sm:p-6 h-full w-full lg:max-w-lg" data-astro-cid-2lkv3ujd> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="name" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Name*</label> <input type="text" id="name" name="name" placeholder="Name" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="email" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Email*</label> <input type="email" id="email" name="email" placeholder="Email" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="message" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Message*</label> <textarea id="message" name="message" placeholder="Message" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd></textarea> </div> <button type="submit" name="submit" class="btn-primary w-full" data-astro-cid-2lkv3ujd>Send</button> </form> <picture class="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block" data-astro-cid-2lkv3ujd> ${renderComponent($$result, "Image", $$Image, { "src": decorForm, "alt": "decor", "data-astro-cid-2lkv3ujd": true })} </picture> </div>  ${renderScript($$result, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/ui/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/ui/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-[100px] relative"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Contact Us", "description": "Connect with Us: Let's Discuss Your Digital Marketing Needs" })} ${renderComponent($$result2, "Form", $$Form, {})} </div> ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/sections/Contact.astro", void 0);

const HeroIlust = new Proxy({"src":"/_astro/hero.BcdPYIwb.svg","width":601,"height":501,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/pics/hero.svg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-4xl font-medium leading-none md:text-6xl text-center md:text-left">The Best Web Development Agency <br> For Small Businesses.</h1> <p class="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12">We'll help you Drive traffic, Build trust, & Get results.<br> P.S You'll also get it for a fraction of the price.</p> <div class="w-full justify-center md:justify-start items-center inline-flex"> <a href="https://calendly.com/ernest-reignitemedia/30min" target="_blank" class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">Book a consultation
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> ${renderComponent($$result2, "Image", $$Image, { "src": HeroIlust, "alt": "Hero Ilustration", "loading": "eager" })} </div> </div> ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/sections/Hero.astro", void 0);

const $$Astro = createAstro();
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-[#F3F3F3] overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]" data-astro-cid-kq6n5brs> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex items-center gap-[25px]" data-astro-cid-kq6n5brs> <span class="hidden sm:block sm:text-6xl" data-astro-cid-kq6n5brs>0${index}</span> ${title} </div> <div class="bg-gray w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark" data-astro-cid-kq6n5brs> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true" data-astro-cid-kq6n5brs></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]" data-astro-cid-kq6n5brs> <div class="w-full h-[2px] bg-black" data-astro-cid-kq6n5brs></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]" data-astro-cid-kq6n5brs> ${description} </p> </div> </div>  ${renderScript($$result, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/ui/AccordionItem.astro", void 0);

const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const content = [
    {
      index: 1,
      title: "Consultation",
      description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      index: 2,
      title: "Research",
      description: "After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals."
    },
    {
      index: 3,
      title: "Implementation",
      description: "Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget."
    }
  ];
  return renderTemplate`${content.map((item) => {
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { "index": item.index, "title": item.title, "description": item.description })}`;
  })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/ui/Accordion.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const description = "Step-by-Step Guide to Achieving Your Business Goals";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Our Working Process", "description": description })} ${renderComponent($$result2, "Accordion", $$Accordion, {})} </div> ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/sections/Process.astro", void 0);

const propImg = new Proxy({"src":"/_astro/proposal-pic.DC7YnBHg.png","width":494,"height":395,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/assets/pics/proposal-pic.png";
							}
							
							return target[name];
						}
					});

const $$Proposal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex bg-[#F3F3F3] rounded-[45px] p-[60px] relative mt-[123px] mb-[163px]"> <div class="w-full md:w-[40%] flex flex-col gap-[26px]"> <h2 class="text-3xl font-medium">Let's make things happen</h2> <p>
Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
</p> <a href="https://calendly.com/ernest-reignitemedia/30min" target="_blank"> <button class="btn-primary">Get your free website</button> </a> </div> <picture class="hidden md:flex absolute right-[-10%] lg:right-0 top-[-15%] h-[450px] items-center justify-center"> ${renderComponent($$result3, "Image", $$Image, { "src": propImg, "alt": "This is an illustration", "class": "hidden md:flex lg:h-full lg:w-auto" })} </picture> </div> ` })} ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/sections/Proposal.astro", void 0);

const Testimonials = [
	{
		index: 1,
		name: "Emma Richards",
		role: "Marketing Manager at BrightPath Solutions",
		comment: "Working with Reignite Media has been a game-changer for us. They revamped our outdated website into a sleek, modern design that truly reflects our brand. Their team was professional, attentive, and delivered everything on time. We’ve already seen an uptick in inquiries since launching the new site. Highly recommended!"
	},
	{
		index: 2,
		name: "Michael Adams",
		role: "Founder of UrbanHive Co.",
		comment: "Reignite Media designed a beautiful, functional portfolio website for me that perfectly showcases my work. I’ve received so many compliments on the design, and my bookings have increased since launching. Their team is incredibly supportive, even after the site went live. I can’t thank them enough!"
	},
	{
		index: 3,
		name: "Olivia Bennett",
		role: "Freelance Photographer",
		comment: "Reignite Media designed a beautiful, functional portfolio website for me that perfectly showcases my work. I’ve received so many compliments on the design, and my bookings have increased since launching. Their team is incredibly supportive, even after the site went live. I can’t thank them enough!"
	},
	{
		index: 4,
		name: "David Lee",
		role: "Owner of GreenSpark Landscaping",
		comment: "Reignite Media took the time to understand my business and created a website that truly reflects what we do. The process was seamless, and their team was always available to answer questions. Our site now loads faster, ranks better on Google, and brings in more leads. I wouldn’t hesitate to recommend them."
	},
	{
		index: 5,
		name: "Priya Sharma",
		role: "Blogger and Content Creator",
		comment: "The team at Reignite Media went above and beyond to redesign my blog. They integrated features I didn’t even know I needed, making my site more user-friendly and visually appealing. Their professionalism and expertise made the entire experience stress-free. I’m so happy with the results!"
	},
	{
		index: 6,
		name: "Samuel Carter",
		role: "CEO of TechPulse Inc.",
		comment: "Reignite Media helped us overhaul our company’s website, and the difference is night and day. The new design is clean, intuitive, and optimized for mobile users, which is crucial for our tech-savvy audience. The increase in engagement and conversions has been remarkable. I’d recommend them to any growing business."
	}
];

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const processedTestimonials = Testimonials.map((item, index, array) => ({
    ...item,
    index: index + 1,
    length: array.length
  }));
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "var(--orange)",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-klye6o2m> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-klye6o2m> ${processedTestimonials.map((item) => renderTemplate`<div class="swiper-slide text-gray flex flex-col" role="group"${addAttribute(`${item.index} / ${item.length}`, "aria-label")} data-astro-cid-klye6o2m> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-klye6o2m> <p class="bubble" data-astro-cid-klye6o2m>
"${item.comment}"
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-klye6o2m> <div class="text-orange font-medium" data-astro-cid-klye6o2m>${item.name}</div> <div data-astro-cid-klye6o2m>${item.role}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-klye6o2m> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-klye6o2m><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> <div class="swiper-pagination" data-astro-cid-klye6o2m></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-klye6o2m> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> </div> </div> ${renderScript($$result, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/ui/SwiperSlider.astro?astro&type=script&index=0&lang.ts")} `;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/ui/SwiperSlider.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Testimonials", "description": "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" })} <div class="rounded-[45px] bg-dark mb-[150px] text-gray"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> </div> ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/components/sections/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Reignite Media", "description": "A beautiful and functional landing page design created specifically for digital marketing agencies. With its clean and modern design, Reignite Media is the perfect template to showcase your agency's services and case studies to potential clients. Built with astro and tailwindcss" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})}  ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Proposal", $$Proposal, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "Process", $$Process, {})}  ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/pages/index.astro", void 0);

const $$file = "W:/REIGNITE MEDIA - WEBSITES/ReigniteMedia-Website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
