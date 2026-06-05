"use client";

import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/556199249129?text=Ol%C3%A1%2C+quero+usar+o+Simplou";

const chatMessages = [
  { type: "sent", text: "fiz 280 no uber hoje" },
  { type: "sent", text: "abasteci 180 de gasolina" },
  {
    type: "received",
    text: "✅ Registrado!\n\n📊 *Resumo de hoje:*\n💰 Ganhos: R$ 280,00\n⛽ Gasolina: R$ 180,00\n🏠 Custos fixos (rateio): R$ 32,50\n\n💵 *Lucro real: R$ 67,50*\n\nMeta do dia: R$ 200,00\n📈 Faltam R$ 132,50 para bater a meta",
  },
  { type: "sent", text: "paguei pedágio 12" },
  {
    type: "received",
    text: "✅ Pedágio registrado!\n\n💵 *Lucro real atualizado: R$ 55,50*",
  },
  { type: "sent", text: "quanto fiz essa semana?" },
  {
    type: "received",
    text: "📅 *Semana atual:*\n💰 Ganhos: R$ 1.420,00\n📉 Custos: R$ 680,00\n\n💵 *Lucro real: R$ 740,00*\n✅ Meta semanal batida!",
  },
];

function WhatsAppIcon({ size = "w-5 h-5" }: { size?: string }) {
  return (
    <svg className={`${size} fill-current`} viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ChatBubble({
  message,
  visible,
}: {
  message: (typeof chatMessages)[0];
  visible: boolean;
}) {
  const isSent = message.type === "sent";

  return (
    <div
      className={`flex transition-all duration-500 ${
        isSent ? "justify-end" : "justify-start"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div
        className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed shadow-sm ${
          isSent ? "chat-bubble-sent text-gray-800" : "chat-bubble-received text-gray-800"
        }`}
        style={{ whiteSpace: "pre-line" }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: message.text
              .replace(/\*([^*]+)\*/g, "<strong>$1</strong>")
              .replace(/\n/g, "<br/>"),
          }}
        />
        <span className={`block text-right text-[10px] mt-1 ${isSent ? "text-gray-500" : "text-gray-400"}`}>
          {new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          {isSent && (
            <span className="ml-1 text-blue-500">✓✓</span>
          )}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [visibleMessages, setVisibleMessages] = useState<boolean[]>(
    new Array(chatMessages.length).fill(false)
  );

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    chatMessages.forEach((_, i) => {
      const delay = 600 + i * 900;
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, delay);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-green-950 opacity-80" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — copy */}
          <div className="text-center lg:text-left fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Fase beta — vagas limitadas
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              Descubra quanto realmente{" "}
              <span className="text-green-400">sobra do seu dia</span>{" "}
              de trabalho.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Registre ganhos, combustível, alimentação e despesas pelo WhatsApp e acompanhe seu{" "}
              <strong className="text-white">lucro real</strong> sem planilhas e sem aplicativos complicados.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-green flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                <WhatsAppIcon size="w-6 h-6" />
                Começar grátis no WhatsApp
              </a>
              <a
                href="#demo"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 border border-white/20"
              >
                Ver demonstração
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mt-8 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sem app para instalar
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sem cadastro obrigatório
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Funciona no seu celular
              </span>
            </div>
          </div>

          {/* Right column — chat mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-gray-200 rounded-[36px] p-3 shadow-2xl shadow-black/50">
                <div className="bg-gray-300 rounded-[28px] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#075E54] px-4 py-1 flex items-center justify-between">
                    <span className="text-white text-[10px] font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                      </svg>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                      </svg>
                    </div>
                  </div>

                  {/* WhatsApp header */}
                  <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Simplou</p>
                      <p className="text-green-200 text-xs">online</p>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div
                    className="bg-[#ECE5DD] p-3 flex flex-col gap-2 overflow-hidden"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9c3bc' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                      minHeight: "320px",
                    }}
                  >
                    {chatMessages.map((msg, i) => (
                      <ChatBubble
                        key={i}
                        message={msg}
                        visible={visibleMessages[i]}
                      />
                    ))}
                  </div>

                  {/* Input bar */}
                  <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 text-gray-400 text-xs">
                      Mensagem...
                    </div>
                    <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 hidden lg:flex">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Lucro real hoje</p>
                  <p className="text-lg font-bold text-green-600">R$ 55,50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs animate-bounce">
        <span>Rola para ver mais</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
