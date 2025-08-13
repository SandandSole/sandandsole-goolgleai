
import React from 'react';

const blogPosts = [
    {
        imgSrc: 'https://picsum.photos/id/21/400/240',
        category: 'Corporativo',
        categoryColor: 'bg-teal-500',
        title: 'Como Revolucionar Eventos Corporativos com Chinelos Personalizados',
        description: 'Descubra como a personalização ao vivo pode transformar convenções e eventos corporativos em experiências memoráveis...',
        readTime: '7 min de leitura',
        date: '8 Jan 2025'
    },
    {
        imgSrc: 'https://picsum.photos/id/24/400/240',
        category: 'Tendências',
        categoryColor: 'bg-red-500',
        title: 'Art Deco Tropical: A Tendência que Está Dominando 2025',
        description: 'Explore como a fusão entre elegância Art Deco e elementos tropicais está redefinindo o design contemporâneo...',
        readTime: '5 min de leitura',
        date: '12 Jan 2025'
    },
    {
        imgSrc: 'https://picsum.photos/id/29/400/240',
        category: 'Guia',
        categoryColor: 'bg-amber-500',
        title: 'O Guia Completo para Organizar Eventos com Personalização ao Vivo',
        description: 'Passo a passo completo para integrar a experiência de personalização ao vivo no seu próximo evento...',
        readTime: '12 min de leitura',
        date: '5 Jan 2025'
    }
];

interface BlogSectionProps {
    isPage?: boolean;
}


const BlogSection: React.FC<BlogSectionProps> = ({ isPage = false }) => {
    const postsToShow = isPage ? blogPosts : blogPosts.slice(0, 3);
    
    return (
        <section id="blog" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!isPage && (
                    <div className="text-center mb-12">
                        <h2 className="art-deco-font text-4xl md:text-5xl text-stone-800 mb-4">
                            BLOG & INSPIRAÇÃO
                        </h2>
                        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                            Descubra tendências, dicas e histórias inspiradoras do mundo da personalização de chinelos.
                        </p>
                    </div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postsToShow.map((post, index) => (
                        <a href="/blog.html" key={index} className="block group">
                            <article className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                                <div className="relative overflow-hidden">
                                    <img src={post.imgSrc} alt={post.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                                    <div className={`absolute top-4 left-4 ${post.categoryColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="art-deco-font text-xl text-stone-800 mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-stone-600 mb-4 leading-relaxed">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center text-sm text-stone-500">
                                        <span>{post.readTime}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    ))}
                </div>

                {!isPage && (
                    <div className="text-center mt-12">
                        <a href="/blog.html" className="bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block">
                            Ver Todos os Artigos
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;