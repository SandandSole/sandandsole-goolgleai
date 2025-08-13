
import React from 'react';

const BlogCTA: React.FC = () => {
    return (
        <div className="pt-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="art-deco-font text-4xl md:text-5xl text-stone-800 mb-6">
                    Inspire-se para o seu Próximo Evento.
                </h2>
                <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed mb-12">
                    Leia o nosso blog para aprender tudo sobre a experiência única de personalização de chinelos ao vivo para casamentos, eventos corporativos, lembranças de viagem e festivais. Descubra como a Sand & Sole pode transformar o seu evento em uma lembrança inesquecível.
                </p>
                <a href="/blog.html" className="bg-[#ED8B84] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-block">
                    Leia os Nossos Artigos
                </a>
            </div>
        </div>
    );
};

export default BlogCTA;
