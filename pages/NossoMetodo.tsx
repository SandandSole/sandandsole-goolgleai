
import React, { useState } from 'react';
import { BookOpenIcon, LaptopIcon, PresentationChartBarIcon } from '../components/Icons';

type Segment = 'casamentos' | 'festivais' | 'corporativos' | 'turismo';

const iconMap = {
    BookOpenIcon: BookOpenIcon,
    LaptopIcon: LaptopIcon,
    PresentationChartBarIcon: PresentationChartBarIcon,
};

const segmentsData = {
    casamentos: {
        pageTitle: "Casamentos: Criando Memórias Inesquecíveis",
        intro: "Transforme o dia mais importante da sua vida em uma celebração verdadeiramente única. Com a personalização ao vivo, cada convidado leva para casa não apenas uma lembrancinha, mas uma parte da história de amor que estão celebrando.",
        benefits: [
            "Lembrancinhas personalizadas que encantam e duram.",
            "Engajamento e entretenimento único para os convidados.",
            "Uma experiência de marca pessoal inesquecível.",
            "Conforto e estilo para todos aproveitarem a festa.",
        ],
        resources: [
            { type: 'Curso', title: "Curso: A Arte de Criar Memórias Inesquecíveis no Seu Casamento", description: "Aprenda a integrar experiências personalizadas que refletem a essência do casal e encantam os convidados.", ctaText: "Acessar Curso", icon: "LaptopIcon", href: '#' },
            { type: 'E-book', title: "E-book: 5 Tendências para Lembrancinhas de Casamento em 2025", description: "Inspire-se com as ideias mais inovadoras para presentear seus convidados e tornar seu evento inesquecível.", ctaText: "Baixar E-book", icon: "BookOpenIcon", href: '#' },
            { type: 'Webinar', title: "Webinar: Como Organizar um Casamento Sem Estresse", description: "Junte-se a especialistas para dicas práticas sobre planejamento, fornecedores e como criar um dia perfeito.", ctaText: "Inscrever-se", icon: "PresentationChartBarIcon", href: '#' }
        ]
    },
    festivais: {
        pageTitle: "Festivais: Conectando Fãs e Marcas",
        intro: "Eleve a experiência do seu festival com merchandising que o público realmente deseja. Nossa estação de personalização ao vivo é uma atração por si só, criando um ponto de encontro vibrante e gerando conteúdo orgânico para as redes sociais.",
        benefits: [
            "Merchandising exclusivo e desejável que esgota.",
            "Aumento do engajamento com a marca e patrocinadores.",
            "Experiência memorável que diferencia seu festival.",
            "Criação de um ponto de encontro e interação.",
        ],
        resources: [
            { type: 'Curso', title: "Curso: Live Marketing para Festivais de Sucesso", description: "Aprenda a criar ativações de marca que geram buzz e engajamento real com o público do seu festival.", ctaText: "Acessar Curso", icon: "LaptopIcon", href: '#' },
            { type: 'E-book', title: "E-book: O Guia de Merchandising para Festivais", description: "Descubra estratégias para criar produtos que os fãs amam e que impulsionam a receita do seu evento.", ctaText: "Baixar E-book", icon: "BookOpenIcon", href: '#' },
            { type: 'Webinar', title: "Webinar: O Futuro da Experiência em Festivais", description: "Explore as tendências de imersão, tecnologia e personalização que estão moldando os grandes eventos.", ctaText: "Inscrever-se", icon: "PresentationChartBarIcon", href: '#' }
        ]
    },
    corporativos: {
        pageTitle: "Corporativo: Fortalecendo Sua Marca com Impacto",
        intro: "Diferencie sua marca no mercado com brindes e ações de live marketing que seus clientes e colaboradores não vão esquecer. A personalização ao vivo comunica inovação, cuidado e exclusividade.",
        benefits: [
            "Brindes corporativos que fogem do comum e geram valor.",
            "Fortalecimento da cultura da empresa e do employer branding.",
            "Ação de marketing de experiência de alto impacto.",
            "Excelente para feiras, convenções e festas de fim de ano.",
        ],
        resources: [
            { type: 'Curso', title: "Curso: Endomarketing e Engajamento de Equipes", description: "Descubra como ações internas criativas podem aumentar a motivação e o sentimento de pertencimento.", ctaText: "Acessar Curso", icon: "LaptopIcon", href: '#' },
            { type: 'E-book', title: "E-book: Brindes Corporativos que Constroem Marcas", description: "Um guia para escolher presentes corporativos que seus clientes e parceiros realmente usarão e amarão.", ctaText: "Baixar E-book", icon: "BookOpenIcon", href: '#' },
            { type: 'Webinar', title: "Webinar: ROI em Eventos Corporativos", description: "Aprenda a medir o retorno sobre o investimento de suas ações em eventos e convenções.", ctaText: "Inscrever-se", icon: "PresentationChartBarIcon", href: '#' }
        ]
    },
    turismo: {
        pageTitle: "Turismo: Transformando Viagens em Lembranças Vivas",
        intro: "Ofereça aos seus hóspedes e visitantes mais do que um souvenir: uma experiência. A personalização de chinelos ao vivo em hotéis, resorts e pontos turísticos cria um diferencial competitivo e um produto único que carrega a identidade do local.",
        benefits: [
            "Souvenirs autênticos e personalizados que contam uma história.",
            "Diferencial competitivo para hotéis, resorts e agências.",
            "Aumento da satisfação e da lealdade do hóspede.",
            "Geração de receita adicional com produtos exclusivos.",
        ],
        resources: [
            { type: 'Curso', title: "Curso: A Jornada do Hóspede 5 Estrelas", description: "Aprenda a mapear e otimizar cada ponto de contato para criar uma experiência de hospitalidade inesquecível.", ctaText: "Acessar Curso", icon: "LaptopIcon", href: '#' },
            { type: 'E-book', title: "E-book: Inovação em Produtos Turísticos", description: "Descubra como criar e vender souvenirs e produtos que capturam a essência do seu destino.", ctaText: "Baixar E-book", icon: "BookOpenIcon", href: '#' },
            { type: 'Webinar', title: "Webinar: Marketing de Destino na Era Digital", description: "Estratégias para promover seu hotel, resort ou cidade e atrair mais turistas qualificados.", ctaText: "Inscrever-se", icon: "PresentationChartBarIcon", href: '#' }
        ]
    }
};

const NossoMetodoPage: React.FC = () => {
    const [activeSegment, setActiveSegment] = useState<Segment>('casamentos');
    const activeData = segmentsData[activeSegment];

    const segmentButtons: { key: Segment, label: string }[] = [
        { key: 'casamentos', label: 'Casamentos' },
        { key: 'festivais', label: 'Festivais' },
        { key: 'corporativos', label: 'Eventos Corporativos' },
        { key: 'turismo', label: 'Turismo' },
    ];

    return (
        <>
            {/* Hero Section */}
            <header className="bg-white pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="art-deco-font text-5xl md:text-6xl text-stone-800 mb-4">
                        Nosso Método
                    </h1>
                    <p className="text-2xl text-teal-600 mb-6">A Ciência por Trás da Experiência Inesquecível</p>
                    <p className="text-xl text-stone-600 max-w-4xl mx-auto">
                        Descubra como a personalização ao vivo transforma eventos em memórias duradouras e fortalece sua marca. Como pioneiros no Brasil, desenvolvemos uma metodologia única que combina design, tecnologia e psicologia do consumidor para criar experiências que encantam.
                    </p>
                </div>
            </header>

            {/* Segment Navigation */}
            <section className="bg-cream sticky top-[80px] z-20 py-4 shadow-sm">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        {segmentButtons.map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => setActiveSegment(key)}
                                className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${activeSegment === key ? 'bg-teal-500 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-teal-100'}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Content Area */}
            <main className="bg-white py-16 sm:py-20">
                <div key={activeSegment} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
                    {/* Segment Introduction */}
                    <div className="text-center mb-16">
                        <h2 className="art-deco-font text-4xl md:text-5xl text-stone-800 mb-4">{activeData.pageTitle}</h2>
                        <p className="text-lg text-stone-600 max-w-3xl mx-auto">{activeData.intro}</p>
                    </div>

                    {/* Key Benefits */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {activeData.benefits.map((benefit, index) => (
                            <div key={index} className="bg-cream p-6 rounded-2xl text-center shadow-sm">
                                <p className="text-stone-700 font-semibold">{benefit}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Educational Resources */}
                    <div className="text-center mb-12">
                        <h3 className="art-deco-font text-3xl md:text-4xl text-stone-800 mb-2">Aprofunde-se com Nossos Recursos Exclusivos</h3>
                        <p className="text-lg text-stone-500">Acesse nosso conteúdo adaptado para dominar a arte da personalização ao vivo no seu evento.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activeData.resources.map((resource, index) => {
                            const IconComponent = iconMap[resource.icon as keyof typeof iconMap];
                            return (
                                <div key={index} className="bg-white border border-stone-200/80 rounded-2xl shadow-lg p-6 flex flex-col text-center items-center transform hover:-translate-y-2 transition-transform duration-300">
                                    <div className="bg-teal-100 p-4 rounded-full mb-4">
                                        <IconComponent className="w-8 h-8 text-teal-600" />
                                    </div>
                                    <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">{resource.type}</span>
                                    <h4 className="art-deco-font text-xl text-stone-800 my-2">{resource.title}</h4>
                                    <p className="text-stone-600 flex-grow mb-6">{resource.description}</p>
                                    <a href={resource.href} className="mt-auto bg-[#ED8B84] text-white px-6 py-2.5 rounded-full font-semibold text-base hover:bg-opacity-90 transition-colors shadow-sm">
                                        {resource.ctaText}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            
            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-br from-teal-50 to-[#EFD9C1]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="art-deco-font text-4xl md:text-5xl text-stone-800 mb-6">
                        Construindo a Experiência: Em Breve!
                    </h2>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        Estamos aprimorando cada detalhe para levar a magia da personalização ao vivo para o seu próximo evento. Acompanhe nossa jornada e seja um dos primeiros a viver essa novidade!
                    </p>
                    <a href="/index.html" className="bg-[#ED8B84] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-block">
                        Inscreva-se para Acompanhar
                    </a>
                </div>
            </section>
        </>
    );
};

export default NossoMetodoPage;
