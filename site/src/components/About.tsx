const stats = [
  { value: '+20 anos', label: 'de experiência no mercado' },
  { value: 'Garantia', label: 'em todos os sistemas instalados' },
  { value: 'Equipe técnica', label: 'qualificada e certificada' },
  { value: 'Padrão premium', label: 'acabamento de alto nível' },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 mb-4">
              Sobre nós
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 leading-tight mb-6">
              Tradição, técnica e padrão premium em cada projeto
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A Balcony Brasil Sudeste é referência em envidraçamento de sacadas e varandas,
              oferecendo soluções modernas que unem segurança, durabilidade e estética
              sofisticada para residências e empreendimentos de alto padrão.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Trabalhamos com sistemas certificados, vidros temperados e perfis de alumínio
              anodizado. Da medição ao pós-venda, cada etapa é conduzida por uma equipe
              técnica especializada, seguindo os mais rígidos padrões da norma ABNT NBR 16259.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-navy-50 rounded-2xl p-6 border border-navy-100"
              >
                <p className="text-2xl font-bold text-navy-700 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
