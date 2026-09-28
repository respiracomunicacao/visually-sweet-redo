export interface SolutionItem {
  number: string;
  id: string;
  title: string;
  category: string;
  badge?: string;
  short: string;
  detail: string;
  partners: string[];
  points: string[];
  benefits: string[];
  ctaText: string;
}

export const solutions: SolutionItem[] = [
  {
    number: '01',
    id: 'consultoria',
    title: 'Consultoria e Suporte em TI',
    category: 'Gestão & Continuidade',
    badge: 'Mais Procurado',
    short: 'Manutenção preventiva e corretiva, administração especializada e monitoramento ativo da sua infraestrutura.',
    detail: 'Esse serviço tem como finalidade a manutenção preventiva e corretiva, administração, gerenciamento, controle e monitoramento de infraestrutura de servidores, sistemas e soluções de rede. Nosso time atua proativamente para evitar paradas inesperadas e garantir a produtividade contínua da sua equipe.',
    partners: ['Monitoramento NOC', 'Suporte N1/N2/N3', 'SLA Garantido'],
    points: [
      'Manutenção preventiva e corretiva contínua',
      'Administração e configuração avançada de servidores e sistemas',
      'Monitoramento em tempo real de hardware, links e serviços críticos',
      'Gestão de chamados e suporte aos usuários com SLA acordado'
    ],
    benefits: [
      'Redução de até 85% em paradas não programadas',
      'Previsibilidade de custos sem necessidade de equipe interna cara',
      'Atendimento presencial no Vale dos Sinos e suporte remoto ágil'
    ],
    ctaText: 'Quero Suporte e Consultoria Especializada'
  },
  {
    number: '02',
    id: 'seguranca',
    title: 'Segurança da Informação',
    category: 'Proteção Cibernética',
    badge: 'Crítico para Empresas',
    short: 'Proteção multicamadas de ponta a ponta contra ransomware, vazamento de dados, phishing e invasões.',
    detail: 'Ajudamos a proteger a sua empresa de ponta a ponta, evitando os prejuízos irreparáveis causados por vazamento de dados, sequestro digital (ransomware) ou contaminações na rede interna. Implementamos políticas baseadas em identidade com os líderes mundiais Bitdefender e Fortinet.',
    partners: ['Bitdefender GravityZone', 'Fortinet Next-Gen Firewall', 'Conformidade LGPD'],
    points: [
      'Segurança de Endpoints com Bitdefender empresarial',
      'Firewall e Segurança de Borda com tecnologia Fortinet',
      'Controle rígido de aplicações, navegação e políticas por usuário',
      'Inspeção profunda de tráfego e defesa contra ameaças de dia zero'
    ],
    benefits: [
      'Bloqueio automático de ameaças antes de atingirem seus dados',
      'Adequação técnica aos requisitos da LGPD',
      'Relatórios executivos periódicos de vulnerabilidades e bloqueios'
    ],
    ctaText: 'Blindar Minha Empresa Contra Ataques'
  },
  {
    number: '03',
    id: 'backup',
    title: 'Soluções de Backup Gerenciado',
    category: 'Disponibilidade de Dados',
    badge: 'Tolerância Zero a Perdas',
    short: 'Rotinas automatizadas de backup local e em nuvem com tecnologia Veeam para restauração relâmpago.',
    detail: 'Trabalhamos com soluções integradas de hardware e software para sistemas de backup corporativo. A tecnologia Veeam, adotada pelos maiores data centers do mundo, combina extrema confiabilidade, testes automatizados de integridade e recuperação rápida de servidores físicos ou virtuais.',
    partners: ['Veeam Data Platform', 'Cloud Backup Offsite', 'Restauração Instantânea'],
    points: [
      'Regra 3-2-1 de Backup (cópias locais e em nuvem isolada)',
      'Tecnologia Veeam com testes periódicos de restauração',
      'Proteção contra alteração ou exclusão de backups por ransomware',
      'Recuperação granular de arquivos individuais ou máquinas virtuais completas'
    ],
    benefits: [
      'Recuperação da operação em minutos em caso de desastre',
      'Proteção completa para bancos de dados ERPs, emails e arquivos',
      'Armazenamento criptografado de ponta a ponta'
    ],
    ctaText: 'Garantir a Segurança dos Meus Backups'
  },
  {
    number: '04',
    id: 'dell',
    title: 'Equipamentos Dell Enterprise',
    category: 'Hardware Corporativo',
    badge: 'Parceiro Dell',
    short: 'Servidores PowerEdge, Storages e estações de trabalho de alta performance com garantia e suporte direto.',
    detail: 'Como parceiros oficiais Dell, possuímos a certificação e conhecimento técnico para dimensionar e fornecer o equipamento mais adequado para a necessidade real do seu negócio. Os equipamentos Dell entregam robustez em materiais, durabilidade e suporte técnico de classe mundial.',
    partners: ['Dell PowerEdge', 'Dell Latitude & OptiPlex', 'Storage Dell EMC'],
    points: [
      'Servidores em rack e torre dimensionados sob demanda',
      'Storages e soluções de armazenamento de dados corporativos',
      'Notebooks empresariais linha Latitude e desktops OptiPlex',
      'Garantia ProSupport Dell com atendimento no local da empresa'
    ],
    benefits: [
      'Condições e descontos corporativos exclusivos de parceiro',
      'Dimensionamento técnico correto evitando compras incorretas',
      'Configuração, homologação e instalação pela equipe da Dualcon'
    ],
    ctaText: 'Solicitar Cotação de Equipamentos Dell'
  },
  {
    number: '05',
    id: 'redes',
    title: 'Infraestrutura de Redes (Física & Lógica)',
    category: 'Conectividade Empresarial',
    badge: 'Alta Performance',
    short: 'Projetos completos de cabeamento estruturado, fibra óptica, switches gerenciáveis e Wi-Fi corporativo.',
    detail: 'A nossa infraestrutura de serviços de rede está dividida em duas frentes fundamentais: Camada Física (cabeamento estruturado Cat6/Cat6a, fibra óptica, organização e certificação de racks) e Camada Lógica (VLANs, roteamento, balanceamento de links e Wi-Fi de alta densidade).',
    partners: ['Cabeamento Estruturado', 'Switches & Roteadores', 'Wi-Fi Corporativo Alta Densidade'],
    points: [
      'Cabeamento de rede e conectorização de fibra óptica',
      'Organização, identificação e certificação técnica de racks',
      'Segmentação lógica com VLANs para isolamento departamental',
      'Balanceamento e redundância automática de links de internet (Failover)'
    ],
    benefits: [
      'Fim da instabilidade e lentidão nas conexões dos computadores',
      'Infraestrutura organizada e de fácil manutenção preventiva',
      'Cobertura Wi-Fi uniforme em galpões industriais e escritórios'
    ],
    ctaText: 'Modernizar a Rede da Minha Empresa'
  },
  {
    number: '06',
    id: 'licenciamento',
    title: 'Licenciamento de Softwares',
    category: 'Conformidade & Legalidade',
    badge: '100% Legalizado',
    short: 'Assessoria completa em contratos Microsoft 365, Azure, Adobe, Corel e antivírus corporativos.',
    detail: 'Possuímos uma equipe certificada e capacitada para ajudar sua empresa a licenciar softwares sem burocracia ou desperdício financeiro. Mapeamos os contratos ideais para Microsoft 365, Azure, Bitdefender, Arcserve, Veeam, Adobe Creative Cloud e Corel, mantendo sua empresa 100% em conformidade jurídica.',
    partners: ['Microsoft 365 & Azure', 'Adobe Creative Cloud', 'Bitdefender & Veeam'],
    points: [
      'Migração e implantação de contas corporativas Microsoft 365',
      'Licenciamento e suporte técnico oficial Adobe e Corel',
      'Renovação e consolidação de licenças em uma única data',
      'Auditoria de conformidade preventiva contra multas de software'
    ],
    benefits: [
      'Economia cortando licenças ociosas ou duplicadas',
      'Suporte humano local para ativação e gestão dos usuários',
      'Conformidade jurídica total contra penalidades legais'
    ],
    ctaText: 'Fazer Cotação de Licenciamento'
  },
];

/* Verticais de Atuação Estratégicas */
export interface VerticalSector {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  dores: string[];
  solucoes: string[];
  exemploPratico: string;
  diferencial: string;
  problemasCriticos: string;
}

export const verticalSectors: VerticalSector[] = [
  {
    id: 'comercio-exterior',
    title: 'Comércio Exterior',
    subtitle: 'Disponibilidade ininterrupta para desembaraço aduaneiro, Siscomex e comunicação global.',
    iconName: 'Globe2',
    dores: [
      'Impossibilidade de emitir DU-E, DI e acessar Siscomex por quedas de link',
      'Diferença de fusos horários exigindo estabilidade de email e canais 24h',
      'Riscos severos de multas portuárias e demurrage decorrentes de atrasos no sistema'
    ],
    solucoes: [
      'Redundância de links com chaveamento automático (Failover transparente)',
      'Ambientes em nuvem com alta disponibilidade para ERPs de trading e comex',
      'Suporte prioritário com atendimento ágil para incidentes operacionais'
    ],
    exemploPratico: 'Estruturação de link redundante e firewall corporativo para trading do Vale dos Sinos, eliminando perdas de janelas alfandegárias.',
    diferencial: 'Compreensão aprofundada da criticidade do tempo no desembaraço de cargas e exportações.',
    problemasCriticos: 'Queda de conexão no momento do fechamento de câmbio ou liberação de carga, gerando prejuízos imediatos de diárias e fretes.'
  },
  {
    id: 'industria',
    title: 'Indústria & Manufatura',
    subtitle: 'Conectividade contínua para chão de fábrica, sistemas MES/ERP, galpões e automação.',
    iconName: 'Factory',
    dores: [
      'Ambientes agressivos com poeira, interferência eletromagnética e calor nos racks',
      'Interrupção da linha de produção por queda do ERP ou falha no servidor de banco de dados',
      'Dificuldade de sinal Wi-Fi em grandes áreas de estoque e armazenagem fabril'
    ],
    solucoes: [
      'Cabeamento estruturado industrial blindado e fibra óptica imune a ruídos',
      'Servidores Dell PowerEdge de alta tolerância com virtualização e contingência',
      'Projetos de Access Points de alta densidade e longo alcance para coletores de dados'
    ],
    exemploPratico: 'Implantação de backbone em fibra óptica unificando bloco administrativo e chão de fábrica em calçadista e metalúrgica.',
    diferencial: 'Experiência sólida no polo industrial do Vale dos Sinos e Serra Gaúcha.',
    problemasCriticos: 'Parada da linha de montagem e faturamento fiscal devido a travamento de servidores locais sem rotina de contingência.'
  },
  {
    id: 'saude',
    title: 'Saúde & Clínicas Médicas',
    subtitle: 'Segurança absoluta para prontuários eletrônicos, sigilo LGPD e continuidade hospitalar.',
    iconName: 'Activity',
    dores: [
      'Vazamento acidental ou sequestro de dados de pacientes (riscos da LGPD e CFM)',
      'Lentidão no carregamento de imagens de exames pesados (PACS/DICOM) em consultórios',
      'Perda de histórico clínico por falha em discos ou ausência de rotinas de backup isolado'
    ],
    solucoes: [
      'Backup imutável com tecnologia Veeam (isolado contra ransomware)',
      'Firewall Fortinet com políticas de isolamento de rede médica e rede de pacientes',
      'Storage e servidores dimensionados para tráfego veloz de laudos e diagnósticos'
    ],
    exemploPratico: 'Centralização de dados de prontuário e proteção de endpoints em clínica diagnóstica regional com recuperação em menos de 15 minutos.',
    diferencial: 'Rigor técnico absoluto em conformidade médica e sigilo de dados sensíveis.',
    problemasCriticos: 'Ataques de ransomware criptografando agendas e históricos médicos inteiros, impossibilitando atendimentos de urgência.'
  },
  {
    id: 'agencias',
    title: 'Agências de Publicidade & Marketing',
    subtitle: 'Armazenamento veloz para arquivos pesados de vídeo/design e colaboração fluida.',
    iconName: 'Megaphone',
    dores: [
      'Servidores locais lentos para renderizar ou salvar arquivos de Illustrator, Photoshop e Premiere',
      'Perda de campanhas e histórico de clientes por ausência de versionamento seguro',
      'Dificuldades no compartilhamento de arquivos brutos pesados entre equipes híbridas'
    ],
    solucoes: [
      'Storages Dell de alta vazão com conexões 10GbE para ilhas de edição',
      'Contratos consolidados e suporte especializado em licenças Adobe Creative Cloud e M365',
      'Sincronização em nuvem segura com backup automatizado de projetos concluídos'
    ],
    exemploPratico: 'Estruturação de rede 10GbE e storage centralizado para agência de criação, reduzindo o tempo de render e transferência de vídeos em 70%.',
    diferencial: 'Parceiro homologado Adobe, entendendo o fluxo de trabalho diário de criativos e motion designers.',
    problemasCriticos: 'Corrupção de arquivos de vídeo e campanhas de clientes na véspera da veiculação sem cópia de segurança confiável.'
  },
  {
    id: 'eventos',
    title: 'Produtoras & Empresas de Eventos',
    subtitle: 'Conectividade temporária robusta, transmissão ao vivo estável e segurança de mídia.',
    iconName: 'Sparkles',
    dores: [
      'Oscilação ou queda de internet durante credenciamento, bilheteria eletrônica e lives',
      'Grande volume de mídia fotográfica e audiovisual gravada que precisa de descarregamento imediato e seguro',
      'Necessidade de montagem e desmontagem rápida de infraestruturas provisórias'
    ],
    solucoes: [
      'Roteamento multi-WAN balanceado para garantir upload contínuo de transmissões',
      'Redes Wi-Fi com portal de autenticação para milhares de participantes e áreas VIP',
      'Unidades de storage portáteis corporativas e estações de alta capacidade'
    ],
    exemploPratico: 'Infraestrutura de rede dedicada para feiras de negócios e estandes corporativos com links balanceados e cobertura Wi-Fi garantida.',
    diferencial: 'Agilidade de resposta e capacidade de montar redes confiáveis sob pressão de prazos ao vivo.',
    problemasCriticos: 'Queda do link de internet no meio de uma transmissão ao vivo ou travamento das catracas de credenciamento na entrada do evento.'
  }
];

/* Equipe Dualcon */
export interface TeamMember {
  name: string;
  role: string;
  department: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Diretoria Técnica & Estratégica',
    role: 'Gestão de Projetos & Inovação',
    department: 'Diretoria',
    description: 'Comandando a visão de 20 anos da Dualcon em simplificar a TI e conectar empresas a soluções de ponta.',
    image: '/card-relacoes.png'
  },
  {
    name: 'Equipe de Engenharia e Redes',
    role: 'Infraestrutura Física & Fibra Óptica',
    department: 'Projetos e Redes',
    description: 'Especialistas certificados no dimensionamento de cabeamento estruturado, fusão de fibra, switches e Wi-Fi de alta performance.',
    image: '/card-descomplicar.png'
  },
  {
    name: 'Suporte Técnico e Operações (NOC)',
    role: 'Atendimento N1, N2 e N3',
    department: 'Suporte e Manutenção',
    description: 'Profissionais dedicados ao monitoramento contínuo, atendimento remoto e resolução presencial imediata no RS.',
    image: '/suporte-ti.png'
  },
  {
    name: 'Consultoria de Soluções & Hardware',
    role: 'Especialistas em Dell, Veeam & Fortinet',
    department: 'Comercial Técnico',
    description: 'Análise consultiva de demandas de infraestrutura, dimensionando servidores, storage e projetos de segurança sob medida.',
    image: '/ia-card.jpg'
  }
];

/* Depoimentos de Clientes */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  segment: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'A estabilidade que a Dualcon trouxe para os nossos servidores Dell e rotinas de backup foi decisiva para a operação da fábrica. Sempre que precisamos, temos um técnico presente que conhece nosso sistema.',
    author: 'Gestão de Operações',
    role: 'Gerente Industrial',
    company: 'Indústria do Vale dos Sinos',
    segment: 'Indústria'
  },
  {
    quote: 'No comércio exterior, não podemos nos dar ao luxo de ter links fora do ar no fechamento alfandegário. A redundância e suporte ágil da Dualcon nos dão tranquilidade diária.',
    author: 'Coordenação de TI',
    role: 'Coordenador de Infraestrutura',
    company: 'Comissária e Trading RS',
    segment: 'Comércio Exterior'
  },
  {
    quote: 'A migração dos dados e a estruturação do backup imutável Veeam nos livrou da preocupação com invasões e ransomware. Equipe extremamente competente e humana.',
    author: 'Diretoria Médica',
    role: 'Diretor Clínico',
    company: 'Centro de Diagnósticos por Imagem',
    segment: 'Saúde'
  },
  {
    quote: 'O licenciamento corporativo e a instalação do storage de alta vazão transformaram o fluxo da agência. Não perdemos mais horas transferindo gravações pesadas de vídeo.',
    author: 'Diretor de Criação',
    role: 'Sócio-Diretor',
    company: 'Agência de Publicidade',
    segment: 'Comunicação'
  }
];

/* Marcas Parceiras */
export const partnerBrands = [
  { name: 'Dell Technologies', role: 'Hardware, Servidores e Storage Corporativo', tier: 'Partner Direct' },
  { name: 'Veeam', role: 'Plataforma Global de Backup e Recuperação', tier: 'ProPartner' },
  { name: 'Fortinet', role: 'Segurança de Borda e Firewalls Next-Gen', tier: 'Security Provider' },
  { name: 'Bitdefender', role: 'Proteção Endpoint e Defesa Cibernética', tier: 'Authorized Partner' },
  { name: 'Microsoft', role: 'Soluções em Nuvem, Windows e M365', tier: 'Cloud Partner' },
  { name: 'Adobe', role: 'Softwares Criativos e de Produtividade', tier: 'Certified Reseller' },
];

export const companyHighlights = [
  { value: '20+', label: 'Anos de Mercado', description: 'Fundada em 2005 com presença contínua no RS' },
  { value: '99.8%', label: 'Disponibilidade Média', description: 'Em infraestruturas monitoradas proativamente' },
  { value: '6', label: 'Pilares Tecnológicos', description: 'Soluções integradas de hardware, software e suporte' },
  { value: '100%', label: 'Atendimento Humanizado', description: 'Técnicos dedicados que conhecem seu nome' },
];

export const news = [
  {
    title: 'O que contempla o serviço de Consultoria e Suporte em TI?',
    date: '12 maio 2022',
    category: 'Consultoria',
    summary: 'Conheça os principais benefícios de contratar um serviço profissional com manutenção preventiva, corretiva e monitoramento proativo.',
    url: 'https://d2c.net.br/2022/05/12/o-que-contempla-o-servico-de-consultoria-e-suporte-em-ti/'
  },
  {
    title: 'Você sabe o que é Inteligência Artificial e como ela impacta seu setor?',
    date: '11 maio 2022',
    category: 'Inovação',
    summary: 'Em termos simples, entenda a evolução da IA e por que ela já está transformando a produtividade das empresas modernas.',
    url: 'https://d2c.net.br/2022/05/11/voce-sabe-o-que-e-inteligencia-artificial/'
  },
  {
    title: 'Como o Machine Learning pode te ajudar no seu negócio?',
    date: '24 fevereiro 2022',
    category: 'Tecnologia',
    summary: 'Aplicações práticas de aprendizado de máquina no processamento de informações e tomada de decisões corporativas.',
    url: 'https://d2c.net.br/2022/02/24/como-o-machine-learning-pode-te-ajudar-no-seu-negocio/'
  },
  {
    title: 'Licenciamento de software sem dor de cabeça é na Dualcon',
    date: '11 fevereiro 2022',
    category: 'Licenciamento',
    summary: 'Pode ser algo burocrático e confuso, mas a Dualcon cuida de todo o processo para você focar no crescimento da empresa.',
    url: 'https://d2c.net.br/2022/02/11/licenciamento-de-software-sem-dor-de-cabeca-e-na-dualcon/'
  },
  {
    title: 'Segurança Cibernética: Por que a prevenção é o melhor investimento',
    date: '03 fevereiro 2022',
    category: 'Segurança',
    summary: 'Os ataques com sequestro de dados crescem a cada dia. Veja como blindar os computadores e servidores da sua equipe.',
    url: 'https://d2c.net.br/2022/02/03/seguranca-cibernetica/'
  },
  {
    title: 'Suporte Técnico Preventivo: Evitando prejuízos antes que aconteçam',
    date: '14 julho 2021',
    category: 'Consultoria',
    summary: 'Prevenir é a chave para a estabilidade. Descubra como a manutenção periódica prolonga a vida útil dos equipamentos.',
    url: 'https://d2c.net.br/2021/07/14/suporte-tecnico-preventivo/'
  },
];
