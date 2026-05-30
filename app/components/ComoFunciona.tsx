const steps = [
  {
    step: "01",
    title: "Salva o número no WhatsApp",
    desc: "Adicione o número do Simplou nos seus contatos. Pronto — é só isso. Sem baixar app, sem criar conta com senha.",
    example: null,
    icon: "📱",
  },
  {
    step: "02",
    title: "Manda mensagem como você fala",
    desc: "Fez uma corrida? Abasteceu? Só digita. O bot entende linguagem natural — sem comando especial, sem menu.",
    example: [
      { type: "sent", text: "fiz 180 no uber" },
      { type: "sent", text: "entregui 3 pedidos no ifood, ganhei 95" },
      { type: "sent", text: "abasteci 150 de gasolina" },
      { type: "sent", text: "paguei pedágio 6,50" },
    ],
    icon: "💬",
  },
  {
    step: "03",
    title: "Recebe o lucro real na hora",
    desc: "O bot soma tudo, desconta os custos (inclusive os fixos rateados por dia) e mostra quanto você lucrou de verdade.",
    example: [
      {
        type: "received",
        text: "📊 Resumo do dia:\n💰 Ganhos: R$ 275,00\n📉 Custos: R$ 156,50\n\n💵 Lucro real: R$ 118,50\n\n✅ Meta de R$ 100,00 batida!",
      },
    ],
    icon: "📊",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            3 passos simples
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Não tem curso pra fazer, não tem tutorial de 30 minutos. Se você sabe mandar mensagem no WhatsApp, você sabe usar o Simplou.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line between steps (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-green-200 z-0 -translate-x-4" />
              )}

              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-sm">{step.step}</span>
                  </div>
                  <span className="text-3xl">{step.icon}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-xl mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.desc}</p>

                {/* Chat example */}
                {step.example && (
                  <div className="bg-[#ECE5DD] rounded-xl p-3 space-y-2">
                    {step.example.map((msg, j) => (
                      <div
                        key={j}
                        className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[90%] px-3 py-1.5 text-xs shadow-sm ${
                            msg.type === "sent"
                              ? "chat-bubble-sent text-gray-800"
                              : "chat-bubble-received text-gray-800"
                          }`}
                          style={{ whiteSpace: "pre-line" }}
                          dangerouslySetInnerHTML={{
                            __html: msg.text
                              .replace(/\*([^*]+)\*/g, "<strong>$1</strong>")
                              .replace(/\n/g, "<br/>"),
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
