
import React from 'react';
import { PlayIcon } from './Icons';
import CommentSection from './CommentSection';
import BlogCTA from './BlogCTA';

interface ThemeSectionProps {
    onOpenModal: (url: string) => void;
}

const galleryItems = [
    { type: 'image', src: 'https://picsum.photos/id/103/320/256', alt: 'Tropical Design 1' },
    { type: 'video', src: 'https://picsum.photos/id/1043/320/256', alt: 'Making Process', videoUrl: 'https://www.youtube.com/embed/Scxs7L0hZqo?autoplay=1' },
    { type: 'image', src: 'https://picsum.photos/id/106/320/256', alt: 'Art Deco Style' },
    { type: 'video', src: 'https://picsum.photos/id/1084/320/256', alt: 'Customer Stories', videoUrl: 'https://www.youtube.com/embed/Scxs7L0hZqo?autoplay=1' },
    { type: 'image', src: 'https://picsum.photos/id/12/320/256', alt: 'Beach Vibes' },
    { type: 'image', src: 'https://picsum.photos/id/152/320/256', alt: 'Summer Fun' },
];


const ThemeSection: React.FC<ThemeSectionProps> = ({ onOpenModal }) => {
    return (
        <section id="tema-mes" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="art-deco-font text-4xl md:text-5xl text-stone-800 mb-4">
                        TEMA DO MÊS
                    </h2>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                        Explore a nossa galeria interativa e mergulhe em um universo de inspirações, tendências e criações exclusivas do mundo da personalização artística. A cada mês, selecionamos um novo tema para desafiar a sua criatividade e mostrar novas possibilidades.
                    </p>
                </div>

                <div className="gallery-scroll overflow-x-auto pb-4">
                    <div className="flex space-x-6 w-max px-4">
                        {galleryItems.map((item, index) => (
                            <div 
                                key={index} 
                                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                                onClick={() => item.type === 'video' && onOpenModal(item.videoUrl!)}
                            >
                                <div className="relative w-80 h-64 bg-white rounded-3xl shadow-lg overflow-hidden">
                                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                                    {item.type === 'video' && (
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                                                <PlayIcon className="w-6 h-6 text-stone-800 ml-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <CommentSection />

                <BlogCTA />
                
            </div>
        </section>
    );
};

export default ThemeSection;