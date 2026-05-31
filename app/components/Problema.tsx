export default function Problema() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
            Você trabalha o dia inteiro.
            <br />
            <span className="text-red-500">Mas sabe quanto realmente lucrou?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A maioria dos motoristas confunde faturamento com lucro. Faturou R$ 350? Ótimo. Mas depois de gasolina,
            alimentação e manutenção — quanto sobrou de verdade?
          </p>
        </div>

        {/* Income breakdown cards */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-14">
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wide mb-6">Exemplo de um dia comum</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Receita do dia", value: "R$ 350", color: "text-green-600", bg: "bg-green-50 border-green-200" },
              { label: "Combustível", value: "− R$ 120", color: "text-red-500", bg: "bg-red-50 border-red-200" },
              { label: "Alimentação", value: "− R$ 30", color: "text-red-500", bg: "bg-red-50 border-red-200" },
              { label: "Lucro real", value: "R$ 200", color: "text-green-700", bg: "bg-green-100 border-green-300" },
            ].map((card, i) => (
              <div key={i} className={`${card.bg} border rounded-xl p-5 text-center`}>
                <p className="text-slate-500 text-xs font-medium mb-2">{card.label}</p>
                <p className={`text-2xl font-black ${card.color}`}>{card.value}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-sm max-w-lg mx-auto">
            Sem controle, você pensa que ganhou R$ 350. Com o Simplou, você sabe que o lucro real foi R$ 200 — e pode tomar decisões melhores a partir daí.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{pain.emoji}</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{pain.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>

        {/* Contrast — before vs after */}
        <div className="bg-slate-900 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Before */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-red-400 text-sm font-bold">✗</span>
                </div>
                <span className="text-red-400 font-bold text-sm uppercase tracking-wide">
                  Sem o Simplou
                </span>
              </div>
              <ul className="space-y-4">
                {befores.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm font-bold">✓</span>
                </div>
                <span className="text-green-400 font-bold text-sm uppercase tracking-wide">
                  Com o Simplou
                </span>
              </div>
              <ul className="space-y-4">
                {afters.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const pains = [
  {
    emoji: "⛽",
    title: "Gasolina come tudo",
    desc: "Você fez R$ 300 mas gastou R$ 200 de combustível. No final sobrou pouco e nem percebeu.",
  },
  {
    emoji: "🤷",
    title: "Não tem controle nenhum",
    desc: "No fim do mês não sabe dizer quanto ganhou, quanto gastou, se valeu a pena ou não.",
  },
  {
    emoji: "📉",
    title: "Trabalha mais, ganha menos",
    desc: "Sem saber o lucro real, fica difícil saber quais dias e horários compensam mais.",
  },
];

const befores = [
  "Não sabe quanto lucrou de verdade hoje",
  "Gasolina e pedágio estão \"na cabeça\"",
  "Nunca sabe se vai bater a meta",
  "Trabalha sem saber se está no lucro ou prejuízo",
  "Planilha complicada que abandona em 2 dias",
];

const afters = [
  "Sabe o lucro real em tempo real, pelo WhatsApp",
  "Todos os custos registrados sem esforço",
  "Acompanha meta do dia, semana e mês",
  "Sabe exatamente se o dia compensou",
  "Tudo registrado com uma mensagem de texto simples",
];
