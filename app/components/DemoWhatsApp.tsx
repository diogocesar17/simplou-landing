"use client";

import { useEffect, useRef, useState } from "react";

const WA_LINK =
  "https://wa.me/15556365962?text=Ol%C3%A1%2C+quero+usar+o+Simplou";

const demoMessages = [
  { type: "sent", text: "Ganhei 350 hoje" },
  { type: "received", text: "✅ *Receita registrada!*\nUber — R$ 350,00" },
  { type: "sent", text: "Abasteci 120" },
  { type: "received", text: "✅ *Despesa registrada!*\nCombustível — R$ 120,00" },
  { type: "sent", text: "Quanto lucrei hoje?" },
  {
    type: "received",
    text: "📊 *Resumo do dia:*\n💰 Receitas: R$ 350,00\n📉 Custos: R$ 120,00\n\n💵 *Lucro real: R$ 230,00*",
  },
];

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function DemoWhatsApp() {
  const [visible, setVisible] = useState<boolean[]>(new Array(demoMessages.length).fill(false));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timeouts: NodeJS.Timeout[] = [];
    demoMessages.forEach((_, i) => {
      const t = setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 1000);
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, [started]);

  return (
    <section id="demo" ref={sectionRef} className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Como funciona na prática
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Só manda mensagem. <span className="text-green-500">O Simplou faz o resto.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Sem menus, sem formulários. Fala como você fala e o bot entende.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Chat mockup */}
          <div className="w-full max-w-xs mx-auto lg:mx-0 flex-shrink-0">
            <div className="relative bg-gray-200 rounded-[36px] p-3 shadow-2xl shadow-black/30">
              <div className="bg-gray-300 rounded-[28px] overflow-hidden">
                {/* Status bar */}
                <div className="bg-[#075E54] px-4 py-1 flex items-center justify-between">
                  <span className="text-white text-[10px] font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[3, 4, 4, 3].map((h, i) => (
                        <div key={i} className={`w-0.5 bg-white rounded-sm`} style={{ height: `${h * 3}px` }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* WhatsApp header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Simplou</p>
                    <p className="text-green-200 text-xs">online</p>
                  </div>
                </div>

                {/* Chat area */}
                <div
                  className="bg-[#ECE5DD] p-3 flex flex-col gap-2"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9c3bc' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    minHeight: "280px",
                  }}
                >
                  {demoMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex transition-all duration-500 ${msg.type === "sent" ? "justify-end" : "justify-start"} ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                    >
                      <div
                        className={`max-w-[88%] px-3 py-2 text-xs leading-relaxed shadow-sm ${msg.type === "sent" ? "chat-bubble-sent text-gray-800" : "chat-bubble-received text-gray-800"}`}
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

                {/* Input bar */}
                <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
                  <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-gray-400 text-xs">
                    Mensagem...
                  </div>
                  <div className="w-7 h-7 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Callouts */}
          <div className="flex-1 space-y-6">
            {[
              {
                emoji: "💬",
                title: "Fala como você fala",
                desc: '"Ganhei 350 hoje", "abasteci 120", "paguei pedágio 8" — sem comando especial, sem menu, sem tutorial.',
              },
              {
                emoji: "⚡",
                title: "Registro em segundos",
                desc: "Manda a mensagem enquanto espera o próximo pedido. Leva menos tempo do que travar no sinal.",
              },
              {
                emoji: "💵",
                title: "Lucro real na hora",
                desc: "O bot soma tudo, desconta os custos e te mostra quanto sobrou de verdade — não o quanto você faturou.",
              },
              {
                emoji: "📱",
                title: "Sem app para instalar",
                desc: "Funciona direto no WhatsApp que você já usa. Sem senha nova, sem espaço no celular.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                  {item.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md shadow-green-500/20 mt-4"
            >
              <WhatsAppIcon />
              Testar agora — é grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
