// products.ts
export const templateStore = [
  {
    id: 1,
    title: "เว็บไซต์เกี่ยวกับเสื้อผ้า",
    page: {
      font: "Arial",
      category: ["men", "women", "accessories"],
    },
    image:
      "https://res.cloudinary.com/daiu8h0ep/image/upload/v1736769282/fornt-end-vendorverse/template/template-store-1_wp1loh.png",
    navbar: {
      background_color: "#000000",
      text_color: "#fff",
      template: 1,
      logo: "",
    },
    section1: {
      title: "SALE IS ON",
      detail: "End of the season last catch",
      image: [
        "https://static.wixstatic.com/media/c837a6_67e12d793c454d5bb62e059660f6e313~mv2.jpg/v1/fill/w_1811,h_1204,fp_0.51_0.19,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sale-Couple-_b.jpg",
      ],
      background_color: "#000000",
      text_color: "#fff",
      template: 1,
    },
    section2: {
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
      use_section: "yes",
    },
    section3: {
      title: "NEW IN",
      detail: "new arrivals now in stock",
      image: [
        "https://static.wixstatic.com/media/c837a6_322d425ac7f04510bf0412e5bce93230~mv2.jpg/v1/fill/w_863,h_863,fp_0.59_0.24,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/New-In_Man.jpg",
      ],
      background_color: "#000000",
      text_color: "#fff",
      template: 3,
      use_section: "yes",
    },
    section4: {
      image: [
        "https://static.wixstatic.com/media/c837a6_2b2fa39af75043d0921f6d95e721bc05~mv2.jpg/v1/crop/x_341,y_266,w_1375,h_1615/fill/w_574,h_674,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Model%20in%20olive%20and%20orange%20puffer%20jacket(2).jpg",
        "https://static.wixstatic.com/media/c837a6_39516c6e025249e49d0124a50e9635a3~mv2.jpg/v1/crop/x_156,y_13,w_1585,h_1863/fill/w_574,h_674,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20puffer%20jacket%20fashion.jpg",
        "https://static.wixstatic.com/media/c837a6_a3b41f50435d4d3fae11ec96cefeee32~mv2.jpg/v1/fill/w_573,h_673,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Puffy%20beige%20and%20orange%20tote.jpg",
      ],
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
      use_section: "yes",
    },
    section5: {
      title: "our story",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.",
      image: [
        "https://static.wixstatic.com/media/c837a6_7a7a62482b6f4d6c971de6bd2740b63f~mv2.jpg/v1/fill/w_1079,h_1079,q_90/c837a6_7a7a62482b6f4d6c971de6bd2740b63f~mv2.webp",
      ],
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
      use_section: "no",
    },
    section6: {
      title: "CONTACT",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
      image:
        "https://static.wixstatic.com/media/c837a6_0abdcf0c6d304993ad5d02f7bbd366bf~mv2.jpg/v1/fill/w_369,h_491,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0abdcf0c6d304993ad5d02f7bbd366bf~mv2.jpg",
      background_color: "#fff",
      text_color: "#000000",
      template: 2,
      use_section: "yes",
    },
    footer: {
      detail_footer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
    },
    product: [
      {
        name: "MARA COAT",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 2000,
        category: "men",
        product_img: [
          "https://static.wixstatic.com/media/c837a6_77d364e6cbaa4b1c922134dbe24b917c~mv2.jpg/v1/fill/w_1217,h_1217,q_90/c837a6_77d364e6cbaa4b1c922134dbe24b917c~mv2.webp",
        ],
        product_more1: ["S", "X", "L", "XL"],
        product_more2: ["black", "white", "green", "red"],
      },
      {
        name: "LAPTOP CASE",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 1000,
        category: "accessories",
        product_img: [
          "https://static.wixstatic.com/media/c837a6_311d8a6dc7be4140831ba186ddfb8612~mv2.jpg/v1/fill/w_1217,h_1217,q_90/c837a6_311d8a6dc7be4140831ba186ddfb8612~mv2.webp",
        ],
        product_more1: ["S", "X", "L", "XL"],
        product_more2: ["black", "white", "green", "red"],
      },
      {
        name: "SNUG JACKET",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 3000,
        category: "accessories",
        product_img: [
          "https://static.wixstatic.com/media/c837a6_dced1965a9694686927b75c805908437~mv2.jpg/v1/fill/w_1470,h_1470,q_90/c837a6_dced1965a9694686927b75c805908437~mv2.webp",
        ],
        product_more1: ["S", "X", "L", "XL"],
        product_more2: ["black", "white", "green", "red"],
      },
      {
        id: 4,
        name: "FROST FIT",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 3000,
        category: "accessories",
        product_img: [
          "https://static.wixstatic.com/media/c837a6_5ebdfa9515e04c2f99cd11761e8d969e~mv2.jpg/v1/fill/w_1217,h_1217,q_90/c837a6_5ebdfa9515e04c2f99cd11761e8d969e~mv2.webp",
        ],
        product_more1: ["S", "X", "L", "XL"],
        product_more2: ["black", "white", "green", "red"],
      },
    ],
  },
  {
    id: 2,
    title: "เว็บไซต์เกี่ยวกับอุปกรณ์อิเล็กทรอนิกส์",
    page: {
      font: "Arial",
      category: [
        "Mobile",
        "Drones",
        "Headphones",
        "Computers",
        "Tablets",
        "TV and Home Cinema",
      ],
    },
    image:
      "https://res.cloudinary.com/daiu8h0ep/image/upload/v1736769972/fornt-end-vendorverse/template/template-store-2_kelfa0.png",
    navbar: {
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
      logo: "",
    },
    section1: {
      title: "Shop The Top Brand Electronic",
      detail: "Get more for your money with every purchase!",
      image: [
        "https://static.wixstatic.com/media/c837a6_00173c4a200f44269fa9acb29a36beaf~mv2.jpg/v1/fill/w_1899,h_1013,fp_0.49_0.52,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_3d_models_of_8_products_edited.jpg",
      ],
      background_color: "#000000",
      text_color: "#fff",
      template: 1,
    },
    section2: {
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
      use_section: "yes",
    },
    section3: {
      title: "electronic",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
      image: [
        "data:image/jpeg;base64,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",
      ],
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
      use_section: "no",
    },
    section4: {
      image: [
        "https://static.wixstatic.com/media/c837a6_5b37c6d9828241aa804f2e0af2334a7c~mv2.jpeg/v1/fill/w_901,h_431,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_smartphone_--ar_169_--style_raw_--sref_httpss_mj_fae1610e-8d4e-469f-ba15-d7.jpeg",
        "https://static.wixstatic.com/media/c837a6_85bb5adcb80b4125b8a0f5214ef04365~mv2.jpeg/v1/fill/w_901,h_431,fp_0.64_0.67,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_still_camera_yellow_toned_background_--ar_169_--_428ffea2-e625-405e-a844-20.jpeg",
        "https://static.wixstatic.com/media/c837a6_386fa17e5e6d4012bcef90f32b15624d~mv2.jpeg/v1/fill/w_901,h_431,fp_0.60_0.61,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_headphoes_green_toned_background_--ar_169_--styl_3f2a235f-221a-40d3-a420-96.jpeg",
        "https://static.wixstatic.com/media/c837a6_08bb311bff82496da18ec5b8e6e0f864~mv2.jpeg/v1/fill/w_901,h_431,fp_0.50_0.59,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_laptop_--ar_169_--style_raw_--sref_httpss_mj_run_3eb1f332-e4c9-4c29-8986-92.jpeg",
        "https://static.wixstatic.com/media/c837a6_f812686c1dc144ae890d6ac29193522d~mv2.jpeg/v1/fill/w_901,h_431,fp_0.48_0.51,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_tablet_--ar_169_--style_raw_--sref_httpss_mj_run_edc85ecf-ad3a-4a7c-9b04-11.jpeg",
        "https://static.wixstatic.com/media/c837a6_b34b9247aa3a44dfa1fae48f7699bc39~mv2.jpeg/v1/fill/w_901,h_431,fp_0.76_0.59,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_projector_--ar_169_--style_raw_--sref_httpss_mj__5db03932-2daf-40b9-8e02-b1.jpeg",
      ],
      background_color: "#fff",
      text_color: "#000000",
      template: 2,
      use_section: "yes",
    },
    section5: {
      title: "test",
      detail: "test",
      image: [""],
      background_color: "#000000",
      text_color: "#fff",
      template: 1,
      use_section: "no",
    },
    section6: {
      title: "Contact",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
      image:
        "https://static.wixstatic.com/media/c837a6_3e57aa37f05c428fbe93d96301ffe50c~mv2.jpg/v1/fill/w_940,h_826,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ModelYellow.jpg",
      background_color: "#fff",
      text_color: "#000000",
      template: 3,
      use_section: "yes",
    },
    footer: {
      detail_footer: "test",
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
    },
    product: [
      {
        name: "JP Exmax Phantom, 5G, 16GB",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 2000,
        category: "Mobile",
        product_img: [
          "https://static.wixstatic.com/media/c22c23_229835b7ed254c8c95f2b90ef1404ded~mv2.jpg/v1/fill/w_363,h_483,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_229835b7ed254c8c95f2b90ef1404ded~mv2.jpg",
        ],
        product_more1: ["64 GB", "128 GB"],
        product_more2: [],
      },
      {
        name: "EXE Mini Drone With Sky Controller",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 1000,
        category: "Drones",
        product_img: [
          "https://static.wixstatic.com/media/c22c23_607618f163cf465da48e3393dbcd871e~mv2.jpg/v1/fill/w_363,h_483,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_607618f163cf465da48e3393dbcd871e~mv2.jpg",
        ],
        product_more1: [],
        product_more2: [],
      },
      {
        name: "Drums Pro Wireless On-Ear Headphones",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 3000,
        category: "Headphones",
        product_img: [
          "https://static.wixstatic.com/media/c22c23_31759778ff1248978471f8cc44c24f9d~mv2.png/v1/fill/w_363,h_483,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_31759778ff1248978471f8cc44c24f9d~mv2.png",
        ],
        product_more1: [],
        product_more2: [],
      },
      {
        id: 4,
        name: "Pilates 14 Touch Screen Laptop 12GB Memory",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 12000,
        category: "Computers",
        product_img: [
          "https://static.wixstatic.com/media/c22c23_01a8a61a9f6c4e3a97711b8c684050e9~mv2.png/v1/fill/w_363,h_483,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_01a8a61a9f6c4e3a97711b8c684050e9~mv2.png",
        ],
        product_more1: [],
        product_more2: [],
      },
    ],
  },
  {
    id: 3,
    title: "เว็บไซต์เกี่ยวกับผลิตภัณฑ์",
    page: {
      font: "Arial",
      category: ["face", "body", "hair"],
    },
    image:
      "https://res.cloudinary.com/daiu8h0ep/image/upload/v1736770592/fornt-end-vendorverse/template/template-store-3_mp20el.png",
    navbar: {
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
      logo: "",
    },
    section1: {
      title: "shine on",
      detail: "beauty that reflects your spirit",
      image: [
        "https://static.wixstatic.com/media/84770f_a4e5aee60e58478a8781128441765935~mv2.jpg/v1/crop/x_45,y_89,w_2955,h_1767/fill/w_1833,h_986,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fold1_hero%20(1).jpg",
      ],
      background_color: "#000000",
      text_color: "#fff",
      template: 1,
    },
    section2: {
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
      use_section: "yes",
    },
    section3: {
      title: "effortless beauty,timeless charm.",
      detail: "new arrivals now in stock",
      image: [
        "https://static.wixstatic.com/media/c837a6_ce2611b99f714d55ac39dd982c0e2dc3~mv2.jpg/v1/crop/x_0,y_514,w_2688,h_1278/fill/w_1834,h_873,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fold3_banner.jpg",
      ],
      background_color: "#000000",
      text_color: "#fff",
      template: 3,
      use_section: "yes",
    },
    section4: {
      image: [
        "https://static.wixstatic.com/media/c837a6_3f664c12d6cf450fa8124bb718c24fa8~mv2.jpg/v1/crop/x_0,y_321,w_1733,h_2133/fill/w_514,h_631,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/woman%20with%20face%20cream.jpg",
        "https://static.wixstatic.com/media/c837a6_17aea40f0fe74fa0bd04e5052b900a9b~mv2.jpg/v1/crop/x_153,y_661,w_1752,h_2156/fill/w_513,h_631,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fold4_body%20category.jpg",
        "https://static.wixstatic.com/media/c837a6_7ed6c000f44a4e70bd6397a496c53d63~mv2.jpg/v1/crop/x_0,y_125,w_1920,h_2363/fill/w_513,h_631,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fold4_hair%20category.jpg",
      ],
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
      use_section: "yes",
    },
    section5: {
      title: "our story",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.",
      image: [
        "https://static.wixstatic.com/media/c837a6_7a7a62482b6f4d6c971de6bd2740b63f~mv2.jpg/v1/fill/w_1079,h_1079,q_90/c837a6_7a7a62482b6f4d6c971de6bd2740b63f~mv2.webp",
      ],
      background_color: "#fff",
      text_color: "#000000",
      template: 2,
      use_section: "yes",
    },
    section6: {
      title: "CONTACT",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
      image:
        "https://static.wixstatic.com/media/c837a6_3e57aa37f05c428fbe93d96301ffe50c~mv2.jpg/v1/fill/w_940,h_826,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ModelYellow.jpg",
      background_color: "#fff",
      text_color: "#000000",
      template: 2,
      use_section: "yes",
    },
    footer: {
      detail_footer: "test",
      background_color: "#fff",
      text_color: "#000000",
      template: 1,
    },
    product: [
      {
        name: "hydraglow moisturizer",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 2000,
        category: "face",
        product_img: [
          "https://static.wixstatic.com/media/c837a6_7a7a62482b6f4d6c971de6bd2740b63f~mv2.jpg/v1/fill/w_1272,h_1272,q_90/c837a6_7a7a62482b6f4d6c971de6bd2740b63f~mv2.webp",
        ],
        product_more1: [],
        product_more2: [],
      },
      {
        name: "radiance cleanser",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 1000,
        category: "face",
        product_img: [
          "https://static.wixstatic.com/media/c837a6_1698cda8e3074215896c10690dffa017~mv2.jpg/v1/fill/w_1272,h_1272,q_90/c837a6_1698cda8e3074215896c10690dffa017~mv2.webp",
        ],
        product_more1: [],
        product_more2: [],
      },
      {
        name: "deep hydration cream",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 3000,
        category: "body",
        product_img: [
          "https://static.wixstatic.com/media/c837a6_408d09d418cb43fd9b2d6345f4ee7713~mv2.jpg/v1/fill/w_1272,h_1272,q_90/c837a6_408d09d418cb43fd9b2d6345f4ee7713~mv2.webp",
        ],
        product_more1: [],
        product_more2: [],
      },
      {
        id: 4,
        name: "repairing hair mask",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.t",
        stock: 10,
        price: 3000,
        category: "hair",
        product_img: [
          "https://static.wixstatic.com/media/c837a6_fd533b4ff6b44d5cb146fc23c7b3e09a~mv2.jpg/v1/fill/w_1470,h_1470,q_90/c837a6_fd533b4ff6b44d5cb146fc23c7b3e09a~mv2.webp",
        ],
        product_more1: [],
        product_more2: [],
      },
    ],
  },
];
