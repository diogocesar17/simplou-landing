const WA_LINK =
  "https://wa.me/556199249129?text=Ol%C3%A1%2C+quero+usar+o+Simplou";

const perfis = [
  {
    emoji: "🚗",
    titulo: "Motoristas Uber",
    desc: "Registra corridas, acompanha lucro por turno e desconta automaticamente gasolina e pedágio.",
  },
  {
    emoji: "🚙",
    titulo: "Motoristas 99",
    desc: "Mesmo fluxo — fala '99' na mensagem e o bot categoriza certo, sem configuração.",
  },
  {
    emoji: "🛵",
    titulo: "Entregadores iFood",
    desc: "Registra cada entrega, acompanha ganhos por hora e sabe se o dia valeu a pena.",
  },
  {
    emoji: "📦",
    titulo: "Entregadores Rappi",
    desc: "Controle de ganhos, custos de deslocamento e lucro real no final de cada turno.",
  },
  {
    emoji: "📬",
    titulo: "Entregadores Loggi",
    desc: "Registro simples de entregas e custos operacionais sem sair do WhatsApp.",
  },
  {
    emoji: "🏍️",
    titulo: "Autônomos em geral",
    desc: "Qualquer profissional que depende do veículo para trabalhar e quer saber o que realmente sobra.",
  },
];

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function PublicoAlvo() {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Para quem é
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Feito para quem vive na rua trabalhando.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            O Simplou foi construído pensando na rotina de quem trabalha com aplicativo — não para executivos em frente ao computador.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {perfis.map((perfil, i) => (
            <div
              key={i}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-green-500/40 transition-colors"
            >
              <div className="text-4xl mb-4">{perfil.emoji}</div>
              <h3 className="font-bold text-white text-lg mb-2">{perfil.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{perfil.desc}</p>
            </div>
          ))}
        </div>

        {/* Beta callout */}
        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Fase beta aberta
          </div>
          <h3 className="text-white font-black text-2xl mb-3">
            Estamos selecionando os primeiros 50 usuários para testar gratuitamente.
          </h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Seja um dos primeiros motoristas a usar o Simplou. Acesso completo, sem custo, durante toda a fase beta.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-green-500/20"
          >
            <WhatsAppIcon />
            Quero participar da fase beta
          </a>
        </div>
      </div>
    </section>
  );
}
