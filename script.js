/* ============================================
   EverScopes — Pure JavaScript
   ============================================ */





   // --- 3D Hero Parallax Effect ---
        document.addEventListener('mousemove', (e) => {
            const cubes = document.querySelectorAll('.cube');
            const x = (window.innerWidth / 2 - e.pageX) / 30;
            const y = (window.innerHeight / 2 - e.pageY) / 30;
            
            cubes.forEach(cube => {
                cube.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        });





        
// ===== DATA =====
const developers = [
  { 
    id: "arabia-holding", 
    name: "Arabia Holding", 
    nameAr: "أرابيا هولدنج", 
    logo: "https://aqarmisr.com.eg/wp-content/uploads/2022/08/%D8%B4%D8%B1%D9%83%D8%A9-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.png",
    projects: ["Sun Capital", "Galleria Moon Valley"]
  },


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
    id: "al-ahly-sabbour", 
    name: "Ahly Sabbour", 
    nameAr: "الأهلي صبور", 
    logo: "https://blogs.realestate.gov.eg/wp-content/uploads/2024/11/Al-Ahly-Sabbour.webp",
    projects: ["Gaia", "At East", "The Mornings"]
  },
  { 
    id: "madinet-masr", 
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
    id: "la-vista", 
    name: "La Vista", 
    nameAr: "لافيستا", 
    logo: "https://tibascape.ca/wp-content/uploads/2022/05/Lavista-developments-logo.png",
    projects: ["Patio Vida", "La Vista City", "Patio Hills"]
  },
  { 
    id: "madaar-developments", 
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
  id: "p1",
  title: "El Patio Vida",
  titleAr: "الباتيو فيدا",
  developer: "La Vista Developments",
  developerId: "la-vista",
  image: "https://gprproperty.com/wp-content/uploads/2025/01/El-Patio-Vida-New-Cairo-6.jpg",
  images: [
    "https://gprproperty.com/wp-content/uploads/2025/01/El-Patio-Vida-New-Cairo-6.jpg",
    "https://aldiyaralasrea.com/wp-content/uploads/2025/02/%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF-%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%8A%D9%88-%D9%81%D9%8A%D8%AF%D8%A7-El-Patio-Vida.png",
    "https://gprproperty.com/wp-content/uploads/2025/01/El-Patio-Vida-New-Cairo-1.jpg",
    "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/651946/Patio_Vida__5_.jpg",
    "https://elbayt.com/assets/uploads/images/29577/94ac53f8a2ef35cc120a50d84a1cd492/el-patio-vida-new-cairo-la-vista-dev1jpg-1200x900.jpg"
  ],
  location: "6th Settlement, New Cairo",
  locationAr: "التجمع السادس - القاهرة الجديدة",
  type: "Residential Compound",
  priceFrom: "11,500,000 EGP",
  area: "158 sqm+",
  unitTypes: ["3 Bedrooms", "4 Bedrooms", "5 Bedrooms Duplex"],
  description: "El Patio Vida by La Vista Developments is a premier residential compound located in the heart of the 6th Settlement, New Cairo. Designed to provide maximum accessibility and seamless connectivity, the project offers a luxurious living experience with state-of-the-art facilities, lush landscapes, and modern architectural design.",
  descriptionAr: "كمبوند الباتيو فيدا من شركة لا فيستا للتطوير العقاري هو مجتمع سكني راقٍ يقع في قلب التجمع السادس بالقاهرة الجديدة. يتميز المشروع بموقع استراتيجي وسهولة الوصول إليه، ويوفر أسلوب حياة فاخر مع مرافق متكاملة وتصميمات معمارية حديثة.",
  features: [
    "Prime strategic location in 6th Settlement",
    "Exceptional accessibility and connectivity",
    "Developed by industry leader La Vista",
    "Flexible payment plans up to 10 years",
    "3 fully equipped clubhouses for residents"
  ],
  amenities: [
    "Commercial Area",
    "Kids Play Areas",
    "Gym & Fitness Center",
    "Jogging Tracks",
    "3 Clubhouses"
  ],
  deliveryDate: "3 Years",
  downPayment: "5% (2.5% after 3 months, 2.5% after 6 months)",
  installmentYears: "8 Years (or 10 Years with 6% interest/year)",
  status: "new-launch"
},


  {
  id: "p3",
  title: "La Vista City",
  titleAr: "لا فيستا سيتي",
  developer: "La Vista Developments",
  developerId: "la-vista",
  image: "https://static.shared.propertyfinder.eg/media/images/listing/83H0JHK6JNQMXNTY912YAB7ETM/e46cdd97-8b91-44bd-80aa-ed69f8964965/668x452.jpg",
  images: [
    "https://lavista-developments.com/wp-content/uploads/2024/04/city.jpg",
    "https://lavista-developments.com/wp-content/uploads/2023/11/c6.jpg",
    "https://lavista-developments.com/wp-content/uploads/2024/04/city2.jpg"
  ],
  location: "New Administrative Capital",
  locationAr: "العاصمة الإدارية الجديدة",
  type: "Villas Compound",
  priceFrom: "31,000,000 EGP",
  area: "228 sqm+",
  unitTypes: ["Townhouses", "Twin Houses", "Stand-alone Villas"],
  description: "La Vista City is a flagship villa-only compound strategically positioned in the New Administrative Capital. Developed by La Vista Developments, this exclusive fully finished, Ready-To-Move (RTM) community offers supreme privacy, vibrant neighborhoods, and high-end living backed by world-class security and facilities.",
  descriptionAr: "لا فيستا سيتي هو مجتمع سكني حصري للفيلات فقط من شركة لا فيستا للتطوير العقاري، يقع في موقع استراتيجي بالعاصمة الإدارية الجديدة. يتميز المشروع بكونه جاهزاً للتقسيم والسكن الفوري units تشطيب كامل، مع أعلى درجات الخصوصية والأمان ومجتمع حيوي مأهول بالفعل.",
  features: [
    "Exclusive standalone and attached villas community",
    "Ready to Move (RTM) & fully finished units",
    "Established, lively compound with high occupancy rate",
    "Double-gated layout for maximum security and privacy",
    "Strategic prime location in the New Capital"
  ],
  amenities: [
    "4 Clubhouses",
    "Double Gated Security",
    "Commercial & Retail Zones",
    "Sports Courts & Gyms",
    "Swimming Pools",
    "Green Spaces & Parks"
  ],
  deliveryDate: "Ready To Move (RTM)",
  downPayment: "10%",
  installmentYears: "8 Years",
  status: "ready-to-move"
},
  {
  id: "p4",
  title: "El Patio Hills",
  titleAr: "الباتيو هيلز",
  developer: "La Vista Developments",
  developerId: "la-vista",
  image: "https://www.newcairo-projects.com/wp-content/uploads/2025/04/%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%8A%D9%88-%D9%87%D9%8A%D9%84%D8%B2-%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg",
  images: [
    "https://lavista-developments.com/wp-content/uploads/2025/05/hills2.jpg",
    "https://lavista-developments.com/wp-content/uploads/2025/05/hills-8.jpg",
    "https://lavista-developments.com/wp-content/uploads/2025/05/hill-7.jpg",
    "https://lavista-developments.com/wp-content/uploads/2025/05/hills1.jpg",
    "https://lavista-developments.com/wp-content/uploads/2025/05/hills4.jpg",
    "https://lavista-developments.com/wp-content/uploads/2025/05/hills6.jpg"
  ],
  location: "6th Settlement, New Cairo",
  locationAr: "التجمع السادس - القاهرة الجديدة",
  type: "Villas Compound",
  priceFrom: "20,900,000 EGP",
  area: "180 sqm+",
  unitTypes: ["Townhouses", "Stand-alone Villas"],
  description: "El Patio Hills by La Vista Developments is an upmarket villa compound strategically situated in the 6th Settlement, New Cairo. Boasting unmatched location and accessibility, the development features stylish townhouses and standalone villas surrounded by serene landscapes, private recreational zones, and comprehensive lifestyle amenities.",
  descriptionAr: "كمبوند الباتيو هيلز من شركة لا فيستا للتطوير العقاري هو مجتمع فاخر مخصص للفيلات يقع في موقع استراتيجي بالتجمع السادس بالقاهرة الجديدة. يتميز المشروع بسهولة الوصول إليه وتصميماته المعمارية الراقية، ويوفر تاون هاوس وفيلات مستقلة محاطة بالمساحات الخضراء والمرافق الترفيهية المتكاملة.",
  features: [
    "Prime location in 6th Settlement with easy accessibility",
    "Exclusive community offering Townhouses and Stand-alone Villas",
    "Developed by industry leader La Vista Developments",
    "Flexible payment options over 8 years",
    "Integrated lifestyle amenities including sports and commercial zones"
  ],
  amenities: [
    "2 Clubhouses",
    "Sports Area",
    "Swimming Pools",
    "Commercial Zone",
    "Green Spaces",
    "24/7 Security"
  ],
  deliveryDate: "3.5 Years",
  downPayment: "5% (2.5% after 3 months, 2.5% after 6 months)",
  installmentYears: "8 Years",
  status: "new-launch"
},




  {
  id: "p5",
  title: "Hyde Park New Cairo",
  titleAr: "هايد بارك القاهرة الجديدة",
  developer: "Hyde Park Developments",
  developerId: "hyde-park",
  image: "https://example.com/images/hyde-park-nc-main.jpg",
  images: [
    "https://hyd.hydeepark.net/images/new%20cairo/CAM12-AERIAL%20SPORTS%20CLUB.jpg",
    "https://www.hydeparkdevelopments.com/_next/image?url=https%3A%2F%2Fassets.live.beyond-creation.net%2Fhydepark%2Fgardenville_slider_11zon_e8ea95d953.jpg&w=1920&q=75",
    "https://www.hydeparkdevelopments.com/_next/image?url=https%3A%2F%2Fassets.live.beyond-creation.net%2Fhydepark%2Fmediamob_copy_278a6075fd.jpg&w=1200&q=75",
    "https://www.hydeparkdevelopments.com/_next/image?url=https%3A%2F%2Fassets.live.beyond-creation.net%2Fhydepark%2FGrand_Park_residents_slider_11zon_410df43a6d.jpg&w=1920&q=75"
  ],
  location: "Directly on Road 90, New Cairo",
  locationAr: "مباشرة على شارع التسعين - القاهرة الجديدة",
  type: "Mixed-Use Compound",
  priceFrom: "10,300,000 EGP",
  area: "Up to 900 sqm",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "Townhouses",
    "Stand-alone Villas"
  ],
  description: "Hyde Park New Cairo is a prestigious, large-scale flagship compound located directly on the main Road 90. Backed by top financial and governmental housing institutions, this mega-development seamlessly combines residential luxury, lush expansive landscapes, a massive commercial center, and a dedicated business hub.",
  descriptionAr: "كمبوند هايد بارك القاهرة الجديدة هو مجتمع متكامل راقٍ يقع بموقع استراتيجي فريد مباشرة على شارع التسعين الرئيسي. بتطوير مدعوم من كبرى المؤسسات المصرفية والعمرانية، يضم المشروع مساحات خضراء شاسعة، إلى جانب منطقة أعمال ومركز تجاري ضخم وخدمات رياضية وطبية متكاملة.",
  features: [
    "Prime iconic location directly on Road 90",
    "Strong backing by Housing & Development Bank and NUCA",
    "Flexible finishing options (Core & Shell / Fully Finished)",
    "Massive scale featuring huge commercial and business zones",
    "Diverse housing options from 1-bedroom apartments to large villas"
  ],
  amenities: [
    "27-Acre Business Park",
    "75-Acre Commercial Mall",
    "Sports Club",
    "Medical Zones",
    "Clubhouse",
    "24/7 Security"
  ],
  deliveryDate: "1.5 Years (Core & Shell) / 2.5 Years (Finished)",
  downPayment: "10% for Villas / 5% + 5% for Apartments",
  installmentYears: "6 Years (Villas) / 8 Years (Apartments)",
  status: "selling-fast"
},



  {
  id: "p6",
  title: "Hyde Park Central",
  titleAr: "هايد بارك سنترال",
  developer: "Hyde Park Developments",
  developerId: "hyde-park",
  image: "https://example.com/images/hyde-park-central-main.jpg",
  images: [
    "https://example.com/images/hyde-park-central-1.jpg",
    "https://example.com/images/hyde-park-central-2.jpg",
    "https://example.com/images/hyde-park-central-3.jpg"
  ],
  location: "6th Settlement (Next to Zed East), New Cairo",
  locationAr: "التجمع السادس (بجوار زد إيست) - القاهرة الجديدة",
  type: "Mixed-Use Compound",
  priceFrom: "4,500,000 EGP",
  area: "Up to 220 sqm",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "Quattro Units",
    "Townhouses",
    "Stand-alone Villas"
  ],
  description: "Hyde Park Central is a vibrant modern compound situated in the promising 6th Settlement, directly adjacent to Zed East. Developed by Hyde Park Developments and supported by leading banking and housing entities, it offers a versatile residential mix, extended payment plans, and top-tier amenities including an outdoor cinema and a large commercial sector.",
  descriptionAr: "كمبوند هايد بارك سنترال هو مجتمع سكني حديث ومميز يقع في التجمع السادس بجوار مشروع زد إيست مباشرة. يقدم المشروع بتطوير من هايد بارك تنوعاً كبيراً في الوحدات بأسعار تنافسية وخطة سداد تصل إلى 10 سنوات، إلى جانب خدمات متكاملة تشمل سينما خارجية ومنطقة تجارية واسعة.",
  features: [
    "Strategic prime location in 6th Settlement attached to Zed East",
    "Backed by Housing & Development Bank and NUCA",
    "Long-term flexible payment plan up to 10 years",
    "Wide range of unit types from 1-bedroom apartments to standalone villas",
    "Unique leisure amenities like outdoor cinema and extensive commercial area"
  ],
  amenities: [
    "Commercial Area (14% of Project Area)",
    "Clubhouses",
    "Outdoor Cinema",
    "Kids Play Areas",
    "Green Spaces",
    "24/7 Security"
  ],
  deliveryDate: "4 Years",
  downPayment: "5%",
  installmentYears: "10 Years",
  status: "new-launch"
},



  {
  id: "p7",
  title: "Seashore",
  titleAr: "سي شور",
  developer: "Hyde Park Developments",
  developerId: "hyde-park",
  image: "https://example.com/images/seashore-main.jpg",
  images: [
    "https://example.com/images/seashore-1.jpg",
    "https://example.com/images/seashore-2.jpg",
    "https://example.com/images/seashore-3.jpg"
  ],
  location: "Kilo 207, Ras El Hekma",
  locationAr: "الكيلو 207 - رأس الحكمة",
  type: "Coastal Resort",
  priceFrom: "8,410,000 EGP",
  area: "240 Feddans Total Area",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "Townhouses"
  ],
  description: "Seashore by Hyde Park Developments is a premier coastal resort spanning 240 feddans in the prime location of Ras El Hekma (Kilo 207). Supported by leading national institutions, this vibrant beachfront destination features a magnificent green spine, multiple beach entrances, lagunar swimming pools, and flexible long-term payment options.",
  descriptionAr: "منتجع سي شور من هايد بارك للتطوير العقاري هو مشروع ساحلي فاخر يمتد على مساحة 240 فداناً في قلب منطقة رأس الحكمة الفريدة (الكيلو 207). يتميز المشروع بتصميم مائي وطبيعي خلاب يضم حزاماً أخضراً ممتداً (Green Spine) وأكثر من 25 حمام سباحة بمداخل شاطئية، مع خطط سداد مرنة تصل إلى 10 سنوات.",
  features: [
    "Prime beachfront location in Ras El Hekma (Kilo 207)",
    "Expansive 240-feddan coastal masterplan",
    "Backed by major financial and real estate institutions",
    "Quick delivery timeline within 18 months",
    "Extensive water features with 25 beach-entry pools"
  ],
  amenities: [
    "Beach Clubhouses",
    "Green Spine",
    "25 Beach-Entry Swimming Pools",
    "Commercial & Dining Area",
    "Kids Areas",
    "24/7 Security & Maintenance"
  ],
  deliveryDate: "18 Months",
  downPayment: "5%",
  installmentYears: "8 to 10 Years",
  status: "selling-fast"
},



  {
  id: "p8",
  title: "Park Central",
  titleAr: "بارك سنترال",
  developer: "Hassan Allam Properties",
  developerId: "hassan-allam",
  image: "https://example.com/images/park-central-main.jpg",
  images: [
    "https://example.com/images/park-central-1.jpg",
    "https://example.com/images/park-central-2.jpg",
    "https://example.com/images/park-central-3.jpg"
  ],
  location: "Mostakbal City",
  locationAr: "مستقبل سيتي",
  type: "Mixed-Use Compound",
  priceFrom: "8,300,000 EGP",
  area: "81 - 100 sqm+",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "3BR Penthouse",
    "3BR Duplex",
    "Townhouses",
    "Twin Houses",
    "One-Story Villas"
  ],
  description: "Park Central is a prestigious residential flagship community by Hassan Allam Properties located in Mostakbal City. Built on a rich history of development excellence and premium construction quality, Park Central offers a close-knit community setting centered around expansive green spines, a central park, and world-class commercial outlets.",
  descriptionAr: "كمبوند بارك سنترال من شركة حسن علام العقارية هو مجتمع سكني بارز يقع في مستقبل سيتي. يستند المشروع إلى إرث عريق من الجودة العالية والخبرة، ويوفر بيئة مجتمعية راقية تحيط بها متنزهات مركزية ومساحات خضراء ممتدة ومرافق تجارية وترفيهية متكاملة.",
  features: [
    "Strategic prime location in Mostakbal City",
    "Developed by industry pioneer Hassan Allam Properties",
    "Extensive unit variety from 1-bedroom apartments to standalone villas",
    "Flexible 10-year payment plan with only 5% down payment",
    "Centered around vast nature, parks, and lush green spines"
  ],
  amenities: [
    "Central Park",
    "Green Spine",
    "F&B & Dining Outlets",
    "Kids Play Area",
    "BBQ Areas",
    "24/7 Security"
  ],
  deliveryDate: "4 Years",
  downPayment: "5%",
  installmentYears: "10 Years",
  status: "new-launch"
},



  {
  id: "p9",
  title: "Swanlake Residences",
  titleAr: "سوان ليك ريزيدنسز",
  developer: "Hassan Allam Properties",
  developerId: "hassan-allam",
  image: "https://example.com/images/swanlake-residences-main.jpg",
  images: [
    "https://example.com/images/swanlake-residences-1.jpg",
    "https://example.com/images/swanlake-residences-2.jpg",
    "https://example.com/images/swanlake-residences-3.jpg"
  ],
  location: "Directly on Cairo - Suez Road, New Cairo",
  locationAr: "مباشرة على طريق القاهرة - السويس - القاهرة الجديدة",
  type: "Luxury Villas & Residential Compound",
  priceFrom: "105,000,000 EGP",
  area: "311 - 459 sqm",
  unitTypes: [
    "Twin Houses",
    "Stand-alone Villas"
  ],
  description: "Swanlake Residences is an iconic landmark development by Hassan Allam Properties, strategically located directly on the Cairo-Suez Road. Renowned for its heritage, ultra-premium quality, and exclusive community, the project features sprawling green spines, high-end sporting facilities, and lavish standalone villas and twin houses designed for refined living.",
  descriptionAr: "كمبوند سوان ليك ريزيدنسز من شركة حسن علام العقارية هو أحد أرقى المشاريع السكنية ذات الموقع الاستراتيجي الفاخر مباشرة على طريق القاهرة - السويس. يعكس المشروع تاريخاً عريقاً في الجودة العالية والإنشاءات الفاخرة، ويضم مساحات خضراء ممتدة ونادياً رياضياً ومجتمعاً حصرياً راقياً.",
  features: [
    "Prime iconic location directly on Cairo - Suez Road",
    "Developed by industry leader Hassan Allam Properties",
    "Ultra-exclusive luxury community with standalone and twin villas",
    "Comprehensive sports and lifestyle infrastructure",
    "Quick delivery timeline within 2.5 years"
  ],
  amenities: [
    "Sports Club",
    "Green Spine",
    "Commercial Hub",
    "Fine Dining & Retail Outlets",
    "Lush Landscaping & Water Features",
    "24/7 Gated Security"
  ],
  deliveryDate: "2.5 Years",
  downPayment: "5% (5% after 3 months)",
  installmentYears: "6 Years",
  status: "selling-fast"
},

{
  id: "p10",
  title: "Haptown",
  titleAr: "هاب تاون",
  developer: "Hassan Allam Properties",
  developerId: "hassan-allam",
  image: "https://example.com/images/haptown-main.jpg",
  images: [
    "https://example.com/images/haptown-1.jpg",
    "https://example.com/images/haptown-2.jpg",
    "https://example.com/images/haptown-3.jpg"
  ],
  location: "Mostakbal City",
  locationAr: "مستقبل سيتي",
  type: "Residential Compound",
  priceFrom: "11,200,000 EGP",
  area: "130 sqm+",
  unitTypes: [
    "2 Bedrooms",
    "3 Bedrooms",
    "3BR Penthouse"
  ],
  description: "Haptown by Hassan Allam Properties is a flagship residential community in Mostakbal City. Known for its heritage, strong community feel, and high quality of finishing, the project features a massive 3-acre non-swimmable lagoon, expansive distances between buildings (62m to 293m), and stunning water views for over 62% of its units.",
  descriptionAr: "كمبوند هاب تاون من شركة حسن علام العقارية هو مجتمع سكني بارز يقع في مستقبل سيتي. يستند المشروع إلى إرث الجودة والتميز المعماري، ويتميز بوجود لاجون على مساحة 3 أفدنة، ومسافات بينية واسعة جداً بين المباني تمتد من 62 إلى 293 متراً، مع إطلالات مباشرة على المياه لأكثر من 62% من الوحدات.",
  features: [
    "Prime strategic location in Mostakbal City",
    "Developed by industry leader Hassan Allam Properties",
    "62% of units feature breathtaking lagoon views",
    "Generous distance between buildings (62m to 293m) for maximum privacy",
    "3-acre picturesque central lagoon"
  ],
  amenities: [
    "3-Acre Non-Swimmable Lagoon",
    "Social Club (Separate Membership Fees)",
    "Commercial & Retail Outlets",
    "Green Landscapes & Walking Paths",
    "Kids Play Areas",
    "24/7 Security & Gated Community"
  ],
  deliveryDate: "3 Years",
  downPayment: "5%",
  installmentYears: "8 Years",
  status: "selling-fast"
},


{
  id: "p11",
  title: "Sa'ada New Cairo",
  titleAr: "سعادة القاهرة الجديدة",
  developer: "Horizon Egypt Developments",
  developerId: "horizon",
  image: "https://example.com/images/saada-main.jpg",
  images: [
    "https://example.com/images/saada-1.jpg",
    "https://example.com/images/saada-2.jpg",
    "https://example.com/images/saada-3.jpg"
  ],
  location: "Directly on Suez Road, New Cairo",
  locationAr: "مباشرة على طريق السويس - القاهرة الجديدة",
  type: "Ultra-Luxury Villa Compound",
  priceFrom: "40,000,000 EGP",
  area: "300 sqm+",
  unitTypes: [
    "Villas (Currently On Hold)"
  ],
  description: "Sa'ada New Cairo is an ultra-luxury residential landmark by Horizon Egypt Developments, situated in a prime position directly on the Suez Road. Combining world-class architecture with hospitality excellence, the development features an exclusive 7-star luxury hotel, opulent community amenities, and flexible international payment structures.",
  descriptionAr: "كمبوند سعادة القاهرة الجديدة من شركة هورايزون للتطوير العقاري هو مجتمع سكني فاخر يقع بموقع استراتيجي فريد مباشرة على طريق السويس. يتميز المشروع بوجود فندق عالمي 7 نجوم، ومرافق ترفيهية وتجارية متكاملة، بالإضافة إلى خيارات سداد مرنة بالدولار.",
  features: [
    "Direct strategic access on Cairo - Suez Road",
    "Developed by Horizon Egypt Developments",
    "Integrated 7-Star luxury hotel within the compound",
    "USD payment acceptance for down payment",
    "Fast-track 2-year delivery schedule"
  ],
  amenities: [
    "7-Star Luxury Hotel",
    "Exclusive Clubhouse",
    "Commercial Hub",
    "F&B Outlets & Dining",
    "Mosque",
    "24/7 Gated Security & Concierge"
  ],
  deliveryDate: "2 Years",
  downPayment: "USD (Dollar Payment)",
  installmentYears: "6 Years",
  status: "on-hold"
},


{
  id: "p12",
  title: "Sa'ada Boutique",
  titleAr: "سعادة بوتيك",
  developer: "Horizon Egypt Developments",
  developerId: "horizon",
  image: "https://example.com/images/saada-boutique-main.jpg",
  images: [
    "https://example.com/images/saada-boutique-1.jpg",
    "https://example.com/images/saada-boutique-2.jpg",
    "https://example.com/images/saada-boutique-3.jpg"
  ],
  location: "6th of October City",
  locationAr: "مدينة السادس من أكتوبر",
  type: "Boutique Residential Compound",
  priceFrom: "7,600,000 EGP",
  area: "75 sqm+",
  unitTypes: [
    "Apartments",
    "Townhouses",
    "Standalone Villas"
  ],
  description: "Sa'ada Boutique by Horizon Egypt Developments brings ultra-luxury living to 6th of October City. Designed as a high-end boutique destination, the project features luxury branding, premium F&B offerings, two exclusive clubhouses, and a comprehensive retail hub, complemented by flexible 9-year payment plans.",
  descriptionAr: "كمبوند سعادة بوتيك من شركة هورايزون للتطوير العقاري يقدم مفهوم الحياة السكنية الفاخرة في مدينة 6 أكتوبر. يتألق المشروع بتصميم بوتيك راقٍ بعلامات تجارية عالمية ومطاعم فاخرة، بالإضافة إلى 2 كلوب هاوس، ومنطقة تجارية، ومسارات لركوب الدراجات.",
  features: [
    "Prime strategic location in 6th of October City",
    "Developed by Horizon Egypt Developments",
    "High-end luxury brand associations and fine dining options",
    "Diverse unit mix from boutique apartments to standalone villas",
    "Flexible 9-year installment plan with only 5% down payment"
  ],
  amenities: [
    "2 Exclusive Clubhouses",
    "Commercial & Retail Hub",
    "Luxury F&B Outlets",
    "Cycling Track",
    "Lush Landscaping & Greenery",
    "24/7 Gated Security & Concierge"
  ],
  deliveryDate: "3 Years",
  downPayment: "5%",
  installmentYears: "9 Years",
  status: "selling-fast"
},

{
  id: "p13",
  title: "Sa'ada Sahel",
  titleAr: "سعادة الساحل",
  developer: "Horizon Egypt Developments",
  developerId: "horizon",
  image: "https://example.com/images/saada-sahel-main.jpg",
  images: [
    "https://example.com/images/saada-sahel-1.jpg",
    "https://example.com/images/saada-sahel-2.jpg",
    "https://example.com/images/saada-sahel-3.jpg"
  ],
  location: "Kilo 183, Ras El Hekma",
  locationAr: "الكيلو 183 - رأس الحكمة",
  type: "Luxury Coastal Resort",
  priceFrom: "21,500,000 EGP",
  area: "149 sqm+",
  unitTypes: [
    "Chalets",
    "Townhouses",
    "Standalone Villas"
  ],
  description: "Sa'ada Sahel is a premier beachfront sanctuary by Horizon Egypt Developments located at Kilo 183 in Ras El Hekma. Designed for high-end coastal living, the resort features an exclusive 5-star hotel, a private marina, high-end F&B venues, and a beachfront clubhouse, backed by a generous 9-year payment structure.",
  descriptionAr: "منتجع سعادة الساحل من شركة هورايزون للتطوير العقاري هو وجهة ساحلية فاخرة في الكيلو 183 بمنطقة رأس الحكمة. يجمع المشروع بين أسلوب الحياة الرفيع ووجود فندق 5 نجوم، ومارينا خاصة، ومطاعم فاخرة، وكلوب هاوس، مع أنظمة سداد مرنة تمتد حتى 9 سنوات.",
  features: [
    "Prime beachfront location in Ras El Hekma (Kilo 183)",
    "Developed by Horizon Egypt Developments",
    "Integrated 5-star luxury hotel on-site",
    "Private marina and premium dining options",
    "Extended 9-year installment schedule with 5% down payment"
  ],
  amenities: [
    "Private Marina",
    "5-Star Hotel",
    "Clubhouse",
    "Luxury F&B Outlets",
    "Swimming Pools & Lagoons",
    "24/7 Beachfront Security & Concierge"
  ],
  deliveryDate: "4 Years",
  downPayment: "5%",
  installmentYears: "9 Years",
  status: "new-launch"
},


{
  id: "p14",
  title: "Sarai",
  titleAr: "سراي",
  developer: "Madinet Masr (MNHD)",
  developerId: "madinet-masr",
  image: "https://example.com/images/sarai-main.jpg",
  images: [
    "https://example.com/images/sarai-1.jpg",
    "https://example.com/images/sarai-2.jpg",
    "https://example.com/images/sarai-3.jpg"
  ],
  location: "Intersection of Suez Road & Hope Axis (El Amal Axis), New Cairo",
  locationAr: "تقاطع طريق السويس مع محور الأمل - القاهرة الجديدة",
  type: "Mixed-Use Mega City",
  priceFrom: "3,800,000 EGP",
  area: "50 sqm+",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "Townhouses",
    "S-Villas",
    "Standalone Villas"
  ],
  description: "Sarai is an iconic mega-city by Madinet Masr (formerly MNHD), strategically located at the intersection of Suez Road and El Amal Axis. Developed by one of Egypt's oldest state-backed public companies (est. 1959), Sarai spans vast land bank assets and offers a full-fledged ecosystem featuring international schools, hospitals, a 5-star hotel, and unmatched 12-year flexible payment structures.",
  descriptionAr: "مشروع سراي هو مجتمع سكني وعمراني متكامل من شركة مدينة مصر (مدينة نصر للإسكان والتعمير سابقاً)، بموقع استراتيجي على طريق السويس ومحور الأمل. تمتاز الشركة بتاريخ عريق يمتد لعام 1959، وتوفر في سراي مدينة متكاملة الخدمات تضم مدارس دولية، مستشفى، فندق 5 نجوم، ونادي كايان، مع خطط سداد مرنة تصل إلى 12 سنة.",
  features: [
    "Backed by Madinet Masr — EGX-listed industry pioneer since 1959",
    "Prime axis intersection on Suez Road & El Amal Axis",
    "Green contract land ownership (عقد أخضر) with total financial security",
    "Ultra-flexible payment terms up to 12 years (with a 5% discount per reduced year)",
    "Self-sustained mega-project with all phases fully gated"
  ],
  amenities: [
    "2 International Schools",
    "Hospital & Medical Center",
    "5-Star Hotel",
    "Kayan Club & Multiple Clubhouses",
    "Gas Station",
    "Commercial & Retail Area",
    "Extensive Landscapes & Water Features",
    "24/7 Gated Security"
  ],
  deliveryDate: "4.5 Years",
  downPayment: "1.5% (Backloaded) or 5% (Equal Installments)",
  installmentYears: "12 Years",
  status: "selling-fast"
},



{
  id: "p15",
  title: "Butterfly",
  titleAr: "باترفلاي",
  developer: "Madinet Masr (MNHD)",
  developerId: "madinet-masr",
  image: "https://example.com/images/butterfly-main.jpg",
  images: [
    "https://example.com/images/butterfly-1.jpg",
    "https://example.com/images/butterfly-2.jpg",
    "https://example.com/images/butterfly-3.jpg"
  ],
  location: "Mostakbal City",
  locationAr: "مستقبل سيتي",
  type: "Residential Compound",
  priceFrom: "5,000,000 EGP",
  area: "50 sqm+",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "Townhouses",
    "S-Villas",
    "Standalone Villas"
  ],
  description: "Butterfly is a boutique residential flagship project in Mostakbal City developed by Madinet Masr (MNHD). Backed by an iconic legacy dating back to 1959, Butterfly combines ultra-modern residential design with lush green landscapes, access to Kayan Club, and generous 12-year payment plans with a low 5% down payment.",
  descriptionAr: "كمبوند باترفلاي هو مجتمع سكني فاخر في قلب مستقبل سيتي من تطوير شركة مدينة مصر (مدينة نصر للإسكان والتعمير سابقاً). يجمع المشروع بين التصميم العصر الراقي والمسطحات الخضراء الممتدة، مع إمكانية الاستمتاع بنادي كايان ونادي اجتماعي، وأنظمة سداد ميسرة تصل إلى 12 سنة.",
  features: [
    "Prime central location in Mostakbal City",
    "Developed by Madinet Masr — EGX-listed pioneer since 1959",
    "Secured registered land ownership (عقد أخضر)",
    "Wide unit diversity from 1-bedroom apartments to standalone villas",
    "Extended 12-year installment schedule with only 5% down payment"
  ],
  amenities: [
    "Clubhouses",
    "Kayan Club Membership",
    "Commercial & F&B Hub",
    "Landscaped Gardens & Walkways",
    "Children's Play Areas",
    "24/7 Gated Security"
  ],
  deliveryDate: "4.5 Years",
  downPayment: "5%",
  installmentYears: "12 Years",
  status: "new-launch"
},

{
  id: "p16",
  title: "Bloomfields",
  titleAr: "بلومفيلدز",
  developer: "Tatweer Misr",
  developerId: "tatweer-misr",
  image: "https://example.com/images/bloomfields-main.jpg",
  images: [
    "https://example.com/images/bloomfields-1.jpg",
    "https://example.com/images/bloomfields-2.jpg",
    "https://example.com/images/bloomfields-3.jpg"
  ],
  location: "Mostakbal City",
  locationAr: "مستقبل سيتي",
  type: "Integrated Mixed-Use City",
  priceFrom: "5,800,000 EGP",
  area: "416 sqm (Masterplan / Unit variations)",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "Duplexes",
    "Townhouses",
    "Twin Houses",
    "Standalone Villas"
  ],
  description: "Bloomfields by Tatweer Misr is a double-gated, mega green city in Mostakbal City, led by industry visionaries Samer Aref, Ahmed Dawood, and Ashraf Arafat. Designed as Egypt's premier education and Innovation Hub, it offers flexible delivery options ranging from ready-to-move (RTM) to 2 and 4-year timelines, paired with 10-year payment plans.",
  descriptionAr: "مشروع بلومفيلدز من شركة تطوير مصر هو مجتمع سكني وعمراني مزدوج البوابات يقع في موقع استراتيجي بقلب مستقبل سيتي، بتأسيس وإدارة من قادة المجال سامر عارف وأحمد داوود وأشرف عرفات. يقدم المشروع خيارات استلام متعددة (جاهز للانتقال / سنتين / 4 سنوات) مع خطط سداد مرنة تصل إلى 10 سنوات.",
  features: [
    "Strategic prime location with a double-gated layout in Mostakbal City",
    "Developed by Tatweer Misr leadership (Samer Aref, Ahmed Dawood, Ashraf Arafat)",
    "Flexible delivery options: RTM (Ready to Move), 2 Years, or 4 Years",
    "Comprehensive unit types ranging from 1-bedroom apartments to standalone villas",
    "10-year long-term installment plan starting with a 5% down payment"
  ],
  amenities: [
    "Multiple Clubhouses",
    "Dedicated Jogging & Cycling Tracks",
    "Commercial & Retail Hub",
    "Educational & Innovation Zone",
    "Lush Landscaping & Water Features",
    "24/7 Double-Gated Security"
  ],
  deliveryDate: "RTM / 2 Years / 4 Years",
  downPayment: "5%",
  installmentYears: "10 Years",
  status: "selling-fast"
},


{
  id: "p17",
  title: "Salt",
  titleAr: "سالت",
  developer: "Tatweer Misr",
  developerId: "tatweer-misr",
  image: "https://example.com/images/salt-main.jpg",
  images: [
    "https://example.com/images/salt-1.jpg",
    "https://example.com/images/salt-2.jpg",
    "https://example.com/images/salt-3.jpg"
  ],
  location: "Kilo 185, Ras El Hekma",
  locationAr: "الكيلو 185 - رأس الحكمة",
  type: "Coastal Resort",
  priceFrom: "8,600,000 EGP",
  area: "265 sqm+",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "Townhouses",
    "Standalone Villas"
  ],
  description: "Salt by Tatweer Misr is a premier beachfront destination situated at Kilo 185 in Ras El Hekma. Led by industry visionaries Samer Aref, Ahmed Dawood, and Ashraf Arafat, Salt offers a world-class coastal experience featuring a private marina, a 5-star international hotel, multiple clubhouses, and transparent 8-year payment plans.",
  descriptionAr: "منتجع سالت من شركة تطوير مصر هو وجهة ساحلية ساحرة تقع عند الكيلو 185 بمنطقة رأس الحكمة، بتأسيس وإدارة من قادة المجال سامر عارف وأحمد داوود وأشرف عرفات. يمتلك المشروع إطلالات مائية خلابة ويقدم تجربة منتجع عالمي مع مارينا خاصة، وفندق 5 نجوم، وكلوب هاوس، وأنظمة سداد تمتد حتى 8 سنوات.",
  features: [
    "Prime beachfront location at Kilo 185 in Ras El Hekma",
    "Developed by Tatweer Misr leadership (Samer Aref, Ahmed Dawood, Ashraf Arafat)",
    "Exclusive marina lifestyle with premier water access",
    "Integrated 5-star international luxury hotel",
    "Flexible 8-year payment plan with only 5% down payment"
  ],
  amenities: [
    "Private Marina",
    "5-Star Luxury Hotel",
    "Multiple Clubhouses",
    "Commercial & Retail Outlets",
    "Lagoons & Swimming Pools",
    "24/7 Beachfront Security"
  ],
  deliveryDate: "4 Years",
  downPayment: "5%",
  installmentYears: "8 Years",
  status: "selling-fast"
},



{
  id: "p18",
  title: "Scenes",
  titleAr: "سينز",
  developer: "Tatweer Misr",
  developerId: "tatweer-misr",
  image: "https://example.com/images/scenes-main.jpg",
  images: [
    "https://example.com/images/scenes-1.jpg",
    "https://example.com/images/scenes-2.jpg",
    "https://example.com/images/scenes-3.jpg"
  ],
  location: "Mostakbal City",
  locationAr: "مستقبل سيتي",
  type: "Luxury Residential Compound",
  priceFrom: "14,800,000 EGP",
  area: "100 sqm+",
  unitTypes: [
    "Townhouses",
    "Twin Houses",
    "Standalone Villas"
  ],
  description: "Scenes is an exclusive villa-centric community in Mostakbal City, developed by Tatweer Misr under the leadership of Samer Aref, Ahmed Dawood, and Ashraf Arafat. Designed with a focus on holistic living, cultural immersion, and well-being, Scenes features a dedicated wellness hub, a central park, and a cultural house, paired with a low 5% down payment and 10-year installment plans.",
  descriptionAr: "مشروع سينز هو مجتمع سكني راقٍ مخصص للفيلا بالكامل في مستقبل سيتي من تطوير شركة تطوير مصر، بقيادة سامر عارف وأحمد داوود وأشرف عرفات. يركز المشروع على مفهوم الصحة وجودة الحياة من خلال مركز عافية مخصص، سنترال بارك ممتد، وبيت ثقافي، مع تقديم أنظمة سداد تصل إلى 10 سنوات بمقدم 5% فقط.",
  features: [
    "Exclusive villa community in prime Mostakbal City",
    "Developed by Tatweer Misr leadership (Samer Aref, Ahmed Dawood, Ashraf Arafat)",
    "Strong focus on health, culture, and lifestyle integration",
    "Fast-track 2-year delivery schedule",
    "10-year extended payment plan with only 5% down payment"
  ],
  amenities: [
    "Wellness Hub",
    "Cultural House",
    "Central Park & Extensive Greenery",
    "Clubhouse",
    "Walking & Recreation Trails",
    "24/7 Gated Security"
  ],
  deliveryDate: "2 Years",
  downPayment: "5%",
  installmentYears: "10 Years",
  status: "new-launch"
},



{
  id: "p19",
  title: "Solare",
  titleAr: "سولاري",
  developer: "Misr Italia Properties",
  developerId: "misr-italia",
  image: "https://example.com/images/solare-main.jpg",
  images: [
    "https://example.com/images/solare-1.jpg",
    "https://example.com/images/solare-2.jpg",
    "https://example.com/images/solare-3.jpg"
  ],
  location: "Kilo 199, Ras El Hekma, North Coast",
  locationAr: "الكيلو 199 - رأس الحكمة - الساحل الشمالي",
  type: "Coastal Resort",
  priceFrom: "6,000,000 EGP",
  area: "66 sqm+",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "4 Bedrooms"
  ],
  description: "Solare North Coast by Misr Italia Properties is an Italian-inspired coastal sanctuary located at Kilo 199 in Ras El Hekma. Spanning vibrant landscapes and clear water lagoons, Solare offers an Italian coastal lifestyle with a downtown commercial hub, 90,000 sqm of swimmable lagoons, multiple clubhouses, and flexible payment options ranging up to 10 years.",
  descriptionAr: "منتجع سولاري الساحل الشمالي من شركة مصر إيطاليا العقارية هو مجتمع ساحلي بالطابع الإيطالي الفاخر عند الكيلو 199 بمنطقة رأس الحكمة. يتميز المشروع بـ 90,000 متر مربع من الكريستال لاجونز، منطقة داون تاون تجارية، وكلوب هاوس على الشاطئ واللاجون، مع خيارات سداد مرنة تصل إلى 10 سنوات.",
  features: [
    "Prime strategic location at Kilo 199 in heart of Ras El Hekma",
    "Signature Italian architecture and coastal design concept",
    "Massive water coverage with 90,000 sqm of swimmable crystal lagoons",
    "Dedicated Downtown commercial district",
    "Ultra-flexible payment schedules spanning 6, 8, or 10 years"
  ],
  amenities: [
    "Downtown Commercial Area",
    "Boutique / Luxury Hotel",
    "Sports Complex & Sports Area",
    "90,000 sqm Crystal Lagoons",
    "20 Swimming Pools",
    "Lagoon Clubhouse",
    "Beach Clubhouse",
    "24/7 Resort Security"
  ],
  deliveryDate: "4 Years",
  downPayment: "5% (+ 5% after 3 months)",
  installmentYears: "6, 8, or 10 Years",
  status: "selling-fast"
},


{
  id: "p20",
  title: "Kai",
  titleAr: "كاي",
  developer: "Misr Italia Properties",
  developerId: "misr-italia",
  image: "https://example.com/images/kai-main.jpg",
  images: [
    "https://example.com/images/kai-1.jpg",
    "https://example.com/images/kai-2.jpg",
    "https://example.com/images/kai-3.jpg"
  ],
  location: "Kilo 100, Zafarana Road, Ain Sokhna",
  locationAr: "الكيلو 100 - طريق الزعفرانة - العين السخنة",
  type: "Beachfront Resort",
  priceFrom: "8,000,000 EGP",
  area: "83 sqm+",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "4 Bedrooms"
  ],
  description: "Kai Sokhna by Misr Italia Properties (led by Karim El Assal) is an upscale coastal haven situated at Kilo 100 on Zafarana Road. Featuring Asian-inspired boutique architecture, all units come fully finished. The resort boasts swimmable crystal lagoons, luxury hospitality by TLT Concepts including Can Limón Boutique Hotel, and a signature 5-star beachfront experience, supported by 8-year payment plans.",
  descriptionAr: "منتجع كاي السخنة من شركة مصر إيطاليا العقارية (بقيادة المهندس كريم العسال) هو مجتمع ساحلي راقٍ عند الكيلو 100 على طريق الزعفرانة. تتميز جميع الوحدات بتشطيب كامل وتصميم آسيوي استوائي، ويضم المشروع كريستال لاجونز قابلة للسباحة، مع خدمات ضيافة فاخرة شائعة من TLT Concepts تشمل فندق Can Limón ومطعم Origins، بخصائص سداد تمتد حتى 8 سنوات.",
  features: [
    "Prime coastal spot at Kilo 100 on Zafarana Road, Ain Sokhna",
    "Developed by Misr Italia Properties (Karim El Assal)",
    "All units delivered fully finished",
    "High-end hospitality partners including TLT Concepts",
    "Near-term delivery timeline within 1.5 years",
    "Flexible 8-year payment plan with 5% down payment (+ 5% after 3 months)"
  ],
  amenities: [
    "Swimmable Crystal Lagoons",
    "Can Limón Boutique Hotel (by TLT Concepts)",
    "The Origins Beach Restaurant & Bar (by TLT Concepts)",
    "5-Star Beach Resort Facilities",
    "Commercial Strip & Retail Area",
    "24/7 Gated Beachfront Security"
  ],
  deliveryDate: "1.5 Years",
  downPayment: "5% (+ 5% after 3 months)",
  installmentYears: "8 Years",
  status: "selling-fast"
},


{
  id: "p21",
  title: "Vinci",
  titleAr: "فينشي",
  developer: "Misr Italia Properties",
  developerId: "misr-italia",
  image: "https://example.com/images/vinci-main.jpg",
  images: [
    "https://example.com/images/vinci-1.jpg",
    "https://example.com/images/vinci-2.jpg",
    "https://example.com/images/vinci-3.jpg"
  ],
  location: "R7 District, New Administrative Capital",
  locationAr: "الخي الحي السكني السابع R7 - العاصمة الإدارية الجديدة",
  type: "Luxury Residential Compound",
  priceFrom: "8,600,000 EGP",
  area: "135 sqm+",
  unitTypes: [
    "2 Bedrooms",
    "3 Bedrooms",
    "Standalone Villas",
    "Townhouses",
    "Twin Houses"
  ],
  description: "Vinci by Misr Italia Properties (led by Karim El Assal) is an upscale boutique compound located in the prime R7 district of the New Administrative Capital. Designed with an art-inspired boutique concept, Vinci offers Ready-To-Move (RTM) units with 0% down payment options. The project features a massive 24-acre clubhouse, swimmable lagoons, a 4-building commercial strip, and flexible payment plans up to 10 years.",
  descriptionAr: "كمبوند فينشي من شركة مصر إيطاليا العقارية (بقيادة المهندس كريم العسال) هو مجتمع سكني فاخر يقع في أرقى أحياء R7 بالعاصمة الإدارية الجديدة. يتميز المشروع بتصميمات معمارية مستوحاة من الفنون العصرية، ويقدم وحدات جاهزة للاستلام (RTM) بمقدم 0%، مع كلوب هاوس ممتد على مساحة 24 فداناً، ولاجون قابل للسباحة، ومنطقة تجارية مكونة من 4 مبانٍ، وأنظمة سداد تصل إلى 10 سنوات.",
  features: [
    "Prime strategic location in the prestigious R7 district of the New Capital",
    "Developed by Misr Italia Properties (Karim El Assal)",
    "Ready to Move (RTM) units available immediately",
    "Exclusive 0% down payment plan available",
    "Artistic boutique compound design with low-density residential zoning",
    "Flexible installment structures spanning 6 or 10 years"
  ],
  amenities: [
    "24-Acre Massive Clubhouse",
    "Swimmable Lagoons & Water Features",
    "4-Building Commercial Strip & Retail Promenade",
    "Community Center",
    "Boutique Hotel",
    "Nursery & Kids Educational Facilities",
    "24/7 Gated Security & Surveillance"
  ],
  deliveryDate: "Ready To Move (RTM)",
  downPayment: "0%",
  installmentYears: "6 or 10 Years",
  status: "ready-to-move"
},


{
  id: "p22",
  title: "Crysta",
  titleAr: "كريستا",
  developer: "Mountain View (DMG)",
  developerId: "mountain-view",
  image: "https://example.com/images/crysta-main.jpg",
  images: [
    "https://example.com/images/crysta-1.jpg",
    "https://example.com/images/crysta-2.jpg",
    "https://example.com/images/crysta-3.jpg"
  ],
  location: "Kilo 123, Sidi Abdel Rahman, North Coast",
  locationAr: "الكيلو 123 - سيدي عبد الرحمن - الساحل الشمالي",
  type: "Coastal Resort",
  priceFrom: "On Hold",
  area: "On Hold",
  unitTypes: [
    "On Hold"
  ],
  description: "Crysta is a high-end coastal project by Mountain View located at Kilo 123 in the highly coveted Sidi Abdel Rahman bay. Highlighted by crystal clear lagoons, luxury international hotel hospitality, and quick delivery timelines within 2 years, Crysta offers signature Mountain View architecture on the Mediterranean shore.",
  descriptionAr: "مشروع كريستا هو أحدث الوجهات الساحلية من شركة ماونتن فيو، ويقع عند الكيلو 123 بمنطقة سيدي عبد الرحمن الشهيرة بالساحل الشمالي. يمتاز المشروع بوجود كريستال لاجونز وسلسلة فنادق عالمية فاخرة، إضافة إلى الاستلام السريع خلال سنتين مع توفير أسلوب الحياة المميز لمشاريع ماونتن فيو.",
  features: [
    "Prime beachfront positioning at Kilo 123 in Sidi Abdel Rahman",
    "Developed by industry leader Mountain View (DMG)",
    "Early delivery timeline within 2 years",
    "Stunning crystal lagoon access throughout the development",
    "World-class international hotel hospitality integration"
  ],
  amenities: [
    "Crystal Lagoons",
    "International Luxury Hotels",
    "Multiple Clubhouses",
    "Commercial & Dining Hub",
    "Swimming Pools & Water Sports",
    "24/7 Gated Security"
  ],
  deliveryDate: "2 Years",
  downPayment: "10%",
  installmentYears: "On Hold",
  status: "on-hold"
},


{
  id: "p23",
  title: "Aliva",
  titleAr: "أليفا",
  developer: "Mountain View (DMG)",
  developerId: "mountain-view",
  image: "https://example.com/images/aliva-main.jpg",
  images: [
    "https://example.com/images/aliva-1.jpg",
    "https://example.com/images/aliva-2.jpg",
    "https://example.com/images/aliva-3.jpg"
  ],
  location: "Mostakbal City",
  locationAr: "مستقبل سيتي",
  type: "Integrated Residential City",
  priceFrom: "13,342,000 EGP",
  area: "130 sqm+",
  unitTypes: [
    "2 Bedrooms",
    "3 Bedrooms",
    "iVilla",
    "Townhouses",
    "Twin Houses",
    "Standalone Villas"
  ],
  description: "Aliva is Mountain View's largest mega-city in Mostakbal City, centered on experiential living and vibrant community hubs. Featuring diverse phases offering both Fully Finished (F.F) and Core & Shell options, Aliva stands out with its ultra-long 12-year payment plan starting with an exceptional 1.5% down payment.",
  descriptionAr: "مشروع أليفا هو أضخم مجتمع سكني من شركة ماونتن فيو في قلب مستقبل سيتي، والمبني على مفهوم التفاعل وتعدد التجارب السكنية. يضم المشروع مراحل متنوعة تتراوح بين التشطيب الكامل (Fully Finished) وبدون تشطيب (Core & Shell)، ويتميز بخطة سداد ممتدة حتى 12 سنة بمقدم يبدأ من 1.5% فقط.",
  features: [
    "Mega residential city development in prime Mostakbal City",
    "Developed by industry leader Mountain View (DMG)",
    "Diverse phases offering both Fully Finished and Core & Shell units",
    "Ultra-long flexible payment schedule spanning up to 12 years",
    "Low barrier to entry with a 1.5% initial down payment structure"
  ],
  amenities: [
    "Multiple Concept Clubhouses",
    "Fully Finished & Shell Options",
    "Commercial & Retail Parks",
    "Central Park & Experiential Zones",
    "Sports & Wellness Facilities",
    "24/7 Gated Security & Smart Access"
  ],
  deliveryDate: "4 Years",
  downPayment: "1.5% (+ 1.5% structure)",
  installmentYears: "12 Years",
  status: "selling-fast"
},


{
  id: "p24",
  title: "MV iCity New Cairo",
  titleAr: "ماونتن فيو آي سيتي القاهرة الجديدة",
  developer: "Mountain View (DMG)",
  developerId: "mountain-view",
  image: "https://example.com/images/mv-icity-main.jpg",
  images: [
    "https://example.com/images/mv-icity-1.jpg",
    "https://example.com/images/mv-icity-2.jpg",
    "https://example.com/images/mv-icity-3.jpg"
  ],
  location: "Directly on Middle Ring Road, Adjacent to Palm Hills New Cairo (PHNC)",
  locationAr: "مباشرة على الطريق الدائري الأوسطي - ملاصق لكمبوند بالم هيلز القاهرة الجديدة",
  type: "Fully Integrated Smart City",
  priceFrom: "15,593,000 EGP",
  area: "140 sqm+",
  unitTypes: [
    "Garden Apartments",
    "iVilla Roof",
    "Standalone Villas",
    "Palaces"
  ],
  description: "MV iCity New Cairo by Mountain View is a flagship, fully inhabited, and thriving mega-city strategically located right on the Middle Ring Road, sharing borders with Palm Hills New Cairo. Offering Ready-To-Move (RTM) inventory with immediate/near delivery, it features 4-tiered innovative urban zoning, underground parking networks, and flexible payment plans up to 9 years with a 10% down payment.",
  descriptionAr: "مشروع ماونتن فيو آي سيتي القاهرة الجديدة هو مجتمع سكني متكامل حي ومأهول بالكامل، يقع بموقع استراتيجي فريد على الطريق الدائري الأوسطي مباشرة بجوار بالم هيلز. يمنح المشروع فرصة استلام فوري/قريب (RTM) في كمبوند يعتمد على نظام الطرق المبتكرة تحت الأرض مع توفير أعلى معدلات الأمان، وبخطط سداد تصل إلى 9 سنوات بمقدم 10%.",
  features: [
    "Prime accessibility directly on the Middle Ring Road, adjacent to Palm Hills New Cairo",
    "Developed by industry leader Mountain View (DMG)",
    "Thriving, fully vibrant, and inhabited compound (مشروع عالي الإشغال والسكن)",
    "Ready to Move (RTM) / immediate delivery units available",
    "Innovative 4-tiered masterplan separating cars from pedestrian areas",
    "Extended installment terms up to 8 or 9 years with only 10% down payment"
  ],
  amenities: [
    "Exclusive Clubhouses",
    "Underground Parking Network",
    "Central Park & Green Sports Parks",
    "Commercial & Dining Hubs",
    "Jogging & Cycling Tracks",
    "24/7 Gated Security & Smart Surveillance"
  ],
  deliveryDate: "Ready To Move (RTM)",
  downPayment: "10%",
  installmentYears: "8 or 9 Years",
  status: "ready-to-move"
},


{
  id: "p25",
  title: "Creek View",
  titleAr: "كريك فيو",
  developer: "Mountain View (DMG)",
  developerId: "mountain-view",
  image: "https://example.com/images/creek-view-main.jpg",
  images: [
    "https://example.com/images/creek-view-1.jpg",
    "https://example.com/images/creek-view-2.jpg",
    "https://example.com/images/creek-view-3.jpg"
  ],
  location: "5th Settlement, New Cairo (Adjacent to Hyde Park)",
  locationAr: "التجمع الخامس - القاهرة الجديدة (بجوار هايد بارك)",
  type: "Residential Community",
  priceFrom: "6,791,000 EGP",
  area: "70 sqm+",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "iVilla"
  ],
  description: "Creek View is an accessible entry-point project by Mountain View situated in the heart of the 5th Settlement, right next to Hyde Park. Notable for offering highly competitive meter pricing in a prime New Cairo location, it provides flexible living spaces ranging from 1-bedroom apartments to iVillas with low 5% down payment options extending up to 10 years.",
  descriptionAr: "مشروع كريك فيو من ماونتن فيو يقع في قلب التجمع الخامس بجوار هايد بارك مباشرة. يتميز المشروع بتقديم أسباب استثمارية وسكنية قوية عبر سعر متر تنافسي جداً لموقعه الحيوي، مع تنوع في الوحدات بدءاً من غرفة واحدة وحتى الـ iVilla بمقدم 5% وأنظمة سداد تصل إلى 10 سنوات.",
  features: [
    "Strategic location in 5th Settlement, right next to Hyde Park",
    "Developed by industry leader Mountain View (DMG)",
    "Highly competitive square-meter pricing for central New Cairo",
    "Compact & versatile unit layouts starting from 70 sqm",
    "Low 5% entry down payment with flexible long-term plans"
  ],
  amenities: [
    "Clubhouse",
    "Extensive Landscape & Greenery",
    "Walking & Cycling Paths",
    "Commercial Units & Retail Facilities",
    "24/7 Gated Security & Gated Entrance"
  ],
  deliveryDate: "4 Years",
  downPayment: "5%",
  installmentYears: "6, 8, or 10 Years",
  status: "selling-fast"
},


{
  id: "p26",
  title: "GAIA",
  titleAr: "جايا",
  developer: "Al Ahly Sabbour Developments",
  developerId: "al-ahly-sabbour",
  image: "https://example.com/images/gaia-main.jpg",
  images: [
    "https://example.com/images/gaia-1.jpg",
    "https://example.com/images/gaia-2.jpg",
    "https://example.com/images/gaia-3.jpg"
  ],
  location: "Kilo 193, Ras El Hekma, North Coast",
  locationAr: "الكيلو 193 - رأس الحكمة - الساحل الشمالي",
  type: "Coastal Resort & Beachfront Compound",
  priceFrom: "22,000,000 EGP",
  area: "182 sqm+",
  unitTypes: [
    "Duplex",
    "Townhouses",
    "Standalone Villas"
  ],
  description: "GAIA North Coast by Al Ahly Sabbour is a premier coastal destination situated at Kilo 193 in the prestigious Ras El Hekma bay. Renowned for its avant-garde architectural design, direct Mediterranean sea views, and attractive ticket pricing, GAIA offers quick delivery within 1 year alongside full hospitality services and an 8-year payment plan with only 5% down payment.",
  descriptionAr: "قرية جايا الساحل الشمالي من شركة الأهلي صبور للتطوير العقاري تقع في الكيلو 193 بقلب خليج رأس الحكمة. تشتهر بتصاميمها المعمارية العصرية المبتكرة وإطلالاتها المباشرة على البحر مع أسعار افتتاحية ممتازة، وتوفر استلاماً سريعاً خلال سنة واحدة فقط مع خدمات الفندقة الكاملة ونظام سداد يصل إلى 8 سنوات بمقدم 5%.",
  features: [
    "Prime beachfront positioning at Kilo 193 in Ras El Hekma Bay",
    "Developed by leading developer Al Ahly Sabbour",
    "Distinctive architectural layout with direct Mediterranean water access",
    "Competitive ticket pricing for prime Ras El Hekma real estate",
    "Fast delivery timeframe within 1 year",
    "Flexible 8-year installment scheme starting with a 5% down payment"
  ],
  amenities: [
    "Serviced Apartments & Hospitality Units",
    "Beachfront Clubhouse",
    "Swimming Pools & Water Features",
    "Commercial & Dining Outlets",
    "24/7 Gated Security & Resort Services"
  ],
  deliveryDate: "1 Year",
  downPayment: "5%",
  installmentYears: "8 Years",
  status: "selling-fast"
},

{
  id: "p27",
  title: "At East",
  titleAr: "أت إيست",
  developer: "Al Ahly Sabbour Developments",
  developerId: "al-ahly-sabbour",
  image: "https://example.com/images/at-east-main.jpg",
  images: [
    "https://example.com/images/at-east-1.jpg",
    "https://example.com/images/at-east-2.jpg",
    "https://example.com/images/at-east-3.jpg"
  ],
  location: "New Cairo",
  locationAr: "القاهرة الجديدة",
  type: "Residential Community & Mixed-Use Development",
  priceFrom: "5,000,000 EGP",
  area: "65 sqm+",
  unitTypes: [
    "Apartments",
    "Townhouses",
    "Twin Houses",
    "One-Story Standalone Villas"
  ],
  description: "At East is a versatile residential community developed by Al Ahly Sabbour in a highly strategic New Cairo location. Offering an accessible entry price point starting at 5 million EGP, the project features diverse options ranging from efficient 65 sqm apartments to exclusive single-story standalone villas. Supported by an 8-year payment scheme with a 5% down payment and essential daily life amenities.",
  descriptionAr: "مشروع أت إيست من شركة الأهلي صبور يقع في موقع استراتيجي بقلب القاهرة الجديدة. يقدم المشروع فرصة ممتازة بأسعار تبدأ من 5 ملايين جنيه وتنوع كبير في المساحات من الشقق بـ 65 متر مربع وحتى الفيلات الخصوصية من دور واحد (One-Story Standalone)، مع تسهيلات سداد تمتد إلى 8 سنوات ومقدم 5% فقط مع توافر جميع الخدمات الأساسية والتجارية.",
  features: [
    "Strategic location within central New Cairo",
    "Developed by leading developer Al Ahly Sabbour",
    "Accessible entry ticket price starting from 5 Million EGP",
    "Diverse layout options including rare single-story standalone villas",
    "Flexible 8-year payment schedule with a low 5% down payment"
  ],
  amenities: [
    "Clubhouse",
    "Commercial Strip & Retail Outlets",
    "Supermarket",
    "Mosque",
    "Landscaped Green Zones",
    "24/7 Gated Security & Controlled Access"
  ],
  deliveryDate: "4 Years",
  downPayment: "5%",
  installmentYears: "8 Years",
  status: "selling-fast"
},

{
  id: "p28",
  title: "The Morning",
  titleAr: "ذا مورنينج",
  developer: "Al Ahly Sabbour Developments",
  developerId: "al-ahly-sabbour",
  image: "https://example.com/images/the-morning-main.jpg",
  images: [
    "https://example.com/images/the-morning-1.jpg",
    "https://example.com/images/the-morning-2.jpg",
    "https://example.com/images/the-morning-3.jpg"
  ],
  location: "Al Yasmine Neighborhood, New Cairo",
  locationAr: "حي الياسمين - القاهرة الجديدة",
  type: "Mixed-Use Development (Residential & Commercial)",
  priceFrom: "4,700,000 EGP",
  area: "50 sqm+",
  unitTypes: [
    "Apartments",
    "Administrative Offices",
    "Medical Clinics"
  ],
  description: "The Morning by Al Ahly Sabbour is a boutique mixed-use project strategically situated in the well-established Al Yasmine neighborhood of New Cairo. Offering compact, high-efficiency spaces starting from 50 sqm for residential, office, and medical use, it is highlighted by proximity to Manchester School and wellness-focused amenities. Available with a low 5% down payment and 8-year payment plans.",
  descriptionAr: "مشروع ذا مورنينج من شركة الأهلي صبور هو مجتمع متعدد الاستخدامات يقع بموقع استراتيجي مميز في حي الياسمين بالقاهرة الجديدة. يضم المشروع شققاً سكنية ومكاتب إدارية وعيادات طبية بمساحات تبدأ من 50 متراً مربعاً، ويتميز بقربه من مدرسة مانشستر وتوفير مرافق مخصصة للاسترخاء واللياقة البدنية، مع خطة سداد على 8 سنوات ومقدم 5% فقط.",
  features: [
    "Prime strategic positioning in Al Yasmine district, New Cairo",
    "Developed by leading developer Al Ahly Sabbour",
    "Adjacent to prestigious educational institution (Manchester School)",
    "Versatile mixed-use inventory: Residential, Administrative, and Medical clinics",
    "Highly accessible starting price point at 4.7M EGP for 50 sqm units",
    "Flexible 8-year installment schedule with a low 5% down payment"
  ],
  amenities: [
    "Yoga Lawn & Meditation Zones",
    "Outdoor Fitness & Gym",
    "Commercial & Retail Outlets",
    "Professional Administrative & Medical Hub",
    "24/7 Gated Security & Property Management"
  ],
  deliveryDate: "4 Years",
  downPayment: "5%",
  installmentYears: "8 Years",
  status: "selling-fast"
},

{
  id: "p29",
  title: "June",
  titleAr: "جون",
  developer: "SODIC",
  developerId: "sodic",
  image: "https://example.com/images/june-main.jpg",
  images: [
    "https://example.com/images/june-1.jpg",
    "https://example.com/images/june-2.jpg",
    "https://example.com/images/june-3.jpg"
  ],
  location: "Kilo 193, Ras El Hekma, North Coast",
  locationAr: "الكيلو 193 - رأس الحكمة - الساحل الشمالي",
  type: "Coastal Resort & Beachfront Compound",
  priceFrom: "19,000,000 EGP",
  area: "102 sqm+",
  unitTypes: [
    "2-Bedroom Lofts",
    "Twin Houses",
    "Standalone Villas"
  ],
  description: "June by SODIC is an Miami-inspired coastal community located at Kilo 193 in Ras El Hekma. Known for high build quality, prime location, and top-tier operational management, all units come fully finished with air conditioning installed. The project features a pristine sandy beach, 25 acres of lagoons and swimming pools, with options for Ready-To-Move (RTM) or 2-year delivery, and payment plans extending up to 10 years.",
  descriptionAr: "مشروع جون من شركة سوديك هو مجتمع ساحلي فاخر بتصميم مستوحى من طراز مايامي، يقع في الكيلو 193 بقلب رأس الحكمة. يتميز بجودة تنفيذ عالية، موقع ممتاز، وإدارة تشغيلية على أعلى مستوى، وتسلم جميع الوحدات كاملة التشطيب بالتكييفات. يضم المشروع شاطئاً رملياً، و25 فداناً من اللاجونز وحمامات السباحة، مع خيارات استلام فوري (RTM) أو خلال سنتين، وأنظمة سداد تصل إلى 10 سنوات.",
  features: [
    "Prime beachfront positioning at Kilo 193 in Ras El Hekma",
    "Developed by premium developer SODIC",
    "High build quality and top-tier operational management",
    "Units delivered Fully Finished with ACs included",
    "Flexible payment options: 0% down payment over 8 years OR 5% down payment over 10 years",
    "Near-term delivery options available (RTM to 2 years)"
  ],
  amenities: [
    "Pristine Sandy Beach",
    "25 Acres of Lagoons & Swimming Pools",
    "Beachfront Clubhouse",
    "Commercial & Retail Outlets",
    "24/7 Gated Security & Property Management"
  ],
  deliveryDate: "RTM / 2 Years",
  downPayment: "0% or 5%",
  installmentYears: "8 or 10 Years",
  status: "selling-fast"
},

{
  id: "p30",
  title: "The Estates",
  titleAr: "ذا إستيتس",
  developer: "SODIC",
  developerId: "sodic",
  image: "https://example.com/images/the-estates-main.jpg",
  images: [
    "https://example.com/images/the-estates-1.jpg",
    "https://example.com/images/the-estates-2.jpg",
    "https://example.com/images/the-estates-3.jpg"
  ],
  location: "New Zayed",
  locationAr: "زايد الجديدة",
  type: "Ultra-Luxury Residential Compound",
  priceFrom: "58,000,000 EGP",
  area: "308 sqm+",
  unitTypes: [
    "Flat Villas",
    "Twin Houses",
    "Standalone Villas"
  ],
  description: "The Estates by SODIC is an ultra-luxury residential flagship compound situated in New Zayed. Renowned for its premium SODIC build quality, seamless operational management, and prime location, the project offers Ready-To-Move (RTM) high-end living. Units feature spacious layouts starting from 308 sqm, backed by comprehensive facility management, dedicated commercial and office zones, and an 8-year structured payment plan.",
  descriptionAr: "مشروع ذا إستيتس من شركة سوديك هو مجتمع سكني شديد الفخامة يقع في قلب زايد الجديدة. يشتهر بأسلوب ماستر بلان راقٍ، جودة بناء سوديك العالية، وإدارة تشغيلية ممتازة. يوفر المشروع وحدات جاهزة للاستلام (RTM) بمساحات كبيرة تبدأ من 308 أمتار مربعة، مع توافر خدمات إدارة المرافق المتقدمة، مناطق تجارية ومكاتب إدارية، ونظام سداد هيكلي ممتد على 8 سنوات.",
  features: [
    "Prime strategic positioning in upscale New Zayed",
    "Developed by top-tier developer SODIC",
    "Ready to Move (RTM) units for immediate high-end occupancy",
    "Exceptional build quality, design, and long-term operational execution",
    "Structured payment plan: 5% DP + 5% after 3 months + 8% after 9 months over 8 years"
  ],
  amenities: [
    "Luxury Clubhouse",
    "Commercial Strip & Retail Outlets",
    "Administrative & Office Spaces",
    "Comprehensive Facility Management Services",
    "Landscaped Parks & Water Features",
    "24/7 Gated Security & Smart Perimeter Protection"
  ],
  deliveryDate: "Ready To Move (RTM)",
  downPayment: "5% (+5% after 3m, +8% after 9m)",
  installmentYears: "8 Years",
  status: "ready-to-move"
},


{
  id: "p31",
  title: "Azha North Coast",
  titleAr: "أزها الساحل الشمالي",
  developer: "Madaar Developments",
  developerId: "madaar-developments",
  image: "https://example.com/images/azha-sahel-main.jpg",
  images: [
    "https://example.com/images/azha-sahel-1.jpg",
    "https://example.com/images/azha-sahel-2.jpg",
    "https://example.com/images/azha-sahel-3.jpg"
  ],
  location: "Kilo 214, Ras El Hekma, North Coast",
  locationAr: "الكيلو 214 - رأس الحكمة - الساحل الشمالي",
  type: "Luxury Coastal Resort",
  priceFrom: "12,000,000 EGP",
  area: "62 sqm+",
  unitTypes: [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "Townhouses",
    "Twin Houses",
    "Standalone Villas"
  ],
  description: "Azha North Coast by Madaar Developments (founded by Hossam El Shaer) is a flagship resort spread across a masterfully planned coastal site at Kilo 214. Built on elevated tiered terraces to ensure uninterrupted views of the sea and lagoons, the project features an 800-meter private sandy beachfront, 45 acres of Crystal Lagoons, a 5-star seafront hotel, and a private marina. All units are delivered fully finished with ACs and kitchen cabinets.",
  descriptionAr: "قرية أزها الساحل الشمالي من شركة مدار للتطوير العقاري (تأسيس حسام الشاعر) هي مجتمع ساحلي فاخر يقع عند الكيلو 214. صُمم المشروع على مصاطب متدرجة لضمان إطلالات مباشرة ومفتوحة على البحر واللاجون، ويتميز بشاطئ رملي خاص بعرض 800 متر، و45 فداناً من الكريستال لاجونز، وفندق 5 نجوم على البحر مباشرة، ومارينا خاصة. تُسلم جميع الوحدات كاملة التشطيب بالتكييفات وخزائن المطبخ.",
  features: [
    "Prime Ras El Hekma positioning at Kilo 214",
    "Developed by Madaar Developments (Hossam El Shaer)",
    "800-meter private beachfront with natural sandy access",
    "Elevated tiered terraces ensuring panoramic sea and lagoon views for units",
    "Fully finished delivery complete with ACs and kitchen cabinets",
    "Delivery windows within 2 to 4 years"
  ],
  amenities: [
    "45 Acres of Crystal Lagoons",
    "800m Private Sandy Beach",
    "5-Star Seafront Hotel",
    "Private Marina",
    "Lagoon Clubhouses",
    "Sports Club & Courts",
    "Commercial Strip & Retail Promenade",
    "24/7 Gated Security & Resort Services"
  ],
  deliveryDate: "2 to 4 Years",
  downPayment: "5%",
  installmentYears: "8 to 10 Years",
  status: "selling-fast"
},

{
  id: "p32",
  title: "Azha Ain Sokhna",
  titleAr: "أزها العين السخنة",
  developer: "Madaar Developments",
  developerId: "madaar-developments",
  image: "https://example.com/images/azha-sokhna-main.jpg",
  images: [
    "https://example.com/images/azha-sokhna-1.jpg",
    "https://example.com/images/azha-sokhna-2.jpg",
    "https://example.com/images/azha-sokhna-3.jpg"
  ],
  location: "Kilo 126, Ain Sokhna (11 km from Sokhna Toll Gates)",
  locationAr: "الكيلو 126 - العين السخنة (على بعد 11 كم من البوابات)",
  type: "Luxury Waterfront Resort",
  priceFrom: "40,000,000 EGP",
  area: "312 sqm+",
  unitTypes: [
    "Standalone Villas"
  ],
  description: "Azha Ain Sokhna by Madaar Developments is a premier year-round luxury coastal destination master-planned by world-renowned Barton Willmore. Situated just 11 km from the Sokhna gates, the resort offers expansive standalone villas with a 700-meter sandy beach, 150 acres of swimmable Crystal Lagoons, 5-star hotels including the Tanoak Hotel, and the vibrant Downtown Azha commercial hub. All units are handed over fully finished with ACs and kitchen cabinets.",
  descriptionAr: "مشروع أزها العين السخنة من شركة مدار للتطوير العقاري هو منتجع ساحلي فاخر يعمل طوال العام، تم تخطيطه بواسطة مكتب التخطيط العالمي بارتون ويلمور. يقع على بعد 11 كم فقط من بوابات السخنة، ويوفر فيلات مستقلة فاخرة مع شاطئ رملي بطول 700 متر، و150 فداناً من الكريستال لاجونز القابلة للسباحة، وفنادق 5 نجوم من بينها فندق تانووك (Tanoak)، بالإضافة إلى منطقة داون تاون أزها التجارية. تسلم جميع الوحدات تشطيب كامل بالتكييفات وخزائن المطبخ.",
  features: [
    "Master-planned by international urban designers Barton Willmore",
    "Prime accessibility: Kilo 126 and only 11 km from Sokhna Toll Gates",
    "Developed by top developer Madaar Developments (Hossam El Shaer)",
    "700-meter pristine natural sandy beachfront",
    "Units delivered Fully Finished complete with ACs and kitchen cabinets",
    "Structured payment plan: 5% DP + 5% after 6 months over 9 years"
  ],
  amenities: [
    "150 Acres of Swimmable Crystal Lagoons",
    "700m Pristine Sandy Beach",
    "5-Star Hotels (Including Tanoak Hotel)",
    "Downtown Azha Commercial & Retail Hub",
    "Multiple Community Clubhouses",
    "Central Park & Green Open Spaces",
    "24/7 Gated Security & Resort Services"
  ],
  deliveryDate: "3 Years",
  downPayment: "5% (+5% after 6 months)",
  installmentYears: "9 Years",
  status: "selling-fast"
},

{
  id: "p33",
  title: "Hacienda Ras El Hekma",
  titleAr: "هاسيندا رأس الحكمة",
  developer: "Palm Hills Developments",
  developerId: "palm-hills",
  image: "https://example.com/images/hacienda-ras-el-hekma-main.jpg",
  images: [
    "https://example.com/images/hacienda-ras-el-hekma-1.jpg",
    "https://example.com/images/hacienda-ras-el-hekma-2.jpg",
    "https://example.com/images/hacienda-ras-el-hekma-3.jpg"
  ],
  location: "Kilo 240, Ras El Hekma, North Coast",
  locationAr: "الكيلو 240 - رأس الحكمة - الساحل الشمالي",
  type: "Mega Coastal Resort & Beachfront City",
  priceFrom: "11,736,000 EGP",
  area: "65 sqm+",
  unitTypes: [
    "1 Bedroom Chalets",
    "2 Bedroom Chalets",
    "3 Bedroom Chalets",
    "Beach Houses",
    "Twin Houses",
    "Standalone Villas"
  ],
  description: "Hacienda Ras El Hekma by Palm Hills Developments is a flagship coastal mega-project located at Kilo 240 in Ras El Hekma. Spanning a massive 4,800-meter beachfront footprint, the resort features 5 international luxury hotels, an international marina, swimmable lagoons, and multiple community clubhouses. Designed as a fully integrated seaside destination, it offers flexible living units starting from 65 sqm with 10-year installment options.",
  descriptionAr: "مشروع هاسيندا رأس الحكمة من شركة بالم هيلز للتعمير هو مدينة ساحلية فاخرة تقع في الكيلو 240 بمنطقة رأس الحكمة. يتميز المشروع بواجهة شاطئية ضخمة تمتد بطول 4800 متر، ويضم 5 فنادق عالمية، مارينا دولية، بحيرات كريستالية قابلة للسباحة، وأندية اجتماعية متعددة (Clubhouses). يقدم المشروع تنوعاً واسعاً في الوحدات تبدأ من 65 متراً مربعاً مع أنظمة سداد ممتدة حتى 10 سنوات.",
  features: [
    "Prime Ras El Hekma location at Kilo 240",
    "Developed by top-tier developer Palm Hills Developments",
    "Massive 4,800-meter beachfront coastline",
    "Includes 5 international luxury hospitality brands and hotels",
    "World-class international marina for yachts and watercraft",
    "Long-term payment structure: 10% down payment with installments up to 10 years"
  ],
  amenities: [
    "4,800m Sandy Beachfront",
    "International Marina",
    "5 International Hotels",
    "Swimmable Lagoons & Swimming Pools",
    "Multiple Beach & Community Clubhouses",
    "Commercial Outlets & Promenade",
    "24/7 Resort Security & Integrated Facility Services"
  ],
  deliveryDate: "4 Years",
  downPayment: "10%",
  installmentYears: "10 Years",
  status: "selling-fast"
},

{
  id: "p34",
  title: "The Crown",
  titleAr: "ذا كراون",
  developer: "Palm Hills Developments",
  developerId: "palm-hills",
  image: "https://example.com/images/the-crown-main.jpg",
  images: [
    "https://example.com/images/the-crown-1.jpg",
    "https://example.com/images/the-crown-2.jpg",
    "https://example.com/images/the-crown-3.jpg"
  ],
  location: "Palm Hills Plateau, 6th of October City",
  locationAr: "هضبة بالم هيلز - مدينة 6 أكتوبر",
  type: "Boutique Luxury Villa Compound",
  priceFrom: "29,480,000 EGP",
  area: "212 sqm+",
  unitTypes: [
    "Family Houses",
    "Standalone Villas"
  ],
  description: "The Crown by Palm Hills Developments is an exclusive villa-only residential compound situated at the prestigious Palm Hills Plateau in 6th of October City. Designed with a low-density community blueprint to ensure maximum privacy and tranquil landscapes, the project features spacious family houses and standalone villas starting from 212 sqm, complemented by luxury clubhouses and an 8-year payment plan.",
  descriptionAr: "مشروع ذا كراون من شركة بالم هيلز للتعمير هو مجتمع سكني حصري يقتصر على الفيلات فقط، يقع على هضبة بالم هيلز الشهيرة بمدينة 6 أكتوبر. صُمم المشروع بكثافة سكانية منخفضة لضمان الخصوصية التامة والهدوء وسط المساحات الخضراء، ويضم بيوتاً عائلية (Family Houses) وفيلات مستقلة بمساحات تبدأ من 212 متراً مربعاً، مع توفر أندية اجتماعية وخطة سداد ممتدة على 8 سنوات.",
  features: [
    "Prestigious positioning on the iconic Palm Hills Plateau",
    "Developed by leading developer Palm Hills Developments",
    "Exclusive villa-only community ensuring ultra-low density and high privacy",
    "Spacious Family House layouts starting at 212 sqm",
    "Structured payment plan: 5% DP + 5% follow-up over 8 years"
  ],
  amenities: [
    "Exclusive Community Clubhouses",
    "Landscaped Gardens & Green Ribbons",
    "Sports Courts & Recreational Facilities",
    "Commercial & Dining Hub",
    "24/7 Gated Security & Smart Access Control"
  ],
  deliveryDate: "4 Years",
  downPayment: "5% (+5% follow-up)",
  installmentYears: "8 Years",
  status: "selling-fast"
},


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
  { icon: "mail", label: "Email Us", value: "inquires@everscopes.com", href: "mailto:inquires@everscopes.com" },
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

// ===== MODAL FUNCTIONS =====

function openModal(projectId) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return;
  
  const dev = developers.find(d => d.id === p.developerId);
  const title = currentLang === "ar" ? p.titleAr : p.title;
  const loc = currentLang === "ar" ? p.locationAr : p.location;
  const desc = currentLang === "ar" ? p.descriptionAr : p.description;
  const t = i18n[currentLang];

  // كود معرض الصور المصغرة
  const galleryHtml = (p.images && p.images.length > 1) ? `
    <div class="modal-gallery">
      ${p.images.map((img, i) => `
        <div class="modal-gallery-item ${i === 0 ? 'active' : ''}" onclick="switchModalImage('${img}', this)">
          <img src="${img}" alt="${title} ${i+1}" loading="lazy">
        </div>
      `).join("")}
    </div>` : "";

  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <button class="modal-close" onclick="closeModal()">${SVG.x}</button>
    <div class="modal-hero">
      <!-- 🌟 تم إضافة id="modalMainImg" هنا حتى تتمكن الدالة من استهدافه وتغييره 🌟 -->
      <img id="modalMainImg" src="${p.image || p.images[0]}" alt="${title}">
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

// دالة تبديل الصورة المكبرة عند الضغط على الصورة المصغرة
function switchModalImage(imgSrc, thumbnailElement) {
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) {
    mainImg.src = imgSrc;
  }

  // تمييز العنصر المختار بـ Active Class
  const allThumbnails = document.querySelectorAll('.modal-gallery-item');
  allThumbnails.forEach(item => item.classList.remove('active'));
  
  if (thumbnailElement) {
    thumbnailElement.classList.add('active');
  }
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
 // Contact form
  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // 1. Capture the data and use .trim() to remove empty spaces
      const formData = {
        "Name": document.getElementById("contactName").value.trim(),
        "Phone": document.getElementById("contactPhone").value.trim(),
        "Email": document.getElementById("contactEmail").value.trim(),
        "Interest": document.getElementById("contactInterest").value.trim(),
        "Message": document.getElementById("contactMessage").value.trim()
      };

      // 2. VALIDATION CHECK: Make sure no field is empty
      if (!formData.Name || !formData.Phone || !formData.Email || !formData.Interest || !formData.Message) {
        alert("Please fill out all the fields before sending your message.");
        return; // This completely stops the form from submitting
      }

      // 3. Briefly change the button to show it is processing
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = "Sending...";
      submitBtn.disabled = true;

      // 4. Your actual SheetDB API link
      const GOOGLE_SHEETS_API_URL = "https://sheetdb.io/api/v1/c9jwfmnay9u6v"; 

      // 5. Send the data to your API
      fetch(GOOGLE_SHEETS_API_URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: [formData] })
      })
      .then(response => response.json())
      .then(data => {
        // 6. Show your existing success animation
        const wrap = document.getElementById("contactFormWrap");
        wrap.innerHTML = `
          <div class="form-success">
            <div class="form-success-icon">${SVG.check}</div>
            <h3 class="form-success-title">${i18n[currentLang].contact_success_title}</h3>
            <p class="form-success-text">${i18n[currentLang].contact_success_text}</p>
          </div>`;
        setTimeout(() => location.reload(), 4000);
      })
      .catch(error => {
        // Handle failure by reverting the button so they can try again
        console.error("API Error: ", error);
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        alert("Something went wrong. Please try again.");
      });
    });
  }

  // Careers form
  // Careers form
  const careersForm = document.getElementById("careersForm");
  if (careersForm) {
    careersForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // 1. Capture the data and use .trim() to clean up blank spaces
      const formData = {
        "Name": document.getElementById("careerName").value.trim(),
        "Phone": document.getElementById("careerPhone").value.trim(),
        "Position": document.getElementById("careerPosition").value.trim(),
        "Email": document.getElementById("careerEmail").value.trim(),
        "Experience": document.getElementById("careerExp").value.trim(),
        "Notes": document.getElementById("careerNotes").value.trim()
      };

      // 2. VALIDATION: Ensure the required fields (*) are filled
      if (!formData.Name || !formData.Phone || !formData.Position || !formData.Email) {
        alert("Please fill out all the required fields (*) before submitting your application.");
        return; 
      }

      // 3. Briefly change the button to show it is processing
      const submitBtn = careersForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = "Submitting...";
      submitBtn.disabled = true;

      // 4. Your specific SheetDB API link for Careers
      const CAREERS_API_URL = "https://sheetdb.io/api/v1/pmolnuf3gwlsg"; 

      // 5. Send the data to your API
      fetch(CAREERS_API_URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        // Wrap the payload in a "data" array as required by SheetDB
        body: JSON.stringify({ data: [formData] })
      })
      .then(response => response.json())
      .then(data => {
        // 6. Show your existing success animation
        const wrap = document.getElementById("careersFormWrap");
        wrap.innerHTML = `
          <div class="careers-form-success">
            <div class="careers-success-icon">${SVG.check}</div>
            <h4 class="careers-success-title">${i18n[currentLang].career_success_title}</h4>
            <p class="careers-success-text">${i18n[currentLang].career_success_text}</p>
          </div>`;
        setTimeout(() => location.reload(), 4000);
      })
      .catch(error => {
        // Handle failure by reverting the button so they can try again
        console.error("API Error: ", error);
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        alert("Something went wrong. Please try again.");
      });
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





























