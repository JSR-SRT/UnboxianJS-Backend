export const ProductItems = [
  // Bearbrick Products (10 items b1-b10)
  {
    id: "b1", // ไม่ show ที่หน้า UI ให้ user เห็น
    category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
    name: "BE@RBRICK atmos × Coca-Cola Tokyo 100% & 400%",
    description:
      "A collaborative collectible figure made by Medicom Toy in partnership with atmos and Coca-Cola. This edition features a distinctive checkerboard pattern with alternating classic white-on-red Coca-Cola logos and Japanese characters representing Tokyo. The figure prominently displays the atmos logo on the chest. The 100% figure stands approximately 7 cm tall, while the 400% figure is roughly 28 cm tall. The set combines iconic branding from Coca-Cola with the stylish flair of atmos, creating a limited edition collectible.", //show ให้ user เห็นบนหน้า UI ProductDetails.jsx
    price: "7950", // format ให้เป็น "฿ x,xxx" ใน frontend
    condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
    mainImage:
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670395/b1-atmos-coke-show_gpqvog.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
    gallery: [
      //รูปที่ 2 และ 3 คือ Product ที่เราถ่ายจริง ซึ่งจะ show ให้ user เห็นบนหน้า UI ProductDetails.jsx แบบ swipe เลื่อนได้
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670390/b1-atmos-coke-own-1_lpddhf.png",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670392/b1-atmos-coke-own-2_jkwuyb.jpg",
    ],
  },
  {
    id: "b2",
    category: "bearbrick",
    name: "BE@RBRICK COOKIE MONSTER Costume Ver. 400%",
    description:
      "A collectible figure by Medicom Toy. It stands approximately 28 cm tall and represents the iconic Sesame Street character Cookie Monster in a costume version design. This figure features a detailed and textured blue appearance that resembles Cookie Monster's fuzzy look from the show. The Costume Ver. emphasizes the playful and nostalgic nature of the character, making it a premium collectible item.",
    price: "8950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670400/b2-cookie-show_qpgfo5.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670395/b2-cookie-own-1_itpxwm.png",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670399/b2-cookie-own-2_bbehh6.jpg",
    ],
  },
  {
    id: "b3",
    category: "bearbrick",
    name: "BE@RBRICK MINIONS DAVE CHROME Ver. 100% & 400%",
    description:
      "A collectible figure set by Medicom Toy featuring Dave, a popular character from the Minions series. This special version showcases a shiny chrome finish, giving the figures a sleek, reflective metallic look. The 100% figure stands about 7 cm tall, while the 400% figure is approximately 28 cm tall. Both figures have articulated limbs and are made of high-quality painted plastic. This set is a unique collectible that combines the playful charm of the Minions with the iconic BE@RBRICK bear shape, making it a prized piece for fans and collectors.",
    price: "5950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670397/b3-minion-dave-show_yujupe.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670402/b3-minion-dave-own-1_xakc6u.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670405/b3-minion-dave-own-2_x7ppzs.jpg",
    ],
  },
  {
    id: "b4",
    category: "bearbrick",
    name: "BE@RBRICK Tom and Jerry Flocky Ver. 100% & 400%",
    description:
      "A collectible figure set by Medicom Toy featuring the character from the classic Tom and Jerry cartoon with a special flocked texture that mimics fur. The 100% figure stands about 7 cm tall, while the 400% figure is approximately 28 cm tall. These figures have articulated limbs and detailed paintwork to capture Tom & Jerry’s iconic look with a fuzzy, soft surface finish. This special edition offers fans a tactile and visually distinct version of Tom & Jerry, combining collectible art with a nostalgic character.",
    price: "14950",
    condition: "New-Unboxed",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670392/b4-tom-jerry-show_gvd2fh.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670395/b4-tom-jerry-own-1_buzu6k.png",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670398/b4-tom-jerry-own-2_yob8rn.png",
    ],
  },
  {
    id: "b5",
    category: "bearbrick",
    name: "BE@RBRICK Carnival Futro 100% & 400%",
    description:
      "A collectible figure series from Medicom Toy featuring a carnival-inspired design. The 100% figure stands about 7 cm tall, and the 400% figure is approximately 28 cm tall. These figures showcase vibrant colors and artistic patterns that evoke the festive spirit of a carnival. Made with high-quality materials and articulated limbs, they are designed for collectors who prefer unique and colorful design.",
    price: "7950",
    condition: "Displayed, Like New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670401/b5-carnival-futro-show_qjhu5k.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670402/b5-carnival-futro-own-1_l2obzs.png",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670401/b5-carnival-futro-own-2_kcvknk.png",
    ],
  },
  {
    id: "b6",
    category: "bearbrick",
    name: "BE@RBRICK Shaun the Sheep 100% & 400%",
    description:
      "A collectible figure set by Medicom Toy features the character Shaun from the popular television film series, Shaun the Sheep. The 100% figure is approximately 7 cm tall, and the 400% figure is approximately 28 cm tall. The design faithfully recreates Shaun’s appearance, including his distinctive facial features. Come as a limited edition collectible perfect for fans of the animated series and BE@RBRICK collectors.",
    price: "5950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670405/b6-shaun-sheep-show_roksd9.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670408/b6-shaun-sheep-own-1_iqrah3.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670407/b6-shaun-sheep-own-2_wqayvw.jpg",
    ],
  },
  {
    id: "b7",
    category: "bearbrick",
    name: "BE@RBRICK Andy Warhol x Jean-Michel Basquiat 400%",
    description:
      "A collectible figure by Medicom Toy and part of a special collaboration featuring the artwork of two iconic artists, Andy Warhol and Jean-Michel Basquiat. The figure is approximately 28 cm tall. It combines elements of pop art and Basquiat's unique graffiti style, resulting in a visually striking figure. This collectible is made of plastic, with detailed printed artwork reflecting the distinctive styles of both artists.",
    price: "3450",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670411/b7-jean-michel-show_e0de2u.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670409/b7-jean-michel-own-1_x0auth.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670409/b7-jean-michel-own-2_iwb9q8.jpg",
    ],
  },
  {
    id: "b8",
    category: "bearbrick",
    name: "BE@RBRICK Elmo Costume Ver.2.0 400%",
    description:
      "A collectible figure from Medicom Toy, themed after the beloved Sesame Street character Elmo. This figure stands approximately 28 cm tall. It features a plush, fuzzy texture that mimics Elmo's iconic red fur in a detailed costume version. It is a popular item for fans of Sesame Street and BE@RBRICK collectors. The design focuses on high-quality materials and a faithful representation of Elmo's playful character.",
    price: "8950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670410/b8-elmo-show_pottro.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670413/b8-elmo-own-1_ytozpc.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670414/b8-elmo-own-2_cvltjo.jpg",
    ],
  },
  {
    id: "b9",
    category: "bearbrick",
    name: "BE@RBRICK Cheer Bear Costume Ver. 400% ",
    description:
      "A collectible figure from Medicom Toy inspired by the classic Care Bears character, Cheer Bear. This figure stands approximately 28 cm tall. It features a soft, plush-like costume texture that resembles Cheer Bear’s iconic pink fur and rainbow belly badge. The figure includes articulation for posing and comes in carefully designed packaging. As a limited edition release, it is a popular item among collectors who appreciate the blend of nostalgic pop culture and designer toys",
    price: "4950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670412/b9-cheer-bear-show_xoffyv.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670416/b9-cheer-bear-own-1_lpahgk.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670415/b9-cheer-bear-own-2_vivtmn.jpg",
    ],
  },
  {
    id: "b10",
    category: "bearbrick",
    name: "BE@RBRICK Liberty Walk 100% & 400% Red Stripe Ver.",
    description:
      "A collaboration collectible by Medicom Toy with Liberty Walk, a well-known car tuning brand. The 100% Bearbrick stands approximately 7 cm tall, while the 400% size is about 28 cm tall. These figures often feature designs inspired by the iconic Liberty Walk aesthetic, including automotive themes and urban street style influences. The set is sought after by collectors who appreciate the fusion of designer toy culture with automotive customization.",
    price: "7950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670414/b10-liberty-walk-show_krsvd3.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670416/b10-liberty-walk-own-1_anooqz.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670418/b10-liberty-walk-own-2_boy8ff.jpg",
    ],
  },

  // Popmart Products (10 items p1-p10)
  {
    id: "p1", // ไม่ show ที่หน้า UI ให้ user เห็น
    category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
    name: "POP MART The MONSTERS - FALL IN WILD Series Vinyl Plush Doll",
    description:
      "A detailed collectible designer plush featuring the character Labubu. The doll measures approximately 20 cm by 15 cm by 40 cm. The stuffing consists of 90% polyester fiber and 10% PE particles. This gives the plush a soft but durable texture. The design captures the whimsical and charming style of the Monsters series, making it highly appealing for collectors and fans of artistic collectible toys.", //show ให้ user เห็นบนหน้า UI ProductDetails.jsx
    price: "3950", // format ให้เป็น "฿ x,xxx" ใน frontend
    condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670416/p1-labubu-fall-in-wild-show_lkxuh9.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
    gallery: [
      //รูปที่ 2 และ 3 คือ Product ที่เราถ่ายจริง ซึ่งจะ show ให้ user เห็นบนหน้า UI ProductDetails.jsx แบบ swipe เลื่อนได้
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670420/p1-labubu-fall-in-wild-own-1_ipifxz.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670421/p1-labubu-fall-in-wild-own-2_klwwfc.jpg",
    ],
  },
  {
    id: "p2",
    category: "popmart",
    name: "POP MART The MONSTERS - Let's Checkmate Series Vinyl Plush Doll",
    description:
      "A detailed collectible designer plush featuring the character Labubu. The doll stands approximately 37 cm tall in a standing posture and 33 cm when sitting. It is made from a combination of materials including polyester, PVC, and ABS for the shell, while the stuffing consists of polyester and PP particles. The doll comes with a ring box made from PS, polyester, and hardware materials. The design features detailed craftsmanship typical of the Monsters series, making it a sought-after collectible item for fans and collectors of Pop Mart art toys.",
    price: "3950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670418/p2-labubu-lets-checkmate-show_kp5eqi.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670422/p2-labubu-lets-checkmate-own-1_e9uyk2.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670422/p2-labubu-lets-checkmate-own-2_b5lye3.jpg",
    ],
  },
  {
    id: "p3",
    category: "popmart",
    name: "POP MART MEGA ROYAL MOLLY 400% Childishness",
    description:
      "A large collectible figure standing about 382mm tall. It is made primarily from ABS material, designed for collectors. This figure is part of the MOLLY series by POP MART, featuring a playful and childlike design theme in the Childishness edition. The toy emphasizes vibrant colors and charming aesthetic typical of POP MART's designer toys.",
    price: "8950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670421/p3-molly-childishness-show_f4xbgk.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670427/p3-molly-childishness-own-1_jgdazp.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670425/p3-molly-childishness-own-2_sfp8rv.jpg",
    ],
  },
  {
    id: "p4",
    category: "popmart",
    name: "POP MART MEGA SPACE MOLLY 400% Mango Sticky Rice",
    description:
      "A collectible figure about 300 mm tall. It is made from PVC, ABS, and PC materials. This figure is part of a Thailand Limited collection that blends fashion, art, and Thai culture into a charming design inspired by the iconic Thai dessert, mango sticky rice. The figure features detailed craftsmanship with sweet mango elements and vibrant colors, making it a highly appealing item for collectors. It represents a unique fusion of cultural symbolism and contemporary art toy design.",
    price: "7950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670423/p4-molly-mango-sticky-rice-show_cdcaov.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670430/p4-molly-mango-sticky-rice-own-1_gam4dt.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670429/p4-molly-mango-sticky-rice-own-2_cc02e0.jpg",
    ],
  },
  {
    id: "p5",
    category: "popmart",
    name: "POP MART MEGA SPACE MOLLY 400% PANDA",
    description:
      "A large collectible figure standing about 300 mm tall. It is made from a combination of PVC, ABS, and polyester fiber. The character features a cute panda theme combined with space elements, reflecting a playful and charming design typical of POP MART's art toys. The figure's design includes Molly holding a panda's favorite snack and a backpack filled with small apples, inviting collectors to chill out and explore a bamboo forest with this collectible.",
    price: "7950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670426/p5-molly-panda-show_ivwmqy.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670429/p5-molly-panda-own-1_iwj5nq.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670430/p5-molly-panda-own-2_topeq8.jpg",
    ],
  },
  {
    id: "p6",
    category: "popmart",
    name: "POP MART MEGA SPACE MOLLY 400% GARFIELD",
    description:
      "A collectible figure standing about 320 mm tall, made from PVC and ABS materials.  The design features the character Molly combined with Garfield’s playful and charming aesthetic, often portrayed with accessories like pom-poms, buttons, and a toy phone cord, representing a space-themed suit ready for adventure.",
    price: "10950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670433/p6-molly-garfield-show_ntqk5w.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670439/p6-molly-garfield-own-1_pde3nn.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670438/p6-molly-garfield-own-2_t3nven.jpg",
    ],
  },
  {
    id: "p7",
    category: "popmart",
    name: "POP MART MOLLY Hello, Moon 1/8 Action Figure",
    description:
      "A collectible figure by POP MART with an approximate height of 20 cm. Made from materials including PVC, ABS, metal parts, polyester fiber, PU, and TPU, this figure features fine craftsmanship and articulated joints for posing. The design presents Molly in a charming space-themed outfit, complete with accessories like pom-poms, buttons, and a toy phone cord, giving her the ready-for-adventure look as it says hello to the moon and beyond. It is a part of POP MART's popular MOLLY series and is aimed at collectors looking for detailed and artistic figures.",
    price: "2950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670442/p7-molly-hello-moon-show_jryrdx.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670444/p7-molly-hello-moon-own-1_hyusjm.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670444/p7-molly-hello-moon-own-2_btz03t.jpg",
    ],
  },
  {
    id: "p8",
    category: "popmart",
    name: "POP MART MEGA CRYBABY 400% The Queen of Broken Heart",
    description:
      "A limited edition collectible figure by POP MART.  The figure is about 380 mm tall and made from high-quality materials such as PVC, ABS, and polyester. This version  represents the character CRYBABY with a special theme called The Queen of Broken Heart. The figure comes in a limited quantity, making it a rare and sought-after item among fans of POP MART's art toys.",
    price: "8950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670444/p8-crybaby-queen-broken-heart-show_nutnb7.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670448/p8-crybaby-queen-broken-heart-own-1_zubrqz.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670447/p8-crybaby-queen-broken-heart-own-2_cuvvvw.jpg",
    ],
  },
  {
    id: "p9",
    category: "popmart",
    name: "POP MART CRYBABY HELLO THAILAND SERIES-Plush Doll",
    description:
      "A collectible plush figure with a size of approximately 21x21x26 cm. It is made mostly from polyester (98%) with a small amount of ABS (2%) for durability. This plush doll features the CRYBABY character themed around Thailand, showcasing cultural elements and charming design, making it a unique and adorable item for fans and collectors. It is part of POP MART's popular CRYBABY series, known for artistic and endearing collectible toys.",
    price: "1950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670445/p9-crybaby-hello-thailand-show_wrg7sh.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670448/p9-crybaby-hello-thailand-own-1_m1cqac.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670450/p9-crybaby-hello-thailand-own-2_dadpru.jpg",
    ],
  },
  {
    id: "p10",
    category: "popmart",
    name: "POP MART MEGA ROYAL MOLLY 400% Snow White",
    description:
      "A collectible figure measuring approximately 380 mm tall. It is made primarily from durable ABS material. This figure is part of the MEGA COLLECTION series and features Molly in a Snow White-themed design, showcasing intricate and elegant details. It is sold in limited quantities to maintain exclusivity. The figure embodies the artistic and charming style typical of POP MART's designer toys.",
    price: "8950",
    condition: "New",
    mainImage: "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670450/p10-molly-snow-white-show_an5je7.png",
    gallery: [
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670452/p10-molly-snow-white-own-1_zlpiqv.jpg",
      "https://res.cloudinary.com/dzzd9igjj/image/upload/v1761670456/p10-molly-snow-white-own-2_z3ovrl.jpg",
    ],
  },
];
