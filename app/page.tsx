const whatsappNumber = "5511949690737";

const whatsappMessages = {
  general:
    "Olá, Ariane! Quero conversar sobre meu próximo imóvel em Alphaville ou Barueri.",
  comprar:
    "Olá, Ariane! Quero encontrar um imóvel para comprar em Alphaville ou Barueri.",
  vender:
    "Olá, Ariane! Quero uma orientação para vender meu imóvel em Alphaville ou Barueri.",
  investir:
    "Olá, Ariane! Quero avaliar oportunidades de investimento imobiliário na região de Alphaville.",
};

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ariane-laurindo.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Ariane Laurindo",
  description:
    "Consultora imobiliária RE/MAX para compra, venda e investimento em casas, apartamentos e terrenos em Alphaville, Barueri e região.",
  url: siteUrl,
  telephone: "+55 11 94969-0737",
  image: `${siteUrl}/images/ariane-hero.webp`,
  areaServed: [
    { "@type": "Place", name: "Alphaville, Barueri - SP" },
    { "@type": "City", name: "Barueri - SP" },
  ],
  knowsAbout: [
    "Imóveis em Alphaville",
    "Casas em condomínios",
    "Apartamentos",
    "Terrenos",
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
        text: "A atuação é focada em Alphaville, Barueri e região, com atendimento para casas, apartamentos e terrenos.",
      },
    },
    {
      "@type": "Question",
      name: "Ariane atende quem quer comprar e quem quer vender?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A consultoria atende compradores, proprietários que desejam vender e pessoas que avaliam oportunidades de investimento imobiliário.",
      },
    },
    {
      "@type": "Question",
      name: "Como começar o atendimento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Envie uma mensagem pelo WhatsApp contando seu objetivo. Ariane faz uma conversa inicial para entender perfil, momento e prioridades.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      <header className="site-header" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Ariane Laurindo, início">
          <span className="brand-mark">AL</span>
          <span>
            <strong>Ariane Laurindo</strong>
            <small>Consultora Imobiliária • RE/MAX</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Seções da página">
          <a href="#consultoria">Consultoria</a>
          <a href="#imoveis">Imóveis</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a
          className="header-cta"
          href={whatsappLink(whatsappMessages.general)}
          target="_blank"
          rel="noreferrer"
        >
          Falar no WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/images/ariane-hero.webp"
            alt=""
            width="1942"
            height="809"
            fetchPriority="high"
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Imóveis em Alphaville &amp; Barueri</p>
          <h1>
            Seu próximo imóvel merece mais do que uma busca.
            <em>Merece uma estratégia.</em>
          </h1>
          <p className="hero-copy">
            Curadoria imobiliária para quem quer escolher com clareza, negociar
            com segurança e encontrar um imóvel à altura do seu momento.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={whatsappLink(whatsappMessages.comprar)}
              target="_blank"
              rel="noreferrer"
            >
              Quero encontrar meu imóvel <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#consultoria">
              Entender a consultoria <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ul className="hero-proof" aria-label="Tipos de imóveis atendidos">
            <li>Casas</li>
            <li>Apartamentos</li>
            <li>Terrenos</li>
          </ul>
        </div>
        <div className="hero-signature">
          <span>Atendimento pessoal</span>
          <strong>Ariane Laurindo</strong>
        </div>
      </section>

      <section className="awareness section" id="consultoria">
        <div className="section-intro">
          <p className="eyebrow eyebrow-dark"><span /> Decisão imobiliária</p>
          <h2>Comprar sem curadoria custa tempo — e pode custar a escolha certa.</h2>
        </div>
        <div className="awareness-content">
          <p className="lead">
            O melhor imóvel nem sempre é o mais anunciado. É o que combina
            localização, momento, documentação e potencial com aquilo que você
            realmente precisa.
          </p>
          <p>
            Por isso, o trabalho começa antes da visita: entender seus critérios,
            filtrar ruído e concentrar sua atenção apenas no que faz sentido.
          </p>
        </div>
      </section>

      <section className="method section section-dark" aria-labelledby="metodo-title">
        <div className="section-intro">
          <p className="eyebrow"><span /> Consultoria de ponta a ponta</p>
          <h2 id="metodo-title">Menos imóveis para visitar. Mais certeza para decidir.</h2>
        </div>
        <div className="method-grid">
          <article>
            <span className="step">01</span>
            <h3>Escuta estratégica</h3>
            <p>Perfil, prioridades, momento e orçamento traduzidos em critérios objetivos.</p>
          </article>
          <article>
            <span className="step">02</span>
            <h3>Curadoria local</h3>
            <p>Seleção de oportunidades em Alphaville, Barueri e região com olhar criterioso.</p>
          </article>
          <article>
            <span className="step">03</span>
            <h3>Visitas que fazem sentido</h3>
            <p>Tempo investido somente em imóveis alinhados ao seu estilo de vida e objetivo.</p>
          </article>
          <article>
            <span className="step">04</span>
            <h3>Negociação acompanhada</h3>
            <p>Orientação próxima em cada etapa, do primeiro contato até a decisão.</p>
          </article>
        </div>
        <a
          className="button button-light"
          href={whatsappLink(whatsappMessages.general)}
          target="_blank"
          rel="noreferrer"
        >
          Conversar sobre o que você procura <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="pathways section" aria-labelledby="objetivo-title">
        <div className="section-intro centered">
          <p className="eyebrow eyebrow-dark"><span /> Seu objetivo</p>
          <h2 id="objetivo-title">Uma conversa certa pode encurtar todo o caminho.</h2>
        </div>
        <div className="pathway-grid">
          <article className="pathway-card">
            <span>01</span>
            <h3>Quero comprar</h3>
            <p>Encontre um imóvel coerente com sua vida, seus planos e o valor que deseja preservar.</p>
            <a href={whatsappLink(whatsappMessages.comprar)} target="_blank" rel="noreferrer">
              Iniciar minha busca <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="pathway-card featured">
            <span>02</span>
            <h3>Quero vender</h3>
            <p>Apresente seu imóvel com posicionamento, clareza e condução profissional da negociação.</p>
            <a href={whatsappLink(whatsappMessages.vender)} target="_blank" rel="noreferrer">
              Falar sobre meu imóvel <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="pathway-card">
            <span>03</span>
            <h3>Quero investir</h3>
            <p>Avalie localização, contexto e potencial antes de transformar oportunidade em decisão.</p>
            <a href={whatsappLink(whatsappMessages.investir)} target="_blank" rel="noreferrer">
              Avaliar oportunidades <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>

      <section className="properties section" id="imoveis" aria-labelledby="imoveis-title">
        <div className="properties-heading">
          <div className="section-intro">
            <p className="eyebrow eyebrow-dark"><span /> Viver bem começa pelo lugar</p>
            <h2 id="imoveis-title">Alphaville do lado de dentro.</h2>
          </div>
          <p>Referências de arquitetura, interiores e lazer que ajudam a visualizar o próximo capítulo.</p>
        </div>
        <div className="property-grid">
          <figure className="property-card property-tall">
            <img src="/images/casa-alphaville-fachada.jpg" alt="Casa contemporânea com piscina e área gourmet" width="1179" height="1590" loading="lazy" />
            <figcaption><span>Arquitetura contemporânea</span><strong>Casas</strong></figcaption>
          </figure>
          <figure className="property-card">
            <img src="/images/casa-alphaville-interior.jpg" alt="Sala ampla integrada à área externa" width="1179" height="1590" loading="lazy" />
            <figcaption><span>Espaços integrados</span><strong>Interiores</strong></figcaption>
          </figure>
          <figure className="property-card">
            <img src="/images/casa-alphaville-piscina.jpg" alt="Piscina privativa com deck de madeira" width="1179" height="1588" loading="lazy" />
            <figcaption><span>Privacidade e bem-estar</span><strong>Lazer</strong></figcaption>
          </figure>
        </div>
        <a
          className="button button-dark"
          href={whatsappLink(whatsappMessages.comprar)}
          target="_blank"
          rel="noreferrer"
        >
          Receber opções alinhadas ao meu perfil <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="videos section section-dark" aria-labelledby="videos-title">
        <div className="videos-heading">
          <div className="section-intro">
            <p className="eyebrow"><span /> Presença e conhecimento</p>
            <h2 id="videos-title">A orientação começa com uma boa conversa.</h2>
          </div>
          <p>Conheça um pouco da forma como Ariane apresenta imóveis e conduz cada atendimento.</p>
        </div>
        <div className="video-grid">
          <figure>
            <video controls playsInline preload="metadata" poster="/images/video-imovel-poster.jpg">
              <source src="/videos/tour-imovel.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
            <figcaption><span>01</span> Tour de imóvel</figcaption>
          </figure>
          <figure>
            <video controls playsInline preload="metadata" poster="/images/video-ariane-poster.jpg">
              <source src="/videos/ariane-mensagem.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
            <figcaption><span>02</span> Uma mensagem da Ariane</figcaption>
          </figure>
        </div>
      </section>

      <section className="about section" id="sobre" aria-labelledby="sobre-title">
        <div className="about-award">
          <img src="/images/premiacao-2025.jpg" alt="Ariane Laurindo recebendo a premiação Melhores do Ano 2025" width="1064" height="1600" loading="lazy" />
          <div className="award-badge"><strong>2025</strong><span>Premiação<br />Melhores do Ano</span></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow eyebrow-dark"><span /> Sobre a consultora</p>
          <h2 id="sobre-title">Estratégia no processo. Sensibilidade na escolha.</h2>
          <p className="lead">Ariane Laurindo é consultora imobiliária RE/MAX com atuação em Alphaville, Barueri e região.</p>
          <p>Seu trabalho une conhecimento local, escuta atenta e acompanhamento próximo para que cada decisão seja tomada com mais clareza e confiança.</p>
          <blockquote>“Não se trata apenas de abrir portas. Trata-se de entender qual delas faz sentido para você.”</blockquote>
          <a className="text-link text-link-dark" href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer">
            Falar diretamente com a Ariane <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="faq section" aria-labelledby="faq-title">
        <div className="section-intro">
          <p className="eyebrow eyebrow-dark"><span /> Perguntas frequentes</p>
          <h2 id="faq-title">O que você precisa saber antes de começar.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Em quais regiões a Ariane atua?<span>+</span></summary>
            <p>O atendimento é focado em Alphaville, Barueri e região, com leitura local para direcionar cada busca.</p>
          </details>
          <details>
            <summary>Quais tipos de imóveis fazem parte da consultoria?<span>+</span></summary>
            <p>Casas, apartamentos e terrenos, tanto para moradia quanto para investimento.</p>
          </details>
          <details>
            <summary>Como funciona a curadoria de imóveis?<span>+</span></summary>
            <p>Ariane entende seu objetivo, transforma preferências em critérios e seleciona oportunidades coerentes antes de organizar as visitas.</p>
          </details>
          <details>
            <summary>Também posso falar sobre a venda do meu imóvel?<span>+</span></summary>
            <p>Sim. Proprietários podem iniciar uma conversa sobre posicionamento, apresentação e condução comercial do imóvel.</p>
          </details>
          <details>
            <summary>Como começo?<span>+</span></summary>
            <p>Envie uma mensagem pelo WhatsApp com seu objetivo. O primeiro passo é uma conversa breve e sem compromisso.</p>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow"><span /> Seu próximo passo</p>
          <h2>O imóvel certo começa com a conversa certa.</h2>
          <p>Conte à Ariane o que você procura e receba uma orientação pessoal para avançar com mais segurança.</p>
        </div>
        <a className="button button-light" href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer">
          Iniciar conversa no WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">AL</span>
          <span><strong>Ariane Laurindo</strong><small>Consultora Imobiliária • RE/MAX</small></span>
        </a>
        <div className="footer-location"><span>Alphaville • SP</span><span>Barueri e região</span></div>
        <a className="footer-contact" href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer">WhatsApp: (11) 94969-0737</a>
        <p>© {new Date().getFullYear()} Ariane Laurindo. Disponibilidade e condições dos imóveis sujeitas a confirmação.</p>
      </footer>

      <a className="mobile-whatsapp" href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer" aria-label="Falar com Ariane Laurindo no WhatsApp">
        <span className="wa-dot" aria-hidden="true">WA</span>
        <span><small>Atendimento direto</small><strong>Falar com a Ariane</strong></span>
        <b aria-hidden="true">↗</b>
      </a>
    </main>
  );
}
