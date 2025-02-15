
export const siteContent = {
  brand: {
    name: "LA MER",
    slogan: "NIGHT ESSENTIALS",
    description: "Elevate your night routine with La Mer's Glow Up Sleep Kit: luxe satin essentials, skincare treasures, and aromatherapy."
  },
  
  products: [
    {
      id: 1,
      name: "The Treatment Lotion",
      price: 125,
      shortDescription: "A transformative treatment lotion that hydrates, soothes, and prepares skin.",
      fullDescription: "This powerful treatment lotion hydrates, soothes and prepares skin for the treatments that follow. Infused with our nutrient-rich Miracle Broth™, this liquid energy instantly awakens skin's natural healing energies to help reveal a healthy, renewed glow.",
      image: "lovable-uploads/50220753-34ee-401e-87b1-0dad30147e61.png",
      benefits: [
        "Instantly hydrates and energizes skin",
        "Helps calm signs of irritation",
        "Prepares skin for treatments that follow"
      ],
      ingredients: "Miracle Broth™, Sea Kelp, Vitamins, Minerals",
      howToUse: "After cleansing, sweep over face and neck with a cotton pad. Follow with your serum and moisturizer.",
      size: "150ml"
    },
    {
      id: 2,
      name: "Crème de la Mer",
      price: 380,
      shortDescription: "The moisturizer that started it all. Ultra-rich cream that hydrates, heals and transforms.",
      fullDescription: "The moisturizer that started it all. This ultra-rich cream transforms skin on contact with our legendary Miracle Broth™. It helps heal dryness, soften the look of fine lines and wrinkles, and gives skin a naturally vibrant, healthier-looking glow.",
      image: "lovable-uploads/557de184-0b31-4ffe-bbd2-676d4986525b.png",
      benefits: [
        "Deeply moisturizes and soothes",
        "Helps heal dryness",
        "Softens the look of fine lines"
      ],
      ingredients: "Miracle Broth™, Lime Tea Extract, Marine Algae",
      howToUse: "Warm between fingers until translucent. Press gently into skin.",
      size: "60ml"
    },
    {
      id: 3,
      name: "The Concentrate",
      price: 520,
      shortDescription: "A powerful barrier serum that helps visibly calm and strengthen skin.",
      fullDescription: "This powerful barrier serum helps calm and strengthen skin, visibly reducing the appearance of redness and irritation. Infused with our concentrated Miracle Broth™, this serum helps protect against environmental stressors and supports skin's natural healing energies.",
      image: "lovable-uploads/ac281d06-ef29-4196-8f3c-c3f1116191cb.png",
      benefits: [
        "Strengthens skin's barrier",
        "Reduces visible redness",
        "Protects against environmental stress"
      ],
      ingredients: "Concentrated Miracle Broth™, Lime Tea Concentrate, Marine Algae",
      howToUse: "Apply morning and evening after cleansing and before moisturizer.",
      size: "50ml"
    },
    {
      id: 4,
      name: "Night Recovery Cream",
      price: 420,
      shortDescription: "Luxurious night cream for intensive skin regeneration and repair.",
      fullDescription: "This rich night cream works while you sleep to help repair and regenerate your skin. Powered by our advanced Miracle Broth™ technology, it helps strengthen the skin's natural renewal process, resulting in smoother, more radiant skin by morning.",
      image: "lovable-uploads/2242ce4a-0fbd-42ea-b264-15aff45f7d10.png",
      benefits: [
        "Intensive overnight repair",
        "Enhances skin's natural renewal",
        "Promotes radiant complexion"
      ],
      ingredients: "Miracle Broth™, Regenerating Ferment™, Sea Lavender",
      howToUse: "Apply as the final step in your evening skincare routine. Gently massage into skin using upward motions.",
      size: "50ml"
    }
  ],
  
  featuredProducts: [
    {
      id: 1,
      name: "Luxury Sleep Mist",
      price: 150,
      description: "A calming pillow and room spray",
      image: "lovable-uploads/2242ce4a-0fbd-42ea-b264-15aff45f7d10.png"
    },
    {
      id: 2,
      name: "Night Recovery Cream",
      price: 420,
      description: "Intensive regenerating night cream",
      image: "lovable-uploads/50220753-34ee-401e-87b1-0dad30147e61.png"
    },
    {
      id: 3,
      name: "Valentine's Collection",
      price: 200,
      description: "Limited edition lip care set",
      image: "lovable-uploads/ac281d06-ef29-4196-8f3c-c3f1116191cb.png"
    }
  ]
};

export type Product = typeof siteContent.products[0];
export type FeaturedProduct = typeof siteContent.featuredProducts[0];
