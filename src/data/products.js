// Define and export price ranges
export const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200+", min: 200, max: Infinity },
];

// Define and export categories
export const categories = [
  "All",
  "Electronics",
  "Home Appliances",
  "Clothing",
  "Books",
  "Audio",
  "Wearables",
  "Gaming",
  "Photography",
  "Accessories",
  "Smart Home",
];

export const products = [
  // --- LAPTOPS (5) ---
  {
    id: 1,
    title: "MacBook Pro M3",
    category: "LAPTOP",
    price: 1499,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Dell XPS 15",
    category: "LAPTOP",
    price: 1200,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Microsoft Surface Laptop",
    category: "LAPTOP",
    price: 999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Asus Zenbook Duo",
    category: "LAPTOP",
    price: 1350,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Lenovo ThinkPad X1",
    category: "LAPTOP",
    price: 1100,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop",
  },

  // --- MOBILES (5) ---
  {
    id: 6,
    title: "iPhone 15 Pro",
    category: "MOBILE",
    price: 999,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1695048133021-be2def43f3b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDE1fGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Samsung Galaxy S24",
    category: "MOBILE",
    price: 899,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Google Pixel 8",
    category: "MOBILE",
    price: 699,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Nothing Phone 2",
    category: "MOBILE",
    price: 599,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=600&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Xiaomi 14 Ultra",
    category: "MOBILE",
    price: 950,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop",
  },

  // --- AUDIO (5) ---
  {
    id: 11,
    title: "Sony Noise Cancelling",
    category: "AUDIO",
    price: 350,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Bose QuietComfort",
    category: "AUDIO",
    price: 299,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "AirPods Pro 2",
    category: "AUDIO",
    price: 249,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWlyUG9kcyUyMFBybyUyMDJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    title: "Apple watch",
    category: "WEARABLE",
    price: 150,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 15,
    title: "JBL Flip 6 Speaker",
    category: "AUDIO",
    price: 120,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1700563133067-00c317e333d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEpCTCUyMEZsaXAlMjA2JTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
  },

  // --- GAMING & OTHERS (5) ---
  {
    id: 16,
    title: "PlayStation 5",
    category: "GAMING",
    price: 499,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop",
  },
  {
    id: 17,
    title: "Xbox Series X",
    category: "GAMING",
    price: 499,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1693456281728-8f7b29d85303?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8WGJveCUyMFNlcmllcyUyMFh8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 18,
    title: "Nintendo Switch OLED",
    category: "GAMING",
    price: 349,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1680007966627-d49ae18dbbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmludGVuZG8lMjBTd2l0Y2glMjBPTEVEfGVufDB8fDB8fHww",
  },
  {
    id: 19,
    title: "Logitech G Pro Mouse",
    category: "ACCESSORIES",
    price: 129,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop",
  },
  {
    id: 20,
    title: "Apple Watch Ultra",
    category: "WEARABLE",
    price: 799,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

