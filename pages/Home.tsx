
import React from 'react';
import Hero from '../components/Hero';
import ThemeSection from '../components/ThemeSection';

interface HomePageProps {
  onOpenModal?: (url: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenModal = () => {} }) => {
    return (
        <>
            <Hero />
            <ThemeSection onOpenModal={onOpenModal} />
        </>
    );
};

export default HomePage;