

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import VideoModal from './VideoModal';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [isNavScrolled, setIsNavScrolled] = useState(false);

    const handleOpenModal = useCallback((url: string) => {
        setVideoUrl(url);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setVideoUrl('');
        document.body.style.overflow = 'auto';
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsNavScrolled(true);
            } else {
                setIsNavScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleSmoothScroll = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a');
            
            const href = anchor?.getAttribute('href');
            if (anchor && href && href.startsWith('#')) {
                const element = document.querySelector(href);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        return () => document.removeEventListener('click', handleSmoothScroll);
    }, []);
    
    // Pass the modal handler to page components that might need it
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { onOpenModal: handleOpenModal });
        }
        return child;
    });

    return (
        <>
            <Navbar isScrolled={isNavScrolled} />
            <main> {/* Offset for fixed navbar is now handled by each page */}
                {childrenWithProps}
            </main>
            <Footer />
            <WhatsAppButton />
            <VideoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                videoUrl={videoUrl}
            />
        </>
    );
};

export default Layout;