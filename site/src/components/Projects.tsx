import { useState, useEffect, useCallback } from 'react'

const slides = [
  { src: '/images/carousel-1.jpg', label: 'Penthouse — varanda curva premium', tipo: 'Alto Padrão' },
  { src: '/images/carousel-2.jpg', label: 'Espaço fechado com teto de vidro', tipo: 'Sistema Personalizado' },
  { src: '/images/carousel-3.jpg', label: 'Varanda residencial decorada', tipo: 'Envidraçamento' },
  { src: '/images/carousel-4.jpg', label: 'Sacada com vista panorâmica', tipo: 'Sistema Deslizante' },
  { src: '/images/carousel-5.jpg', label: 'Varanda gourmet com bar', tipo: 'Fechamento Integral' },
  { src: '/images/carousel-6.jpg', label: 'Sacada com vista para o lago', tipo: 'Projeto Premium' },
  { src: '/images/carousel-7.jpg', label: 'Varanda ampla com vista para a cidade', tipo: 'Sistema Deslizante' },
]

export default function Projects() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 mb-4">
            Projetos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Projetos que falam por si
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Uma seleção de obras que mostram nosso compromisso com qualidade e sofisticação.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl h-[340px] sm:h-[460px] lg:h-[560px]">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-xs font-semibold tracking-widest uppercase text-blue-300">
                  {slide.tipo}
                </span>
                <p className="text-white text-xl font-semibold mt-1">{slide.label}</p>
              </div>
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
            aria-label="Próximo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-white w-6' : 'bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
