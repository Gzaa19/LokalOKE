import React from 'react';

export default function UmkmCard() {
    const warungData = [
        {
            id: 1,
            name: "Warung Makan Warteg Mama Ros",
            category: "Warung tegal",
            photos: [{ url: "/src/assets/warteg1.jpg", caption: "Aneka Lauk Pauk" }],
            // ...
        },
        {
            id: 2,
            name: "MampirAngkringanYukk",
            category: "Kedai Kopi",
            photos: [{ url: "/src/assets/angkringan1.jpg", caption: "Suasana Angkringan" }],
            // ...
        },
        {
            id: 3,
            name: "Rumah Laundry Mulawarman",
            category: "Binatu Cucian Kering",
            photos: [{ url: "/src/assets/laundry1.jpg", caption: "Tampak Depan" }],
            // ...
        },
        {
            id: 4,
            name: "Griya Nafi",
            category: "Komplek perumahan",
            photos: [{ url: "/src/assets/griyanafi1.jpg", caption: "Tampak Depan" }],
            // ...
        },
        {
            id: 5,
            name: "Kost Venuar UNDIP Tembalang",
            category: "Rumah Pondokan",
            photos: [{ url: "/src/assets/kostvenuar1.jpg", caption: "Tampak Depan" }],
            // ...
        },
        {
            id: 6,
            name: "Burjo SS",
            category: "Rumah Makan",
            photos: [{ url: "/src/assets/burjoss1.jpg", caption: "Tampak Depan" }],
            // ...
        },
        {
            id: 7,
            name: "Warung Madura Kepiting",
            category: "Rumah Makan",
            photos: [{ url: "/src/assets/warungmadura1.jpg", caption: "Tampak Depan" }],
            // ...
        },
        {
            id: 8,
            name: "Penyet Bu Nur",
            category: "Restoran Jawa",
            photos: [{ url: "/src/assets/penyet1.jpg", caption: "Menu Spesial" }],
            // ...
        },
        {
            id: 9,
            name: "Toko Rock Star",
            category: "Toko Kelontong Asia",
            photos: [{ url: "/src/assets/rockstar1.jpg", caption: "Tampak Depan" }],
            // ...
        },
        {
            id: 10,
            name: "Sate Kambing Pak Kardi",
            category: "Warung Sate",
            photos: [{ url: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80", caption: "Sate Spesial" }],
            // ...
        },
        {
            id: 11,
            name: "Salon Cantik Mulawarman",
            category: "Salon Kecantikan",
            photos: [{ url: "/src/assets/salon1.jpg", caption: "Interior Salon" }],
            // ...
        },
        {
            id: 12,
            name: "Bengkel Motor Express",
            category: "Bengkel Motor",
            photos: [{ url: "/src/assets/bengkel1.jpg", caption: "Area Bengkel" }],
            // ...
        }
    ];

    const renderWarungCards = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {warungData.map((warung) => (
                <div
                    key={warung.id}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col"
                >
                    <div className="h-48 shrink-0">
                        <img
                            src={warung.photos[0].url}
                            alt={warung.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 flex flex-col grow">
                        <div className="grow flex flex-col justify-end">
                            <h3 className="text-lg font-bold text-gray-900 line-clamp-2" title={warung.name}>
                                {warung.name}
                            </h3>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                                <svg
                                    className="w-4 h-4 text-gray-500 mr-1 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001c.198-.086.653-.352 1.226-.774 1.146-.845 2.56-2.088 3.73-3.63C16.39 12.91 17 11.01 17 9.5 17 6.462 13.866 4 10 4S3 6.462 3 9.5c0 1.51.61 3.41 1.734 5.095 1.17 1.542 2.584 2.785 3.73 3.63.573.422 1.028.688 1.226.774zM10 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{warung.category}</span>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                className="w-10 h-10 bg-[#07416b] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-colors shrink-0"
                                aria-label={`Lihat detail untuk ${warung.name}`}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                {renderWarungCards()}
            </div>
        </section>
    );
}