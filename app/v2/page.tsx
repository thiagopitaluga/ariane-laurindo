import type { Metadata } from "next";
import Image from "next/image";
import "./v2.css";

const whatsappNumber = "5511949690737";

const messages = {
  general:
    "Olá, Ariane! Conheci seu trabalho pela nova página e quero conversar sobre imóveis de alto padrão em Alphaville.",
  buy:
    "Olá, Ariane! Quero uma curadoria de imóveis de alto padrão para comprar em Alphaville ou Barueri.",
  sell:
    "Olá, Ariane! Quero conversar sobre uma estratégia para vender meu imóvel em Alphaville ou Barueri.",
  invest:
    "Olá, Ariane! Quero avaliar oportunidades de investimento imobiliário de alto padrão na região de Alphaville.",
};

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ariane-laurindo.vercel.app";

export const metadata: Metadata = {
  title: "Consultoria Imobiliária de Alto Padrão em Alphaville",
  description:
    "Ariane Laurindo oferece curadoria, estratégia e negociação para compra, venda e investimento em imóveis de alto padrão em Alphaville e Barueri.",
  alternates: { canonical: "/v2" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/v2",
    title: "Ariane Laurindo | Imóveis de Alto Padrão em Alphaville",
    description:
      "Consultoria imobiliária pessoal, criteriosa e estratégica para decisões de alto valor.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ariane Laurindo, consultora imobiliária em Alphaville e Barueri",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Ariane Laurindo",
  description:
    "Consultoria imobiliária de alto padrão para compra, venda e investimento em Alphaville, Barueri e região.",
  url: `${siteUrl}/v2`,
  telephone: "+55 11 94969-0737",
  image: `${siteUrl}/images/ariane-hero.webp`,
  areaServed: [
    { "@type": "Place", name: "Alphaville, Barueri - SP" },
    { "@type": "City", name: "Barueri - SP" },
  ],
  knowsAbout: [
    "Imóveis de alto padrão em Alphaville",
    "Casas em condomínios",
    "Estratégia de venda imobiliária",
    "Investimento imobiliário",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 11 94969-0737",
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Em quais regiões Ariane Laurindo atua?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A atuação é concentrada em Alphaville, Barueri e região, com foco em imóveis residenciais de alto padrão.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a curadoria de imóveis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ariane entende o momento, as prioridades e os critérios do cliente, pesquisa o mercado e apresenta apenas oportunidades coerentes com o perfil definido.",
      },
    },
    {
      "@type": "Question",
      name: "A consultoria também atende proprietários que desejam vender?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O trabalho inclui posicionamento do imóvel, apresentação, estratégia comercial, qualificação de interessados e acompanhamento da negociação.",
      },
    },
  ],
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function ArianeV2() {
  return (
    <main className="v2" id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      <a className="v2-skip" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="v2-header" aria-label="Navegação principal">
        <a className="v2-brand" href="#inicio" aria-label="Ariane Laurindo, início">
          <span className="v2-brand-mark">AL</span>
          <span className="v2-brand-copy">
            <strong>Ariane Laurindo</strong>
            <small>Real estate advisory</small>
          </span>
        </a>
        <nav className="v2-nav" aria-label="Seções da página">
          <a href="#consultoria">Consultoria</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#sobre">Ariane</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a
          className="v2-header-cta"
          href={whatsappLink(messages.general)}
          target="_blank"
          rel="noreferrer"
        >
          <span>Conversar</span>
          <Arrow />
        </a>
      </header>

      <section className="v2-hero" aria-labelledby="v2-hero-title">
        <Image
          className="v2-hero-image"
          src="/images/ariane-hero.webp"
          alt="Ariane Laurindo em um imóvel contemporâneo de alto padrão"
          fill
          priority
          quality={88}
          sizes="100vw"
        />
        <div className="v2-hero-overlay" aria-hidden="true" />
        <div className="v2-hero-content v2-width">
          <p className="v2-kicker">
            <span>01</span>
            <i />
            Alphaville · Barueri
          </p>
          <h1 id="v2-hero-title">
            Ariane Laurindo.
            <em>Imóveis de alto padrão, escolhidos com critério.</em>
          </h1>
          <div className="v2-hero-action">
            <p>
              Curadoria imobiliária para quem valoriza tempo, discrição e uma
              decisão bem conduzida do primeiro contato à assinatura.
            </p>
            <a
              className="v2-button v2-button-dark"
              href={whatsappLink(messages.buy)}
              target="_blank"
              rel="noreferrer"
            >
              Encontrar meu imóvel
              <Arrow />
            </a>
          </div>
          <div className="v2-hero-meta" aria-label="Áreas de atendimento">
            <span>Compra</span>
            <span>Venda</span>
            <span>Investimento</span>
          </div>
        </div>
        <a className="v2-scroll" href="#conteudo">
          Descobrir a consultoria <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="v2-opening v2-width" id="conteudo">
        <div className="v2-label">
          <span>02</span>
          <i />
          <p>Decisões de alto valor</p>
        </div>
        <div className="v2-opening-copy">
          <h2>
            O verdadeiro luxo é ter <em>clareza para escolher.</em>
          </h2>
          <p>
            Um bom imóvel precisa funcionar para a sua rotina, proteger o seu
            patrimônio e fazer sentido no tempo. Ariane organiza cada variável
            para que a decisão deixe de ser uma busca cansativa e se torne um
            processo seguro, objetivo e pessoal.
          </p>
        </div>
        <div className="v2-opening-note">
          <strong>Atendimento pessoal</strong>
          <span>Uma consultora ao seu lado em cada etapa.</span>
        </div>
      </section>

      <section className="v2-paths" id="consultoria" aria-labelledby="v2-paths-title">
        <div className="v2-width">
          <div className="v2-paths-heading">
            <div className="v2-label v2-label-light">
              <span>03</span>
              <i />
              <p>Seu objetivo</p>
            </div>
            <h2 id="v2-paths-title">
              Cada movimento pede uma <em>estratégia própria.</em>
            </h2>
          </div>

          <div className="v2-path-grid">
            <article className="v2-path-card">
              <div className="v2-path-index">01 / Comprar</div>
              <h3>Encontrar o imóvel certo.</h3>
              <p>
                Uma seleção criteriosa, baseada no seu estilo de vida, momento,
                prioridades e expectativas de valorização.
              </p>
              <ul>
                <li>Leitura de perfil</li>
                <li>Curadoria de oportunidades</li>
                <li>Visitas qualificadas</li>
              </ul>
              <a href={whatsappLink(messages.buy)} target="_blank" rel="noreferrer">
                Iniciar minha busca <Arrow />
              </a>
            </article>

            <article className="v2-path-card v2-path-card-featured">
              <div className="v2-path-index">02 / Vender</div>
              <h3>Posicionar para vender melhor.</h3>
              <p>
                Estratégia de apresentação e negociação para colocar o seu
                imóvel diante das pessoas certas, com valor percebido.
              </p>
              <ul>
                <li>Análise de posicionamento</li>
                <li>Apresentação comercial</li>
                <li>Condução da negociação</li>
              </ul>
              <a href={whatsappLink(messages.sell)} target="_blank" rel="noreferrer">
                Avaliar meu imóvel <Arrow />
              </a>
            </article>

            <article className="v2-path-card">
              <div className="v2-path-index">03 / Investir</div>
              <h3>Transformar leitura em oportunidade.</h3>
              <p>
                Decisões orientadas por localização, liquidez, contexto de
                mercado e potencial de valorização patrimonial.
              </p>
              <ul>
                <li>Contexto de mercado</li>
                <li>Potencial patrimonial</li>
                <li>Acompanhamento próximo</li>
              </ul>
              <a href={whatsappLink(messages.invest)} target="_blank" rel="noreferrer">
                Avaliar oportunidades <Arrow />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="v2-method v2-width" aria-labelledby="v2-method-title">
        <div className="v2-method-top">
          <div className="v2-label">
            <span>04</span>
            <i />
            <p>Como funciona</p>
          </div>
          <h2 id="v2-method-title">
            Menos ruído. Mais <em>confiança em cada passo.</em>
          </h2>
          <p>
            Um método simples na forma e profundo na análise, desenhado para
            proteger o seu tempo e elevar a qualidade da decisão.
          </p>
        </div>
        <ol className="v2-method-grid">
          <li>
            <span>01</span>
            <h3>Diagnóstico</h3>
            <p>Objetivos, critérios e prioridades transformados em direção.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Curadoria</h3>
            <p>Mercado filtrado para revelar somente o que merece atenção.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Experiência</h3>
            <p>Visitas contextualizadas, comparações claras e orientação real.</p>
          </li>
          <li>
            <span>04</span>
            <h3>Negociação</h3>
            <p>Condução atenta até que cada detalhe esteja bem resolvido.</p>
          </li>
        </ol>
      </section>

      <section className="v2-portfolio" id="portfolio" aria-labelledby="v2-portfolio-title">
        <div className="v2-portfolio-heading v2-width">
          <div className="v2-label">
            <span>05</span>
            <i />
            <p>Viver Alphaville</p>
          </div>
          <h2 id="v2-portfolio-title">
            Espaços que traduzem <em>um jeito de viver.</em>
          </h2>
          <p>
            Arquitetura, privacidade e bem-estar reunidos em uma curadoria que
            começa pelo que importa para você.
          </p>
        </div>
        <div className="v2-gallery">
          <figure className="v2-gallery-main">
            <Image
              src="/images/casa-alphaville-fachada.jpg"
              alt="Casa contemporânea com piscina em Alphaville"
              fill
              sizes="(max-width: 760px) 100vw, 58vw"
              quality={82}
            />
            <figcaption>
              <span>01 · Arquitetura</span>
              <strong>Presença sem excessos.</strong>
            </figcaption>
          </figure>
          <div className="v2-gallery-side">
            <figure>
              <Image
                src="/images/casa-alphaville-interior.jpg"
                alt="Interior integrado e iluminado de imóvel em Alphaville"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                quality={82}
              />
              <figcaption>
                <span>02 · Interiores</span>
                <strong>Conforto que se percebe.</strong>
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/images/casa-alphaville-piscina.jpg"
                alt="Área de lazer com piscina privativa"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                quality={82}
              />
              <figcaption>
                <span>03 · Bem-estar</span>
                <strong>Tempo bem vivido.</strong>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="v2-portfolio-action v2-width">
          <p>Receba uma seleção compatível com o seu perfil.</p>
          <a
            className="v2-button v2-button-outline"
            href={whatsappLink(messages.buy)}
            target="_blank"
            rel="noreferrer"
          >
            Pedir uma curadoria <Arrow />
          </a>
        </div>
      </section>

      <section className="v2-authority" id="sobre" aria-labelledby="v2-about-title">
        <div className="v2-authority-grid v2-width">
          <div className="v2-award-image">
            <Image
              src="/images/premiacao-2025.jpg"
              alt="Ariane Laurindo recebendo a premiação Melhores do Ano 2025"
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
              quality={84}
            />
            <div className="v2-award-stamp">
              <span>Reconhecimento</span>
              <strong>Melhores do Ano</strong>
              <b>2025</b>
            </div>
          </div>
          <div className="v2-about-copy">
            <div className="v2-label v2-label-light">
              <span>06</span>
              <i />
              <p>Sobre Ariane</p>
            </div>
            <h2 id="v2-about-title">
              Técnica para negociar. <em>Sensibilidade para compreender.</em>
            </h2>
            <p className="v2-about-lead">
              Ariane Laurindo é consultora imobiliária RE/MAX com atuação em
              Alphaville, Barueri e região.
            </p>
            <p>
              Seu trabalho combina conhecimento local, escuta atenta e presença
              em todas as etapas. Porque um imóvel de alto padrão não se resume
              à metragem ou ao endereço: ele precisa estar alinhado à vida que o
              cliente quer construir.
            </p>
            <blockquote>
              “Meu compromisso é conduzir cada escolha com clareza, cuidado e a
              segurança que uma decisão tão importante merece.”
            </blockquote>
            <a
              className="v2-text-link"
              href={whatsappLink(messages.general)}
              target="_blank"
              rel="noreferrer"
            >
              Falar diretamente com a Ariane <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="v2-faq v2-width" id="duvidas" aria-labelledby="v2-faq-title">
        <div className="v2-faq-intro">
          <div className="v2-label">
            <span>07</span>
            <i />
            <p>Perguntas frequentes</p>
          </div>
          <h2 id="v2-faq-title">
            Antes da primeira <em>conversa.</em>
          </h2>
          <p>
            O atendimento começa com contexto. Aqui estão respostas para as
            dúvidas mais comuns.
          </p>
        </div>
        <div className="v2-faq-list">
          <details>
            <summary>
              <span>01</span>
              Em quais regiões a Ariane atua?
              <b aria-hidden="true">+</b>
            </summary>
            <p>
              O atendimento é concentrado em Alphaville, Barueri e região, com
              conhecimento das características e oportunidades do mercado local.
            </p>
          </details>
          <details>
            <summary>
              <span>02</span>
              Como funciona a curadoria de imóveis?
              <b aria-hidden="true">+</b>
            </summary>
            <p>
              Depois de entender perfil, momento e prioridades, Ariane pesquisa
              o mercado e apresenta somente opções coerentes com os critérios
              definidos.
            </p>
          </details>
          <details>
            <summary>
              <span>03</span>
              Também posso anunciar meu imóvel?
              <b aria-hidden="true">+</b>
            </summary>
            <p>
              Sim. A consultoria inclui estratégia de posicionamento,
              apresentação comercial, qualificação de interessados e condução da
              negociação.
            </p>
          </details>
          <details>
            <summary>
              <span>04</span>
              A primeira conversa tem compromisso?
              <b aria-hidden="true">+</b>
            </summary>
            <p>
              Não. O primeiro contato serve para compreender a sua necessidade e
              indicar o caminho mais adequado para seguir.
            </p>
          </details>
        </div>
      </section>

      <section className="v2-final" aria-labelledby="v2-final-title">
        <Image
          src="/images/ariane-hero.webp"
          alt=""
          fill
          sizes="100vw"
          quality={78}
        />
        <div className="v2-final-overlay" aria-hidden="true" />
        <div className="v2-final-content v2-width">
          <div className="v2-label v2-label-light">
            <span>08</span>
            <i />
            <p>Seu próximo movimento</p>
          </div>
          <h2 id="v2-final-title">
            A escolha certa começa com uma <em>conversa bem conduzida.</em>
          </h2>
          <p>
            Conte à Ariane o que você procura. Em poucos minutos, vocês definem
            o melhor caminho para comprar, vender ou investir.
          </p>
          <a
            className="v2-button v2-button-light"
            href={whatsappLink(messages.general)}
            target="_blank"
            rel="noreferrer"
          >
            Conversar com a Ariane <Arrow />
          </a>
        </div>
      </section>

      <footer className="v2-footer">
        <div className="v2-footer-top v2-width">
          <a className="v2-brand" href="#inicio">
            <span className="v2-brand-mark">AL</span>
            <span className="v2-brand-copy">
              <strong>Ariane Laurindo</strong>
              <small>Consultora imobiliária · RE/MAX</small>
            </span>
          </a>
          <p>
            Curadoria imobiliária para compra, venda e investimento em
            Alphaville, Barueri e região.
          </p>
          <div className="v2-footer-links">
            <a href="#consultoria">Consultoria</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#sobre">Ariane</a>
            <a href={whatsappLink(messages.general)} target="_blank" rel="noreferrer">
              WhatsApp <Arrow />
            </a>
          </div>
        </div>
        <div className="v2-footer-bottom v2-width">
          <span>© {new Date().getFullYear()} Ariane Laurindo</span>
          <span>Alphaville · Barueri · São Paulo</span>
          <span>Disponibilidade sujeita a confirmação</span>
        </div>
      </footer>

      <a
        className="v2-whatsapp"
        href={whatsappLink(messages.general)}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com Ariane Laurindo pelo WhatsApp"
      >
        <span aria-hidden="true">WA</span>
        <strong>Falar com a Ariane</strong>
        <Arrow />
      </a>
    </main>
  );
}
