import React from 'react';

const UmkmMap = ({ address, googleMapsUrl, mapsLink }) => {
  return (
    <div className="text-gray-100 mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base space-y-3 sm:space-y-4">
      <div className="flex items-start gap-2">
        <span className="font-medium">Alamat: </span>
        <span className="leading-relaxed">{address}</span>
      </div>
      <div className="mt-3 sm:mt-4">
        <iframe
          src={googleMapsUrl}
          width="100%"
          height="150"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg sm:h-[200px]"
        ></iframe>
      </div>
      <a 
        href={mapsLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative inline-flex items-center gap-2 mt-3 sm:mt-4 bg-gradient-to-r from-sky-700 to-sky-900 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg overflow-hidden group transition-all duration-300 ease-out hover:from-sky-800 hover:to-sky-950"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        <span className="relative z-10">Buka di Google Maps</span>
      </a>
    </div>
  );
};

export default UmkmMap;