
import React from 'react';

interface InspirationSectionProps {
    hideButton?: boolean;
}

const InspirationSection: React.FC<InspirationSectionProps> = ({ hideButton = false }) => {
    return (
        <section className="py-20 bg-gradient-to-br from-teal-50 to-[#EFD9C1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="art-deco-font text-4xl md:text-5xl text-stone-800 mb-6">
                    Inspire-se para o seu Próximo Evento.
                </h2>
                <p className={`text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed ${hideButton ? '' : 'mb-12'}`}>
                    Leia o nosso blog para aprender tudo sobre a experiência única de personalização de chinelos ao vivo 
                    para casamentos, eventos corporativos, lembranças de viagem e festivais. Descubra como a Sand & 
                    Sole pode transformar o seu evento em uma lembrança inesquecível.
                </p>
                {!hideButton && (
                    <a href="#blog" className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
                        Leia os Nossos Artigos
                    </a>
                )}
            </div>
        </section>
    );
};

export default InspirationSection;