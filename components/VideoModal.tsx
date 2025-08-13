
import React, { useEffect, useRef } from 'react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
    const backdropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === backdropRef.current) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            ref={backdropRef}
            onClick={handleBackdropClick}
            className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4"
        >
            <div className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full max-h-[80vh] shadow-2xl">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
                    aria-label="Close video modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full" 
                        src={videoUrl}
                        title="Video Player"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
