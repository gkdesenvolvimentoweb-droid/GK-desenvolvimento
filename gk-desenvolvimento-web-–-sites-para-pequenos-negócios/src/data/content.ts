import { Project, Testimonial, PricingPlan } from '../types';
import heroWebAgencyImg from '../assets/images/hero_web_agency_1794450546705.jpg';
import portfolioPizzariaImg from '../assets/images/portfolio_pizzaria_1794450547776.jpg';
import portfolioBarbeariaImg from '../assets/images/portfolio_barbearia_1794450548558.jpg';
import portfolioOdontologiaImg from '../assets/images/portfolio_odontologia_1794450548105.jpg';

export const ASSET_IMAGES = {
  hero: heroWebAgencyImg,
  pizzaria: portfolioPizzariaImg,
  barbearia: portfolioBarbeariaImg,
  odontologia: portfolioOdontologiaImg,
};

export const COMPANY_INFO = {
  name: 'GK Desenvolvimento Web',
  shortName: 'GK Web',
  tagline: 'Quem não é visto não é lembrado',
  email: 'gkdesenvolvimentoweb@gmail.com',
  instagram: 'gk_desenvolvimento.web',
  instagramUrl: 'https://instagram.com/gk_desenvolvimento.web',
  whatsappDirect: 'https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20site.',
  location: 'Brasil (Atendimento Nacional)',
  aboutText:
    'A GK Desenvolvimento WEB foi criada com um único propósito: ajudar pequenas empresas a se destacarem na internet sem gastar uma fortuna. Acreditamos que todo negócio merece ser encontrado no Google e passar profissionalismo desde o primeiro clique. Por isso, desenvolvemos sites modernos, fáceis de usar e com valores acessíveis para impulsionar o seu crescimento.',
};

export const PROJECTS: Project[] = [
  {
    id: 'la-bella-vita',
    title: 'La Bella Vita Trattoria & Pizzaria',
    client: 'Pizzaria e Ristorante',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia & Restaurantes',
    description:
      'Site com cardápio digital interativo de pizzas artesanais, fotos em alta definição e botão direto de pedidos no WhatsApp.',
    impact: '+210% em pedidos diretos sem taxa de aplicativo',
    deliveryTime: '24 horas',
    image: portfolioPizzariaImg,
    tags: ['Cardápio Online', 'Entrega em 24h', 'WhatsApp Integrado'],
    features: [
      'Cardápio digital visual rápido e leve para celular',
      'Botão de pedido direto no WhatsApp',
      'Integração com Google Maps e horário de funcionamento',
      'Página otimizada com carregamento instantâneo',
    ],
    clientQuote:
      'Nosso movimento aumentou e os clientes adoram ver o cardápio direto no celular antes de pedir.',
  },
  {
    id: 'cutting-edge-barbearia',
    title: 'The Cutting Edge Barbearia',
    client: 'Barbearia & Grooming Masculino',
    category: 'servicos',
    categoryLabel: 'Serviços & Beleza Masculina',
    description:
      'Presença online moderna para barbearia tradicional com catálogo de serviços, tabela de preços e link de agendamento ágil.',
    impact: 'Redução de 70% nas dúvidas sobre valores e horários',
    deliveryTime: '24 horas',
    image: portfolioBarbeariaImg,
    tags: ['Agendamento Fácil', 'Design Dark', 'Mobile First'],
    features: [
      'Visual moderno que transmite estilo e autoridade',
      'Tabela de serviços e valores transparente',
      'Link direto para agendamento online',
      'Galeria com os melhores cortes e ambiente',
    ],
    clientQuote:
      'O site ficou com cara de barbearia de luxo e custou muito menos do que as outras agências cobraram.',
  },
  {
    id: 'astra-odontologia',
    title: 'Astra Odontologia Integrada',
    client: 'Clínica Odontológica Especializada',
    category: 'saude',
    categoryLabel: 'Saúde & Consultórios',
    description:
      'Site institucional para clínica odontológica com foco em captação de pacientes para implantes e estética dental.',
    impact: '+180% de contatos qualificados pelo Google',
    deliveryTime: '36 horas',
    image: portfolioOdontologiaImg,
    tags: ['Captação no Google', 'Design Confiável', 'Formulário Rápido'],
    features: [
      'Estrutura com foco em passar segurança médica',
      'Formulário simplificado de agendamento de avaliação',
      'Apresentação dos tratamentos e da equipe',
      'Avaliações reais de pacientes em destaque',
    ],
    clientQuote:
      'Passou exatamente a seriedade que a nossa clínica precisava para atrair tratamentos de alto valor.',
  },
  {
    id: 'autoprime-mecanica',
    title: 'AutoPrime Centro Automotivo',
    client: 'Oficina Mecânica Especializada',
    category: 'servicos',
    categoryLabel: 'Serviços Automotivos',
    description:
      'Página de alta conversão para motoristas em busca de revisão mecânica, socorro rápido e orçamento pelo WhatsApp.',
    impact: '3x mais chamadas de socorro e agendamento de revisões',
    deliveryTime: '24 horas',
    image: heroWebAgencyImg,
    tags: ['Socorro Rápido', 'Chamada com 1 Clique', 'SEO Local'],
    features: [
      'Botão de emergência com discagem direta',
      'Lista dos principais serviços de mecânica e injeção',
      'Endereço integrado com rota no Google Maps e Waze',
      'Depoimentos de clientes locais satisfeitos',
    ],
    clientQuote:
      'Motorista quando quebra o carro pesquisa no Google na hora. O site nos colocou na frente da concorrência.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcos Vinícius',
    role: 'Proprietário',
    company: 'Bella Vita Pizzaria',
    city: 'São Paulo, SP',
    avatarText: 'MV',
    content:
      'Eu achava que criar um site bom custaria uns 3 ou 4 mil reais. A GK me entregou um site incrível em menos de 24 horas por um valor que coube tranquilo no meu caixa. As mensagens no WhatsApp aumentaram na mesma semana.',
    rating: 5,
    highlight: 'Entregou em menos de 24h e pagou o custo na primeira semana',
  },
  {
    id: '2',
    name: 'Dra. Camila Rocha',
    role: 'Cirurgiã Dentista',
    company: 'Consultório Odonto Prime',
    city: 'Belo Horizonte, MG',
    avatarText: 'CR',
    content:
      'Escolhi o Plano GK Completo com sistema de agendamento e foi a melhor escolha. Meus pacientes marcam horário direto pelo site e já deixam tudo confirmado. Profissionalismo impecável.',
    rating: 5,
    highlight: 'Agendamento direto pelo site e aumento expressivo de pacientes',
  },
  {
    id: '3',
    name: 'Roberto Almeida',
    role: 'Fundador',
    company: 'Vintage Barber Studio',
    city: 'Curitiba, PR',
    avatarText: 'RA',
    content:
      'O atendimento foi super rápido e direto por e-mail. Não teve enrolação, mandei as informações e no outro dia o site já estava pronto com o botão do WhatsApp funcionando perfeitamente.',
    rating: 5,
    highlight: 'Sem enrolação: mandei as fotos e no outro dia já estava no ar',
  },
  {
    id: '4',
    name: 'Juliana Mendes',
    role: 'Esteticista & Empresária',
    company: 'Studio Juliana Estética',
    city: 'Campinas, SP',
    avatarText: 'JM',
    content:
      'O lema deles "Quem não é visto não é lembrado" é a pura verdade. Minhas clientes elogiaram o capricho da página e o recebimento de mensagens no WhatsApp facilitou muito.',
    rating: 5,
    highlight: 'Design limpo que encantou os clientes e gerou mais pedidos',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'gk-simples',
    name: 'Plano GK Simples',
    badge: 'Mais Acessível',
    price: 'R$ 150',
    priceInstallment: 'pagamento único sem mensalidades',
    deliveryTime: 'Entrega em até 24 horas',
    description:
      'A solução ideal para colocar seu negócio na internet com visual moderno, site interativo e mensagens direcionadas direto ao seu WhatsApp.',
    idealFor: 'Autônomos, pequenos comércios, barbearias, pizzarias e prestadores de serviços',
    features: [
      'Site todo interativo com visual moderno e profissional',
      'Mensagens encaminhadas diretamente para o seu WhatsApp',
      'Entrega expressa garantida em até 24 horas',
      '100% adaptado para celulares, tablets e computadores',
      'Seções essenciais: Apresentação, Serviços, Fotos e Contato',
      'Botão flutuante de WhatsApp com mensagem personalizada',
      'Sem mensalidades abusivas nem contratos de fidelidade',
    ],
    popular: false,
  },
  {
    id: 'gk-completo',
    name: 'Plano GK Completo',
    badge: 'Mais Completo & Robusto',
    price: 'R$ 300',
    priceInstallment: 'pagamento único com banco de dados',
    deliveryTime: 'Entrega em até 24 a 48 horas',
    description:
      'A estrutura definitiva para o seu negócio: conta com banco de dados próprio, agendamento de horários diretamente no site e sistema de pagamentos.',
    idealFor: 'Clínicas, consultórios, salões, barbearias com agendamento e negócios com pagamentos online',
    features: [
      'Banco de dados próprio integrado para guardar seus registros',
      'Sistema de agendamentos diretamente no site (datas e horários em tempo real)',
      'Sistema de pagamentos integrado (Pix, cartão e checkout seguro)',
      'Site todo interativo e personalizado com design exclusivo',
      'Encaminhamento duplo: mensagens no WhatsApp e confirmação no e-mail',
      'Otimização completa para buscas no Google (SEO Local)',
      'Painel para visualização de agendamentos e contatos',
      'Suporte prioritário e treinamento rápido para uso',
    ],
    popular: true,
  },
];

export const SERVICES = [
  {
    number: '01',
    title: 'Landing Pages de Alta Conversão',
    tagline: 'Foco total em vendas e orçamentos',
    description:
      'Páginas únicas, limpas e objetivas, criadas para transformar visitantes em contatos no WhatsApp ou pedidos de orçamento no e-mail. Ideais para quem anuncia no Google ou Instagram.',
    benefits: [
      'Estrutura persuasiva com foco em ação imediata',
      'Carregamento ultra veloz para não perder nenhum cliente',
      'Entrega expressa em até 24 horas',
    ],
  },
  {
    number: '02',
    title: 'Sites Institucionais para Pequenas Empresas',
    tagline: 'Credibilidade e presença profissional no Google',
    description:
      'O cartão de visitas digital que sua empresa precisa. Mostre seus serviços, diferencial, depoimentos, fotos e endereço com design de alto padrão sem pagar preços abusivos.',
    benefits: [
      'Transmite confiança imediata desde o primeiro clique',
      'Encontrado por clientes que buscam seu serviço na sua cidade',
      'Design responsivo impecável em qualquer aparelho',
    ],
  },
  {
    number: '03',
    title: 'Agendamentos & Pagamentos Online',
    tagline: 'Disponível no Plano GK Completo',
    description:
      'Permita que seus clientes escolham dia, horário e paguem pelo serviço diretamente no site, com armazenamento em banco de dados próprio.',
    benefits: [
      'Autonomia total para seus clientes agendarem 24h por dia',
      'Recebimento ágil via Pix ou Cartão integrado',
      'Sem comissões por agendamento',
    ],
  },
  {
    number: '04',
    title: 'Reformulação de Sites Antigos',
    tagline: 'Modernização completa para os padrões atuais',
    description:
      'Seu site atual é pesado, desatualizado ou não abre direito no celular? Nós recriamos tudo do zero com visual limpo, moderno e código leve em tempo recorde.',
    benefits: [
      'Design renovado e profissional',
      'Carregamento muito mais rápido',
      'Preservação do seu domínio e e-mails corporativos',
    ],
  },
];
