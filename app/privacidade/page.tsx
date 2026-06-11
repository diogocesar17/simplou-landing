import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade e Termos de Uso — Simplou",
  description:
    "Saiba como o Simplou coleta, usa e protege seus dados, e quais são as regras de uso do serviço.",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors mb-12"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar para o início
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-white font-bold text-xl">Simplou</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Política de Privacidade e Termos de Uso
          </h1>
          <p className="mt-3 text-slate-400 text-sm">
            Versão 1.0 &mdash; Vigente a partir de 1º de junho de 2026
          </p>
        </div>

        <div className="space-y-16">
          {/* ── POLÍTICA DE PRIVACIDADE ── */}
          <section>
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-8">
              Política de Privacidade
            </h2>

            <p className="mb-8 leading-relaxed">
              Esta Política explica, de forma clara, quais dados o Simplou
              coleta quando você usa o nosso bot pelo WhatsApp, como usamos
              essas informações e quais são os seus direitos. Escrevemos em
              linguagem simples de propósito: queremos que você entenda, de
              verdade, o que acontece com os seus dados.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  1. O que coletamos
                </h3>
                <p className="mb-3 leading-relaxed">
                  Coletamos apenas o que é necessário para o serviço funcionar:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    "Nome e número de telefone do WhatsApp — para identificar sua conta.",
                    "Lançamentos financeiros que você registra (receitas e despesas) — para calcular seu lucro real.",
                    "Metas financeiras (diária, semanal e mensal) que você define.",
                    "Perfil de motorista — tipo de trabalho, veículo, consumo de combustível e plataformas utilizadas.",
                    "Custos fixos mensais ou anuais que você cadastra (seguro, IPVA, manutenção etc.).",
                    "Configurações de cartões de crédito/débito cadastrados no bot.",
                    "Lembretes de pagamento que você cria.",
                    "Preferência de moeda (BRL, EUR, USD, GBP).",
                    "Histórico de uso — quais comandos você utiliza e quando.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                  <p className="text-sm font-medium text-white mb-2">
                    O que não coletamos
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Não coletamos senhas, CPF, dados bancários diretos,
                    localização em tempo real, fotos ou vídeos.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  2. Como usamos seus dados
                </h3>
                <p className="mb-3 leading-relaxed">
                  Usamos suas informações exclusivamente para:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    "Calcular e exibir seu lucro real, resumos e relatórios financeiros.",
                    "Enviar os lembretes de pagamento que você mesmo configurou.",
                    "Melhorar o serviço com base nos padrões gerais de uso (de forma agregada, sem identificar você individualmente).",
                    "Comunicar mudanças importantes no serviço.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-relaxed text-sm text-slate-400">
                  A base legal para o tratamento é o seu{" "}
                  <strong className="text-slate-300">consentimento</strong>{" "}
                  (art. 7º, I da LGPD), manifestado ao iniciar o uso do bot, e
                  o{" "}
                  <strong className="text-slate-300">
                    legítimo interesse
                  </strong>{" "}
                  (art. 7º, IX da LGPD) para as operações necessárias ao
                  funcionamento do serviço.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  3. Com quem compartilhamos
                </h3>
                <p className="leading-relaxed mb-5">
                  Não vendemos, alugamos nem compartilhamos seus dados pessoais
                  com terceiros para fins comerciais. Seus dados podem ser
                  processados pelos seguintes tipos de provedores,
                  exclusivamente para viabilizar o funcionamento do serviço e
                  sempre sob obrigação de confidencialidade:
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                    <p className="text-sm font-medium text-white mb-1">
                      Infraestrutura (hospedagem e banco de dados)
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      Servidores que armazenam seus dados e mantêm o serviço
                      em operação.
                    </p>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                    <p className="text-sm font-medium text-white mb-1">
                      Provedores de inteligência artificial
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      Determinadas funcionalidades utilizam provedores de
                      inteligência artificial para processar solicitações dos
                      usuários — como a categorização automática de
                      lançamentos financeiros. O conteúdo das mensagens pode
                      ser transmitido a esses provedores exclusivamente para
                      fins de processamento, sendo vedado o uso para qualquer
                      outra finalidade. Esses provedores podem estar
                      localizados fora do Brasil, o que caracteriza
                      transferência internacional de dados nos termos da LGPD.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Podemos divulgar informações quando exigido por lei ou ordem
                  judicial.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  4. Por quanto tempo guardamos
                </h3>
                <p className="leading-relaxed">
                  Mantemos seus dados enquanto sua conta estiver ativa. Após a
                  exclusão da conta, os dados pessoais são removidos em até{" "}
                  <strong className="text-white">30 dias</strong>. Registros
                  anonimizados e agregados podem ser mantidos por prazo
                  indeterminado para fins estatísticos.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  5. Seus direitos (LGPD)
                </h3>
                <p className="mb-4 leading-relaxed">
                  Você tem os seguintes direitos sobre seus dados, garantidos
                  pela Lei Geral de Proteção de Dados (Lei 13.709/2018):
                </p>
                <div className="space-y-3">
                  {[
                    {
                      direito: "Excluir sua conta e todos os seus dados",
                      como: 'Envie o comando "excluir minha conta" no bot.',
                    },
                    {
                      direito: "Exportar seus dados",
                      como: 'Envie o comando "exportar meus dados" no bot.',
                    },
                    {
                      direito:
                        "Saber quais dados temos sobre você, corrigir informações incorretas ou revogar o consentimento",
                      como: "Entre em contato pelo e-mail contato@simplou.com.",
                    },
                  ].map(({ direito, como }) => (
                    <div
                      key={direito}
                      className="bg-slate-800/60 border border-slate-700 rounded-xl p-4"
                    >
                      <p className="text-sm font-medium text-white mb-1">
                        {direito}
                      </p>
                      <p className="text-sm text-slate-400">{como}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Respondemos a solicitações de direitos em até{" "}
                  <strong className="text-slate-300">15 dias úteis</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  6. Contato
                </h3>
                <p className="leading-relaxed">
                  Para qualquer dúvida sobre privacidade ou sobre o tratamento
                  dos seus dados, entre em contato:
                </p>
                <div className="mt-4 bg-slate-800/60 border border-slate-700 rounded-xl p-4 space-y-1">
                  <p className="text-sm text-white font-medium">Simplou</p>
                  <p className="text-sm text-slate-400">
                    E-mail:{" "}
                    <a
                      href="mailto:contato@simplou.com"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      contato@simplou.com
                    </a>
                  </p>
                  <p className="text-sm text-slate-400">
                    Site:{" "}
                    <a
                      href="https://simplou.com"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      simplou.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── TERMOS DE USO ── */}
          <section>
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-8">
              Termos de Uso
            </h2>

            <p className="mb-8 leading-relaxed">
              Ao usar o Simplou, você concorda com estes Termos. Leia com
              atenção — são simples e diretos.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  1. Uso aceitável
                </h3>
                <p className="mb-3 leading-relaxed">
                  O Simplou é um serviço para uso pessoal e individual. Ao
                  usar o bot, você se compromete a:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    "Usar o serviço apenas para fins lícitos e pessoais.",
                    "Não tentar burlar, sobrecarregar ou comprometer a segurança do sistema.",
                    "Não usar o bot para registrar dados falsos com a intenção de prejudicar terceiros.",
                    "Não revender, licenciar ou redistribuir o acesso ao serviço.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  2. Limitações do serviço
                </h3>
                <div className="bg-slate-800/60 border border-amber-500/30 rounded-xl p-5">
                  <p className="text-amber-400 font-semibold text-sm mb-2">
                    Aviso importante
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    O Simplou é uma ferramenta de organização financeira
                    pessoal. Ele{" "}
                    <strong className="text-white">
                      não é um serviço de consultoria financeira, contábil ou
                      tributária
                    </strong>
                    . As informações exibidas são calculadas com base nos dados
                    que você mesmo registra e não substituem a orientação de um
                    profissional especializado.
                  </p>
                </div>
                <ul className="mt-4 space-y-2 list-none pl-0">
                  {[
                    "O serviço é fornecido no estado em que se encontra, sem garantia de disponibilidade ininterrupta.",
                    "Estamos em fase beta — funcionalidades podem mudar, ser adicionadas ou removidas.",
                    "O Simplou não se responsabiliza por decisões financeiras tomadas com base nos dados exibidos.",
                    "A precisão dos relatórios depende inteiramente dos lançamentos feitos por você.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  3. Suspensão de conta
                </h3>
                <p className="leading-relaxed">
                  Nos reservamos o direito de suspender ou encerrar o acesso de
                  qualquer usuário que viole estes Termos, utilize o serviço de
                  forma abusiva ou tente comprometer a segurança e estabilidade
                  do sistema. Em casos de abuso evidente, a suspensão pode
                  ocorrer sem aviso prévio. Para contestar uma suspensão, entre
                  em contato pelo e-mail{" "}
                  <a
                    href="mailto:contato@simplou.com"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    contato@simplou.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  4. Alterações nos termos
                </h3>
                <p className="leading-relaxed">
                  Podemos atualizar estes Termos e a Política de Privacidade a
                  qualquer momento. Quando isso acontecer, atualizaremos a data
                  de vigência no topo desta página e, sempre que possível,
                  notificaremos os usuários ativos pelo próprio bot. O uso
                  continuado do serviço após as alterações implica concordância
                  com os novos termos. Caso não concorde, você pode encerrar
                  sua conta pelo comando{" "}
                  <code className="bg-slate-800 text-green-400 px-1.5 py-0.5 rounded text-sm">
                    excluir minha conta
                  </code>{" "}
                  no bot.
                </p>
              </div>
            </div>
          </section>

          {/* ── RODAPÉ ── */}
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Versão 1.0 &mdash; Vigente a partir de 1º de junho de 2026
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Voltar para o início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
