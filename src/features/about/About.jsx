// About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, Award } from 'lucide-react';
import { useAbout } from '../../hooks/useAbout';
import AnimatedCard3D from '../../components/ui/AnimatedCard3D';
import TeamCard from '../../components/ui/TeamCard';
import { teamMembers } from '../../Data/team';

const About = () => {
    const { mousePosition, containerVariants, itemVariants, imageVariants } =
        useAbout();

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
                        Apa itu&nbsp;
                        <span className="text-sky-700">LokalOKE</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Platform digital yang menghubungkan masyarakat dengan UMKM lokal di sekitar mereka.
                        Kami berkomitmen untuk memberdayakan ekonomi lokal
                        dan membantu UMKM berkembang di era digital
                        dengan menyediakan platform yang mudah diakses dan
                        user-friendly.
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
                                Asal Mula LokalOKE
                            </h2>
                            <div className="space-y-6 text-gray-600">
                                <p className="leading-relaxed">
                                    Pada tahun 2024,
                                    berdasarkan kebutuhan masyarakat akan
                                    kemudahan akses informasi
                                    UMKM lokal, LokalOKE hadir sebagai solusi
                                    digital yang menghubungkan
                                    konsumen dengan pelaku usaha mikro, kecil,
                                    dan menengah di sekitar
                                    mereka.
                                </p>
                                <p className="leading-relaxed">
                                    Nama LokalOKE sendiri
                                    berasal dari gabungan kata "Lokal" yang
                                    menggambarkan fokus kami pada
                                    bisnis lokal, dan "OKE" yang 
                                    menunjukkan kemudahan dan kepuasan dalam
                                    menggunakan platform kami.
                                </p>
                                <motion.div
                                    className="bg-sky-50 border-l-4 border-sky-700 p-4 rounded-r-lg"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-start">
                                        <Lightbulb className="w-6 h-6 text-yellow-500 mr-3 mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">
                                                Fun Fact
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Sejak
                                                tahun 2024, lebih dari 1000+
                                                UMKM lokal telah bergabung 
                                                dengan
                                                platform kami untuk memperluas
                                                jangkauan bisnis mereka.
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
                                className="text-3xl md:text-4xl font-bold mb-8 relative z-10"
                                variants={itemVariants}
                            >
                                Visi Kami
                            </motion.h2>

                            <motion.p
                                className="text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto relative z-10"
                                variants={itemVariants}
                            >
                                Mewujudkan LokalOKE 2025 yang progresif dan
                                sinergis guna memberikan kebermaknaan dengan
                                inovasi yang berkelanjutan
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
                                        className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Users className="w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-3xl font-bold mb-2">
                                        1000+
                                    </h3>
                                    <p className="text-sky-100 font-medium">
                                        UMKM Terdaftar
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Target className="w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-3xl font-bold mb-2">
                                        50+
                                    </h3>
                                    <p className="text-sky-100 font-medium">
                                        Kota Terjangkau
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Award className="w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-3xl font-bold mb-2">
                                        99%
                                    </h3>
                                    <p className="text-sky-100 font-medium">
                                        Kepuasan Pengguna
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
            {/* Our Team Section */}
            <motion.section
                className="py-16 px-4"
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
                </div>
            </motion.section>
        </motion.div>
    );
};
export default About;
