export default function Footer() {
  return (
    <footer className="bg-navy-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src="/images/logo.jpg" alt="Balcony Brasil" className="h-10 w-auto object-contain rounded" />
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Balcony Brasil Sudeste. Todos os direitos reservados.
        </p>
        <p className="text-gray-600 text-xs">
          Certificado ABNT NBR 16259:2014
        </p>
      </div>
    </footer>
  )
}
