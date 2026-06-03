import { useNavigate } from 'react-router-dom'
import filiais from '../data/filiais.json'

export default function Coverage() {
  const navigate = useNavigate()

  return (
    <section id="filiais" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 mb-4">
            Cobertura Nacional
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Onde encontrar a Balcony Brasil
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Presentes em todo o Brasil. Clique em um estado para ver as filiais e endereços.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filiais.map((estado) => (
            <button
              key={estado.sigla}
              onClick={() => navigate(`/filiais/${estado.sigla}`)}
              className="group flex flex-col items-center gap-2 bg-white hover:bg-navy-700 border border-gray-200 hover:border-navy-700 rounded-2xl p-5 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-2xl font-bold text-navy-700 group-hover:text-white transition-colors">
                {estado.sigla}
              </span>
              <span className="text-xs text-gray-500 group-hover:text-blue-200 transition-colors text-center leading-tight">
                {estado.estado}
              </span>
              <span className="text-xs font-medium text-blue-600 group-hover:text-blue-300 transition-colors">
                {estado.filiais.length} {estado.filiais.length === 1 ? 'filial' : 'filiais'}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
