"use client";

import { useState } from "react";

const faqs = [
  {
    q: "É realmente de graça? Não tem pegadinha?",
    a: "Durante a fase beta, sim — sem pegadinha e sem cartão de crédito. Todas as funcionalidades estão disponíveis gratuitamente enquanto durar o beta, incluindo áudio e análise por IA. Após o beta, o Simplou terá um plano pago com acesso completo. Quem participar do beta terá condições especiais.",
  },
  {
    q: "Precisa instalar algum aplicativo?",
    a: "Não. Funciona 100% no WhatsApp que você já tem no celular. Você salva o número do Simplou nos seus contatos e começa a mandar mensagem. Pronto. Sem download, sem senha nova, sem tutorial de 30 minutos.",
  },
  {
    q: "Funciona pra entregador também ou é só pra motorista?",
    a: "Funciona para os dois. Motoristas de Uber, 99 e apps de transporte podem registrar corridas. Entregadores de iFood, Rappi, Loggi e similares podem registrar entregas e pedidos. O bot entende os dois contextos e calcula o lucro real em ambos os casos.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Seus dados de ganhos e custos são armazenados com criptografia e nunca são compartilhados com terceiros. Você pode solicitar a exclusão de todos os seus dados a qualquer momento mandando uma mensagem para o bot ou pelo e-mail contato@simplou.com.",
  },
  {
    q: "O bot entende mensagem de áudio? Tenho dificuldade para digitar enquanto dirijo.",
    a: "Sim! Durante o beta você pode mandar áudio e o bot transcreve e registra automaticamente. Também é possível enviar foto de comprovantes — o bot lê e registra o valor. Após o beta, esses recursos farão parte do plano pago.",
  },
];

function FAQItem({ faq, isOpen, onClick }: {
  faq: typeof faqs[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-sm sm:text-base">{faq.q}</span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 bg-white">
          <div className="h-px bg-slate-100 mb-4" />
          <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-slate-600">
            Alguma dúvida não respondida aqui? Manda mensagem em{" "}
            <a href="mailto:contato@simplou.com" className="text-green-600 hover:underline font-medium">
              contato@simplou.com
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
