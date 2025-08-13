
import React from 'react';
import { WhatsAppIcon } from './Icons';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = "5548999518203";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
            aria-label="Fale conosco pelo WhatsApp"
        >
            <WhatsAppIcon className="w-8 h-8 text-white" />
        </a>
    );
};

export default WhatsAppButton;
