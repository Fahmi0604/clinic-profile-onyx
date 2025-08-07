'use client';

import { useEffect, useState } from 'react';

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    htmlContent: string;
    language?: string;
}

export default function TableOfContents({ htmlContent, language }: TableOfContentsProps) {
    const [tocItems, setTocItems] = useState<TocItem[]>([]);

    useEffect(() => {
        // Create a temporary DOM element to parse HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        // Find all heading elements (h1-h6)
        const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        const items: TocItem[] = [];
        
        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.charAt(1));
            const text = heading.textContent || '';
            
            // Generate ID if it doesn't exist
            let id = heading.id;
            if (!id) {
                id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                
                // Ensure uniqueness
                id = `${id}-${index}`;
            }
            
            items.push({ id, text, level });
        });

        setTocItems(items);
    }, [htmlContent]);

    if (tocItems.length === 0) return null;

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="bg-gray-50 rounded-lg p-6 m-8 border border-gray-200">
            <h2 className="text-lg font-semibold text-custom-text-color mb-4 font-eb-garamond">
                {language === 'id-id' ? "Daftar Isi" : "Table of Content"}
            </h2>
            <nav>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                    {tocItems.map((item) => (
                        <li
                            key={item.id}
                            style={{ marginLeft: `${(item.level - 1) * 16}px` }}
                        >
                            <button
                                onClick={() => handleClick(item.id)}
                                className="text-left text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}
