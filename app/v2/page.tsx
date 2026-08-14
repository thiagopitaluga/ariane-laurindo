import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "./brand";
import { PortraitVideo } from "./portrait-video";
import { ScrollEffects } from "./scroll-effects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ariane-laurindo.vercel.app";
const whatsappNumber = "5511949690737";

const messages = {
  general: "Olá, Ariane! Quero conversar sobre meu próximo imóvel em Alphaville ou Barueri.",
  comprar: "Olá, Ariane! Quero encontrar um imóvel de alto padrão em Alphaville ou Barueri.",
  investir: "Olá, Ariane! Quero avaliar oportunidades de investimento imobiliário em Alphaville.",
  vender: "Olá, Ariane! Quero conversar sobre a venda do meu imóvel em Alphaville ou Barueri.",
};

const wa = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const { props: heroDesktopProps } = getImageProps({
  src: "/images/ariane-hero.webp",
  alt: "Ariane Laurindo em uma residência de alto padrão",
  width: 1942,
  height: 809,
  sizes: "100vw",
  quality: 88,
  priority: true,
});

const { props: { srcSet: heroMobileSrcSet } } = getImageProps({
  src: "/images/ariane-hero-mobile.webp",
  alt: "Ariane Laurindo em uma residência de alto padrão",
  width: 941,
  height: 1672,
  sizes: "100vw",
  quality: 88,
  priority: true,
});

export const metadata: Metadata = {
  title: "Imóveis de alto padrão em Alphaville e Barueri",
  description:
    "Curadoria personalizada de imóveis de alto padrão em Alphaville e Barueri para quem não quer perder tempo com opções que não fazem sentido.",
  alternates: { canonical: "/v2" },
  openGraph: {
    title: "Ariane Laurindo | Imóveis de alto padrão em Alphaville",
    description:
      "Curadoria personalizada de imóveis de alto padrão em Alphaville e Barueri para quem não quer perder tempo com opções que não fazem sentido.",
    url: "/v2",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const steps = [
  ["01", "Entender", "Primeiro, eu entendo você.", "Conversamos sobre seu momento, estilo de vida, prioridades, orçamento e o que você realmente espera encontrar."],
  ["02", "Filtrar", "Depois, filtro o que faz sentido.", "Em vez de enviar uma lista, seleciono oportunidades alinhadas ao seu perfil e ao seu objetivo."],
  ["03", "Conhecer", "Você visita o que merece atenção.", "Organizamos as visitas de forma estratégica, priorizando imóveis que podem realmente funcionar para você."],
  ["04", "Decidir", "Você não negocia sozinho.", "Comparação, contexto da região e acompanhamento próximo para chegar a uma decisão segura."],
];

const faqs = [
  ["Quais regiões a Ariane atende?", "O atendimento é especializado em Alphaville, Barueri e região, com conhecimento das características dos principais condomínios e áreas."],
  ["Quais imóveis posso procurar?", "Casas, apartamentos e terrenos, tanto para moradia quanto para investimento."],
  ["Preciso saber exatamente o que quero?", "Não. A primeira conversa existe justamente para entender seu momento, organizar prioridades e transformar tudo isso em uma busca mais clara."],
  ["Vou receber uma lista de imóveis?", "A proposta é selecionar oportunidades com aderência real ao seu perfil, evitando dezenas de anúncios que não merecem seu tempo."],
  ["A consultoria também atende investidores?", "Sim. Ariane ajuda a avaliar localização, características do imóvel, contexto da região e adequação da oportunidade ao seu objetivo."],
  ["Posso anunciar meu imóvel para venda?", "Sim. Proprietários recebem orientação sobre posicionamento, apresentação e condução comercial do imóvel."],
  ["Existe compromisso no primeiro contato?", "Não. O primeiro passo é uma conversa para entender o que você procura e orientar os próximos passos."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Ariane Laurindo",
  url: `${siteUrl}/v2`,
  telephone: "+55 11 94969-0737",
  image: `${siteUrl}/images/ariane-hero.webp`,
  description: "Consultora imobiliária RE/MAX especializada em imóveis de alto padrão em Alphaville e Barueri.",
  areaServed: ["Alphaville", "Barueri"],
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

type PathIconKind = "home" | "investment" | "sale";

const pathIconPaths = {
  home: <><path d="M5 16 16 7l11 9" /><path d="M8 14v12h16V14" /><circle cx="15" cy="19" r="3.5" /><path d="m17.5 21.5 4 4" /></>,
  investment: <><path d="M7 22 13 16l4 4 8-10" /><path d="M19 10h6v6" /><path d="M7 8v16h19" /></>,
  sale: <><path d="M6.5 8h11l8 8-10 10-9-9Z" /><circle cx="12" cy="13.5" r="1.4" /><path d="m14.5 21 6-6" /><circle cx="15.5" cy="16" r="1" /><circle cx="19.5" cy="20" r="1" /></>,
} satisfies Record<PathIconKind, ReactNode>;

function PathIcon({ kind }: { kind: PathIconKind }) {
  return <svg className="v2-path-icon" viewBox="0 0 32 32" aria-hidden="true">{pathIconPaths[kind]}</svg>;
}

export default function V2Page() {
  return (
    <main className="v2">
      <ScrollEffects />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <header className="v2-header">
        <a className="v2-brand" href="#inicio" aria-label="Ariane Laurindo, início">
          <Image className="v2-brand-logo" src="/images/logo-ariane-laurindo-oficial.png" alt="Ariane Laurindo — Consultora Imobiliária" width={1672} height={941} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#metodo">Como funciona</a>
          <a href="#alphaville">Alphaville</a>
          <a href="#ariane">Sobre</a>
        </nav>
        <a className="v2-header-cta" href={wa(messages.general)} target="_blank" rel="noreferrer">
          Falar com a Ariane <span>↗</span>
        </a>
      </header>

      <section className="v2-hero" id="inicio">
        <picture className="v2-hero-picture">
          <source media="(max-width: 900px)" srcSet={heroMobileSrcSet} />
          <img {...heroDesktopProps} alt={heroDesktopProps.alt} className="v2-hero-image" />
        </picture>
        <div className="v2-hero-overlay" />
        <div className="v2-hero-copy">
          <p className="v2-kicker"><span /> Imóveis de alto padrão em Alphaville e Barueri</p>
          <h1>O imóvel certo para o seu próximo capítulo em <span className="v2-gradient-text">Alphaville.</span></h1>
          <p className="v2-lead v2-hero-subheadline">Curadoria personalizada de imóveis de alto padrão em Alphaville e Barueri para quem não quer perder tempo com opções que não fazem sentido.</p>
          <div className="v2-actions">
            <a className="v2-button v2-button-gold" href={wa(messages.comprar)} target="_blank" rel="noreferrer">Quero encontrar meu imóvel <span>↗</span></a>
          </div>
          <ul className="v2-types"><li>Casas</li><li>Apartamentos</li><li>Terrenos</li></ul>
        </div>
        <a className="v2-scroll" href="#consultoria"><span>Explore</span><i /></a>
      </section>

      <section className="v2-pain v2-section" id="consultoria" data-reveal="up">
        <video className="v2-pain-video" autoPlay muted loop playsInline preload="metadata" poster="/images/video-imovel-poster.jpg" aria-hidden="true">
          <source src="/videos/tour-imovel-mobile.mp4" type="video/mp4" />
        </video>
        <div className="v2-pain-overlay" aria-hidden="true" />
        <div className="v2-pain-title" data-reveal="up">
          <p className="v2-kicker"><span /> Encontrar um imóvel é fácil. Encontrar o certo é outra história.</p>
          <h2>Você não precisa ver tudo.<em>Precisa encontrar o que faz sentido.</em></h2>
        </div>
        <div className="v2-pain-copy" data-reveal="up" data-reveal-delay="1">
          <p className="v2-serif-lead">São centenas de imóveis, condomínios, projetos e possibilidades. Mas nem todo imóvel que parece interessante merece o seu tempo.</p>
          <ul>
            <li>Visitas a imóveis que não combinam com seu perfil</li>
            <li>Opções fora do orçamento ou da sua rotina</li>
            <li>Decisões importantes sem contexto suficiente</li>
            <li>Oportunidades perdidas por falta de informação</li>
          </ul>
          <p className="v2-emphasis">É justamente aí que entra a consultoria da Ariane.</p>
        </div>
      </section>

      <section className="v2-listen v2-section">
        <div className="v2-listen-image" data-reveal="media">
          <Image src="/images/casa-alphaville-interior.jpg" alt="Interior sofisticado de imóvel em Alphaville" fill sizes="(max-width: 900px) 100vw, 45vw" />
          <span>Seu estilo de vida vem primeiro</span>
        </div>
        <div className="v2-listen-copy" data-reveal="up">
          <p className="v2-kicker"><span /> Antes da primeira visita</p>
          <h2>Antes de mostrar imóveis, eu entendo o que você procura.</h2>
          <p>Seu orçamento é apenas uma parte da decisão. Também importa como você quer viver, o que é prioridade para sua família e qual endereço faz sentido para sua rotina e patrimônio.</p>
          <div className="v2-result">
            <span>O resultado</span>
            <strong>Menos tempo procurando.</strong>
            <strong>Menos visitas desnecessárias.</strong>
            <strong>Mais segurança para escolher.</strong>
          </div>
          <a className="v2-button v2-button-gold" href={wa(messages.general)} target="_blank" rel="noreferrer">Conversar com a Ariane <span>↗</span></a>
        </div>
      </section>

      <section className="v2-method v2-section" id="metodo">
        <div className="v2-method-heading" data-reveal="up">
          <div>
            <p className="v2-kicker"><span /> Uma consultoria de ponta a ponta</p>
            <h2>Do primeiro contato à negociação, você não precisa fazer tudo sozinho.</h2>
          </div>
          <p>Uma jornada simples, pessoal e organizada para que cada etapa aproxime você da decisão certa.</p>
        </div>
        <div className="v2-step-grid">
          {steps.map(([number, label, title, copy]) => (
            <article key={number} data-reveal="up" data-reveal-delay={number}>
              <div><span>{number}</span><small>{label}</small></div>
              <h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="v2-method-close" data-reveal="up">
          <blockquote>“Uma decisão importante merece mais do que alguém para abrir a porta. Merece alguém ao seu lado.”</blockquote>
          <a className="v2-button v2-button-gold" href={wa(messages.comprar)} target="_blank" rel="noreferrer">Quero começar minha busca <span>↗</span></a>
        </div>
      </section>

      <section className="v2-investment" data-reveal="up">
        <div><p className="v2-kicker v2-kicker-dark"><span /> Seu tempo também faz parte do investimento</p><h2>Você conta o que procura.<br />Eu faço a seleção.<br /><em>Juntos, encontramos o que faz sentido.</em></h2></div>
        <span className="v2-investment-mark">AL</span>
      </section>

      <section className="v2-paths v2-section">
        <div className="v2-paths-heading" data-reveal="up"><p className="v2-kicker v2-kicker-dark"><span /> Qual é o seu objetivo?</p><h2>Cada pessoa chega a Alphaville por um motivo diferente.</h2></div>
        <div className="v2-path-grid">
          <article data-reveal="up"><div className="v2-path-card-top"><PathIcon kind="home" /></div><small>Quero comprar</small><h3>Um imóvel que combine com a vida que você quer viver.</h3><p>Casas, apartamentos e terrenos selecionados de acordo com seu perfil, orçamento e prioridades.</p><a href={wa(messages.comprar)} target="_blank" rel="noreferrer">Encontrar meu imóvel <b>↗</b></a></article>
          <article className="featured" data-reveal="up" data-reveal-delay="1"><div className="v2-path-card-top"><PathIcon kind="investment" /></div><small>Quero investir</small><h3>Uma oportunidade transformada em decisão estratégica.</h3><p>Avalie localização, contexto da região e potencial antes de investir seu patrimônio.</p><a href={wa(messages.investir)} target="_blank" rel="noreferrer">Falar sobre investimento <b>↗</b></a></article>
          <article data-reveal="up" data-reveal-delay="2"><div className="v2-path-card-top"><PathIcon kind="sale" /></div><small>Quero vender</small><h3>Uma estratégia de venda à altura do seu imóvel.</h3><p>Posicionamento, apresentação e condução profissional para alcançar as pessoas certas.</p><a href={wa(messages.vender)} target="_blank" rel="noreferrer">Quero vender meu imóvel <b>↗</b></a></article>
        </div>
      </section>

      <section className="v2-alphaville v2-section" id="alphaville">
        <div className="v2-alphaville-head" data-reveal="up"><div><p className="v2-kicker"><span /> Mais do que um endereço</p><h2>O lugar onde você escolhe como quer viver.</h2></div><p>Alphaville combina arquitetura, natureza, segurança e lazer em uma das regiões mais desejadas de São Paulo.</p></div>
        <div className="v2-gallery">
          <figure className="wide" data-reveal="media"><Image src="/images/casa-alphaville-fachada.jpg" alt="Casa contemporânea em Alphaville" fill sizes="(max-width: 800px) 100vw, 60vw" /><figcaption><small>01</small><strong>Casas contemporâneas</strong><span>Espaços pensados para receber, viver e aproveitar.</span></figcaption></figure>
          <figure data-reveal="media" data-reveal-delay="1"><Image src="/images/casa-alphaville-interior.jpg" alt="Interior de alto padrão" fill sizes="(max-width: 800px) 100vw, 40vw" /><figcaption><small>02</small><strong>Arquitetura e interiores</strong><span>Cada detalhe acompanha seu estilo de vida.</span></figcaption></figure>
          <figure data-reveal="media" data-reveal-delay="2"><Image src="/images/casa-alphaville-piscina.jpg" alt="Piscina e área de lazer privativa" fill sizes="(max-width: 800px) 100vw, 40vw" /><figcaption><small>03</small><strong>Privacidade e bem-estar</strong><span>Mais espaço para o que realmente importa.</span></figcaption></figure>
        </div>
        <a className="v2-button v2-button-gold" href={wa(messages.comprar)} target="_blank" rel="noreferrer">Receber opções alinhadas ao meu perfil <span>↗</span></a>
      </section>

      <section className="v2-authority v2-section" id="ariane">
        <div className="v2-award-photo" data-reveal="media"><Image src="/images/ariane-premiacao-2025.webp" alt="Ariane Laurindo recebendo o prêmio Melhores do Ano 2025" fill sizes="(max-width: 900px) 100vw, 43vw" /><div><strong>2025</strong><span>Melhores<br />do Ano</span></div></div>
        <div className="v2-authority-copy" data-reveal="up">
          <p className="v2-kicker v2-kicker-dark"><span /> Sobre a Ariane</p>
          <h2>Conheça a Ariane <em>e descubra um atendimento que começa pela sua história.</em></h2>
          <p className="v2-serif-lead">Ariane Laurindo é Consultora Imobiliária RE/MAX, com atuação em Alphaville, Barueri e região.</p>
          <p>Seu trabalho combina conhecimento do mercado local, atendimento próximo e uma abordagem consultiva para ajudar cada cliente a tomar decisões mais seguras.</p>
        </div>
      </section>

      <section className="v2-videos v2-section" aria-labelledby="v2-video-title">
        <div className="v2-video-shell">
          <div className="v2-video-media" data-reveal="media">
            <PortraitVideo />
          </div>
          <div className="v2-video-copy" data-reveal="up" data-reveal-delay="1">
            <p className="v2-kicker v2-kicker-dark"><span /> Conhecimento local faz diferença</p>
            <h2 id="v2-video-title">Não basta conhecer imóveis. <em>É preciso conhecer o lugar.</em></h2>
            <div className="v2-video-values">
              <div><strong>Escuta estratégica</strong><span>Seu momento orienta cada recomendação.</span></div>
              <div><strong>Curadoria local</strong><span>Conhecimento de Alphaville, Barueri e região.</span></div>
              <div><strong>Acompanhamento</strong><span>Presença da primeira seleção à negociação.</span></div>
            </div>
            <a className="v2-button v2-button-gold" href={wa(messages.general)} target="_blank" rel="noreferrer">Conversar com a Ariane <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="v2-faq v2-section">
        <div data-reveal="up"><p className="v2-kicker v2-kicker-dark"><span /> Antes de começar</p><h2>O que você precisa saber sobre a consultoria.</h2><p>Se a sua dúvida não está aqui, fale diretamente com a Ariane.</p></div>
        <div className="v2-faq-list" data-reveal="up" data-reveal-delay="1">
          {faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="v2-final">
        <Image src="/images/casa-alphaville-fachada.jpg" alt="" fill sizes="100vw" />
        <div className="v2-final-overlay" />
        <div data-reveal="up"><p className="v2-kicker"><span /> Seu próximo imóvel começa antes da primeira visita</p><h2>Encontre em <span className="v2-gradient-text">Alphaville</span> o imóvel à altura da vida que você quer viver.</h2><p>Conte para Ariane o seu momento e o que é importante para você. A partir daí, sua busca ganha direção.</p><a className="v2-button v2-button-gold" href={wa(messages.comprar)} target="_blank" rel="noreferrer">Quero encontrar meu imóvel <span>↗</span></a></div>
      </section>

      <footer className="v2-footer">
        <a className="v2-brand" href="#inicio" aria-label="Ariane Laurindo, voltar ao início"><Image className="v2-brand-logo" src="/images/logo-ariane-laurindo-oficial.png" alt="Ariane Laurindo — Consultora Imobiliária" width={1672} height={941} /></a>
        <p>Imóveis de alto padrão em Alphaville, Barueri e região.<br />Casas · Apartamentos · Terrenos · Investimentos</p>
        <a href={wa(messages.general)} target="_blank" rel="noreferrer">WhatsApp: (11) 94969-0737 ↗</a>
        <small>© 2026 Ariane Laurindo. Disponibilidade e condições sujeitas a confirmação.</small>
      </footer>

      <a className="v2-floating-whatsapp" href={wa(messages.general)} target="_blank" rel="noreferrer" aria-label="Falar com Ariane Laurindo pelo WhatsApp">
        <span>Falar no WhatsApp</span>
        <WhatsAppIcon />
      </a>
    </main>
  );
}
