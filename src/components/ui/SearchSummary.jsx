import React from 'react';

const SearchSummary = ({ count, query }) => {
  if (!query) {
    return null;
  }

  return (
    <div className="mb-6 px-4">
      <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
        <p className="text-sky-800 text-sm">
          Menampilkan <span className="font-semibold">{count}</span> hasil untuk pencarian:
          <span className="font-semibold ml-1">"{query}"</span>
        </p>
      </div>
    </div>
  );
};

export default SearchSummary;
