export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6 text-center text-slate-500 mt-auto">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} LokalOKE. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}