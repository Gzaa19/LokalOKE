export default function Search() {
  return (
    <section
      aria-label="Umkm search"
      role="search"
      className="relative z-10 bg-transparent py-16 -mt-20"
    >
      <div className="container">
        <div className="max-w-[900px] mx-auto -translate-y-12 rounded-2xl border border-slate-200 bg-white shadow-2xl px-7 py-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="query" className="text-[12px] font-bold uppercase tracking-wide text-slate-700">Pencarian</label>
            <div className="flex gap-3">
              <input id="query" type="text" className="flex-1 px-4 py-3 rounded-lg border border-slate-200 text-slate-800 bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="Cari UMKM disini..." aria-label="Search query" />
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-bold uppercase tracking-wide hover:bg-blue-700 shadow-md hover:shadow-lg transition whitespace-nowrap" type="button" aria-label="Search">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}