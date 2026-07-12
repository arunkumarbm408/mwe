/**
 * Complete database of premium export quality products for Maaworld Exim.
 */
export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'grains', name: 'Grains & Millets' },
  { id: 'spices', name: 'Premium Spices' },
  { id: 'produce', name: 'Fresh Produce' },
  { id: 'beverages', name: 'Tea, Coffee & Seeds' },
  { id: 'others', name: 'Specialty & Organic' }
];

export const products = [
  {
    id: 'rice',
    name: 'Basmati & Non-Basmati Rice',
    category: 'grains',
    badge: 'Premium Long Grain',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Aromatic, long-grain Basmati and nutrient-rich non-Basmati rice sourced from the fertile plains of India.',
    specs: {
      origin: 'Haryana / Punjab, India',
      purity: '95% Min',
      moisture: '12.5% Max',
      broken: '1% - 2% Max',
      packaging: '10kg, 20kg, 25kg, 50kg Jute or PP bags'
    }
  },
  {
    id: 'wheat',
    name: 'Golden Durum Wheat',
    category: 'grains',
    badge: 'High Protein',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80',
    description: 'High-gluten Durum wheat, perfect for milling, baking, and pasta production, processed under strict quality controls.',
    specs: {
      origin: 'Madhya Pradesh / Rajasthan, India',
      protein: '11.5% - 13.5% Min',
      moisture: '12% Max',
      foreignMatter: '0.75% Max',
      packaging: '50kg PP bags or Bulk in containers'
    }
  },
  {
    id: 'sugar',
    name: 'Refined & Raw Cane Sugar',
    category: 'others',
    badge: 'S30 / ICUMSA 45',
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=600&q=80',
    description: 'Sparkling white refined cane sugar and high-purity raw sugar suitable for household and food industries.',
    specs: {
      origin: 'Maharashtra / Uttar Pradesh, India',
      polarization: '99.80% Min',
      moisture: '0.04% Max',
      solubility: '100% Dry and Free Flowing',
      packaging: '50kg double-laminated PP bags'
    }
  },
  {
    id: 'turmeric',
    name: 'Premium Turmeric (Curcumin)',
    category: 'spices',
    badge: 'High Curcumin',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    description: 'Vibrant yellow turmeric fingers and fine powder with high curcumin content, renowned for medicinal and culinary use.',
    specs: {
      origin: 'Nizamabad, Telangana / Erode, Tamil Nadu',
      curcumin: '3.5% - 5.5% Min',
      moisture: '10% Max',
      type: 'Fingers / Powder',
      packaging: '25kg, 50kg Gunny bags'
    }
  },
  {
    id: 'chilli',
    name: 'Dry Red Guntur Chilli',
    category: 'spices',
    badge: 'S17 Teja / Byadgi',
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80',
    description: 'Fiery red hot chillies and mild wrinkled Byadgi chillies sourced directly from Guntur, ideal for spice processors.',
    specs: {
      origin: 'Guntur, Andhra Pradesh, India',
      moisture: '11% Max',
      broken: '2% Max',
      heat: 'High to Medium Scoville scale',
      packaging: '10kg, 14kg, 25kg Gunny bags'
    }
  },
  // {
  //   id: 'coriander',
  //   name: 'Whole Coriander Seeds',
  //   category: 'spices',
  //   badge: 'Export Grade Green',
  //   image: 'https://images.unsplash.com/photo-1608797178974-15b35a61d121?auto=format&fit=crop&w=600&q=80',
  //   description: 'Aromatic green coriander seeds, thoroughly cleaned and sorted, preserving natural essential oils.',
  //   specs: {
  //     origin: 'Rajasthan / Gujarat, India',
  //     purity: '99% Min',
  //     moisture: '9% Max',
  //     splits: '5% Max',
  //     packaging: '20kg, 25kg multi-wall paper or PP bags'
  //   }
  // },
  // {
  //   id: 'cumin',
  //   name: 'Aromatic Cumin Seeds',
  //   category: 'spices',
  //   badge: '99% Singapore Quality',
  //   image: 'https://images.unsplash.com/photo-1594911774802-8822a7079ae1?auto=format&fit=crop&w=600&q=80',
  //   description: 'Select grade cumin (Jeera) seeds boasting intense aroma and clean, dust-free sorting.',
  //   specs: {
  //     origin: 'Gujarat / Rajasthan, India',
  //     purity: '99.5% Min (Singapore Grade)',
  //     moisture: '8% Max',
  //     admixture: '0.5% Max',
  //     packaging: '25kg, 50kg PP or Jute bags'
  //   }
  // },
  // {
  //   id: 'millets',
  //   name: 'Organic Millets (Sorghum, Pearl, Finger)',
  //   category: 'grains',
  //   badge: 'Superfood Grade',
  //   image: 'https://images.unsplash.com/photo-1628353625413-4a11f274a4cf?auto=format&fit=crop&w=600&q=80',
  //   description: 'Gluten-free, highly nutritious millets (Bajra, Jowar, Ragi) packed with fiber, proteins, and minerals.',
  //   specs: {
  //     origin: 'Karnataka / Maharashtra, India',
  //     type: 'Pearl, Finger, Foxtail, Sorghum',
  //     moisture: '12% Max',
  //     cleanliness: '99% Machine Cleaned',
  //     packaging: '25kg, 50kg bags'
  //   }
  // },
  {
    id: 'pulses',
    name: 'Lentils & Pulses (Chickpeas, Moong, Toor)',
    category: 'grains',
    badge: 'Sortex Cleaned',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
    description: 'Sortex-cleaned pulses and large-size Kabuli chickpeas, packed with protein and sourced directly from farms.',
    specs: {
      origin: 'Madhya Pradesh / Maharashtra, India',
      size: 'Chickpeas: 7mm - 12mm',
      moisture: '10% Max',
      admixture: '0.5% Max',
      packaging: '25kg, 50kg PP bags'
    }
  },
  {
    id: 'fruits',
    name: 'Fresh Export Fruits (Mangoes, Grapes)',
    category: 'produce',
    badge: 'GlobalGAP Certified',
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=600&q=80',
    description: 'Premium Alphonso mangoes, sweet seedless green grapes, and fresh pomegranates carefully packaged for cold chain transport.',
    specs: {
      origin: 'Ratnagiri / Nashik, Maharashtra, India',
      treatment: 'Vapor Heat / Hot Water Treated (for Mangoes)',
      packaging: 'Corrugated fiberboard boxes (CFB) with partitions',
      tempControl: 'Reefer containers (1-4°C depending on fruit)'
    }
  },
  // {
  //   id: 'vegetables',
  //   name: 'Fresh Vegetables (Onions, Potatoes, Garlic)',
  //   category: 'produce',
  //   badge: 'Farm Fresh Picked',
  //   image: 'https://images.unsplash.com/photo-1566385278603-605b63773b6e?auto=format&fit=crop&w=600&q=80',
  //   description: 'Nashik red onions, high-solid table potatoes, and firm white garlic bulbs selected for long-distance export shelf life.',
  //   specs: {
  //     origin: 'Nashik, Maharashtra / Indore, Madhya Pradesh',
  //     size: 'Onions: 45mm - 55mm / 55mm+',
  //     packaging: 'Lenobag (mesh) or Jute bags (20kg / 25kg / 40kg)',
  //     shipping: 'Ventilated containers or Reefer containers'
  //   }
  // },
  {
    id: 'dryfruits',
    name: 'Premium Cashews & Almonds',
    category: 'others',
    badge: 'W180, W240, W320 Grade',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80',
    description: 'Rich, buttery Indian cashew kernels graded to international specifications and premium handpicked almonds.',
    specs: {
      origin: 'Kerala / Goa, India',
      grades: 'W180, W210, W240, W320, splits',
      moisture: '5% Max',
      packaging: 'Tin cans or Vacuum-sealed packs (10kg / 22.68kg)'
    }
  },
  {
    id: 'tea',
    name: 'Assam & Darjeeling CTC Tea',
    category: 'beverages',
    badge: 'Rich Aroma Grade',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    description: 'Strong, malty Assam CTC teas and delicate, aromatic Darjeeling orthodox whole leaf teas.',
    specs: {
      origin: 'Assam / Darjeeling, India',
      type: 'CTC, Orthodox, Green Tea',
      grade: 'BOP, BP, OF, PD, Dust',
      packaging: 'Paper bags with aluminum lining (20kg - 35kg)'
    }
  },
  {
    id: 'coffee',
    name: 'Arabica & Robusta Coffee Beans',
    category: 'beverages',
    badge: 'Grade A Beans',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
    description: 'Premium plantation Arabica parchment and bold Robusta cherry coffee beans grown under shade in Southern India.',
    specs: {
      origin: 'Chikmagalur / Coorg, Karnataka, India',
      type: 'Parchment / Cherry (Arabica & Robusta)',
      moisture: '11% - 12% Max',
      packaging: 'Bulk in container liner bags or 50kg Jute bags'
    }
  },
  {
    id: 'oilseeds',
    name: 'Sesame & Groundnut Seeds',
    category: 'beverages',
    badge: 'HPS / Hulled Grade',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80',
    description: 'High-purity hulled white sesame seeds and handpicked selected (HPS) groundnut kernels with high oil content.',
    specs: {
      origin: 'Gujarat / Andhra Pradesh, India',
      purity: '99.95% Min (for Sesame)',
      moisture: '5% Max',
      oilContent: '48% Min',
      packaging: '25kg multi-wall paper bags or PP bags'
    }
  },
  {
    id: 'animalfeed',
    name: 'De-Oiled Soymeal & Maize',
    category: 'others',
    badge: 'Nutritious Feed Grade',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80',
    description: 'High-protein yellow maize and de-oiled soybean meal cakes, serving as highly nutritious animal and poultry feed.',
    specs: {
      origin: 'Madhya Pradesh / Maharashtra, India',
      protein: 'Soymeal: 46% - 48% Min',
      moisture: '12% Max',
      packaging: '50kg PP bags or Bulk in containers'
    }
  },
  {
    id: 'organic',
    name: 'Organic Certified Superfoods',
    category: 'others',
    badge: 'NPOP / USDA Organic',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    description: '100% certified organic grains, spices, and oilseeds grown without chemical fertilizers or synthetic pesticides.',
    specs: {
      origin: 'Various Organic Farms, India',
      certifications: 'NPOP, USDA Organic, OneCert',
      purity: '99.5% Min',
      packaging: 'Eco-friendly biodegradable packaging or standard bags'
    }
  }
];
