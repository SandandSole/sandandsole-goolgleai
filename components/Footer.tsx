
import React from 'react';
import { SunburstLogoIconLarge, FacebookIcon, InstagramIcon, TikTokIcon, LinkedInIcon, LocationIcon, PhoneIcon, EmailIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer id="contato" className="bg-[#EFD9C1] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <SunburstLogoIconLarge />
                            <div className="art-deco-font text-3xl">
                                <span className="text-teal-600">SAND</span> <span className="text-amber-600">&</span> <span className="text-teal-600">SOLE</span>
                            </div>
                        </div>
                        <p className="text-stone-700 mb-6 max-w-md">
                            Transformando eventos em experiências únicas através da arte da personalização de chinelos ao vivo em Florianópolis.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/sandandsole.co" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-white text-stone-700 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                                <FacebookIcon className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/sandandsole.co" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white text-stone-700 hover:bg-pink-500 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                                <InstagramIcon className="w-5 h-5" />
                            </a>
                            <a href="https://www.tiktok.com/@sandandsole.co" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 bg-white text-stone-700 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                                <TikTokIcon className="w-5 h-5" />
                            </a>
                             <a href="https://www.linkedin.com/company/sand-sole" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-white text-stone-700 hover:bg-blue-700 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                                <LinkedInIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="art-deco-font text-lg text-stone-800 mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="/index.html" className="text-stone-700 hover:text-teal-600 transition-colors">Início</a></li>
                            <li><a href="/nosso-metodo.html" className="text-stone-700 hover:text-teal-600 transition-colors">Nosso Método</a></li>
                            <li><a href="/blog.html" className="text-stone-700 hover:text-teal-600 transition-colors">Blog</a></li>
                            <li><a href="/contato.html" className="text-stone-700 hover:text-teal-600 transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="art-deco-font text-lg text-stone-800 mb-4">Contato</h4>
                        <ul className="space-y-2 text-stone-700">
                            <li className="flex items-center">
                                <LocationIcon className="w-4 h-4 mr-2 flex-shrink-0 text-teal-600" />
                                Florianópolis, SC
                            </li>
                            <li className="flex items-center">
                                <EmailIcon className="w-4 h-4 mr-2 flex-shrink-0 text-teal-600" />
                                <a href="mailto:sandandsole@gmail.com" className="hover:text-teal-600">sandandsole@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-300 mt-12 pt-8 text-center text-stone-600">
                    <p>&copy; 2025 Sand & Sole. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;