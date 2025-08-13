
import React from 'react';
import BlogSection from '../components/BlogSection';
import InspirationSection from '../components/InspirationSection';

const BlogPage: React.FC = () => {
    return (
        <>
            <header className="bg-white pt-28 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="art-deco-font text-5xl md:text-6xl text-stone-800 mb-4">Blog & Inspiração</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">Descubra tendências, dicas e histórias do nosso universo criativo.</p>
                </div>
            </header>
            <InspirationSection hideButton={true} />
            <BlogSection isPage={true} />
        </>
    );
};

export default BlogPage;