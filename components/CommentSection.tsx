
import React, { useState } from 'react';
import { CommentIcon, PaperPlaneIcon } from './Icons';

interface Comment {
    name: string;
    text: string;
    avatar: string;
}

const CommentSection: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<Comment[]>([]);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) {
            setError('Nome e comentário são obrigatórios.');
            return;
        }
        
        const newComment: Comment = {
            name,
            text: comment,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=818cf8&color=fff&font-size=0.5`,
        };
        
        setComments([newComment, ...comments]);
        setName('');
        setEmail('');
        setComment('');
        setError('');
    };

    return (
        <div className="max-w-4xl mx-auto mt-20">
            {/* Form Container */}
            <div className="bg-cream p-6 sm:p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <CommentIcon className="w-8 h-8 text-[#ED8B84]" />
                    <h3 className="art-deco-font text-3xl text-stone-800">Compartilhe sua Opinião</h3>
                </div>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                            <label htmlFor="commenter-name" className="block text-sm font-semibold text-stone-600 mb-2">
                                Nome <span className="text-[#ED8B84]">*</span>
                            </label>
                            <input 
                                type="text" 
                                id="commenter-name" 
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if(error && e.target.value.trim() && comment.trim()) setError('');
                                }}
                                placeholder="Seu nome"
                                className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="commenter-email" className="block text-sm font-semibold text-stone-600 mb-2">
                                E-mail (opcional)
                            </label>
                            <input 
                                type="email" 
                                id="commenter-email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="seu@email.com"
                                className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                            />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="comment" className="block text-sm font-semibold text-stone-600 mb-2">
                            Comentário <span className="text-[#ED8B84]">*</span>
                        </label>
                        <textarea 
                            id="comment" 
                            rows={4}
                            value={comment}
                            onChange={(e) => {
                                setComment(e.target.value);
                                if(error && e.target.value.trim() && name.trim()) setError('');
                            }}
                            placeholder="Compartilhe sua opinião sobre o tema do mês..."
                            className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                            maxLength={1000}
                            required
                        >
                        </textarea>
                    </div>
                    <div className="flex justify-between items-center mb-6 h-5">
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <p className="text-sm text-stone-500 ml-auto">{comment.length}/1000 caracteres</p>
                    </div>
                    <button type="submit" className="w-auto inline-flex items-center justify-center gap-2 bg-[#ED8B84] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                        <PaperPlaneIcon className="w-5 h-5" />
                        Enviar Comentário
                    </button>
                </form>
            </div>

            {/* Comments Display */}
            <div className="mt-12">
                {comments.length === 0 ? (
                    <div className="text-center py-8 text-stone-500">
                        <CommentIcon className="w-16 h-16 mx-auto mb-4 text-stone-300/80"/>
                        <p className="text-lg">Seja o primeiro a comentar sobre o tema deste mês!</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {comments.map((c, index) => (
                            <div key={index} className="flex items-start gap-4 p-5 bg-white/60 rounded-xl shadow-sm">
                                <img src={c.avatar} alt={c.name} className="w-11 h-11 rounded-full border-2 border-white"/>
                                <div>
                                    <p className="font-bold art-deco-font text-stone-800 text-lg">{c.name}</p>
                                    <p className="text-stone-700 leading-relaxed pt-1">{c.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;
