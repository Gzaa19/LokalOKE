import React from 'react';

const ListingHeader = ({ hasQuery }) => (
  <div className="relative w-full flex justify-center items-center my-4 sm:my-6 md:my-8 px-4">
    <div className="w-full relative select-none">
      <div className="flex items-center justify-center">
        <div className="relative">
          <h2
            className="font-bold leading-none text-gray-300 opacity-60 uppercase
            text-[3rem] tracking-[3px] sm:text-[4rem] sm:tracking-[5px]
            md:text-[6rem] md:tracking-[8px] lg:text-[8rem] lg:tracking-[12px]
            xl:text-[10rem] xl:tracking-[15px] max-w-full overflow-hidden"
          >
            LOKALOKE
          </h2>
          <h3
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-cyan-700
            tracking-wider uppercase text-center px-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
            max-w-[90%] sm:max-w-full"
          >
            {hasQuery ? 'HASIL PENCARIAN' : 'UMKM POPULER'}
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export default ListingHeader;
