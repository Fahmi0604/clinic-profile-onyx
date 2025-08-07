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
    const [isExpanded, setIsExpanded] = useState(false);

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

    // Don't render if no headings found
    if (tocItems.length === 0) return null;

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Auto-collapse on mobile after clicking
            if (window.innerWidth < 768) {
                setIsExpanded(false);
            }
        }
    };

    // Helper function for button text
    const getToggleText = () => {
        if (isExpanded) {
            return language === 'id-id' ? 'Tutup' : 'Hide';
        }
        return language === 'id-id' ? 'Lihat' : 'Show';
    };

    // Helper function for title
    const getTitle = () => {
        return language === 'id-id' ? "Daftar Isi" : "Table of Contents";
    };

    return (
        <div className="bg-gray-50 rounded-lg p-4 md:p-6 mt-4 border border-gray-200">
            {/* Header with Mobile Toggle */}
            <div className="flex items-center justify-between md:block">
                <h2 className="text-base md:text-lg font-semibold text-custom-text-color font-eb-garamond">
                    {getTitle()}
                </h2>
                
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="md:hidden text-sm text-blue-600 hover:text-blue-800 font-medium"
                    aria-label={`${getToggleText()} table of contents`}
                >
                    {getToggleText()}
                </button>
            </div>

            {/* Navigation Content */}
            <nav className={`mt-2 md:mt-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
                <ol className="list-decimal list-inside space-y-1 md:space-y-2">
                    {tocItems.map((item) => (
                        <li
                            key={item.id}
                            style={{ 
                                marginLeft: `${(item.level - 1) * 8}px`,
                                // Responsive indentation for desktop
                                ...(typeof window !== 'undefined' && window.innerWidth >= 768 && {
                                    marginLeft: `${(item.level - 1) * 16}px`
                                })
                            }}
                            className="break-words"
                        >
                            <button
                                onClick={() => handleClick(item.id)}
                                className="text-left text-xs md:text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 leading-relaxed"
                                title={`Jump to: ${item.text}`}
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