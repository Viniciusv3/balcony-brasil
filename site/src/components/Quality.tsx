const items = [
  'Vidros temperados certificados pela NBR 14.698',
  'Perfis em alumínio anodizado de alta durabilidade',
  'Roldanas e ferragens em aço inox para segurança máxima',
  'Acabamento perfeito sem emendas aparentes',
  'Instalação realizada por equipe técnica especializada',
  'Garantia formal em todos os sistemas instalados',
  'Única empresa aprovada em todas as exigências da ABNT NBR 16259:2014',
  'Certificação pelo Instituto Falcão Bauer — organismo internacional',
]

export default function Quality() {
  return (
    <section id="qualidade" className="py-24 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-300 mb-4">
              Qualidade & Segurança
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Padrão técnico que você sente em cada detalhe
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Cada projeto Balcony Brasil é executado com rigor técnico, materiais certificados
              e mão de obra especializada — porque sua segurança e satisfação são inegociáveis.
            </p>
            <div className="inline-flex items-center gap-3 bg-blue-900/40 border border-blue-400/30 rounded-xl px-5 py-3">
              <svg className="w-5 h-5 text-blue-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-blue-200 text-sm font-medium">
                Certificação ABNT NBR 16259:2014 — resultado 4× superior ao exigido
              </span>
            </div>
          </div>

          {/* Checklist */}
          <div className="grid gap-4">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
