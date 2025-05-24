const productData = {
    productos: [
        {
            titulo: "ZOMBOUCKET HAT - NEON",
            precio: "$45.00 USD",
            imagen: "assets/accesoriesImg/hatZ.png",
            categoria: "accesories",
            descripcion1: "Bold neon bucket hat design.",
            descripcion2: "Breathable and lightweight fabric.",
            descripcion3: "Perfect for sunny zombie adventures."
        },
        {
            titulo: "ZOMBOY BAG - NEON",
            precio: "$50.00 USD",
            imagen: "assets/accesoriesImg/maricZ.png",
            categoria: "accesories",
            descripcion1: "Spacious and stylish neon bag.",
            descripcion2: "Durable materials with strong straps.",
            descripcion3: "Carry your essentials in undead style."
        },
        {
            titulo: "ZOM BOY SLIDES",
            precio: "$35.00 USD",
            imagen: "assets/accesoriesImg/sandalsZ.png",
            categoria: "accesories",
            descripcion1: "Comfy slides with Zomboy branding.",
            descripcion2: "Anti-slip rubber sole.",
            descripcion3: "Ideal for casual apocalypse lounging."
        },
        {
            titulo: "FRIENDLY ZOM DAD HAT",
            precio: "$30.00 USD",
            imagen: "assets/accesoriesImg/capZ.png",
            categoria: "accesories",
            descripcion1: "Classic dad hat with zombie twist.",
            descripcion2: "Adjustable strap for all sizes.",
            descripcion3: "Friendly design, deadly attitude."
        },
        {
            titulo: "ZOMBOY BATH ROBE",
            precio: "$50.00 USD",
            imagen: "assets/accesoriesImg/tubZ.png",
            categoria: "accesories",
            descripcion1: "Plush robe with Zomboy embroidery.",
            descripcion2: "Stay cozy after a long undead night.",
            descripcion3: "One size fits most."
        },
        {
            titulo: "FRIENDLY ZOM BEANIE",
            precio: "$25.00 USD",
            imagen: "assets/accesoriesImg/softcapZ.png",
            categoria: "accesories",
            descripcion1: "Warm beanie for cold graveyard nights.",
            descripcion2: "Soft knit fabric for comfort.",
            descripcion3: "Subtle Zomboy branding."
        },
        {
            titulo: "SCROPT DAD HAT",
            precio: "$30.00 USD",
            imagen: "assets/accesoriesImg/redcapZ.png",
            categoria: "accesories",
            descripcion1: "Bold red dad hat with unique lettering.",
            descripcion2: "Adjustable and breathable.",
            descripcion3: "Add character to any outfit."
        },
        {
            titulo: "DRIPPY FACE BANDANA",
            precio: "$10.00 USD",
            imagen: "assets/accesoriesImg/bandanaZ.png",
            categoria: "accesories",
            descripcion1: "Stylish bandana with dripping face print.",
            descripcion2: "Perfect for festivals or face coverage.",
            descripcion3: "Easy to wear and tie."
        },
        {
            titulo: "Displacement Snapback Hat",
            precio: "$22.00 USD",
            imagen: "assets/accesoriesImg/duckcapZ.png",
            categoria: "accesories",
            descripcion1: "Graphic snapback with quirky visuals.",
            descripcion2: "Flat brim and adjustable fit.",
            descripcion3: "Urban zombie-approved."
        },
        {
            titulo: "LIMITED EDITION ZOM VARSITY JACKET",
            precio: "$100.00 USD",
            imagen: "assets/apparelImg/owlhoodieZ.png",
            categoria: "apparel",
            descripcion1: "Exclusive varsity jacket with Zomboy flair.",
            descripcion2: "High-quality fabric with detailed patches.",
            descripcion3: "Stand out in undead fashion."
        },
        {
            titulo: "ZOMBOY VINTAGE PUNK HOODIE",
            precio: "$75.00 USD",
            imagen: "assets/apparelImg/hoodieZ.png",
            categoria: "apparel",
            descripcion1: "Vintage-style hoodie with punk vibes.",
            descripcion2: "Warm and cozy fleece lining.",
            descripcion3: "Perfect for cool zombie nights."
        },
        {
            titulo: "VINTAGE TEE",
            precio: "$75.00 USD",
            imagen: "assets/apparelImg/teeZ.png",
            categoria: "apparel",
            descripcion1: "Retro-inspired tee with unique artwork.",
            descripcion2: "Soft and breathable cotton fabric.",
            descripcion3: "Timeless undead look."
        },
        {
            titulo: "ROSES ARE DEAD JOGGERS",
            precio: "$50.00 USD",
            imagen: "assets/apparelImg/pantsZQ.png",
            categoria: "apparel",
            descripcion1: "Dark joggers with 'Roses Are Dead' print.",
            descripcion2: "Slim fit with elastic waistband.",
            descripcion3: "Edgy comfort on the move."
        },
        {
            titulo: "TAROT OF DEATH - ZIP UP HOODIE",
            precio: "$65.00 USD",
            imagen: "assets/apparelImg/blackhoodieZ.png",
            categoria: "apparel",
            descripcion1: "Zip-up hoodie with tarot-style skull art.",
            descripcion2: "Zipper closure and deep pockets.",
            descripcion3: "Occult meets fashion."
        },
        {
            titulo: "BRAIN DEAD HEATHER GRAY TEE",
            precio: "$30.00 USD",
            imagen: "assets/apparelImg/whiteteeZ.png",
            categoria: "apparel",
            descripcion1: "Heather gray tee with brain-dead print.",
            descripcion2: "Casual fit, soft texture.",
            descripcion3: "Stay cool in chaos."
        },
        {
            titulo: "THE CLAW TEE",
            precio: "$20.00 USD",
            imagen: "assets/apparelImg/greenteeZ.png",
            categoria: "apparel",
            descripcion1: "Green tee featuring claw graphic.",
            descripcion2: "Lightweight and stylish.",
            descripcion3: "Unleash your inner beast."
        },
        {
            titulo: "PIXEL BOY LONG SLEEVE",
            precio: "$40.00 USD",
            imagen: "assets/apparelImg/pixelhoodieZ.png",
            categoria: "apparel",
            descripcion1: "Pixel art long sleeve with Zomboy character.",
            descripcion2: "Perfect for layering.",
            descripcion3: "Retro gaming aesthetic."
        },
        {
            titulo: "ROTT N ROLL REAPER TEE",
            precio: "$40.00 USD",
            imagen: "assets/apparelImg/blackteeZ.png",
            categoria: "apparel",
            descripcion1: "Black tee with reaper and rock theme.",
            descripcion2: "Loud design for loud souls.",
            descripcion3: "Rott and roll all day."
        },
        {
            titulo: "REAPER CREEPER TEE",
            precio: "$35.00 USD",
            imagen: "assets/apparelImg/ripperteeZ.png",
            categoria: "apparel",
            descripcion1: "Creepy tee with reaper graphic.",
            descripcion2: "Bold front print in high contrast.",
            descripcion3: "A dark twist to your wardrobe."
        },
        {
            titulo: "ROSES ARE DEAD PULLOVER HOODIE",
            precio: "$65.00 USD",
            imagen: "assets/apparelImg/rosespullZ.png",
            categoria: "apparel",
            descripcion1: "Pullover hoodie with 'Roses Are Dead' design.",
            descripcion2: "Soft cotton blend for everyday wear.",
            descripcion3: "Grunge vibes in every thread."
        },
        {
            titulo: "ROSES ARE DEAD TEE",
            precio: "$40.00 USD",
            imagen: "assets/apparelImg/rosesteeZ.png",
            categoria: "apparel",
            descripcion1: "Tee with distressed rose artwork.",
            descripcion2: "Classic cut with powerful message.",
            descripcion3: "Dark romance never dies."
        },
        {
            titulo: "ZOMBOY KIDS CHROME JERSEY",
            precio: "$90.00 USD",
            imagen: "assets/apparelImg/jerseyZ.png",
            categoria: "apparel",
            descripcion1: "Kids chrome jersey with Zomboy branding.",
            descripcion2: "Durable and breathable material.",
            descripcion3: "Made for future legends."
        },
        {
            titulo: "GIFT CARD - $25.00",
            precio: "$25.00 USD",
            imagen: "assets/giftcard/giftCard.jpg",
            categoria: "giftCard",
            descripcion1: "Perfect for any Zomboy fan.",
            descripcion2: "Let them choose what they love.",
            descripcion3: "Instant undead joy."
        },
        {
            titulo: "GIFT CARD - $50.00",
            precio: "$50.00 USD",
            imagen: "assets/giftcard/giftCard.jpg",
            categoria: "giftCard",
            descripcion1: "More value for more Zomboy gear.",
            descripcion2: "The ultimate gift of choice.",
            descripcion3: "Unwrap the chaos."
        },
        {
            titulo: "GIFT CARD - $100.00",
            precio: "$100.00 USD",
            imagen: "assets/giftcard/giftCard.jpg",
            categoria: "giftCard",
            descripcion1: "Premium gift card for undead fashion.",
            descripcion2: "Massive selection possibilities.",
            descripcion3: "The gift that never rots."
        },
        {
            titulo: "LOGO PASHMINA",
            precio: "$45.00 USD",
            imagen: "assets/saleImg/pushZ.png",
            categoria: "sale",
            descripcion1: "Elegant pashmina with Zomboy logo.",
            descripcion2: "Soft and lightweight.",
            descripcion3: "A touch of style and chaos."
        },
        {
            titulo: "DEAD ROSES PIN",
            precio: "$15.00 USD",
            imagen: "assets/saleImg/pinZ.png",
            categoria: "sale",
            descripcion1: "Metal pin featuring wilted rose design.",
            descripcion2: "Adds dark charm to any outfit.",
            descripcion3: "Pin it, own it."
        },
        {
            titulo: "ZOMBRAINS PILLOW",
            precio: "$40.00 USD",
            imagen: "assets/saleImg/pillowZ.png",
            categoria: "sale",
            descripcion1: "Soft pillow with Zombrains artwork.",
            descripcion2: "Perfect for chilling in undead comfort.",
            descripcion3: "Cushion your zombie dreams."
        }
    ]
};