
import { Product, Review, Category } from './types';

export const BUSINESS_DETAILS = {
  name: "Sovika Women's Clothing",
  tagline: "Elegant Fashion for the Modern Woman in Gotri",
  address: {
    shopNumber: "FF-16 (First Floor), Altus 99",
    street: "Gotri-Sevasi Road (Canal Road)",
    area: "Chandramauleshwar Nagar, Gotri",
    city: "Vadodara, Gujarat - 391101",
    landmark: "Near Somnath Heritage, Opposite Zydex Industries",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.024410644864!2d73.134!3d22.315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8c9c9c9c9c9%3A0x9c9c9c9c9c9c9c9c!2sAltus%2099!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
  },
  contact: {
    phone: "+919876543210", 
    displayPhone: "+91 98765 43210",
    email: "contact@sovikafashion.in",
    instagram: "@sovikaclothing"
  },
  hours: "Monday - Sunday: 10:00 AM – 9:00 PM"
};

export const COLLECTION_CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Kurtis & Tunics",
    image: "https://picsum.photos/400/600?random=101",
    description: "Daily wear cottons to heavy festive embroidery.",
    itemCount: "New styles weekly"
  },
  {
    id: 2,
    title: "Salwar Suits",
    image: "https://picsum.photos/400/600?random=102",
    description: "Complete sets with dupatta. Anarkali, Straight cut & more.",
    itemCount: "Premium Fabrics"
  },
  {
    id: 3,
    title: "Western Tops",
    image: "https://picsum.photos/400/600?random=103",
    description: "Trendy tops, shirts and blouses for office & casual wear.",
    itemCount: "Sizes S to XXL"
  },
  {
    id: 4,
    title: "Dresses & Gowns",
    image: "https://picsum.photos/400/600?random=104",
    description: "Flowy maxis and chic midi dresses.",
    itemCount: "Latest Trends"
  },
  {
    id: 5,
    title: "Bottom Wear",
    image: "https://picsum.photos/400/600?random=105",
    description: "Leggings, Jeggings, Palazzos, Skirts & Pants.",
    itemCount: "All Colors"
  },
  {
    id: 6,
    title: "Jeans & Denims",
    image: "https://picsum.photos/400/600?random=106",
    description: "Comfortable fits in various washes.",
    itemCount: "High Quality"
  },
  {
    id: 7,
    title: "Festive Wear",
    image: "https://picsum.photos/400/600?random=107",
    description: "Heavy work lehengas and sharara sets.",
    itemCount: "Wedding Season"
  },
  {
    id: 8,
    title: "Dupattas & Stoles",
    image: "https://picsum.photos/400/600?random=108",
    description: "Mix and match to complete your look.",
    itemCount: "Variety"
  }
];

// Keeping some products for Home Page "New Arrivals" preview, or can use categories there too.
// Based on request to "reduce sizes", we will use this list but display differently.
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Embroidered Anarkali",
    category: "Ethnic",
    image: "https://picsum.photos/400/600?random=1",
    priceRange: "₹1200 - ₹2500",
    description: "Cotton blend with intricate hand embroidery."
  },
  {
    id: 2,
    name: "Floral Print Maxi",
    category: "Western",
    image: "https://picsum.photos/400/600?random=2",
    priceRange: "₹900 - ₹1800",
    description: "Lightweight rayon fabric perfect for summers."
  },
  {
    id: 3,
    name: "Silk Cigarette Pants",
    category: "Bottom Wear",
    image: "https://picsum.photos/400/600?random=3",
    priceRange: "₹500 - ₹900",
    description: "Comfortable fit with elegant sheen."
  },
  {
    id: 4,
    name: "Festive Sharara Set",
    category: "Ethnic",
    image: "https://picsum.photos/400/600?random=4",
    priceRange: "₹2000 - ₹4500",
    description: "Complete set with dupatta, heavy work."
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Priya Patel",
    rating: 5,
    text: "Absolutely love the collection at Sovika! The fabrics are so soft and durable. Found the perfect Kurti for Navratri.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    author: "Meera Shah",
    rating: 4,
    text: "Great variety of daily wear office clothes. Very affordable prices for Gotri area. Will visit again.",
    date: "1 month ago"
  },
  {
    id: 3,
    author: "Anjali D.",
    rating: 5,
    text: "The owner is very helpful in suggesting styles. A hidden gem in Altus 99 complex.",
    date: "3 months ago"
  },
  {
    id: 4,
    author: "Riya Sharma",
    rating: 5,
    text: "Best shop for readymade garments in Vadodara. The western collection is surprisingly trendy!",
    date: "1 month ago"
  }
];
