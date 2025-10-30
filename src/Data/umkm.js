const UMKM = {
  id: String,
  name: String,
  category: String,
  description: String,
  address: String,
  phone: String,
  images: Array,
  location: {
    lat: Number,
    lng: Number,
  },
  rating: Number,
  priceRange: String
};

const categories = [
  "Semua",
  "Kuliner",
  "Kost",
  "Jasa",
  "Toko Kelontong",
  "Kerajinan"
];

const umkmData = [
  {
    id: "1",
    name: "Mampir Angkringan Yuk",
    category: "Kedai Kopi",
    description: "Kopi lokal dengan cita rasa authentic dan suasana yang nyaman untuk nongkrong. Menggunakan biji kopi pilihan dari petani lokal dengan teknik seduh manual yang menjaga kualitas rasa.",
    address: "Jl. Mulawarman Tim. No.34, Kramas, Kec. Tembalang, Kota Semarang, Jawa Tengah 50278",
    phone: "0897-7995-274",
    images: [
      "/src/assets/Toko_1/Toko_1-1.jpg",
      "/src/assets/Toko_1/Toko_1-2.jpg"
    ],
    location: {
      lat: -7.067943719679567,
      lng: 110.44110827492295
    },
    rating: 4.4,
    priceRange: "Rp 1.500 - Rp 20.000"
  },
  {
    id: "2",
    name: "Burjo SS",
    category: "Makanan",
    description: "Bakso dengan resep turun temurun yang sudah berdiri sejak 1985. Kuah kaldu sapi yang kaya rasa dan bakso yang kenyal menjadi favorit warga sekitar.",
    address: "Jl. Gondang Raya, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 55712",
    phone: "0821-9876-5432",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -7.062236486526275,
      lng: 110.44109570885428
    },
    rating: 4.6,
    priceRange: "Rp 1.000 - Rp 25.000"
  },
  {
    id: "3",
    name: "Penyet Bu Nur",
    category: "Makanan",
    description: "Salon kecantikan dengan layanan lengkap mulai dari potong rambut, creambath, hingga treatment wajah. Didukung oleh tenaga profesional berpengalaman.",
    address: "Jl. Mulawarman Utara Dalam II, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    phone: "0813-2844-8929",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -7.066817363154133,
      lng: 110.44042001807144
    },
    rating: 4.7,
    priceRange: "Rp 1.000 - Rp 25.000"
  },
  {
    id: "4",
    name: "Toko Rockstar",
    category: "Toko Kelontong",
    description: "Menjual berbagai macam batik dari seluruh nusantara dengan motif tradisional dan kontemporer. Tersedia batik tulis, cap, dan printing dengan harga bersahabat.",
    address: "Jl. Gerung No.25, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    phone: "0895-3094-2567",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -7.05693315773418,
      lng: 110.4434802733048
    },
    rating: 4.7,
    priceRange: "Rp 1.000 - Rp 100.000"
  },
  {
    id: "5",
    name: "Alfarizqy",
    category: "Toko Kelontong",
    description: "",
    address: "Jl. Kerajinan No. 23, Jakarta Timur",
    phone: "0822-3456-7891",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -6.2608,
      lng: 106.8844,
    },
    rating: 4.4,
    priceRange: "Rp 25.000 - Rp 200.000"
  },
  {
    id: "6",
    name: "Kost Venuar UNDIP Tembalang",
    category: "Kost",
    description: "",
    address: "Jl. Klentengsari Sel., Pedalangan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50268",
    phone: "0812-2506-0984",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -7.058554187823217,
      lng: 110.42415347946783
    },
    rating: 4.5,
    priceRange: "Rp 800.000 - Rp 1.300.000"
  },
  {
    id: "7",
    name: "Kost putri alesha",
    category: "Kost",
    description: "",
    address: "Jl. Gerungsari No.1/no.7, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    phone: "0878-9012-3456",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -7.056885352618713,
      lng: 110.44525598383011
    },
    rating: 4.8,
    priceRange: "Rp 800.000 - Rp 1.300.000"
  },
  {
    id: "8",
    name: "Bengkel Motor Jaya",
    category: "Jasa",
    description: "Bengkel motor terpercaya dengan mekanik berpengalaman lebih dari 15 tahun. Menyediakan servis rutin, ganti oli, dan perbaikan mesin dengan harga transparan.",
    address: "Jl. Teknik No. 90, Jakarta Barat",
    phone: "0819-1234-5678",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -6.1862,
      lng: 106.7987
    },
    rating: 4.7,
    priceRange: "Rp 30.000 - Rp 500.000"
  },
  {
    id: "9",
    name: "Distro Kaos Lokal Pride",
    category: "Fashion",
    description: "Distro yang menjual kaos dengan desain lokal keren dan berkualitas. Mendukung seniman lokal dengan menyediakan platform untuk karya mereka.",
    address: "Jl. Kreatif No. 45, Jakarta Pusat",
    phone: "0831-2345-6789",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -6.2145,
      lng: 106.8451,
    },
    rating: 4.6,
    priceRange: "Rp 75.000 - Rp 200.000"
  },
  {
    id: "10",
    name: "Keramik Handmade Cantik",
    category: "Kerajinan",
    description: "Produksi keramik handmade untuk dekorasi dan peralatan rumah tangga. Setiap produk dibuat dengan detail dan finishing berkualitas tinggi.",
    address: "Jl. Seni No. 12, Jakarta Timur",
    phone: "0842-3456-7890",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -6.2701,
      lng: 106.8967,
    },
    rating: 4.5,
    priceRange: "Rp 50.000 - Rp 400.000"
  },
  {
    id: "11",
    name: "Laundry Kilat Express",
    category: "Jasa",
    description: "Layanan laundry cepat dengan hasil bersih dan wangi. Tersedia layanan antar jemput gratis untuk area tertentu dengan minimal pemesanan.",
    address: "Jl. Bersih No. 78, Jakarta Selatan",
    phone: "0853-4567-8901",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -6.2897,
      lng: 106.7891,
    },
    rating: 4.8,
    priceRange: "Rp 5.000/kg - Rp 8.000/kg"
  },
  {
    id: "12",
    name: "Martabak Manis Spesial",
    category: "Makanan",
    description: "Martabak manis dengan topping berlimpah dan adonan yang lembut. Tersedia berbagai varian rasa dari cokelat, keju, hingga green tea.",
    address: "Jl. Manis No. 101, Jakarta Utara",
    phone: "0864-5678-9012",
    images: [
      "/src/assets/hero4.jpg",
      "/src/assets/hero4.jpg"
    ],
    location: {
      lat: -6.1521,
      lng: 106.8789,
    },
    rating: 4.7,
    priceRange: "Rp 25.000 - Rp 60.000"
  }
];

export { UMKM, categories, umkmData };
