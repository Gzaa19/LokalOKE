import React from 'react';

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center w-full h-full min-h-80 text-center p-6">
    <p className="text-sky-700 font-semibold text-lg">Belum ada UMKM yang cocok dengan filter ini.</p>
    <p className="text-slate-500 text-sm mt-2">Coba filter lain atau gunakan pencarian untuk menemukan UMKM favoritmu.</p>
  </div>
);

export default EmptyState;
