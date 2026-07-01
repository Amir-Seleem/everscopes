/* ============================================
   EverScopes — Pure JavaScript
   ============================================ */

// ===== DATA =====
const developers = [
  { 
    id: "tatweer-misr", 
    name: "Tatweer Misr", 
    nameAr: "تطوير مصر", 
    logo: "https://flair-magazine.com/wp-content/uploads/2021/06/TATWEER-LOGO-01-01.jpg",
    projects: ["Scenes", "Bloom Fields", "Salt"]
  },
  { 
    id: "mountain-view", 
    name: "Mountain View", 
    nameAr: "ماونتن فيو", 
    logo: "https://invest-gate.me/wp-content/uploads/2023/01/mountain-view-750x500.png",
    projects: ["Creek View", "Mountain View New Cairo", "Aliva", "Crysta"]
  },
  { 
    id: "arabia-holding", 
    name: "Arabia Holding", 
    nameAr: "أرابيا هولدنج", 
    logo: "https://aqarmisr.com.eg/wp-content/uploads/2022/08/%D8%B4%D8%B1%D9%83%D8%A9-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.png",
    projects: ["Sun Capital", "Galleria Moon Valley"]
  },
  { 
    id: "ora-developers", 
    name: "Ora Developers", 
    nameAr: "أورا ديفيلوبرز", 
    logo: "https://www.oradevelopers.com/_nuxt/img/ora-logo-greyer.52c8cfb.png",
    projects: [] 
  },
  { 
    id: "palm-hills", 
    name: "Palm Hills", 
    nameAr: "بالم هيلز", 
    logo: "https://www.palmhillsdevelopments.com/assets/images/header/Logo.svg",
    projects: ["Hacienda Ras El Hekma", "The Crown"]
  },
  { 
    id: "emaar-misr", 
    name: "Emaar Misr", 
    nameAr: "إعمار مصر", 
    logo: "https://blogs.realestate.gov.eg/wp-content/uploads/2024/11/Emaar-Misr.png",
    projects: [] 
  },
  { 
    id: "hyde-park", 
    name: "Hyde Park", 
    nameAr: "هايد بارك", 
    logo: "https://www.amcham.org.eg/assets/uploads/employer-logo/637737820386344537.png",
    projects: ["Hyde Park New Cairo", "Hyde Park Central", "Seashore"]
  },
  { 
    id: "sodic", 
    name: "Sodic", 
    nameAr: "سوديك", 
    logo: "https://blogs.realestate.gov.eg/wp-content/uploads/2024/11/SODIC_Logo_Teal_RGB.png",
    projects: ["June", "The Estates"]
  },
  { 
    id: "ahly-sabbour", 
    name: "Ahly Sabbour", 
    nameAr: "الأهلي صبور", 
    logo: "https://blogs.realestate.gov.eg/wp-content/uploads/2024/11/Al-Ahly-Sabbour.webp",
    projects: ["Gaia", "At East", "The Mornings"]
  },
  { 
    id: "mnhd", 
    name: "MNHD (Madinet Masr)", 
    nameAr: "مدينة مصر", 
    logo: "https://prod-images.nawy.com/processed/developer/logo_image/54/medium.webp",
    projects: ["Sarai", "Butterfly"]
  },
  { 
    id: "misr-italia", 
    name: "Misr Italia", 
    nameAr: "مصر إيطاليا", 
    logo: "https://aqarmap.com.eg/en/advice/wp-content/uploads/2021/08/FK6kD1ulbfqbP3iUDj0vkj2Hn6Ot7Q.png",
    projects: ["Solare", "Kai", "Vinci"]
  },
  { 
    id: "lavista", 
    name: "La Vista", 
    nameAr: "لافيستا", 
    logo: "https://tibascape.ca/wp-content/uploads/2022/05/Lavista-developments-logo.png",
    projects: ["Patio Vida", "La Vista City", "Patio Hills"]
  },
  { 
    id: "madaar", 
    name: "Madaar", 
    nameAr: "مدار", 
    logo: "https://cdn.prod.website-files.com/685968882d1c97d0b4926080/685d9fae5aa33f340b3a5218_logo%20brown.svg",
    projects: ["Azha Sa7l", "Azha Sokhna"]
  },
  { 
    id: "hassan-allam", 
    name: "Hassan Allam", 
    nameAr: "حسن علام", 
    logo: "https://jinet.com.eg/wp-content/uploads/2024/09/HAP.png",
    projects: ["Park Central", "HAP Town", "Swan Lake Residence"]
  },
  { 
    id: "horizon", 
    name: "Horizon", 
    nameAr: "هورايزون", 
    logo: "https://sms-eg.com/wp-content/uploads/2023/09/Horizon.png",
    projects: ["Saada New Cairo", "Saada Ras El Hekma", "Saada Boutique"]
  },
  { 
    id: "marakez", 
    name: "Marakez", 
    nameAr: "مراكز", 
    logo: "https://marakez.net/img/marakezLogo.svg",
    projects: ["Crescent Walk", "Ramla"]
  },
  { 
    id: "il-cazar", 
    name: "Il Cazar", 
    nameAr: "الكازار", 
    logo: "https://ilcazar.com/wp-content/uploads/2023/08/Masterfile-legacy-version-02-1536x403.png",
    projects: ["The Crest", "Stoda"]
  }
  
];

const projects = [
  {
    id: "p1", title: "IL Monte Galala", titleAr: "إل مونتي جلالة",
    developer: "Tatweer Misr", developerId: "tatweer-misr",
    image: "https://sfile.chatglm.cn/images-ppt/4137d8ce5b7a.jpg",
    images: ["https://sfile.chatglm.cn/images-ppt/4137d8ce5b7a.jpg","https://sfile.chatglm.cn/images-ppt/bf524cd6fcd9.jpg","https://sfile.chatglm.cn/images-ppt/5604f5f9b031.jpg"],
    location: "Ain Sokhna", locationAr: "السخنة", type: "Resort & Residential",
    priceFrom: "4,500,000 EGP", area: "120 - 350 sqm",
    unitTypes: ["Studios","Apartments","Townhouses","Villas"],
    description: "IL Monte Galala is an iconic mountain-top destination by Tatweer Misr, inspired by the Mediterranean charm of Italy. This world-class resort community perched on the Sokhna mountains offers breathtaking Red Sea views, a crystal lagoon, premium F&B outlets, and an unparalleled lifestyle experience. The project features a unique cliffside design with cascading architecture that harmonizes with the natural mountain terrain.",
    descriptionAr: "إل مونتي جلالة هو وجهة جبلية أيقونية من تطوير مصر، مستوحاة من سحر البحر المتوسط بإيطاليا. توفر هذه المجتمع الراقي المطل على جبال السخنة إطلالات خلابة على البحر الأحمر.",
    features: ["Mountain-top location with Red Sea views","Crystal lagoon and private beaches","Italian-inspired architecture","World-class dining and retail","Kids' areas and family entertainment","24/7 security and concierge"],
    amenities: ["Crystal Lagoon","Private Beach","Swimming Pools","Gym & Spa","Restaurants & Cafes","Kids Playground","Jogging Tracks","Commercial Area"],
    deliveryDate: "2027", downPayment: "10%", installmentYears: "7 Years", status: "selling-fast"
  },
  {
    id: "p2", title: "Downtown Galala", titleAr: "داون تاون جلالة",
    developer: "Tatweer Misr", developerId: "tatweer-misr",
    image: "https://sfile.chatglm.cn/images-ppt/6fa30e92eddf.jpg",
    images: ["https://sfile.chatglm.cn/images-ppt/6fa30e92eddf.jpg","https://sfile.chatglm.cn/images-ppt/ef8de0de4f15.jpg","https://sfile.chatglm.cn/images-ppt/54d8170e22a5.jpg"],
    location: "Ain Sokhna", locationAr: "السخنة", type: "Commercial & Residential",
    priceFrom: "3,200,000 EGP", area: "80 - 250 sqm",
    unitTypes: ["Studios","Apartments","Duplexes","Commercial Units"],
    description: "Downtown Galala is Tatweer Misr's vibrant mixed-use hub within IL Monte Galala, offering a perfect blend of residential and commercial spaces. This dynamic neighborhood features pedestrian-friendly streets, modern retail outlets, co-working spaces, and entertainment venues, creating a self-sufficient community that lives and breathes energy.",
    descriptionAr: "داون تاون جلالة هو المحور الحيوي المتعدد الاستخدامات داخل إل مونتي جلالة، يقدم مزيجاً مثالياً من المساحات السكنية والتجارية.",
    features: ["Mixed-use urban living","Pedestrian-friendly design","Integrated retail and dining","Smart home technology","Proximity to the crystal lagoon","Sustainable architecture"],
    amenities: ["Commercial Strip","Food Court","Co-working Spaces","Fitness Center","Swimming Pools","Kids Zone","Parking Garage","Green Spaces"],
    deliveryDate: "2026", downPayment: "10%", installmentYears: "6 Years", status: "under-construction"
  },
  {
    id: "p3", title: "West View", titleAr: "ويست فيو",
    developer: "mountain View", developerId: "mountain-view",
    image: "https://sfile.chatglm.cn/images-ppt/53f691544a4b.jpg",
    images: ["https://sfile.chatglm.cn/images-ppt/53f691544a4b.jpg","https://sfile.chatglm.cn/images-ppt/43514bd4d496.jpg","https://sfile.chatglm.cn/images-ppt/3ce26d8a1676.jpg"],
    location: "Sheikh Zayed", locationAr: "الشيخ زايد", type: "Residential Compound",
    priceFrom: "5,800,000 EGP", area: "150 - 400 sqm",
    unitTypes: ["Apartments","Duplexes","Twin Houses","Villas"],
    description: "West View by mountain View is a premium residential compound in Sheikh Zayed offering luxurious living spaces with panoramic views and lush green landscapes. The development features contemporary architecture, spacious floor plans, and world-class amenities designed for families seeking an elevated lifestyle in one of Cairo's most prestigious areas.",
    descriptionAr: "ويست فيو من ماونتن فيو هو كمبوند سكني راقٍ في الشيخ زايد يقدم مساحات معيشية فاخرة مع إطلالات بانورامية ومناظر خضراء خلابة.",
    features: ["Panoramic landscape views","Contemporary architectural design","Spacious floor plans","Premium finishing quality","Family-oriented community","Strategic location in Sheikh Zayed"],
    amenities: ["Large Central Park","Swimming Pools","Sports Club","Kids Area","Jogging & Cycling Tracks","Clubhouse","Security & Surveillance","Retail Outlets"],
    deliveryDate: "2027", downPayment: "15%", installmentYears: "8 Years", status: "selling-fast"
  },
  {
    id: "p4", title: "Village View", titleAr: "فيلاج فيو",
    developer: "mountain View", developerId: "mountain-view",
    image: "https://sfile.chatglm.cn/images-ppt/27eca4abfe1c.jpg",
    images: ["https://sfile.chatglm.cn/images-ppt/27eca4abfe1c.jpg","https://sfile.chatglm.cn/images-ppt/53f691544a4b.jpg","https://sfile.chatglm.cn/images-ppt/54d8170e22a5.jpg"],
    location: "6th of October City", locationAr: "السادس من أكتوبر", type: "Residential Compound",
    priceFrom: "4,200,000 EGP", area: "130 - 300 sqm",
    unitTypes: ["Apartments","Duplexes","Townhouses"],
    description: "Village View by mountain View is a tranquil residential enclave in 6th of October City, offering a serene escape from the city bustle while maintaining excellent connectivity. The compound features thoughtfully designed living spaces surrounded by greenery, with amenities that cater to modern family living.",
    descriptionAr: "فيلاج فيو من ماونتن فيو هو جو سكني هادئ في مدينة السادس من أكتوبر، يوفر ملاذاً هادئاً بعيداً عن صخب المدينة مع الحفاظ على اتصال ممتاز.",
    features: ["Serene green environment","Smart home ready","Modern layouts","Community-centric design","Close to major highways","Affordable luxury segment"],
    amenities: ["Landscaped Gardens","Swimming Pool","Gymnasium","Children's Play Area","BBQ Zones","Walking Paths","24/7 Security","Parking Areas"],
    deliveryDate: "2026", downPayment: "10%", installmentYears: "7 Years", status: "under-construction"
  },
  {
    id: "p5", title: "Zoya", titleAr: "زويا",
    developer: "Ora Developers", developerId: "ora-developers",
    image: "https://sfile.chatglm.cn/images-ppt/ef8de0de4f15.jpg",
    images: ["https://sfile.chatglm.cn/images-ppt/ef8de0de4f15.jpg","https://sfile.chatglm.cn/images-ppt/4137d8ce5b7a.jpg","https://sfile.chatglm.cn/images-ppt/5604f5f9b031.jpg"],
    location: "New Cairo", locationAr: "القاهرة الجديدة", type: "Ultra-Luxury Residential",
    priceFrom: "12,000,000 EGP", area: "200 - 600 sqm",
    unitTypes: ["Apartments","Duplexes","Penthouses","Villas"],
    description: "Zoya by Ora Developers is an ultra-luxury residential masterpiece in the heart of New Cairo. Designed by world-renowned architects, Zoya offers an exclusive collection of residences with exceptional craftsmanship, private gardens, and unparalleled amenities. The development embodies sophisticated living with expansive green spaces and water features that create an oasis of tranquility.",
    descriptionAr: "زويا من أورا ديفيلوبرز هي تحفة سكنية فائقة الفخامة في قلب القاهرة الجديدة. صممها مهندسون معماريون عالميون لتقدم مجموعة حصرية من المساكن.",
    features: ["Ultra-luxury specifications","World-class architectural design","Expansive private gardens","Smart home systems","Exclusive community","Prime New Cairo location"],
    amenities: ["Infinity Pools","Spa & Wellness Center","Fine Dining","Concierge Service","Valet Parking","Private Cinema","Sports Facilities","Landscaped Gardens"],
    deliveryDate: "2028", downPayment: "20%", installmentYears: "10 Years", status: "selling-fast"
  },
  {
    id: "p6", title: "Palm Hills New Cairo", titleAr: "بالم هيلز القاهرة الجديدة",
    developer: "Palm Hills", developerId: "palm-hills",
    image: "https://sfile.chatglm.cn/images-ppt/bf524cd6fcd9.jpg",
    images: ["https://sfile.chatglm.cn/images-ppt/bf524cd6fcd9.jpg","https://sfile.chatglm.cn/images-ppt/3ce26d8a1676.jpg","https://sfile.chatglm.cn/images-ppt/54d8170e22a5.jpg"],
    location: "New Cairo", locationAr: "القاهرة الجديدة", type: "Integrated Community",
    priceFrom: "6,500,000 EGP", area: "140 - 450 sqm",
    unitTypes: ["Apartments","Duplexes","Townhouses","Villas"],
    description: "Palm Hills New Cairo is a premium integrated community by Palm Hills Developments, offering a sophisticated blend of residential, commercial, and recreational spaces. Set across 500 acres, the development features lush landscapes, a championship golf course, and an array of amenities designed for modern family living in New Cairo's most desirable location.",
    descriptionAr: "بالم هيلز القاهرة الجديدة هي مجتمع متكامل راقٍ من بالم هيلز ديفيلوبمنتس، يقدم مزيجاً متطوراً من المساحات السكنية والتجارية والترفيهية.",
    features: ["500-acre master-planned community","Championship golf course","Multiple residential zones","Commercial and retail district","Extensive green spaces","Premium location on 90th Street"],
    amenities: ["Golf Course","Clubhouse","Swimming Pools","Sports Complex","Retail Boulevard","Schools & Nurseries","Medical Center","Parks & Gardens"],
    deliveryDate: "2027", downPayment: "15%", installmentYears: "8 Years", status: "under-construction"
  },
  {
    id: "p7", title: "Uptown Cairo", titleAr: "أب تاون القاهرة",
    developer: "Emaar Misr", developerId: "emaar-misr",
    image: "https://sfile.chatglm.cn/images-ppt/5604f5f9b031.jpg",
    images: ["https://sfile.chatglm.cn/images-ppt/5604f5f9b031.jpg","https://sfile.chatglm.cn/images-ppt/ef8de0de4f15.jpg","https://sfile.chatglm.cn/images-ppt/4137d8ce5b7a.jpg"],
    location: "Mokattam", locationAr: "المقطم", type: "Luxury Residential",
    priceFrom: "8,500,000 EGP", area: "160 - 500 sqm",
    unitTypes: ["Apartments","Duplexes","Penthouses","Villas"],
    description: "Uptown Cairo by Emaar Misr is a prestigious hilltop community offering panoramic views of Cairo. This world-class development spans 4 million square meters and features luxury residences, a vibrant town center, international schools, and unparalleled amenities. Perched on the Mokattam plateau, Uptown Cairo combines exclusivity with convenience, offering residents a self-contained lifestyle destination.",
    descriptionAr: "أب تاون القاهرة من إعمار مصر هي مجتمع مرموق على قمة التل يوفر إطلالات بانورامية على القاهرة. يمتد هذا التطوير العالمي على 4 ملايين متر مربع.",
    features: ["Hilltop panoramic Cairo views","4 million sqm master development","International school campus","Vibrant town center","Multiple residential phases","Emaar's global quality standards"],
    amenities: ["Town Center","International Schools","Healthcare Center","Sports Club","Swimming Pools","Parks & Trails","Retail Outlets","Dining Venues"],
    deliveryDate: "Ready", downPayment: "25%", installmentYears: "5 Years", status: "ready"
  },
  {
    id: "p8", title: "Marassi", titleAr: "ماراسي",
    developer: "Emaar Misr", developerId: "emaar-misr",
    image: "https://sfile.chatglm.cn/images-ppt/3ce26d8a1676.jpg",
    images: ["https://sfile.chatglm.cn/images-ppt/3ce26d8a1676.jpg","https://sfile.chatglm.cn/images-ppt/bf524cd6fcd9.jpg","https://sfile.chatglm.cn/images-ppt/6fa30e92eddf.jpg"],
    location: "North Coast", locationAr: "الساحل الشمالي", type: "Beachfront Resort",
    priceFrom: "7,200,000 EGP", area: "100 - 350 sqm",
    unitTypes: ["Chalets","Apartments","Townhouses","Villas"],
    description: "Marassi by Emaar Misr is a stunning beachfront destination on Egypt's North Coast, offering an unparalleled coastal lifestyle. This iconic development stretches across 6.5 million square meters of pristine coastline, featuring crystal-clear lagoons, private beaches, luxury residences, and a vibrant social scene. Marassi redefines beachside living with its Mediterranean-inspired architecture and world-class amenities.",
    descriptionAr: "ماراسي من إعمار مصر هي وجهة ساحلية مذهلة على الساحل الشمالي لمصر، تقدم أسلوب حياة ساحلي لا مثيل له.",
    features: ["6.5 million sqm beachfront","Crystal lagoons system","Private beach access","Mediterranean architecture","Vibrant social scene","Multiple residential clusters"],
    amenities: ["Private Beaches","Crystal Lagoons","Beach Club","Water Sports","Retail District","F&B Outlets","Spa & Wellness","Entertainment Zone"],
    deliveryDate: "2026", downPayment: "15%", installmentYears: "7 Years", status: "selling-fast"
  }
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Marketed", labelAr: "مشروع تم تسويقه" },
  { value: 6, suffix: "B+", label: "EGP in Sales", labelAr: "جنيه في المبيعات" },
  { value: 2000, suffix: "+", label: "Happy Clients", labelAr: "عميل سعيد" },
  { value: 25, suffix: "+", label: "Developer Partners", labelAr: "شريك مطور" }
];

const services = [
  { icon: "building", title: "Property Marketing", titleAr: "تسويق العقارات", description: "Strategic marketing campaigns that connect premium properties with qualified buyers through multi-channel digital and traditional marketing approaches." },
  { icon: "trending", title: "Investment Advisory", titleAr: "استشارات الاستثمار", description: "Expert investment guidance helping clients identify high-return real estate opportunities in Egypt's most promising developments and emerging areas." },
  { icon: "handshake", title: "Developer Partnerships", titleAr: "شراكات المطورين", description: "Exclusive partnerships with Egypt's top real estate developers, providing clients with priority access, special pricing, and premium unit selections." },
  { icon: "chart", title: "Market Intelligence", titleAr: "ذكاء السوق", description: "Data-driven market analysis and insights on pricing trends, emerging locations, and investment opportunities across Egypt's real estate landscape." },
  { icon: "users", title: "Sales Training", titleAr: "تدريب المبيعات", description: "Comprehensive sales training programs for real estate professionals, equipping teams with the skills and knowledge to excel in the Egyptian market." },
  { icon: "headphones", title: "After-Sales Support", titleAr: "دعم ما بعد البيع", description: "Dedicated after-sales support ensuring smooth property handover, documentation assistance, and ongoing relationship management with developers." }
];

const testimonials = [
  { name: "Ahmed Hassan", role: "Property Investor", text: "EverScopes helped me find the perfect investment property in New Cairo. Their knowledge of the market and relationships with top developers gave me access to exclusive deals I couldn't find anywhere else.", rating: 5 },
  { name: "Sarah Mohamed", role: "First-Time Buyer", text: "As a first-time buyer, I was overwhelmed by the options. The EverScopes team guided me through every step, from selecting the right developer to finalizing the paperwork. Exceptional service!", rating: 5 },
  { name: "Omar Abdel Nasser", role: "Business Owner", text: "Working with EverScopes for our commercial space was a game-changer. They understood our requirements and matched us with the perfect property in Palm Hills. Professional and efficient.", rating: 5 }
];

const positions = [
  { title: "Real Estate Sales Consultant", type: "Full-time", location: "New Cairo" },
  { title: "Property Marketing Specialist", type: "Full-time", location: "New Cairo" },
  { title: "Digital Marketing Executive", type: "Full-time", location: "Remote" },
  { title: "Customer Relations Officer", type: "Full-time", location: "New Cairo" }
];

const values = [
  { icon: "target", title: "Precision Targeting", description: "We precisely match each client with properties that align with their investment goals, lifestyle preferences, and budget requirements through data-driven analysis." },
  { icon: "eye", title: "Market Vision", description: "Our deep understanding of Egypt's real estate landscape allows us to identify emerging opportunities and provide clients with a competitive advantage in their property decisions." },
  { icon: "award", title: "Excellence Standards", description: "We maintain the highest standards of professionalism and integrity, ensuring every interaction and transaction meets our exacting quality benchmarks." },
  { icon: "users", title: "Client-First Approach", description: "Every decision we make is guided by our clients' best interests. We build lasting relationships based on trust, transparency, and exceptional service delivery." }
];

const contactInfo = [
  //   { icon: "phone", label: "Call Us", value: "+20 100 000 0000", href: "tel:+201000000000" },
  { icon: "mail", label: "Email Us", value: "Customer-service@everscopes.com", href: "mailto:Customer-service@everscopes.com" },
  { icon: "map", label: "Visit Us", value: "Everscopes, New Cairo, Egypt", href: "https://maps.app.goo.gl/zPmiGDvLm6EiYk2e8" },
  { icon: "clock", label: "Working Hours", value: "Sat - Thu: 9AM - 9PM", href: "#" }
];

// ===== SVG ICON HELPERS =====
const SVG = {
  target: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
  eye: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  building: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>',
  trending: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
  handshake: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>',
  chart: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
  headphones: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  ruler: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>',
  dollar: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
  sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FF5700" stroke="#FF5700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  quote: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
  map: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>'
};

// ===== TRANSLATIONS =====
const i18n = {
  en: {
    nav_home: "Home", nav_about: "About", nav_developers: "Developers",
    nav_projects: "Projects", nav_services: "Services", nav_contact: "Contact",
    nav_careers: "Careers", nav_contact_us: "Contact Us", nav_join: "Join Our Team",
    hero_tagline: "Est. 2025 — Egypt's Premier Real Estate Marketing",
    hero_line1: "EVERY DETAIL DESIGNED", hero_line2: "For Your Comfort",
    hero_desc: "Led By Specialists. Driven By Care. We connect you with Egypt's most premium real estate opportunities from the nation's top developers.",
    hero_cta1: "Explore Projects", hero_cta2: "Get In Touch", hero_cta3: "Go to About Page",
    about_badge: "About EverScopes",
    about_title_1: "Redefining Real Estate", about_title_2: "Marketing", about_title_3: " in Egypt",
    about_p1: "EverScopes is Egypt's premier real estate marketing company, established in 2025 with a clear mission: to bridge the gap between world-class real estate developers and discerning property buyers. We specialize in marketing premium residential and commercial projects from Egypt's most trusted developers.",
    about_p2: "Our team of specialists combines deep market knowledge with innovative marketing strategies to deliver exceptional results. We don't just sell properties — we craft investment journeys that transform aspirations into addresses.",
    about_stat1: "Developer Partners", about_stat2: "Premium Projects", about_stat3: "Established",
    devs_badge: "Our Developer Partners",
    devs_title_1: "Trusted by Egypt's ", devs_title_2: "Top Developers",
    devs_desc: "We partner exclusively with Egypt's most reputable real estate developers to bring you premium investment opportunities.",
    devs_more: "...and many more leading developers across Egypt",
    proj_badge: "Our Projects", proj_title_1: "Explore Premium ", proj_title_2: "Properties",
    proj_desc: "Discover handpicked properties from Egypt's top developers. Each project is carefully selected to meet the highest standards of quality and investment potential.",
    proj_empty: "No projects found for this developer yet.",
    srv_badge: "Our Services", srv_title_1: "What We ", srv_title_2: "Offer",
    srv_desc: "Comprehensive real estate marketing solutions designed to maximize value for both developers and buyers.",
    test_badge: "Testimonials", test_title_1: "What Our ", test_title_2: "Clients Say",
    contact_badge: "Contact Us", contact_title_1: "Get In ", contact_title_2: "Touch",
    contact_desc: "Ready to find your perfect property? Reach out to our team of specialists and let us guide you on your real estate journey.",
    contact_name: "Full Name", contact_phone: "Phone Number", contact_email: "Email Address",
    contact_interested: "Interested In", contact_select: "Select a project or developer",
    contact_message: "Message", contact_send: "Send Message",
    contact_name_ph: "Your name", contact_msg_ph: "Tell us about your requirements...",
    contact_success_title: "Message Sent!", contact_success_text: "Thank you for reaching out. Our team will contact you shortly.",
    careers_badge: "Careers", careers_title_1: "Join the ", careers_title_2: " Team",
    careers_desc: "We're always looking for talented individuals who share our passion for real estate excellence. Apply now and be part of something extraordinary.",
    careers_open: "Open Positions", careers_apply: "Apply Now",
    career_name: "Full Name *", career_phone: "Phone Number *",
    career_position: "Job Title You're Applying For *", career_select: "Select a position",
    career_email: "Email Address *", career_exp: "Years of Experience", career_exp_select: "Select experience",
    career_notes: "Additional Notes", career_submit: "Submit Application",
    career_name_ph: "Your full name", career_notes_ph: "Tell us about yourself and why you'd like to join EverScopes...",
    career_success_title: "Application Submitted!", career_success_text: "Thank you for your interest. We'll review your application and get back to you soon.",
    footer_desc: "Every Detail Designed For Your Comfort. Led By Specialists. Driven By Care. Egypt's premier real estate marketing company.",
    footer_links: "Quick Links", footer_about: "About Us", footer_projects: "Our Projects",
    footer_devs: "Our Developers", footer_back: "Back to Top",
    all_projects: "All Projects",
    status_ready: "Ready to Move", status_under_construction: "Under Construction", status_selling_fast: "Selling Fast",
    modal_overview: "Overview", modal_amenities: "Amenities",
    modal_unit_types: "Available Unit Types", modal_features: "Key Features",
    modal_starting_price: "Starting Price", modal_unit_area: "Unit Area",
    modal_delivery: "Delivery Date", modal_down_payment: "Down Payment",
    modal_developed_by: "Developed by", modal_installment: "installment plan available"
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "عن الشركة", nav_developers: "المطورون",
    nav_projects: "المشاريع", nav_services: "الخدمات", nav_contact: "اتصل بنا",
    nav_careers: "الوظائف", nav_contact_us: "اتصل بنا", nav_join: "انضم لفريقنا",
    hero_tagline: "تأسست 2025 — الأولى في تسويق العقارات في مصر",
    hero_line1: "كل تفصيل مصمم", hero_line2: "لراحتك",
    hero_desc: "بقيادة متخصصين. مدفوعين بالاهتمام. نربطك بأرقى فرص العقارات في مصر من أبرز المطورين في البلاد.",
    hero_cta1: "استكشف المشاريع", hero_cta2: "تواصل معنا", hero_cta3: "انتقل إلى صفحة نبذة عنا",
    about_badge: "عن إيفر سكوبس",
    about_title_1: "إعادة تعريف ", about_title_2: "تسويق", about_title_3: " العقارات في مصر",
    about_p1: "إيفر سكوبس هي الشركة الأولى في تسويق العقارات في مصر، تأسست في عام 2025 بمهمة واضحة: سد الفجوة بين مطوري العقارات ذوي المستوى العالمي والمشترين المميزين.",
    about_p2: "يجمع فريقنا من المتخصصين بين المعرفة العميقة بالسوق واستراتيجيات التسويق المبتكرة لتقديم نتائج استثنائية.",
    about_stat1: "شركاء مطورون", about_stat2: "مشاريع متميزة", about_stat3: "تاريخ التأسيس",
    devs_badge: "شركاؤنا المطورون",
    devs_title_1: "موثوقون من ", devs_title_2: "أفضل المطورين في مصر",
    devs_desc: "نتعاون حصرياً مع أكثر مطوري العقارات سمعة في مصر لنقدم لكم فرص استثمارية متميزة.",
    devs_more: "...والمزيد من المطورين الرائدين في جميع أنحاء مصر",
    proj_badge: "مشاريعنا", proj_title_1: "استكشف ", proj_title_2: "العقارات المتميزة",
    proj_desc: "اكتشف عقارات مختارة بعناية من أفضل المطورين في مصر.",
    proj_empty: "لا توجد مشاريع لهذا المطور بعد.",
    srv_badge: "خدماتنا", srv_title_1: "ماذا ", srv_title_2: "نقدم",
    srv_desc: "حلول تسويق عقاري شاملة مصممة لتعظيم القيمة للمطورين والمشترين على حد سواء.",
    test_badge: "آراء العملاء", test_title_1: "ماذا يقول ", test_title_2: "عملاؤنا",
    contact_badge: "اتصل بنا", contact_title_1: "تواصل ", contact_title_2: "معنا",
    contact_desc: "هل أنت مستعد للعثور على عقارك المثالي؟ تواصل مع فريقنا من المتخصصين.",
    contact_name: "الاسم الكامل", contact_phone: "رقم الهاتف", contact_email: "البريد الإلكتروني",
    contact_interested: "مهتم بـ", contact_select: "اختر مشروعاً أو مطوراً",
    contact_message: "الرسالة", contact_send: "إرسال الرسالة",
    contact_name_ph: "اسمك", contact_msg_ph: "أخبرنا عن متطلباتك...",
    contact_success_title: "تم إرسال الرسالة!", contact_success_text: "شكراً لتواصلك. سيتواصل فريقنا معك قريباً.",
    careers_badge: "الوظائف", careers_title_1: "انضم إلى فريق ", careers_title_2: "إيفر سكوبس",
    careers_desc: "نبحث دائماً عن أشخاص موهوبين يشاركوننا شغفنا بالتميز العقاري.",
    careers_open: "الوظائف المتاحة", careers_apply: "قدّم الآن",
    career_name: "الاسم الكامل *", career_phone: "رقم الهاتف *",
    career_position: "المسمى الوظيفي *", career_select: "اختر وظيفة",
    career_email: "البريد الإلكتروني *", career_exp: "سنوات الخبرة", career_exp_select: "اختر الخبرة",
    career_notes: "ملاحظات إضافية", career_submit: "تقديم الطلب",
    career_name_ph: "اسمك الكامل", career_notes_ph: "أخبرنا عن نفسك ولماذا تريد الانضمام إلى إيفر سكوبس...",
    career_success_title: "تم تقديم الطلب!", career_success_text: "شكراً لاهتمامك. سنراجع طلبك ونعود إليك قريباً.",
    footer_desc: "كل تفصيل مصمم لراحتك. بقيادة متخصصين. مدفوعين بالاهتمام. الشركة الأولى في تسويق العقارات في مصر.",
    footer_links: "روابط سريعة", footer_about: "عن الشركة", footer_projects: "مشاريعنا",
    footer_devs: "مطورونا", footer_back: "العودة للأعلى",
    all_projects: "جميع المشاريع",
    status_ready: "جاهز للسكن", status_under_construction: "قيد الإنشاء", status_selling_fast: "بيع سريع",
    modal_overview: "نظرة عامة", modal_amenities: "المرافق",
    modal_unit_types: "أنواع الوحدات المتاحة", modal_features: "المميزات الرئيسية",
    modal_starting_price: "السعر يبدأ من", modal_unit_area: "مساحة الوحدة",
    modal_delivery: "تاريخ التسليم", modal_down_payment: "الدفعة المقدمة",
    modal_developed_by: "تطوير", modal_installment: "خطة تقسيط متاحة"
  }
};

// ===== STATE =====
let currentLang = "en";
let selectedDeveloper = "all";
let mobileMenuOpen = false;

// ===== SCROLL TO SECTION =====
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const navH = document.getElementById("navbar").offsetHeight;
    const top = el.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: top, behavior: "smooth" });
  }
}

// ===== NAVBAR SCROLL =====
function handleNavScroll() {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

// ===== MOBILE MENU =====
function openMobileMenu() {
  mobileMenuOpen = true;
  document.getElementById("mobileOverlay").classList.add("active");
  document.getElementById("mobileDrawer").classList.add("active");
  document.getElementById("menuIcon").style.display = "none";
  document.getElementById("closeIcon").style.display = "block";
  document.body.style.overflow = "hidden";
}
function closeMobileMenu() {
  mobileMenuOpen = false;
  document.getElementById("mobileOverlay").classList.remove("active");
  document.getElementById("mobileDrawer").classList.remove("active");
  document.getElementById("menuIcon").style.display = "block";
  document.getElementById("closeIcon").style.display = "none";
  document.body.style.overflow = "";
}

// ===== LANGUAGE SWITCHING =====
function setLang(lang) {
  currentLang = lang;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  if (lang === "ar") {
    html.style.fontFamily = "'Cairo', 'Inter', sans-serif";
  } else {
    html.style.fontFamily = "'Inter', system-ui, sans-serif";
  }

  // Toggle buttons
  ["langEn","langEnMobile"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("active", lang === "en");
  });
  ["langAr","langArMobile"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("active", lang === "ar");
  });

  // Apply translations
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });

  // Re-render dynamic content
  renderStats();
  renderFilterTabs();
  renderProjects();
  renderServices();
  renderTestimonials();
  renderValues();
  renderPositions();
  renderContactInfo();
  renderFooterDevLinks();
  populateContactSelect();
  populateCareerPositionSelect();
}

// ===== RENDER FUNCTIONS =====
function renderStats() {
  const grid = document.getElementById("statsGrid");
  grid.innerHTML = stats.map(s => {
    const label = currentLang === "ar" ? s.labelAr : s.label;
    return `<div class="stat-item reveal"><div class="stat-value" data-count="${s.value}">0<span class="suffix">${s.suffix}</span></div><p class="stat-label">${label}</p></div>`;
  }).join("");
  initCounters();
}

function renderFilterTabs() {
  const tabs = document.getElementById("filterTabs");
  let html = `<button class="filter-tab ${selectedDeveloper === 'all' ? 'active' : ''}" onclick="filterProjects('all')">${i18n[currentLang].all_projects}</button>`;
  developers.forEach(d => {
    const name = currentLang === "ar" ? d.nameAr : d.name;
    html += `<button class="filter-tab ${selectedDeveloper === d.id ? 'active' : ''}" onclick="filterProjects('${d.id}')">${name}</button>`;
  });
  tabs.innerHTML = html;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const empty = document.getElementById("projectsEmpty");
  const filtered = selectedDeveloper === "all" ? projects : projects.filter(p => p.developerId === selectedDeveloper);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  grid.innerHTML = filtered.map(p => {
    const title = currentLang === "ar" ? p.titleAr : p.title;
    const loc = currentLang === "ar" ? p.locationAr : p.location;
    const statusLabel = i18n[currentLang]["status_" + p.status];
    return `
    <div class="project-card reveal" onclick="openModal('${p.id}')">
      <div class="project-card-inner">
        <div class="project-card-image">
          <div class="shimmer" style="position:absolute;inset:0;z-index:1;"></div>
          <img src="${p.image}" alt="${title}" loading="lazy" onload="this.previousElementSibling.style.display='none'">
          <div class="project-card-overlay-gradient"></div>
          <span class="status-badge ${p.status}">${SVG.sparkles} ${statusLabel}</span>
          <span class="dev-badge">${SVG.building.replace('width="28"','width="12"').replace('height="28"','height="12"')} ${p.developer}</span>
        </div>
        <div class="project-card-content">
          <div class="project-card-title-row">
            <h3 class="project-card-title">${title}</h3>
            <span class="project-card-arrow">${SVG.arrowRight}</span>
          </div>
          <div class="project-card-location">${SVG.mapPin} ${loc}</div>
          <div class="project-card-stats">
            <div><div class="project-card-stat-label">${SVG.ruler} Area</div><p class="project-card-stat-value">${p.area}</p></div>
            <div><div class="project-card-stat-label">${SVG.dollar} From</div><p class="project-card-stat-value">${p.priceFrom}</p></div>
            <div><div class="project-card-stat-label">${SVG.calendar} Delivery</div><p class="project-card-stat-value">${p.deliveryDate}</p></div>
          </div>
        </div>
      </div>
    </div>`;
  }).join("");
  initReveal();
}

function filterProjects(devId) {
  selectedDeveloper = devId;
  renderFilterTabs();
  renderProjects();
}

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = services.map((s, i) => {
    const title = currentLang === "ar" ? s.titleAr : s.title;
    const desc = currentLang === "ar" ? s.description : s.description;
    const iconSvg = SVG[s.icon] || SVG.building;
    return `
    <div class="service-card reveal">
      <span class="service-card-number">${String(i+1).padStart(2,'0')}</span>
      <div class="service-card-icon">${iconSvg}</div>
      <h3 class="service-card-title">${title}</h3>
      <p class="service-card-desc">${desc}</p>
    </div>`;
  }).join("");
  initReveal();
}

function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card reveal">
      <div class="testimonial-quote-icon">${SVG.quote}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-stars">${'<span class="testimonial-star">' + SVG.star + '</span>'.repeat(t.rating)}</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div><p class="testimonial-name">${t.name}</p><p class="testimonial-role">${t.role}</p></div>
      </div>
    </div>
  `).join("");
  initReveal();
}

function renderValues() {
  const grid = document.getElementById("valuesGrid");
  grid.innerHTML = values.map(v => `
    <div class="value-card reveal">
      <div class="value-card-icon">${SVG[v.icon]}</div>
      <h3 class="value-card-title">${v.title}</h3>
      <p class="value-card-desc">${v.description}</p>
    </div>
  `).join("");
  initReveal();
}

function renderPositions() {
  const list = document.getElementById("positionsList");
  list.innerHTML = positions.map((pos, i) => `
    <div class="position-card" onclick="selectPosition(${i})" style="animation: fadeInUp 0.5s ease-out ${i*0.1}s both;">
      <div style="display:flex; align-items:start; justify-content:space-between; gap:1rem;">
        <div>
          <h4 class="position-card-title">${pos.title}</h4>
          <div class="position-card-meta">
            <span>${pos.type}</span>
            <span class="position-card-dot"></span>
            <span>${pos.location}</span>
          </div>
        </div>
        <div class="position-card-arrow">${SVG.send}</div>
      </div>
    </div>
  `).join("");
}

function selectPosition(idx) {
  const sel = document.getElementById("careerPosition");
  if (sel) sel.value = positions[idx].title;
  scrollToSection("careers");
  // Focus the form area
  const form = document.getElementById("careersForm");
  if (form) form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderContactInfo() {
  const list = document.getElementById("contactInfoList");
  list.innerHTML = contactInfo.map(c => `
    <a href="${c.href}" class="contact-info-card">
      <div class="contact-info-icon">${SVG[c.icon]}</div>
      <div><p class="contact-info-label">${c.label}</p><p class="contact-info-value">${c.value}</p></div>
    </a>
  `).join("") + `
    <div class="contact-map">
      <div class="contact-map-bg"></div>
      <div class="contact-map-text">${SVG.map}<p style="font-size:0.875rem; color:#6b7280;">New Cairo, Egypt</p></div>
    </div>`;
}

function renderFooterDevLinks() {
  const container = document.getElementById("footerDevLinks");
  container.innerHTML = developers.slice(0,5).map(d => {
    const name = currentLang === "ar" ? d.nameAr : d.name;
    return `<button class="footer-link" onclick="filterProjects('${d.id}'); scrollToSection('projects');">${name}</button>`;
  }).join("");
}

function renderDevelopers() {
  const grid = document.getElementById("devsGrid");
  grid.innerHTML = developers.map(d => {
    const logoHtml = d.logo
      ? `<img src="${d.logo}" alt="${d.name}" loading="lazy">`
      : `<div class="dev-card-fallback">${d.name.charAt(0)}</div>`;
    return `
    <div class="dev-card reveal" onclick="filterProjects('${d.id}'); scrollToSection('projects');">
      ${logoHtml}
      <p class="dev-card-name">${d.name}</p>
      <p class="dev-card-name-ar">${d.nameAr}</p>
    </div>`;
  }).join("");
  initReveal();
}

function populateContactSelect() {
  const sel = document.getElementById("contactInterest");
  if (!sel) return;
  const val = sel.value;
  sel.innerHTML = `<option value="">${i18n[currentLang].contact_select}</option>`;
  projects.forEach(p => {
    sel.innerHTML += `<option value="${p.id}">${p.title} - ${p.developer}</option>`;
  });
  sel.innerHTML += `<option value="general">${currentLang === "ar" ? "استفسار عام" : "General Inquiry"}</option>`;
  sel.value = val;
}

function populateCareerPositionSelect() {
  const sel = document.getElementById("careerPosition");
  if (!sel) return;
  const val = sel.value;
  sel.innerHTML = `<option value="">${i18n[currentLang].career_select}</option>`;
  positions.forEach(p => {
    sel.innerHTML += `<option value="${p.title}">${p.title}</option>`;
  });
  sel.value = val;
}

// ===== MODAL =====
function openModal(projectId) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return;
  const dev = developers.find(d => d.id === p.developerId);
  const title = currentLang === "ar" ? p.titleAr : p.title;
  const loc = currentLang === "ar" ? p.locationAr : p.location;
  const desc = currentLang === "ar" ? p.descriptionAr : p.description;
  const t = i18n[currentLang];

  const galleryHtml = p.images.length > 1 ? `
    <div class="modal-gallery">
      ${p.images.map((img, i) => `<div class="modal-gallery-item"><img src="${img}" alt="${title} ${i+1}" loading="lazy"></div>`).join("")}
    </div>` : "";

  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <button class="modal-close" onclick="closeModal()">${SVG.x}</button>
    <div class="modal-hero">
      <img src="${p.images[0]}" alt="${title}">
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-info">
        <div class="modal-hero-badges">
          <span class="modal-hero-badge-type">${p.type}</span>
          <span class="modal-hero-badge-loc">${loc}</span>
        </div>
        <h2 class="modal-hero-title">${title}</h2>
        <p class="modal-hero-dev">by ${p.developer}</p>
      </div>
    </div>
    ${galleryHtml}
    <div class="modal-body">
      <div class="modal-quick-stats">
        <div class="modal-stat-box">${SVG.dollar}<p class="modal-stat-box-label">${t.modal_starting_price}</p><p class="modal-stat-box-value">${p.priceFrom}</p></div>
        <div class="modal-stat-box">${SVG.ruler}<p class="modal-stat-box-label">${t.modal_unit_area}</p><p class="modal-stat-box-value">${p.area}</p></div>
        <div class="modal-stat-box">${SVG.calendar}<p class="modal-stat-box-label">${t.modal_delivery}</p><p class="modal-stat-box-value">${p.deliveryDate}</p></div>
        <div class="modal-stat-box">${SVG.check}<p class="modal-stat-box-label">${t.modal_down_payment}</p><p class="modal-stat-box-value">${p.downPayment}</p></div>
      </div>
      <div class="modal-tabs">
        <button class="modal-tab active" onclick="switchTab('overview', this)">${t.modal_overview}</button>
        <button class="modal-tab" onclick="switchTab('amenities', this)">${t.modal_amenities}</button>
      </div>
      <div class="tab-panel active" id="tab-overview">
        <p class="modal-desc">${desc}</p>
        <h4 class="modal-section-title">${t.modal_unit_types}</h4>
        <div class="unit-tags">${p.unitTypes.map(u => `<span class="unit-tag">${u}</span>`).join("")}</div>
        <h4 class="modal-section-title">${t.modal_features}</h4>
        <div class="features-grid">${p.features.map(f => `<div class="feature-item">${SVG.check}<span>${f}</span></div>`).join("")}</div>
      </div>
      <div class="tab-panel" id="tab-amenities">
        <div class="amenities-grid">${p.amenities.map(a => `<div class="amenity-card"><p>${a}</p></div>`).join("")}</div>
      </div>
      <div class="modal-footer">
        ${dev ? `<div class="modal-developer">
          ${dev.logo ? `<img src="${dev.logo}" alt="${dev.name}">` : ""}
          <div><p class="modal-developer-label">${t.modal_developed_by}</p><p class="modal-developer-name">${dev.name}</p></div>
        </div>` : ""}
        <p class="modal-installment"><strong>${p.installmentYears}</strong> ${t.modal_installment}</p>
      </div>
    </div>`;

  document.getElementById("modalBackdrop").classList.add("active");
  document.getElementById("projectModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("active");
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "";
}

function switchTab(tab, btn) {
  document.querySelectorAll(".modal-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-" + tab).classList.add("active");
}

// ===== ANIMATED COUNTERS =====
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"));
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  const suffix = el.querySelector(".suffix").textContent;
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.innerHTML = `${target}<span class="suffix">${suffix}</span>`;
      clearInterval(timer);
    } else {
      el.innerHTML = `${Math.floor(current)}<span class="suffix">${suffix}</span>`;
    }
  }, 16);
}

// ===== REVEAL ON SCROLL =====
function initReveal() {
  const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "-80px" });
  els.forEach(el => {
    if (!el.classList.contains("visible")) observer.observe(el);
  });
}

// ===== HERO PARALLAX =====
function initHeroParallax() {
  const hero = document.getElementById("hero");
  const bg = document.getElementById("heroBg");
  if (!hero || !bg) return;
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    bg.style.transform = `translate(${x}px, ${y}px) scale(1.15)`;
  });
}

// ===== PARTICLES =====
function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  let html = "";
  for (let i = 0; i < 20; i++) {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const dur = 3 + Math.random() * 4;
    const delay = Math.random() * 5;
    html += `<div class="particle" style="left:${left}%;top:${top}%--dur:${dur}s;--delay:${delay}s;animation-delay:${delay}s;animation-duration:${dur}s;"></div>`;
  }
  container.innerHTML = html;
}

// ===== FORM HANDLING =====
function initForms() {
  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const wrap = document.getElementById("contactFormWrap");
      wrap.innerHTML = `
        <div class="form-success">
          <div class="form-success-icon">${SVG.check}</div>
          <h3 class="form-success-title">${i18n[currentLang].contact_success_title}</h3>
          <p class="form-success-text">${i18n[currentLang].contact_success_text}</p>
        </div>`;
      setTimeout(() => location.reload(), 4000);
    });
  }

  // Careers form
  const careersForm = document.getElementById("careersForm");
  if (careersForm) {
    careersForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const wrap = document.getElementById("careersFormWrap");
      wrap.innerHTML = `
        <div class="careers-form-success">
          <div class="careers-success-icon">${SVG.check}</div>
          <h4 class="careers-success-title">${i18n[currentLang].career_success_title}</h4>
          <p class="careers-success-text">${i18n[currentLang].career_success_text}</p>
        </div>`;
    });
  }
}

// ===== ESC KEY =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeMobileMenu();
  }
});

// ===== INIT =====
function init() {
  // Footer year
  document.getElementById("footerYear").textContent = new Date().getFullYear();

  // Nav toggle
  document.getElementById("navToggle").addEventListener("click", () => {
    mobileMenuOpen ? closeMobileMenu() : openMobileMenu();
  });

  // Scroll listener
  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll();

  // Render everything
  renderStats();
  renderDevelopers();
  renderFilterTabs();
  renderProjects();
  renderServices();
  renderTestimonials();
  renderValues();
  renderPositions();
  renderContactInfo();
  renderFooterDevLinks();
  populateContactSelect();
  populateCareerPositionSelect();

  // Effects
  initParticles();
  initHeroParallax();
  initReveal();
  initForms();

  // Initial navbar animation
  document.getElementById("navbar").style.animation = "navSlideDown 0.8s ease-out";
}

document.addEventListener("DOMContentLoaded", init);





























