import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-slate-700 via-slate-800 to-slate-900 py-12 relative z-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-1 mb-6">
            <span className="font-russo text-white text-2xl md:text-3xl drop-shadow-xl transition-all duration-500 tracking-[0.40em]">LOKALOKE</span>
            <span className="text-white text-sm md:text-base uppercase">Temukan yang OKE di Sekitarmu</span>
        </div>

        <nav className="flex justify-center gap-6 sm:gap-8 text-slate-300 text-sm mb-6">
          <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
          <Link to="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link>
          <Link to="/umkm" className="hover:text-white transition-colors">UMKM</Link>
          <Link to="/kontak" className="hover:text-white transition-colors">Kontak</Link>
          <Link to="/daftar-bisnis" className="hover:text-white transition-colors">Daftar Bisnis</Link>
        </nav>

        <div className="flex justify-center items-center gap-5 text-slate-300 mb-6">
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.063 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.95.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.928 2.205-4.928 4.928 0 .386.044.761.127 1.122-4.094-.205-7.719-2.166-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.848.171-1.296.171-.316 0-.625-.031-.928-.088.631 1.953 2.463 3.376 4.634 3.416-1.701 1.333-3.84 2.125-6.164 2.125-.401 0-.798-.023-1.188-.069 2.197 1.41 4.806 2.232 7.614 2.232 9.139 0 14.307-7.721 14.307-14.41 0-.219-.004-.438-.014-.654.983-.71 1.834-1.6 2.512-2.613z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
        <div className="text-slate-400 text-xs">© 2025 LOKALOKE-ANTEK JAYA. All Rights Reserved.</div>
      </div>
    </footer>
  );
}