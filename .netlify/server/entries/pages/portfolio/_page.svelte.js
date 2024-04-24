import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../../chunks/ssr.js";
const categories = [
  {
    title: "Web Development",
    description: "Websites and miscellaneous projects using web technologies(HTML,CSS,JavaScript). I'm currently working on some backend projects as well, which I'll put up here eventually.",
    projects: [
      {
        title: "Style Stage - Atomic Clock",
        screenshotURL: "stylestage.png",
        description: "A stylesheet that I contributed to Style Stage: a public CSS showcase maintained by Stephanie Eckles.",
        liveURL: "https://stylestage.dev/styles/atomic-clock/",
        sourceURL: "https://github.com/ericbrown8787/stylestage"
      },
      {
        title: "All The Fishes",
        screenshotURL: "allthefishes.png",
        description: "An animated, interactive virtual fish tank. A project from User Interface Programming at Raritan Valley Community College, with animations using PIXI.js. Fish sprites by Sarah Lopez.",
        liveURL: "https://all-the-fishes.netlify.app/",
        sourceURL: "https://github.com/RVCC-IDMX/all-the-fishes-ericbrown8787/tree/animation-engine"
      },
      {
        title: "Meet The Fishes",
        screenshotURL: "meetthefishes.png",
        description: 'Animated character bios for "All The Fishes". Fish sprites by Sarah Lopez.',
        liveURL: "https://meet-the-fishes.netlify.app/",
        sourceURL: "https://github.com/RVCC-IDMX/meet-the-fishes-ericbrown8787"
      }
    ]
  },
  {
    title: "Game Development",
    description: "Game prototypes. More finished projects on the way.",
    projects: [
      {
        title: "Climbing Game Prototype",
        screenshotURL: "climbing.png",
        description: "A prototype of an infinite climbing game made in Unity. Jump between platforms. Avoid lightning bolts. See how high you can get. A mashup of mechanics from several different example projects from Programming for Game Developers at Raritan Valley Community College.",
        sourceURL: "https://github.com/2023-09-GDEV267/02-03-basicprototyping-ericbrown8787",
        liveURL: "https://jackalopetracks.itch.io/untitled-climbing-game-prototype"
      },
      {
        title: "They Keep The Lights On At Night",
        screenshotURL: "theykeepthelightsonatnight.png",
        description: "Explore an empty office building at night. Watch out for jumpscares. My final project from Fundamentals of Game Engines at Raritan Valley Community College, and my first major Unity project. The purpose was to learn Unity's various subsystems, so it's not quite fully implemented, but the level can be played all the way through.",
        sourceURL: "https://www.github.com",
        liveURL: "https://itch.io"
      },
      {
        title: "Bustin' Through",
        screenshotURL: "bustinthrough.png",
        description: "A polished prototype of a simple interaction. Smash the glass and breach the reactor core. Why? Why not?",
        sourceURL: "https://www.github.com",
        liveURL: "https://jackalopetracks.itch.io/bustin-through"
      },
      {
        title: "Empty Instance",
        screenshotURL: "emptyinstance.png",
        description: "One of my first attempts at making a game. A short visual novel about a slightly unhinged conversation between two strangers. Created in Ren'Py."
      }
    ]
  },
  {
    title: "Sketches, Experiments and Toys",
    description: "A mix of old and/or weird projects that I built to test an idea, try a new library or otherwise learn something.",
    projects: [
      {
        title: "3D Trading Card/Character Sheet",
        screenshotURL: "cardflip.png",
        description: "This is an animated card component built using CSS. I had originally conceived of this as a concept for a card that could be used in a browser-based character sheet app for tabletop RPGs.",
        sourceURL: "https://github.com/RVCC-IDMX/css-card-flip-ericbrown8787",
        liveURL: "https://css-card-flip-ericbrown8787.netlify.app/"
      },
      {
        title: 'CSS "Platform Ticket"',
        screenshotURL: "platformticket.png",
        description: 'A re-creation of a printed "platform ticket" from an event held at the Metropolitan Opera House in the early 19th century. Uses CSS typography, SVG and 9(!) different web fonts.',
        sourceURL: "https://github.com/RVCC-IDMX/platform-ticket-ericbrown8787",
        liveURL: "https://platform-ticket-ericbrown8787.netlify.app/"
      }
    ]
  }
];
const projects = {
  categories
};
const css$3 = {
  code: ':root{--first-window-color:#99f6e4;--second-window-color:#fdba74;--third-window-color:#f0abfc}article.svelte-h69v2e.svelte-h69v2e{padding:0;border-radius:10px;max-width:650px;overflow:hidden;border:2px solid #99f6e4;box-shadow:var(--window-box-shadow);background-color:var(--text-background-color)}.image-window-content.svelte-h69v2e.svelte-h69v2e{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem}.project:nth-child(3n + 3) > article{border:2px solid var(--first-window-color)}.project:nth-child(3n + 3) > article .window-top{background-color:var(--first-window-color)}.project:nth-child(3n + 1) > article{border:2px solid var(--second-window-color)}.project:nth-child(3n + 1) > article .window-top{background-color:var(--second-window-color)}.project:nth-child(3n + 2) > article{border:2px solid var(--third-window-color)}.project:nth-child(3n + 2) > article .window-top{background-color:var(--third-window-color)}.window-top.svelte-h69v2e.svelte-h69v2e{display:flex;padding:7px;padding-block-start:5px;align-items:center;justify-content:flex-end;gap:7px;content:"";width:100%;background-color:#99f6e4}.window-top.svelte-h69v2e div.svelte-h69v2e{width:30px;height:30px;border-radius:100%;box-shadow:var(--window-deco-box-shadow);color:var(--accent-color);border:3px solid var(--main-background-color)}',
  map: null
};
const ImageWindow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<article class="svelte-h69v2e"><div class="window-top svelte-h69v2e" data-svelte-h="svelte-gsjaoa"><div class="svelte-h69v2e"></div> <div class="svelte-h69v2e"></div> <div class="svelte-h69v2e"></div></div> <div class="image-window-content svelte-h69v2e">${slots.default ? slots.default({}) : ``}</div> </article>`;
});
const css$2 = {
  code: "article.svelte-1l8axgo{padding-inline:2rem;display:flex;flex-wrap:wrap;justify-content:space-between;gap:3rem;margin-block-end:3rem}.links.svelte-1l8axgo{margin-block:2rem;display:flex;flex-direction:column;gap:1rem}.info.svelte-1l8axgo{max-width:50ch}.title.svelte-1l8axgo{font-size:1.2rem;margin-block:2%}img.svelte-1l8axgo{max-width:100%}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { screenshotURL } = $$props;
  let { sourceURL } = $$props;
  let { liveURL } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.screenshotURL === void 0 && $$bindings.screenshotURL && screenshotURL !== void 0)
    $$bindings.screenshotURL(screenshotURL);
  if ($$props.sourceURL === void 0 && $$bindings.sourceURL && sourceURL !== void 0)
    $$bindings.sourceURL(sourceURL);
  if ($$props.liveURL === void 0 && $$bindings.liveURL && liveURL !== void 0)
    $$bindings.liveURL(liveURL);
  $$result.css.add(css$2);
  return `<article class="project svelte-1l8axgo"><section class="info svelte-1l8axgo"><h3 class="title svelte-1l8axgo">${escape(title)}</h3> <p class="description">${escape(description)}</p> ${sourceURL || liveURL ? `<section class="links svelte-1l8axgo">${sourceURL ? `<a${add_attribute("href", sourceURL, 0)} class="source-link">Github</a>` : ``} ${liveURL ? `<a${add_attribute("href", liveURL, 0)} class="live-link">Live</a>` : ``}</section>` : ``}</section> ${screenshotURL ? `${validate_component(ImageWindow, "ImageWindow").$$render($$result, {}, {}, {
    default: () => {
      return `<img${add_attribute("src", `/screenshots/${screenshotURL}`, 0)} alt="A screenshot" class="svelte-1l8axgo">`;
    }
  })}` : ``} </article>`;
});
const css$1 = {
  code: ".category.svelte-1mynto8{display:flex;flex-direction:column;gap:5rem}.title.svelte-1mynto8{margin-block-end:1rem}.description.svelte-1mynto8{max-width:72ch;margin-block-end:1rem}",
  map: null
};
const Category = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { projects: projects2 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.projects === void 0 && $$bindings.projects && projects2 !== void 0)
    $$bindings.projects(projects2);
  $$result.css.add(css$1);
  return `<section class="category svelte-1mynto8"><div class="info-container"><h2 class="title svelte-1mynto8">${escape(title)}</h2> <p class="description svelte-1mynto8">${escape(description)}</p></div>  ${each(projects2, (project, index) => {
    return `${validate_component(Project, "Project").$$render(
      $$result,
      {
        title: project["title"],
        description: project["description"],
        screenshotURL: project["screenshotURL"],
        sourceURL: project["sourceURL"],
        liveURL: project["liveURL"]
      },
      {},
      {}
    )} `;
  })}  </section>`;
});
const css = {
  code: ".page-title.svelte-qm4gkm{margin-block-end:2rem}.portfolio.svelte-qm4gkm{padding-inline:1rem}.category-container.svelte-qm4gkm{display:flex;flex-direction:column;gap:2rem}hr.svelte-qm4gkm{margin-block-start:2rem;margin-block-end:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const categories2 = projects["categories"];
  $$result.css.add(css);
  return `<article class="portfolio svelte-qm4gkm"><h1 class="page-title svelte-qm4gkm" data-svelte-h="svelte-aa7cp3">Portfolio</h1> <div class="category-container svelte-qm4gkm">${each(categories2, (category, index) => {
    return `${validate_component(Category, "Category").$$render(
      $$result,
      {
        title: category["title"],
        description: category["description"],
        projects: category["projects"]
      },
      {},
      {}
    )} ${!(index === categories2.length - 1) ? `<hr class="svelte-qm4gkm">` : ``}`;
  })}</div> </article>`;
});
export {
  Page as default
};
