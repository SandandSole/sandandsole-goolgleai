

import React, { useEffect, useState } from 'react';
import { SunburstLogoIcon } from './Icons';

interface NavbarProps {
    isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const navLinks = [
        { href: '/index.html', label: 'Início' },
        { href: '/nosso-metodo.html', label: 'Nosso Método' },
        { href: '/blog.html', label: 'Blog' },
    ];
    
    const isActive = (href: string) => {
        const pageName = href.substring(1); // remove leading '/'
        if (pageName === 'index.html') {
            return currentPath === '/' || currentPath.endsWith('/index.html');
        }
        return currentPath.endsWith(pageName);
    };

    const navClass = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-[#EFD9C1]/95 backdrop-blur-sm' : 'bg-transparent'}`;

    return (
        <nav className={navClass}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <a href="/index.html" className="flex items-center space-x-3" aria-label="Sand & Sole Home">
                        <SunburstLogoIcon />
                        <div className="art-deco-font text-2xl text-stone-800">
                             <span className="font-bold">Sand & Sole</span>
                        </div>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                className={`text-stone-700 hover:text-teal-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-teal-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${isActive(link.href) ? 'text-teal-600 font-semibold' : ''}`}
                            >
                                {link.label}
                            </a>
                        ))}
                         <a href="/contato.html" className="bg-[#ED8B84] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-colors shadow-sm hover:shadow-md">
                            Contato
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
