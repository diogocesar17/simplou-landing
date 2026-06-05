"use client";

const WA_LINK =
  "https://wa.me/556199249129?text=Ol%C3%A1%2C+quero+usar+o+Simplou";

const freeFeatures = [
  { text: "Registro ilimitado de corridas, entregas e custos", included: true },
  { text: "Lucro real do dia, semana e mês", included: true },
  { text: "Histórico por plataforma (Uber, iFood, 99...)", included: true },
  { text: "Custos fixos mensais (financiamento, seguro)", included: true },
  { text: "1 meta ativa por vez", included: true },
  { text: "3 lembretes configurados", included: true },
  { text: "1 cartão de crédito/débito", included: true },
  { text: "Histórico ilimitado", included: false },
  { text: "Metas simultâneas (dia + semana + mês)", included: false },
  { text: "Relatório CSV", included: false },
  { text: "Análise de padrões por IA", included: false },
  { text: "Registro por áudio", included: false },
];

const proFeatures = [
  { text: "Tudo do plano gratuito", included: true },
  { text: "Histórico ilimitado", included: true },
  { text: "Metas simultâneas (dia + semana + mês)", included: true },
  { text: "Lembretes e cartões ilimitados", included: true },
  { text: "Relatório CSV para download", included: true },
  { text: "Análise de padrões por IA", included: true },
  { text: "Sugestões para aumentar rentabilidade", included: true },
  { text: "Previsão de ganhos", included: true },
  { text: "Assistente financeiro (perguntas livres)", included: true },
  { text: "Registro por áudio (sem digitar)", included: true },
];

function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-slate-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

export default function Planos() {
  return (
    <section id="planos" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Comece grátis. Sem cartão de crédito.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            O plano gratuito já resolve o controle do dia a dia. O Pro é para quem quer histórico completo e relatórios.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Fase beta — participe gratuitamente
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free plan */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                Gratuito
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-slate-900">R$ 0</span>
                <span className="text-slate-500">/mês</span>
              </div>
              <p className="text-slate-600 text-sm mt-2">
                Sem cartão de crédito para começar.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {freeFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon included={feature.included} />
                  <span
                    className={`text-sm ${
                      feature.included ? "text-slate-700" : "text-slate-400 line-through"
                    }`}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors text-center"
            >
              Começar grátis agora
            </a>
          </div>

          {/* Pro plan */}
          <div className="bg-slate-900 rounded-2xl p-8 flex flex-col relative overflow-hidden border-2 border-green-500">
            {/* Popular badge */}
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              EM BREVE
            </div>

            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />

            <div className="mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
                ⚡ Pro
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white">R$ 19</span>
                <span className="text-slate-400">,90/mês</span>
              </div>
              <p className="text-slate-400 text-sm mt-2">
                Menos de R$ 0,70 por dia. Cancele quando quiser.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              {proFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-200">{feature.text}</span>
                </li>
              ))}
            </ul>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition-colors text-center shadow-lg shadow-green-500/25"
            >
              Assinar o Pro
            </a>

            <p className="text-slate-500 text-xs text-center mt-3 relative z-10">
              Comece com o grátis e upgrade quando quiser
            </p>
          </div>
        </div>

        {/* Value prop */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 text-sm">
            💡 <strong className="text-slate-800">Pense assim:</strong> Se o Simplou te ajudar a descobrir que 2 horas por semana não valem a pena e você as aproveitar melhor, o controle financeiro já pagou o esforço de cadastrar.
          </p>
        </div>
      </div>
    </section>
  );
}
