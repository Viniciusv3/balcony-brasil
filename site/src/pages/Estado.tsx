import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import filiais from '../data/filiais.json'

type Filial = {
  cidade: string
  endereco: string
  telefones: string[]
  email: string | null
  maps: string
}

export default function Estado() {
  const { sigla } = useParams<{ sigla: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [sigla])

  const estado = filiais.find((e) => e.sigla === sigla?.toUpperCase())

  if (!estado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <p className="text-gray-500 text-lg mb-4">Estado não encontrado.</p>
        <a href="/" className="text-navy-700 font-semibold hover:underline">
          ← Voltar ao início
        </a>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy-800 pt-10 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors text-sm mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </button>
          <div className="flex items-center gap-4">
            <img src="/images/logo.jpg" alt="Balcony Brasil" className="h-12 w-auto object-contain rounded" />
            <div>
              <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase">Filiais</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{estado.estado}</h1>
            </div>
          </div>
          <p className="mt-4 text-gray-300">
            {estado.filiais.length} {estado.filiais.length === 1 ? 'filial encontrada' : 'filiais encontradas'}
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-6">
          {(estado.filiais as Filial[]).map((filial) => (
            <div
              key={filial.cidade + filial.endereco}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow w-full sm:w-[calc(50%-12px)] max-w-lg"
            >
              <div className="flex items-start justify-between gap-2 mb-4">
                <h2 className="text-lg font-bold text-navy-800">{filial.cidade}</h2>
                <span className="shrink-0 text-xs font-semibold bg-navy-50 text-navy-700 border border-navy-100 px-2 py-1 rounded-full">
                  {estado.sigla}
                </span>
              </div>

              {/* Endereço */}
              <div className="flex gap-3 mb-3">
                <MapPinIcon />
                <p className="text-gray-600 text-sm leading-relaxed">{filial.endereco}</p>
              </div>

              {/* Telefones */}
              <div className="flex gap-3 mb-3">
                <PhoneIcon />
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {filial.telefones.map((tel) => (
                    <a
                      key={tel}
                      href={`tel:${tel.replace(/\D/g, '')}`}
                      className="text-navy-700 text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                      {tel}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              {filial.email && (
                <div className="flex gap-3 mb-5">
                  <EmailIcon />
                  <a
                    href={`mailto:${filial.email}`}
                    className="text-navy-700 text-sm hover:text-blue-600 transition-colors break-all"
                  >
                    {filial.email}
                  </a>
                </div>
              )}

              {/* Maps button */}
              <a
                href={filial.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors mt-2"
              >
                <MapPinIcon white />
                Ver no Google Maps
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-1)}>
            <a
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ver todos os estados
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

function MapPinIcon({ white }: { white?: boolean }) {
  return (
    <svg className={`w-4 h-4 shrink-0 mt-0.5 ${white ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
