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
  jamOperasional: String,
  priceRange: String
};

const categories = [
  "Semua",
  "Kuliner",
  "Kos",
  "Jasa",
  "Toko Kelontong",
];

// Helper to resolve asset URLs at build-time so they work in production
const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href;

const umkmData = [
  {
    id: "1",
    name: "Mampir Angkringan Yuk",
    category: "Kedai Kopi",
    description: "Sajian lengkap untuk setiap selera. Dari menu khas angkringan seperti aneka sate dan gorengan hangat, hingga hidangan utama seperti Nasi Telor, Soto, dan Ayam Geprek. Ditemani minuman segar, pas untuk santai kapan saja.",
    address: "Jl. Mulawarman Tim. No.34, Kramas, Kec. Tembalang, Kota Semarang, Jawa Tengah 50278",
    phone: "0897-7995-274",
    images: [
      asset('UMKM_1/Kuliner_1-1.jpg'),
      asset('UMKM_1/Kuliner_1-2.jpg')
    ],
    location: {
      lat: -7.067943719679567,
      lng: 110.44110827492295
    },
    rating: 4.4,
    jamOperasional: "16.00 am - 23.00 pm",
    priceRange: "Rp 1.500 - Rp 20.000"
  },
  {
    id: "2",
    name: "Burjo SS",
    category: "Makanan",
    description: "Spesialis nasi ayam! Cicipi Nasi Ayam Balap andalan kami, Nasi Ayam Bali yang kaya bumbu, dan masih banyak lagi nasi ayam berbagai rasa. Tersedia juga Nasi Telor favorit sepanjang masa. Lengkapi dengan minuman segar pilihan Anda. Buka 24 Jam!",
    address: "Jl. Gondang Raya, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 55712",
    phone: "0821-9876-5432",
    images: [
      asset('hero4.jpg'),
      asset('hero4.jpg')
    ],
    location: {
      lat: -7.062236486526275,
      lng: 110.44109570885428
    },
    rating: 4.6,
    jamOperasional: "24 Jam",
    priceRange: "Rp 1.000 - Rp 25.000"
  },
  {
    id: "3",
    name: "Penyet Bu Nur",
    category: "Makanan",
    description: "Penyet Bu Nur Spesialis penyetan dengan sambal khas! Nikmati Ayam, Lele, Telor, Tahu & Tempe Penyet. Jangan lewatkan menu andalan kami, Omlate Bakar yang unik! Tersedia juga gorengan hangat dan berbagai minuman segar.",
    address: "Jl. Mulawarman Utara Dalam II, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    phone: "0813-2844-8929",
    images: [
      asset('hero4.jpg'),
      asset('hero4.jpg')
    ],
    location: {
      lat: -7.066817363154133,
      lng: 110.44042001807144
    },
    rating: 4.7,
    jamOperasional: "07.00 am - 11.00 pm",
    priceRange: "Rp 1.000 - Rp 25.000"
  },
  {
    id: "4",
    name: "Warung Makan Mama Ros",
    category: "Kuliner",
    description: "Warung Makan Mama Ros adalah warung makan yang menyajikan berbagai macam makanan khas Semarang. Warung ini memiliki berbagai macam menu, mulai dari makanan ringan, makanan berat, hingga minuman segar. Warung ini juga memiliki berbagai macam layanan, seperti layanan antar, layanan pick up, dan layanan layanan lainnya.",
    address: "Jl. Jatimulyo No.1A, Tembalang, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50277",
    phone: "0842-3456-7890",
    images: [
      asset('UMKM_4/Kuliner_4-1.jpg'),
      asset('UMKM_4/Kuliner_4-2.jpg'),
      asset('UMKM_4/Kuliner_4-3.jpg')
    ],
    location: {
      lat: -7.0583890899717066,
      lng: 110.43507375373504
    },
    rating: 4.1,
    jamOperasional: "24 Jam",
    priceRange: "Rp 1.000 - Rp 25.000"
  },
  {
    id: "5",
    name: "Toko Rockstar",
    category: "Toko Kelontong",
    description: "Toko Rockstar Solusi belanja hemat Anda! Kami adalah toko favorit karena satu alasan: Harga kami dijamin paling murah. Temukan semua kebutuhan pokok, minuman segar, makanan ringan, dan perlengkapan kebersihan harian Anda di satu tempat. Belanja lengkap tanpa bikin kantong bolong.",
    address: "Jl. Gerung No.25, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    phone: "0895-3094-2567",
    images: [
      asset('hero4.jpg'),
      asset('hero4.jpg')
    ],
    location: {
      lat: -7.05693315773418,
      lng: 110.4434802733048
    },
    rating: 4.7,
    jamOperasional: "7.30 am - 10.00 pm",
    priceRange: "Rp 1.000 - Rp 100.000"
  },
  {
    id: "6",
    name: "Alfarizqy",
    category: "Toko Kelontong",
    description: "Alfa Rizqi Andalan kebutuhan harian Anda, buka 24 Jam! Khas Warung Madura, kami sedia lengkap: makanan ringan, minuman dingin, layanan isi ulang galon, dan bensin eceran (Pertamini). Solusi cepat kapanpun Anda butuh.",
    address: "Jl. Mulawarman Tim. No.34, Kramas, Kec. Tembalang, Kota Semarang, Jawa Tengah 50278r",
    phone: "0822-3456-7891",
    images: [
      asset('hero4.jpg'),
      asset('hero4.jpg')
    ],
    location: {
      lat: -7.067992583369558,
      lng: 110.44226381326033
    },
    rating: 4.4,
    priceRange: "Rp 1.000 - Rp 50.000"
  },
  {
    id: "7",
    name: "Kost Venuar UNDIP Tembalang",
    category: "Kost",
    description: "Kost Khusus Pria (Pilihan Lengkap) Tersedia beberapa tipe kamar sesuai kebutuhan Anda. Setiap kamar dilengkapi dengan AC, Kamar Mandi Dalam, Kasur, Lemari, dan Meja Belajar. Fasilitas umum dengan WiFi Kencang Gratis, Parkiran Motor, Dapur Bersama, dan Listrik Unlimited.",
    address: "Jl. Klentengsari Sel., Pedalangan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50268",
    phone: "0812-2506-0984",
    images: [
      asset('hero4.jpg'),
      asset('hero4.jpg')
    ],
    location: {
      lat: -7.058554187823217,
      lng: 110.42415347946783
    },
    rating: 4.5,
    jamOperasional: "24 Jam",
    priceRange: "Rp 800.000 - Rp 1.300.000"
  },
  {
    id: "8",
    name: "Kost Omah Sultan",
    category: "Kost",
    description: "Kost Khusus Putra (Pilihan Lengkap) Tersedia beberapa tipe kamar sesuai kebutuhan Anda. Setiap kamar dilengkapi dengan AC, Kamar Mandi Dalam, Kasur, Lemari, dan Meja Belajar. Fasilitas umum dengan WiFi Kencang Gratis, dan Parkiran Motor.",
    address: "Jl. Gondang Timur IV No.52, RT.01/RW.06, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    phone: "0822-2537-9537",
    images: [
      asset('UMKM_8/Kost_8-1.png'),
      asset('UMKM_8/Kost_8-2.png')
    ],
    location: {
      lat: -7.0648381412869075,
      lng: 110.44469556883696
    },
    rating: 4.6,
    jamOperasional: "24 Jam",
    priceRange: "Rp 800.000 - Rp 1.500.000"
  },
  {
    id: "9",
    name: "Kost Griya Nafi",
    category: "Kost",
    description: "Kost Khusus Pria, Setiap kamar dilengkapi dengan AC, Kamar Mandi Dalam, Dapur Dalam, Kasur, Lemari, dan Meja Belajar. Fasilitas umum dengan WiFi Kencang Gratis, dan Parkiran Motor.",
    address: "Jl. Mulawarman III No.20A, RT.02/RW.01, Kramas, Kec. Tembalang, Kota Semarang, Jawa Tengah 50278",
    phone: "0831-2345-6789",
    images: [
      asset('hero4.jpg'),
      asset('hero4.jpg')
    ],
    location: {
      lat: -7.068753114366359,
      lng: 110.43773165418627
    },
    rating: 4.7,
    jamOperasional: "24 Jam",
    priceRange: "Rp 1.500.000"
  },
  {
    id: "10",
    name: "Dera Motor",
    category: "Jasa",
    description: "Dera Motor Solusi lengkap bengkel motor Anda. Mulai dari Service Motor rutin, Ganti Oli, hingga kebutuhan cepat seperti Tambal Ban dan Nambah Angin. Cepat, handal, dan siap melayani.",
    address: "Jl. Mulawarman V No.12, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50278",
    phone: "-",
    images: [
      asset('hero4.jpg'),
      asset('hero4.jpg')
    ],
    location: {
      lat: -7.0673515611971585,
      lng: 110.43962833068896
    },
    rating: 4.3,
    jamOperasional: "07.30 am - 04.30 pm",
    priceRange: "Rp 2.000 - Rp 350.000"
  },
  {
    id: "11",
    name: "Laundry Tembalang",
    category: "Jasa",
    description: "Laundry Tembalang Solusi laundry cepat dan super hemat! Nikmati layanan kilat Sehari Jadi (1 Hari Selesai). Harga terjangkau, mulai Rp 5.000 - Rp 7.000 per kg. Pakaian bersih, wangi, dan rapi tanpa nunggu lama.",
    address: "Jl. Bulusan IV, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    phone: "085187507018",
    images: [
      asset('hero4.jpg'),
      asset('hero4.jpg')
    ],
    location: {
      lat: -7.059708300582209,
      lng: 110.44695505188217
    },
    rating: 4.8,
    jamOperasional: "08.00 am - 08.00 pm",
    priceRange: "Rp 5.000/kg - Rp 7.000/kg"
  },
  {
    id: "12",
    name: "Laundry O Undip",
    category: "Jasa",
    description: "Laundry O Undip Solusi laundry kilat terlengkap! Butuh cepat? Pilih layanan 6 Jam (Rp 12.000/kg). Santai? Ada 12 Jam (Rp 9.000/kg) atau 1 Hari (Rp 7.000/kg). Cepat, bersih, dan wangi, pas untuk anak Undip.",
    address: "Jl. Mulawarman Raya No.51, Kramas, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50268",
    phone: "082322991258",
    images: [
      asset('UMKM_12/Jasa_12-2.png'),
      asset('UMKM_12/Jasa_12-1.png'),
      asset('UMKM_12/Jasa_12-3.png')
    ],
    location: {
      lat: -7.063784307943054,
      lng: 110.4380991114073
    },
    rating: 4.7,
    jamOperasional: "07.00 am - 11.00 pm",
    priceRange: "Rp 7.000/kg - Rp 12.000/kg"
  }
];

export { UMKM, categories, umkmData };
