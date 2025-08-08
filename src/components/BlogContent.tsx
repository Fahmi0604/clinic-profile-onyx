'use client';

import { useEffect, useRef } from 'react';

interface BlogContentProps {
    content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        // Add IDs to headings that don't have them
        const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        headings.forEach((heading, index) => {
            if (!heading.id) {
                const text = heading.textContent || '';
                const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                
                heading.id = `${id}-${index}`;
            }
        });
    }, [content]);

    return (
        <article 
            ref={contentRef}
            className='mt-6 font-helvetica! md:max-w-3xl! xl:max-w-4xl! text-custom-text-color! prose lg:prose-lg' 
            dangerouslySetInnerHTML={{ __html: content }} 
        />
    );
}
