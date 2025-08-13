
import React from 'react';
import { LocationIcon, PhoneIcon, EmailIcon } from '../components/Icons';

const ContatoPage: React.FC = () => {
    return (
         <div className="bg-white pt-28 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="art-deco-font text-5xl md:text-6xl text-stone-800 mb-4">Entre em Contato</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">Adoraríamos ouvir sobre o seu evento! Preencha o formulário abaixo ou utilize um de nossos canais de contato.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                    {/* Form */}
                    <form action="#" method="POST" className="space-y-6">
                         <div>
                            <label htmlFor="name" className="block text-sm font-medium text-stone-700">Nome</label>
                            <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
                            <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-stone-700">Mensagem</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform transform hover:scale-105">
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                    
                    <div className="space-y-6 text-stone-600">
                         <h3 className="art-deco-font text-2xl text-stone-800">Nossas Informações</h3>
                         <p>Você também pode nos encontrar aqui:</p>
                         <ul className="space-y-4">
                            <li className="flex items-start">
                                <LocationIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-teal-600" />
                                <span><strong>Endereço:</strong><br/>Florianópolis, SC, Brasil</span>
                            </li>
                            <li className="flex items-start">
                                <EmailIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-teal-600" />
                                <span><strong>Email:</strong><br/><a href="mailto:sandandsole@gmail.com" className="hover:text-teal-600">sandandsole@gmail.com</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContatoPage;