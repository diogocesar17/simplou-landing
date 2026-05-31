const comparisons = [
  {
    topic: "Como registrar",
    planilha: "Preenchimento manual em células",
    simplou: "Uma mensagem de texto no WhatsApp",
  },
  {
    topic: "No celular",
    planilha: "Difícil de usar, tela pequena atrapalha",
    simplou: "Feito para o celular, funciona direto no WhatsApp",
  },
  {
    topic: "Consistência",
    planilha: "Fácil de esquecer, abandona em dias",
    simplou: "Faz parte da rotina — você já usa o WhatsApp",
  },
  {
    topic: "Lucro real",
    planilha: "Você faz as contas na mão",
    simplou: "Calculado automaticamente a cada registro",
  },
  {
    topic: "Velocidade",
    planilha: "Minutos para abrir, localizar e preencher",
    simplou: "5 segundos: manda a mensagem e pronto",
  },
];

export default function ComparacaoPlanilhas() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Chega de planilha
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Pare de perder tempo com planilhas.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Planilha é boa para contador. Para motorista que está na rua, o negócio é mensagem no WhatsApp.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-3 bg-slate-900 text-sm font-bold">
            <div className="px-6 py-4 text-slate-400 uppercase tracking-wide text-xs">Critério</div>
            <div className="px-6 py-4 text-center text-red-400 border-l border-slate-700">
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg">📊</span> Planilha
              </span>
            </div>
            <div className="px-6 py-4 text-center text-green-400 border-l border-slate-700">
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg">💬</span> Simplou
              </span>
            </div>
          </div>

          {comparisons.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
            >
              <div className="px-6 py-5 font-semibold text-slate-800">{row.topic}</div>
              <div className="px-6 py-5 text-slate-500 border-l border-slate-100 flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                {row.planilha}
              </div>
              <div className="px-6 py-5 text-slate-700 border-l border-slate-100 flex items-start gap-2">
                <span className="text-green-500 mt-0.5 flex-shrink-0 font-bold">✓</span>
                <span className="font-medium">{row.simplou}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <p className="text-green-800 font-semibold text-lg">
            "Eu tentei planilha no Google, aplicativo de finanças, nada ficava.
            Com o Simplou é diferente porque mando a mensagem enquanto estou esperando o próximo pedido."
          </p>
          <p className="text-green-600 text-sm mt-3">— Marcos, motorista Uber + 99 · Rio de Janeiro</p>
        </div>
      </div>
    </section>
  );
}
