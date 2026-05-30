export default function Problema() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
            Você trabalha o dia inteiro.
            <br />
            <span className="text-red-500">Mas quanto sobra de verdade?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A maioria dos motoristas não sabe quanto lucrou. Sabe quanto faturou. Tem diferença.
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
