export const homePageMock = {
  brandName: "Maison Atelier",
  navItems: [
    { label: "COLEÇÕES", href: "#colecoes" },
    { label: "PROJETOS", href: "#projetos" },
    { label: "SOBRE", href: "#sobre" },
  ],
  hero: {
    eyebrow: "CURADORIA PARA MORAR MELHOR",
    title: "Arquitetura e interiores\ncom identidade",
    description:
      "Projetos autorais para residências contemporâneas, combinando conforto, funcionalidade e estética atemporal em cada detalhe.",
    ctaLabel: "AGENDAR CONSULTA",
    imageUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  browse: {
    eyebrow: "NAVEGUE PELAS COLEÇÕES",
    title: "Coleções casa e arquitetura",
  },
  featuredCollection: {
    eyebrow: "COLEÇÃO EM DESTAQUE",
    title: "Iluminação",
    description:
      "Luminárias esculturais para compor ambientes sofisticados. Peças com desenho preciso para valorizar volumes, texturas e atmosfera.",
    ctaLabel: "VER PROJETO COMPLETO",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
  collectionCards: [
    {
      title: "Iluminação",
      description: "Formas esculturais que criam aconchego e profundidade.",
      imageUrl:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Objetos e vasos",
      description: "Curadoria de peças artesanais para composições elegantes.",
      imageUrl:
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  styleCards: [
    {
      title: "Mobiliário",
      description: "Peças atemporais para viver com conforto por décadas.",
      imageUrl:
        "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Têxteis",
      description: "Tecidos naturais e paleta neutra para acolhimento visual.",
      imageUrl:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Detalhes",
      description: "Objetos que finalizam o espaço com equilíbrio e caráter.",
      imageUrl:
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  projectsShowcase: {
    eyebrow: "PROJETOS RESIDENCIAIS",
    title: "Ambientes pensados para o seu ritmo",
    description:
      "Do briefing ao detalhamento executivo, entregamos soluções completas para arquitetos e designers de casas de alto padrão.",
    ctaLabel: "SOLICITAR APRESENTAÇÃO",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  footer: {
    columns: {
      studio: [
        { label: "Atendimento de segunda a sexta, 8h às 18h" },
        { label: "Projetos residenciais e comerciais boutique" },
      ],
      menu: [
        { label: "Coleções", href: "#colecoes" },
        { label: "Projetos", href: "#projetos" },
        { label: "Sobre o estúdio", href: "#sobre" },
      ],
      services: [
        { label: "Arquitetura de interiores" },
        { label: "Consultoria de acabamentos" },
        { label: "Curadoria de mobiliário" },
      ],
      contact: [
        { label: "Joao Monlevade - MG" },
        { label: "3191234-1234" },
        { label: "contato@maisonatelier.com" },
      ],
    },
    socialItems: [
      { iconName: "instagram", href: "#" },
      { iconName: "facebook", href: "#" },
      { iconName: "x", href: "#" },
      { iconName: "youtube", href: "#" },
    ],
  },
} as const;
