// About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, Award, LibraryBigIcon, CrownIcon } from 'lucide-react';
import { useAbout } from '../../hooks/useAbout';
import AnimatedCard3D from '../../components/ui/AnimatedCard3D';
import TeamCard from '../../components/ui/TeamCard';
import { teamMembers } from '../../Data/team';

const About = () => {
    const { mousePosition, containerVariants, itemVariants, imageVariants } =
        useAbout();
    const companiesLogo = [
        { name: "Antek Jaya", },
        { name: "Antek Juara", },
        { name: "Antek Menang", },
        { name: "Antek Jaya", },
        { name: "Antek Juara", },
        { name: "Antek Menang", }
    ];
    return (
        <motion.div
            className="pt-20"
            style={{ background: 'var(--bg)' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Header Section */}
            <motion.section
                className="py-16 px-4 text-center"
                variants={itemVariants}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="inline-block bg-sky-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Cerita Kami 
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        variants={itemVariants}
                    >
                        Menjadikan Bisnis Lokal&nbsp;
                        <span className="text-sky-700">"OKE"</span>
                        dan Mudah Ditemukan
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Jutaan UMKM hebat di Indonesia adalah jantung ekonomi kita, tapi mereka sulit ditemukan. Pelanggan pun kesulitan mencari solusi lokal terpercaya. Kami bertanya, 'Bagaimana jika ini bisa dibuat mudah?
                    </motion.p>
                </div>
            </motion.section>
             {/* Main Content Section */}
            <motion.section className="py-16 px-4" variants={itemVariants}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center"> 
                      {/* Image */}
                        <AnimatedCard3D
                            mousePosition={mousePosition}
                            imageVariants={imageVariants}
                        />
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl font-bold text-sky-700 mb-6">
                                Dari sanalah ide "LOKALOKE" lahir.
                            </h2>
                            <div className="space-y-6 text-gray-600">
                                <motion.div
                                    className="bg-gray-50 shadow-md p-4 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-start">
                                        <LibraryBigIcon className="w-6 h-6 text-yellow-500 mr-3 mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">
                                                Makna
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Merupakan gabungan dari kata "Lokal" (mencerminkan fokus pada Usaha Mikro, Kecil, dan Menengah (UMKM) di lingkungan sekitar) dan "OKE" (yang berarti baik, memadai, atau dalam Bahasa gaul bisa diartikan sebagai persetujuan/solusi).
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="bg-gray-50 p-4 rounded-xl shadow-md"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-start">
                                        <Lightbulb className="w-6 h-6 text-yellow-500 mr-3 mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">
                                                Filosofi
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Menekankan bahwa UMKM lokal itu "OKE" mereka penting, berharga, dan kini mudah ditemukan (Lokasi OKE, Informasi OKE). Nama ini mudah diingat, catchy, dan langsung mengkomunikasikan misi utama untuk mendukung bisnis lokal.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            {/* Vision Section */}
            <motion.section
                className="py-16 px-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="bg-gradient-to-br from-sky-700 to-sky-900 text-white rounded-3xl shadow-2xl overflow-hidden"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-8 py-16 md:px-16 md:py-20 text-center relative">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
                                <div className="absolute top-20 right-16 w-16 h-16 border border-white/20 rounded-full"></div>
                                <div className="absolute bottom-16 left-20 w-12 h-12 border border-white/25 rounded-full"></div>
                                <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/15 rounded-full"></div>
                            </div>

                            <motion.h2
                                className="text-3xl font-bold mb-2 relative z-10"
                                variants={itemVariants}
                            >
                                Semua Jadi Mudah & OKE
                            </motion.h2>

                            <motion.p
                                className="text-xl leading-relaxed mb-5 max-w-4xl mx-auto relative z-10"
                                variants={itemVariants}
                            >
                                Filosofi itu kami wujudkan dalam setiap fitur di platform ini. Kami merancang LokalOKE untuk membuat penjelajahan UMKM lokal jadi lebih cepat, akurat, dan menyenangkan.
                            </motion.p>
                            
                            <motion.p
                                className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto relative z-10 justify-start"
                                variants={itemVariants}
                            >
                                Bagi kami, "OKE" berarti:
                            </motion.p>

                            {/* Stats/Features */}
                            <motion.div
                                className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10"
                                variants={containerVariants}
                            >
                                <motion.div
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-2xl font-bold">1</span>
                                    </motion.div>
                                    <p className="text-sky-100 font-medium">
                                        Lokasi OKE Temukan UMKM terdekat dengan mudah. Kami menyediakan data lokasi, jarak, dan rute terbaik agar Anda bisa sampai ke tempat yang Anda inginkan tanpa repot.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-2xl font-bold">2</span>
                                    </motion.div>
                                    <p className="text-sky-100 font-medium">
                                        Info Lengkap Dapatkan semua informasi detail yang Anda butuhkan mulai dari produk, layanan, jam operasional, hingga kontak semuanya dalam satu tempat.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-2xl font-bold">3</span>
                                    </motion.div>
                                    <p className="text-sky-100 font-medium">
                                        Ulasan Jujur Lihat apa kata komunitas. Baca ulasan dan rating jujur dari pengunjung lain untuk membantu Anda menentukan pilihan terbaik dan membangun kepercayaan.
                                    </p>
                                </motion.div>
                                
                                <motion.div
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-2xl font-bold">4</span>
                                    </motion.div>
                                    <p className="text-sky-100 font-medium">
                                        Pencarian Mudah Cari berdasarkan kategori, lokasi, atau nama. Filter canggih kami membantu Anda menemukan persis apa yang Anda cari dengan cepat.
                                    </p>
                                </motion.div>
                                
                                <motion.div
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-2xl font-bold">5</span>
                                    </motion.div>
                                    <p className="text-sky-100 font-medium">
                                        Promo & Diskon Jangan lewatkan penawaran menarik! Temukan promo eksklusif dan diskon khusus dari UMKM favorit Anda langsung di platform kami.
                                    </p>
                                </motion.div>
                                
                                <motion.div
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-2xl font-bold">6</span>
                                    </motion.div>
                                    <p className="text-sky-100 font-medium">
                                        100% Dukung Lokal Kami percaya bahwa setiap pencarian, kunjungan, dan ulasan Anda adalah bentuk dukungan nyata. Bersama kami, Anda ikut berkontribusi langsung pada pertumbuhan bisnis tetangga dan ekonomi lokal Anda.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
            
            {/* Mission Statement Section */}
            <motion.section
                className="py-12 px-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        className="inline-block bg-sky-700 text-3xl font-bold text-white px-6 py-2 rounded-full text-sm font-medium mb-8"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        MISI KAMI
                    </motion.div>

                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-black"
                        variants={itemVariants}
                    >
                        Misi Kami Sederhana
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl leading-relaxed mb-8 text-black max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Menjadi jembatan yang menghubungkan UMKM lokal yang hebat dengan pelanggan yang ingin mendukung mereka.
                    </motion.p>
                    
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-sky-800 to-sky-600 mx-auto mb-8 rounded-full"
                        variants={itemVariants}
                    />
                </div>
            </motion.section>
            
            {/* Our Team Section */}
            <motion.section
                className="py-12 px-4"
                variants={itemVariants}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="inline-block bg-sky-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            THE TEAM
                        </motion.div>
                        <motion.h2
                            className="text-4xl font-bold text-gray-800 mb-4"
                            variants={itemVariants}
                        >
                            Meet Our
                            <span className="text-sky-700">Team</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Tim yang berdedikasi untuk mengembangkan platform
                            LokalOKE dan mendukung pertumbuhan UMKM Indonesia
                        </motion.p>
                    </motion.div>
                    {/* PERUBAHAN: 

            */}
                    <motion.div
                        className="grid md:grid-cols-3 gap-x-20 gap-y-12 max-w-4xl mx-auto"
                        variants={containerVariants}
                    >
                        {teamMembers.map((member, index) => (
                            <TeamCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                imgSrc={member.imgSrc}
                                github={member.github}
                                instagram={member.instagram}
                                linkedin={member.linkedin}
                            />
                        ))}
                    </motion.div>
                    
                    {/* Trusted Companies Section */}
                    <motion.div 
                        className="mt-16 pt-16 border-t border-gray-200"
                        variants={itemVariants}
                    >
                        <style>{`
                            .marquee-inner {
                                animation: marqueeScroll linear infinite;
                            }

                            @keyframes marqueeScroll {
                                0% {
                                    transform: translateX(0%);
                                }

                                100% {
                                    transform: translateX(-50%);
                                }
                            }
                        `}
                        </style>
                        <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none">
                            {/* Subtle gradient overlays */}
                            <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                            
                            <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "25s" }}>
                                <div className="flex items-center">
                                    {[...companiesLogo, ...companiesLogo].map((company, index) => (
                                        <div 
                                            key={index} 
                                            className="mx-8 flex items-center gap-3 text-slate-800 font-bold text-lg hover:text-amber-600 transition-all duration-300 whitespace-nowrap flex-shrink-0 group cursor-pointer"
                                        >
                                            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                                <CrownIcon className="w-6 h-6 text-white shrink-0" />
                                            </div>
                                            <span className="relative font-extrabold tracking-wide">
                                                {company.name}
                                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300" />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    );
};
export default About;
