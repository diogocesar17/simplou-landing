const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Motorista Uber • São Paulo, SP",
    avatar: "CE",
    avatarBg: "bg-blue-500",
    stars: 5,
    text: "Cara, eu achava que tava ganhando bem. Depois de 2 semanas usando o Simplou, descobri que meu lucro real era quase 40% menos do que eu pensava. Agora sei exatamente o que compensa. Mudou o jogo.",
    highlight: "lucro real era quase 40% menos do que eu pensava",
  },
  {
    name: "Rodrigo Santana",
    role: "Entregador iFood + Rappi • Belo Horizonte, MG",
    avatar: "RS",
    avatarBg: "bg-orange-500",
    stars: 5,
    text: "O que mais gostei é que não precisa instalar nada. Já tenho o WhatsApp, mando mensagem e pronto. Minha esposa ficou braba comigo porque fiquei mostrando o lucro do dia pra ela todo dia kkk",
    highlight: "não precisa instalar nada",
  },
  {
    name: "Marcos Vinicius",
    role: "Motorista 99 + Uber • Rio de Janeiro, RJ",
    avatar: "MV",
    avatarBg: "bg-purple-500",
    stars: 5,
    text: "Eu tentei planilha no Google, aplicativo de finanças, nada ficava. Com o Simplou é diferente porque eu mando a mensagem enquanto tô esperando passageiro. Natural demais. Beta tá incrível, mal posso esperar o Pro.",
    highlight: "mando a mensagem enquanto tô esperando passageiro",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function highlightText(text: string, highlight: string) {
  if (!highlight) return text;
  const parts = text.split(highlight);
  return (
    <>
      {parts[0]}
      <mark className="bg-green-100 text-green-800 rounded px-0.5 not-italic">
        {highlight}
      </mark>
      {parts[1]}
    </>
  );
}

export default function ProvasSocial() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Motoristas que já usam o Simplou
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto">
            Beta fechado com motoristas reais. Veja o que eles estão falando.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{highlightText(t.text, t.highlight)}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div
                  className={`w-10 h-10 ${t.avatarBg} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-bold text-sm">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "4.9★", label: "Avaliação média" },
  { value: "100%", label: "No WhatsApp" },
  { value: "0", label: "Apps para instalar" },
  { value: "R$ 0", label: "Para começar" },
];
