import { ServiceItem, PortfolioCase, Differential, InstagramPost } from './types';

export const WHATSAPP_NUMBER = '5561998358397';
export const WHATSAPP_PREFILLED_TEXT = 'Olá! Vim pelo site da Zyphoros e quero saber mais sobre criação de sites.';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILLED_TEXT)}`;
export const INSTAGRAM_LINK = 'https://instagram.com/Zyphoros_Tech';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sites-institucionais',
    title: 'Criação de Sites de Alta Performance',
    shortDesc: 'Desenvolvimento web de alto padrão técnico, arquitetado para posicionar sua marca com autoridade imediata no mercado digital.',
    fullDesc: 'Construção sob medida sem templates engessados. Arquitetura voltada para velocidade sub-segundo, SEO técnico minucioso e experiência visual imersiva que transmite confiança instantânea.',
    deliverables: ['Carregamento ultrarrápido (< 1s)', 'Design 100% responsivo e autêntico', 'Otimização avançada para Google (SEO)', 'Segurança e criptografia de ponta'],
    icon: 'globe',
    tag: 'Web Flagship'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages de Alta Conversão',
    shortDesc: 'Páginas concebidas matematicamente para transformar tráfego pago ou orgânico em clientes qualificados e vendas reais.',
    fullDesc: 'Design estratégico alinhado a copywriting persuasivo e hierarquia visual rigorosa. Eliminamos fricções cognitivas para maximizar cada centavo investido em tráfego.',
    deliverables: ['Copywriting estratégico e persuasivo', 'Gatilhos de conversão e prova social', 'Integração direta com CRM e WhatsApp', 'Testes A/B e mensuração analítica'],
    icon: 'zap',
    tag: 'Foco em ROI'
  },
  {
    id: 'aplicacoes-web',
    title: 'Aplicações Web & Portais Sob Medida',
    shortDesc: 'Sistemas complexos simplificados em interfaces intuitivas, escaláveis e prontas para suportar o crescimento do seu negócio.',
    fullDesc: 'Desenvolvimento full-stack de plataformas internas, painéis de controle e ecossistemas SaaS. Código modular com foco em resiliência, baixa latência e segurança de dados.',
    deliverables: ['Dashboards e painéis gerenciais', 'Autenticação e controle de níveis de acesso', 'APIs REST e microsserviços integrados', 'Infraestrutura em nuvem escalável'],
    icon: 'code',
    tag: 'Custom Software'
  },
  {
    id: 'automacao-ia',
    title: 'Soluções Tecnológicas & IA Integrada',
    shortDesc: 'Automatização de rotinas operacionais e integração de inteligência artificial aplicada para acelerar processos corporativos.',
    fullDesc: 'Implementação de assistentes inteligentes, canais de atendimento 24/7 com IA conversacional e fluxos automáticos que reduzem o custo de operação da sua equipe.',
    deliverables: ['Agentes inteligentes de atendimento', 'Automação de workflows e pipelines', 'Conexão entre ERPs, CRMs e bancos de dados', 'Análise inteligente de dados'],
    icon: 'cpu',
    tag: 'Inovação & IA'
  }
];

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: 'gole-de-poesia',
    client: 'Gole de Poesia',
    url: 'gole-de-poesia.vercel.app',
    category: 'Cultura & Literatura',
    headline: 'Plataforma Literária & Experiência de Leitura Imersiva',
    summary: 'Plataforma imersiva de literatura contemporânea e poesia, unindo design editorial minimalista e experiência de leitura fluida.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    accentColor: '#b79aff',
    screenshots: [
      'https://drive.google.com/uc?export=view&id=1eWeFo899Yqay74nVfwQlNC3_jeIqDtwv',
      'https://drive.google.com/uc?export=view&id=1OqmT5PMqaYF30IgKoQzJ1-1Y15qQ6Emz',
      'https://drive.google.com/uc?export=view&id=14t59nbbI8EOcuurqnVgKapzdX4jrqn4m'
    ],
    challenge: 'Criar uma experiência digital que transmitisse a sensibilidade da leitura poética, sem distrações e com carregamento veloz em qualquer dispositivo.',
    solution: 'Desenvolvemos uma aplicação minimalista com tipografia com excelente legibilidade, espaçamento refinado, transições suaves e deploy na Vercel.'
  },
  {
    id: 'fergon-filtros',
    client: 'Fergon Filtros',
    url: 'fergon-filtros.vercel.app',
    category: 'Indústria & E-commerce',
    headline: 'Catálogo Industrial & Canal B2B de Cotações',
    summary: 'Catálogo digital e plataforma institucional para fabricante de filtragem industrial, otimizando cotações e apresentação técnica.',
    tags: ['React', 'Tailwind'],
    accentColor: '#c1ff72',
    screenshots: [
      'https://drive.google.com/uc?export=view&id=1ERjgeQbqt2DWSuW9KfjUVMhFpQsOrOJz',
      'https://drive.google.com/uc?export=view&id=1PTCR6dVQ1il0kjjZsmOwZrDTwKzineZ6',
      'https://drive.google.com/uc?export=view&id=1waTrPu4CdAFRuaagxB8BJoz70necheq4'
    ],
    challenge: 'Apresentar um portfólio industrial denso de filtros e especificações técnicas de forma intuitiva para compradores e decisores.',
    solution: 'Construímos uma interface moderna e veloz com categorização clara de produtos, fichas técnicas estruturadas e canal rápido de contato comercial.'
  },
  {
    id: 'prompt-antigenerico',
    client: 'Prompt Antigenérico',
    url: 'prompt-antigenerico.vercel.app',
    category: 'IA & Produtividade',
    headline: 'Engenharia de Prompts & IA Produtiva',
    summary: 'Ferramenta para criação, refinamento e engenharia de prompts de alto rendimento, eliminando respostas genéricas de modelos de IA.',
    tags: ['Next.js', 'IA', 'Vercel'],
    accentColor: '#b79aff',
    screenshots: [
      'https://drive.google.com/uc?export=view&id=1d8hZLElEV6fRe-6YMbdI3RP8fU_SpwJQ',
      'https://drive.google.com/uc?export=view&id=1YYbkeL-IayTxkrf-9Y9chRMLE1ANwDMf',
      'https://drive.google.com/uc?export=view&id=1ZpTDn0MH6yifg1A8w6LxuSHGWdp8y3Ad'
    ],
    challenge: 'Eliminar o desperdício de tempo com respostas rasas de inteligências artificiais por falta de estrutura metódica de instrução.',
    solution: 'Criamos um ambiente interativo com templates inteligentes, categorização por objetivo e exportação instantânea para máxima produtividade.'
  },
  {
    id: 'juliana-brown',
    client: 'Juliana Brown',
    url: 'julianabrown.vercel.app',
    category: 'Portfólio Pessoal / Branding',
    headline: 'Posicionamento Visual de Alta Autoridade',
    summary: 'Portfólio autoral com transições elegantes, tipografia de alto impacto e narrativa visual refinada para posicionamento de marca pessoal.',
    tags: ['React', 'Framer Motion'],
    accentColor: '#c1ff72',
    screenshots: [
      'https://drive.google.com/uc?export=view&id=1xgqaf8c86clBEyCTHQhBFLx5PwtgddUL',
      'https://drive.google.com/uc?export=view&id=1EEOLrx_bAtrzY07LgyPHUg_srALvcT8P',
      'https://drive.google.com/uc?export=view&id=1zpnE4q9HMtmWtLOnoQDm_rx3YOYchzI6'
    ],
    challenge: 'Transmitir sofisticação, diferencial autoral e autoridade profissional em um formato moderno e memorável para marcas de alto padrão.',
    solution: 'Desenvolvemos uma experiência digital autoral com animações refinadas, ritmo visual harmônico e acabamento estético sob medida.'
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    number: '01',
    title: 'Engenharia de Performance Extrema',
    description: 'Não fazemos sites pesados que travam no 4G. Cada linha de código é esculpida para carregamento sub-segundo, notas 95+ no Google PageSpeed e retenção máxima de usuários.',
    highlight: 'Carregamento sub-segundo garantido'
  },
  {
    number: '02',
    title: 'Design Cinematográfico & 100% Exclusivo',
    description: 'Banimos templates pré-prontos do WordPress e layouts genéricos. Criamos uma identidade visual magnética que eleva o valor percebido da sua empresa acima de qualquer concorrente.',
    highlight: 'Zero templates genéricos'
  },
  {
    number: '03',
    title: 'Obsessão por Conversão & Retorno Real',
    description: 'Beleza sem resultado é mero enfeite. Toda a arquitetura de informação, posicionamento de botões e fluxo de leitura são desenhados para conduzir o visitante ao fechamento de negócio.',
    highlight: 'Arquitetura focada em vendas'
  },
  {
    number: '04',
    title: 'Código Moderno, Seguro e Escalável',
    description: 'Construído com as mesmas tecnologias utilizadas pelas maiores empresas de tecnologia do Vale do Silício. Seu site nasce pronto para crescer sem precisar ser refeito do zero.',
    highlight: 'Tecnologia de ponta e sustentável'
  }
];

export const TECH_NEWS_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    tag: 'Web Trends 2026',
    title: 'Por que sites ultra-rápidos vendem até 3.2x mais que concorrentes lentos',
    readTime: '2 min de leitura',
    date: 'Esta semana',
    likes: '482',
    comments: '64',
    excerpt: 'Análise de métricas reais: a cada 100 milissegundos a menos no tempo de resposta, empresas de serviço registram um salto consistente no fechamento via WhatsApp.'
  },
  {
    id: 'post-2',
    tag: 'Inteligência Artificial',
    title: 'Como empresas tradicionais estão automatizando 60% do atendimento no WhatsApp',
    readTime: '3 min de leitura',
    date: 'Recente',
    likes: '621',
    comments: '89',
    excerpt: 'Integração de agentes inteligentes com linguagem natural permitindo qualificação de leads sem intervenção humana antes de transferir ao consultor.'
  },
  {
    id: 'post-3',
    tag: 'Design Estratégico',
    title: 'Microinterações e Dark Mode: quando o design se torna o principal vendedor',
    readTime: '2 min de leitura',
    date: 'Em alta',
    likes: '519',
    comments: '43',
    excerpt: 'O impacto psicológico da estética tech em clientes corporativos de alto ticket: autoridade instantânea através da precisão visual dos mínimos detalhes.'
  }
];
