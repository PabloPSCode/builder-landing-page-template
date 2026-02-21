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
      "/mocks/home-page-images/home-02.jpg",
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
      "/mocks/home-page-images/home-01.jpg",
  },
  collectionCards: [
    {
      title: "Iluminação",
      description: "Formas esculturais que criam aconchego e profundidade.",
      imageUrl:
        "/mocks/home-page-images/home-01.jpg",
    },
    {
      title: "Objetos e vasos",
      description: "Curadoria de peças artesanais para composições elegantes.",
      imageUrl:
        "/mocks/home-page-images/home-04.jpg",
    },
  ],
  styleCards: [
    {
      title: "Mobiliário",
      description: "Peças atemporais para viver com conforto por décadas.",
      imageUrl:
        "/mocks/home-page-images/home-06.jpg",
    },
    {
      title: "Têxteis",
      description: "Tecidos naturais e paleta neutra para acolhimento visual.",
      imageUrl:
        "/mocks/home-page-images/home-07.jpg",
    },
    {
      title: "Detalhes",
      description: "Objetos que finalizam o espaço com equilíbrio e caráter.",
      imageUrl:
        "/mocks/home-page-images/home-05.jpg",
    },
  ],
  projectsShowcase: {
    eyebrow: "PROJETOS RESIDENCIAIS",
    title: "Ambientes pensados para o seu ritmo",
    description:
      "Do briefing ao detalhamento executivo, entregamos soluções completas para arquitetos e designers de casas de alto padrão.",
    ctaLabel: "SOLICITAR APRESENTAÇÃO",
    imageUrl:
      "/mocks/home-page-images/home-03.jpg",
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
