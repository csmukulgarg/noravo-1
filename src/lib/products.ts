export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  productType: "Shoes" | "Towels";
  price: number;
  description: string;
  features: string[];
  image: string;
  images: string[];
  amazonLink: string;
  sizes?: number[];
  colors: string[];
  dimensions?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Oxford Brown",
    slug: "classic-oxford-brown",
    category: "Oxford",
    productType: "Shoes",
    price: 189.99,
    description: "Timeless brown oxford shoes crafted from premium full-grain leather. Perfect for business formal occasions and professional settings.",
    features: [
      "Full-grain leather upper",
      "Leather sole with rubber heel",
      "Goodyear welt construction",
      "Memory foam insole for all-day comfort",
      "Traditional lace-up closure"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/professional-men-s-classic-oxford-dress--96b311c6-20251202204930.jpg",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/professional-men-s-classic-oxford-dress--96b311c6-20251202204930.jpg",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE1",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Brown", "Black"]
  },
  {
    id: "2",
    name: "Executive Black Loafer",
    slug: "executive-black-loafer",
    category: "Loafer",
    productType: "Shoes",
    price: 169.99,
    description: "Sophisticated black leather loafers with elegant tassel detail. Effortless style for the modern professional.",
    features: [
      "Premium calfskin leather",
      "Slip-on convenience with tassel accent",
      "Cushioned leather footbed",
      "Flexible rubber outsole",
      "Italian-inspired design"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/luxury-men-s-loafers-in-black-leather-pr-d1d438e3-20251202204929.jpg",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/luxury-men-s-loafers-in-black-leather-pr-d1d438e3-20251202204929.jpg",
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE2",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "Brown"]
  },
  {
    id: "3",
    name: "Burgundy Monk Strap",
    slug: "burgundy-monk-strap",
    category: "Monk Strap",
    productType: "Shoes",
    price: 199.99,
    description: "Distinguished burgundy monk strap shoes with double buckle detail. A sophisticated alternative to traditional lace-ups.",
    features: [
      "Rich burgundy leather finish",
      "Double monk strap closure",
      "Leather lining and insole",
      "Stacked leather heel",
      "Hand-finished edges"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-monk-strap-dress-shoes-in-burgundy-3e698de3-20251202204930.jpg",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-monk-strap-dress-shoes-in-burgundy-3e698de3-20251202204930.jpg",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=80",
      "https://images.unsplash.com/photo-1612841158847-7628fa53d14d?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE3",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Burgundy", "Black"]
  },
  {
    id: "4",
    name: "Tan Brogue Wingtip",
    slug: "tan-brogue-wingtip",
    category: "Brogue",
    productType: "Shoes",
    price: 179.99,
    description: "Classic tan brogue shoes featuring intricate perforated detailing. Traditional English craftsmanship meets everyday comfort.",
    features: [
      "Wingtip design with broguing detail",
      "Tan leather upper",
      "Cork midsole for flexibility",
      "Perforated decorative pattern",
      "Durable rubber outsole"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/professional-men-s-brogue-wingtip-shoes--ec19ddf8-20251202204930.jpg",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/professional-men-s-brogue-wingtip-shoes--ec19ddf8-20251202204930.jpg",
      "https://images.unsplash.com/photo-1582552938357-32b906528c04?w=800&q=80",
      "https://images.unsplash.com/photo-1605733513597-8d23a7f3a2e4?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE4",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Tan", "Brown", "Black"]
  },
  {
    id: "5",
    name: "Chocolate Derby Shoe",
    slug: "chocolate-derby-shoe",
    category: "Derby",
    productType: "Shoes",
    price: 174.99,
    description: "Versatile chocolate brown derby shoes with open lacing system. Perfect for business casual or smart casual occasions.",
    features: [
      "Premium chocolate brown leather",
      "Open lacing Derby style",
      "Padded collar for comfort",
      "Moisture-wicking lining",
      "Non-slip rubber sole"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-derby-shoes-in-dark-chocolate-brow-fb353a48-20251202204929.jpg",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-derby-shoes-in-dark-chocolate-brow-fb353a48-20251202204929.jpg",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
      "https://images.unsplash.com/photo-1615750185825-4bbbc48c3f1d?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE5",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Chocolate", "Black"]
  },
  {
    id: "6",
    name: "Black Chelsea Boot",
    slug: "black-chelsea-boot",
    category: "Boot",
    productType: "Shoes",
    price: 219.99,
    description: "Sleek black Chelsea boots with elastic side panels. A versatile ankle boot that transitions seamlessly from work to weekend.",
    features: [
      "Pull-on design with elastic gussets",
      "Smooth black leather upper",
      "Leather-lined interior",
      "Cushioned footbed",
      "Durable rubber heel and sole"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-chelsea-boots-in-black-leather-ank-7ba6e4ac-20251202204948.jpg",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-chelsea-boots-in-black-leather-ank-7ba6e4ac-20251202204948.jpg",
      "https://images.unsplash.com/photo-1535352083b-02ca3c87f828?w=800&q=80",
      "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE6",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "Brown"]
  },
  {
    id: "7",
    name: "Cognac Penny Loafer",
    slug: "cognac-penny-loafer",
    category: "Loafer",
    productType: "Shoes",
    price: 164.99,
    description: "Classic cognac penny loafers with traditional strap detail. Timeless style meets everyday comfort.",
    features: [
      "Rich cognac leather finish",
      "Traditional penny keeper strap",
      "Slip-on convenience",
      "Flexible construction",
      "Arch support insole"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-penny-loafers-in-cognac-brown-leat-b47876ff-20251202204948.jpg",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-penny-loafers-in-cognac-brown-leat-b47876ff-20251202204948.jpg",
      "https://images.unsplash.com/photo-1614252368597-18bdde8d6e3c?w=800&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE7",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Cognac", "Black"]
  },
  {
    id: "8",
    name: "Navy Cap Toe Oxford",
    slug: "navy-cap-toe-oxford",
    category: "Oxford",
    productType: "Shoes",
    price: 194.99,
    description: "Distinctive navy blue cap toe oxfords for the bold professional. Premium leather construction with a modern twist on a classic design.",
    features: [
      "Unique navy blue leather",
      "Cap toe detailing",
      "Formal lace-up design",
      "Leather sole construction",
      "Breathable leather lining"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-cap-toe-oxford-shoes-in-navy-blue--6305daa9-20251202204951.jpg",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/126a53c8-fee8-47af-96a7-a421e528970c/generated_images/men-s-cap-toe-oxford-shoes-in-navy-blue--6305daa9-20251202204951.jpg",
      "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?w=800&q=80",
      "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE8",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Navy", "Black"]
  },
  {
    id: "9",
    name: "Luxury Egyptian Bath Towel",
    slug: "luxury-egyptian-bath-towel",
    category: "Bath Towel",
    productType: "Towels",
    price: 49.99,
    description: "Premium 100% Egyptian cotton bath towel with superior absorbency. Exceptionally soft and durable for everyday luxury.",
    features: [
      "100% long-staple Egyptian cotton",
      "700 GSM heavyweight construction",
      "Quick-drying and highly absorbent",
      "Double-stitched hems for durability",
      "OEKO-TEX certified"
    ],
    image: "https://images.unsplash.com/photo-1616627781431-748dc26baa9c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1616627781431-748dc26baa9c?w=800&q=80",
      "https://images.unsplash.com/photo-1602850581819-aa4db9c19836?w=800&q=80",
      "https://images.unsplash.com/photo-1519643225200-94e79ed52f3e?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE9",
    colors: ["White", "Navy", "Charcoal", "Teal"],
    dimensions: "30\" x 56\""
  },
  {
    id: "10",
    name: "Premium Hand Towel Set",
    slug: "premium-hand-towel-set",
    category: "Hand Towel",
    productType: "Towels",
    price: 34.99,
    description: "Set of 4 premium hand towels crafted from ultra-soft Turkish cotton. Perfect size for everyday use.",
    features: [
      "Turkish cotton blend",
      "600 GSM medium weight",
      "Set of 4 towels",
      "Fade-resistant colors",
      "Machine washable"
    ],
    image: "https://images.unsplash.com/photo-1602850581258-927e85fcf38a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1602850581258-927e85fcf38a?w=800&q=80",
      "https://images.unsplash.com/photo-1616627781431-748dc26baa9c?w=800&q=80",
      "https://images.unsplash.com/photo-1584965487750-c2a3f92ce8fa?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE10",
    colors: ["White", "Beige", "Sage", "Navy"],
    dimensions: "16\" x 30\""
  },
  {
    id: "11",
    name: "Plush Face Towel Collection",
    slug: "plush-face-towel-collection",
    category: "Face Towel",
    productType: "Towels",
    price: 24.99,
    description: "Gentle and absorbent face towels perfect for daily skincare routines. Set of 6 ultra-soft washcloths.",
    features: [
      "100% combed cotton",
      "500 GSM plush texture",
      "Set of 6 washcloths",
      "Gentle on sensitive skin",
      "Hypoallergenic"
    ],
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
      "https://images.unsplash.com/photo-1616627781431-748dc26baa9c?w=800&q=80",
      "https://images.unsplash.com/photo-1602850581258-927e85fcf38a?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE11",
    colors: ["White", "Gray", "Blush", "Mint"],
    dimensions: "13\" x 13\""
  },
  {
    id: "12",
    name: "Oversized Beach Towel",
    slug: "oversized-beach-towel",
    category: "Beach Towel",
    productType: "Towels",
    price: 39.99,
    description: "Extra-large beach towel with vibrant colors and sand-resistant technology. Perfect for pool and beach days.",
    features: [
      "Oversized 40\" x 70\" design",
      "Quick-dry microfiber blend",
      "Sand-resistant weave",
      "Lightweight and portable",
      "UV-resistant colors"
    ],
    image: "https://images.unsplash.com/photo-1602850581415-d1e787609b60?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1602850581415-d1e787609b60?w=800&q=80",
      "https://images.unsplash.com/photo-1616627781431-748dc26baa9c?w=800&q=80",
      "https://images.unsplash.com/photo-1519643225200-94e79ed52f3e?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE12",
    colors: ["Teal Stripe", "Navy Stripe", "Coral", "Multi-color"],
    dimensions: "40\" x 70\""
  },
  {
    id: "13",
    name: "Spa Bath Sheet Set",
    slug: "spa-bath-sheet-set",
    category: "Bath Towel",
    productType: "Towels",
    price: 64.99,
    description: "Hotel-quality oversized bath sheets for ultimate coverage and comfort. Set of 2 luxurious towels.",
    features: [
      "Extra-large bath sheet size",
      "Zero-twist yarn construction",
      "850 GSM ultra-plush",
      "Set of 2 towels",
      "Spa-quality softness"
    ],
    image: "https://images.unsplash.com/photo-1615799686334-3c0766da7bc9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1615799686334-3c0766da7bc9?w=800&q=80",
      "https://images.unsplash.com/photo-1602850581819-aa4db9c19836?w=800&q=80",
      "https://images.unsplash.com/photo-1616627781431-748dc26baa9c?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE13",
    colors: ["White", "Charcoal", "Taupe"],
    dimensions: "35\" x 70\""
  },
  {
    id: "14",
    name: "Microfiber Sport Towel",
    slug: "microfiber-sport-towel",
    category: "Hand Towel",
    productType: "Towels",
    price: 19.99,
    description: "Compact and super absorbent microfiber towel ideal for gym, yoga, and travel. Comes with carrying pouch.",
    features: [
      "Ultra-absorbent microfiber",
      "Lightweight and compact",
      "Quick-dry technology",
      "Includes carrying pouch",
      "Anti-bacterial treatment"
    ],
    image: "https://images.unsplash.com/photo-1598197748967-b4066686fd19?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1598197748967-b4066686fd19?w=800&q=80",
      "https://images.unsplash.com/photo-1602850581258-927e85fcf38a?w=800&q=80",
      "https://images.unsplash.com/photo-1616627781431-748dc26baa9c?w=800&q=80"
    ],
    amazonLink: "https://www.amazon.com/dp/B0EXAMPLE14",
    colors: ["Black", "Navy", "Gray", "Teal"],
    dimensions: "16\" x 32\""
  }
];

export const categories = [
  "All",
  "Oxford",
  "Loafer",
  "Monk Strap",
  "Brogue",
  "Derby",
  "Boot",
  "Bath Towel",
  "Hand Towel",
  "Face Towel",
  "Beach Towel"
];

export const productTypes = ["All", "Shoes", "Towels"];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter(p => p.category === category);
}

export function getProductsByType(type: string): Product[] {
  if (type === "All") return products;
  return products.filter(p => p.productType === type);
}

export function getCategoriesByType(type: string): string[] {
  if (type === "All") return categories;
  if (type === "Shoes") {
    return ["All", "Oxford", "Loafer", "Monk Strap", "Brogue", "Derby", "Boot"];
  }
  if (type === "Towels") {
    return ["All", "Bath Towel", "Hand Towel", "Face Towel", "Beach Towel"];
  }
  return ["All"];
}