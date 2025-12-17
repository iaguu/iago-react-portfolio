export const projects = [
  {
    slug: "pizzaria-anne-tom-pdv",
    title: "Pizzaria Anne & Tom — PDV + Automação",
    tagline: "Electron + React + API local + impressão — fluxo real de pedidos.",
    stack: ["Electron", "React", "Vite", "Node/Express", "SCSS", "Impressão"],
    highlights: [
      "Fluxo de pedidos com modais, busca rápida e impressão por setor (cozinha/balcão).",
      "Camada de dados local (JSON) com integridade e rotinas de sincronização.",
      "Operação orientada a tempo real e UX funcional (menos cliques, mais clareza).",
    ],
    metrics: [
      { label: "Foco", value: "Operação real" },
      { label: "Arquitetura", value: "Desktop + API" },
      { label: "Interface", value: "Modular (SCSS)" },
    ],
    links: {
      github: "https://github.com/iaguu",
      demo: "",
    },
    description: `
Sistema de PDV e gestão de pedidos com foco em performance operacional:
cadastro, busca, consolidação do pedido, impressão e controle de sessão.
    `.trim(),
  },
  {
    slug: "axion-data-search",
    title: "AXION Data Search — Conceito SaaS",
    tagline: "Identidade premium + UX de busca e consolidação de contexto.",
    stack: ["Design System", "React", "UI/UX", "Pesquisa", "Compliance mindset"],
    highlights: [
      "UI de busca com resultados por entidade (PF/PJ/endereço) e score de confiança.",
      "Direção visual enterprise/cyber e linguagem orientada a precisão.",
      "Base para evoluir para módulo de triagem e enriquecimento de dados.",
    ],
    metrics: [
      { label: "Produto", value: "B2B" },
      { label: "Direção", value: "Enterprise" },
      { label: "Tema", value: "Busca & contexto" },
    ],
    links: {
      github: "",
      demo: "",
    },
    description: `
Conceito de plataforma para pesquisa e consolidação de dados com linguagem
de compliance e usabilidade focada em analistas.
    `.trim(),
  },
  {
    slug: "workspace-cyber-linux",
    title: "Workspace Cyber — Linux + VM Strategy",
    tagline: "Arquitetura de ambiente (Windows 11 + dual boot + VMs) para segurança.",
    stack: ["Windows", "Linux", "Kali", "Ubuntu", "Virtualização", "Hardening"],
    highlights: [
      "Organização de workspace por perfis: estudo, labs e operação.",
      "Boas práticas de isolamento, snapshots e separação de contextos.",
      "Base para automações de setup e scripts de rotina.",
    ],
    metrics: [
      { label: "Foco", value: "Cybersecurity" },
      { label: "Infra", value: "VM / Dual boot" },
      { label: "Rotina", value: "Automação" },
    ],
    links: {
      github: "",
      demo: "",
    },
    description: `
Arquitetura prática de ambiente para desenvolvimento e segurança, com foco em
desempenho, isolamento e repetibilidade.
    `.trim(),
  },
];
