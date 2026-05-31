const features = [
  {
    icon: "💬",
    title: "Linguagem natural",
    desc: 'Fala como você fala. "Fiz 200 no Uber", "abasteci 150", "rodei 8h hoje" — o bot entende tudo.',
    highlight: false,
  },
  {
    icon: "💰",
    title: "Lucro real do dia",
    desc: "Calcula o lucro descontando gasolina, pedágio, manutenção e até os custos fixos (financiamento, seguro) rateados por dia.",
    highlight: true,
  },
  {
    icon: "🎯",
    title: "Metas de ganho",
    desc: "Defina metas para o dia, semana ou mês. O bot avisa quando você está perto e quando bateu a meta.",
    highlight: false,
  },
  {
    icon: "📊",
    title: "Histórico por plataforma",
    desc: "Veja quanto veio do Uber, quanto do iFood, do 99, Rappi, Loggi — separado e organizado.",
    highlight: false,
  },
  {
    icon: "📅",
    title: "Resumo semanal e mensal",
    desc: 'Pergunte "quanto fiz essa semana?" ou "como foi o mês?" e receba o resumo na hora.',
    highlight: false,
  },
  {
    icon: "🏠",
    title: "Custos fixos rateados",
    desc: "Registre financiamento, seguro, plano de saúde. O bot divide por dia de trabalho e desconta automaticamente.",
    highlight: false,
  },
  {
    icon: "📱",
    title: "Sem app para instalar",
    desc: "Funciona direto no WhatsApp que você já usa. Não ocupa espaço no celular, não precisa de senha nova.",
    highlight: false,
  },
  {
    icon: "🕐",
    title: "Lembretes inteligentes",
    desc: "Configure lembretes para registrar seus gastos, conferir o lucro do dia, ou qualquer coisa que precisar.",
    highlight: false,
  },
  {
    icon: "💳",
    title: "Controle de cartões",
    desc: "Registre gastos no crédito e débito. Saiba exatamente o que está saindo além do dinheiro vivo.",
    highlight: false,
  },
];

export default function Funcionalidades() {
  return (
    <section id="funcionalidades" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Tudo que você precisa,{" "}
            <span className="text-green-500">nada que não precisa</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Feito para o motorista que quer controle financeiro real sem complicação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border transition-all duration-200 hover:shadow-md ${
                feature.highlight
                  ? "bg-green-500 border-green-500 text-white"
                  : "bg-white border-slate-100 hover:border-green-200"
              }`}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3
                className={`font-bold text-lg mb-2 ${
                  feature.highlight ? "text-white" : "text-slate-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  feature.highlight ? "text-green-50" : "text-slate-600"
                }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pro features teaser */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
            ⚡ Apenas no Pro
          </div>
          <h3 className="text-white font-bold text-xl mb-4">
            Controle total + relatórios completos
          </h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6">
            No plano Pro você tem histórico ilimitado, relatório em PDF/CSV, metas simultâneas e registro por áudio — tudo para manter seu controle financeiro sem digitar nada.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {proFeatures.map((f, i) => (
              <span
                key={i}
                className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const proFeatures = [
  "🎙️ Registro por áudio",
  "📄 Relatório CSV e PDF",
  "🎯 Metas simultâneas",
  "💬 Perguntas livres ao assistente",
  "📊 Histórico ilimitado",
  "📈 Resumo detalhado por plataforma",
];
