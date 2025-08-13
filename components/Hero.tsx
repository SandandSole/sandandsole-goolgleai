import React, { useState } from 'react';

const Hero: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple email validation
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setError('Por favor, insira um e-mail válido.');
            setTimeout(() => setError(''), 3000); // Clear error after 3 seconds
            return;
        }
        setError('');
        // Simulate API call
        setIsSubmitted(true);
    };

    return (
        <section className="min-h-screen w-full">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="z-10">
                        <h1 className="art-deco-font text-7xl md:text-8xl text-stone-800 mb-4 leading-none">
                            PISE NO
                            <br />
                            <span className="text-[#4DB8A5]">PARAÍSO.</span>
                        </h1>
                        <div className="w-24 h-1 bg-[#ED8B84] my-6"></div>
                        <h2 className="text-3xl font-semibold text-[#ED8B84] mb-6">
                            Estamos construindo nossa jornada com você!
                        </h2>
                        <p className="text-stone-700 max-w-lg mb-8">
                            Inscreva-se para receber notícias exclusivas sobre o lançamento da Sand & Sole e seja o primeiro a saber quando nosso serviço de personalização de chinelos ao vivo para eventos em Florianópolis e Grande Florianópolis estará disponível para reserva.
                        </p>
                        
                        {isSubmitted ? (
                            <div className="bg-teal-100/80 border-l-4 border-teal-500 text-teal-800 p-4 rounded-r-lg shadow-md animate-fade-in" role="alert">
                                <h3 className="font-bold art-deco-font text-xl">Inscrição Recebida!</h3>
                                <p className="mt-1">Obrigado! Manteremos você informado sobre nosso lançamento e novidades.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="w-full max-w-lg" noValidate>
                                <div className="flex flex-col sm:flex-row items-start gap-3">
                                    <div className="relative w-full sm:flex-grow">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Seu melhor e-mail"
                                            aria-label="Seu melhor e-mail para newsletter"
                                            className="w-full px-6 py-4 bg-white/90 border-2 border-stone-300/50 rounded-full shadow-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#ED8B84]/50 focus:border-transparent transition-all text-lg"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center bg-[#ED8B84] hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                        Inscrever
                                    </button>
                                </div>
                                {error && <p className="text-red-500 mt-2 pl-4 text-sm font-semibold animate-shake">{error}</p>}
                            </form>
                        )}
                    </div>

                    {/* Right Content - Image Collage */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full aspect-square">
                        {/* Top-Left */}
                        <div className="bg-[#4DB8A5] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between items-start">
                            <div className="absolute inset-y-0 left-0 w-1/2 bg-[#F0C9A3]"></div>
                            <h3 className="relative art-deco-font text-2xl text-white tracking-wider">SAND & SOLE</h3>
                            <div className="relative bg-white/95 p-3 rounded-lg shadow-lg self-end w-4/5">
                                <p className="text-[#4DB8A5] font-bold text-center text-sm uppercase tracking-wider">Step into paradise</p>
                            </div>
                        </div>
                        {/* Top-Right */}
                        <div className="bg-[#d4e9e2] rounded-2xl overflow-hidden">
                            <img src="https://i.ibb.co/6y4j0Lz/teal-flip-flop.jpg" alt="Teal flip-flop" className="w-full h-full object-cover" />
                        </div>
                        {/* Bottom-Left */}
                        <div className="bg-[#F0C9A3] rounded-2xl overflow-hidden">
                            <img src="https://i.ibb.co/z5pB8T9/coral-flip-flop.jpg" alt="Coral flip-flop" className="w-full h-full object-cover" />
                        </div>
                        {/* Bottom-Right */}
                        <div className="bg-white rounded-2xl p-4 flex flex-col justify-center text-left shadow-sm">
                            <h3 className="font-bold text-stone-800 text-base">Arte Tropical Art Deco</h3>
                            <p className="text-sm text-stone-600 mt-1 leading-snug">Explore nossa identidade visual única que combina elementos tropicais com a elegância do Art Deco.</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="bg-lime-200/60 text-lime-900 text-xs font-semibold px-2 py-1 rounded-full">Design</span>
                                <span className="bg-[#4DB8A5]/30 text-[#00695C] text-xs font-semibold px-2 py-1 rounded-full">Tropical</span>
                                <span className="bg-[#ED8B84]/30 text-[#BF360C] text-xs font-semibold px-2 py-1 rounded-full">Art Deco</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;