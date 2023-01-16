/* eslint-disable no-undef */
if ($("#banner-carousel").length) {
  new Splide("#banner-carousel", {
    type: "loop",      // loop: last => first => second ...  // fade: one to one // slide: last <= first => second ...
    autoplay: true,
    speed: 4000,
    interval: 4000,
    perPage: 1,

    rewind: true,
    drag: "free",
    snap: true,

    arrows: true,                     // arrows desativadas
    pagination: true,                 // indicators desativados


    classes: {
      pagination: "splide__pagination",                                                                   // wrapper
      page: "splide__pagination__page p-1.5 mx-1 bg-white/60 hover:bg-white/80 drop-shadow-xl rounded",   // indicators
    },
  }).mount();
}


if ($("#brands").length) {
  new Splide("#brands", {
    type: "loop",    // loop: last => first => second ...  // fade: one to one // slide: last <= first => second ...
    autoplay: true,
    speed: 4000,
    interval: 4000,

    perPage: 4,
    perMove: 1,

    gap: "1.75rem",
    // fixedWidth: 170,
    fixedHeight: 170,

    breakpoints: {
      768: { perPage: 3, perMove: 1, },
      640: { perPage: 2, perMove: 1, },
      // 640  : { perPage: 1, perMove: 1, },
    },

    rewind: true,
    drag: "free",
    snap: true,

    arrows: true,                     // arrows desativadas
    pagination: false,                // indicators desativados
  }).mount();
}

if ($("#customers").length) {
  new Splide("#customers", {
    type: "loop",    // loop: last => first => second ...  // fade: one to one // slide: last <= first => second ...
    autoplay: true,
    speed: 4000,
    interval: 4000,

    perPage: 3,
    perMove: 1,

    gap: "1.75rem",
    // fixedWidth: 170,
    fixedHeight: 200,

    breakpoints: {
      768: { perPage: 2, perMove: 1, },
      640: { perPage: 1, perMove: 1, },
      // 640  : { perPage: 1, perMove: 1, },
    },

    rewind: true,
    drag: "free",
    snap: true,

    arrows: false,                     // arrows desativadas
    pagination: true,                // indicators desativados

    classes: {
      pagination: "splide__pagination relative ",                                                               // wrapper
      page: "splide__pagination__page p-1.5 mx-1 border border-gray-600/50 bg-white hover:bg-blue/80 rounded-full",   // indicators
    },
  }).mount();
}
