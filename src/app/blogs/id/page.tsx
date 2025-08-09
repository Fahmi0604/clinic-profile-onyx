// app/blogs/page.tsx
import Link from 'next/link';
// import { findPublishedBlogs } from '@/lib/models';
import Image from 'next/image';
import { format } from 'date-fns'
import { id } from 'date-fns/locale';
import Icons from '@/components/Icon';
import { PageWrapper } from '@/components';
import { Metadata } from 'next';
import { getBlogs } from '@/lib/api';
import { notFound } from 'next/navigation';
import { metaData } from '@/lib/utils/metadata';
import Cta from '@/components/Cta';

export const revalidate = 60; // ISR: update list every 60s

export async function generateMetadata(): Promise<Metadata> {
    return metaData({
        title: 'Blog - Onyx Dental Center',
        description: "Ditulis oleh tim ahli dan profesional dokter gigi kami, blog kami menyajikan wawasan terbaru dan tips tentang perawatan gigi, perawatan, dan inovasi dalam dunia kedokteran gigi. Booking sekarang.",
        images: [{ url: '/assets/images/home-section4-3.webp' }],
        path: '/blogs/id',
    });
};

export default async function BlogListPage() {
    const _blogs = await getBlogs("id-id");

    if (!_blogs) return notFound();

    const blogs = _blogs.data;

    return (
        <PageWrapper className=" bg-custom-primary">
            <section className='min-h-screen flex justify-center px-4 py-8 md:py-20'>
                <div className='w-full md:max-w-5xl xl:max-w-6xl'>
                    <div className='mb-24'>
                        <div className='flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10'>
                            <h3 className="leading-[130%] text-3xl md:text-5xl font-eb-garamond font-bold text-heading-1">Artikel Dental</h3>
                            
                            {/* Language Switcher */}
                            <div className='flex gap-2 mt-4 md:mt-0'>
                                <div className='px-4 py-2 rounded-lg font-medium bg-custom-secondary text-white'>
                                    Bahasa Indonesia
                                </div>
                                <Link 
                                    href="/blogs/en" 
                                    className='px-4 py-2 rounded-lg font-medium transition-colors bg-white text-custom-text-color border border-gray-300 hover:bg-gray-50'
                                >
                                    English
                                </Link>
                            </div>
                        </div>

                        <div className='w-full flex flex-col md:flex-row flex-wrap items-stretch gap-5 md:gap-7 xl:gap-10'>
                            {blogs.map((e) => (
                            <Link key={e.id} href={`/blogs/${e.slug}`} className='w-full md:w-[31%] flex flex-col gap-4 bg-white drop-shadow-md'>
                                <Image
                                src={e.thumbnailUrl}
                                alt={e.title}
                                width={200}
                                height={200}
                                className='w-full h-[250px] object-cover'
                                />
                                <div className='w-full h-full flex flex-col justify-between p-4'>
                                <div>
                                    <h4 className='leading-[130%] text-2xl font-semibold text-custom-text-color mb-2'>{e.title}</h4>
                                    <p className='leading-[150%] text-[#7C7C7C]'>{e.excerpt}</p>
                                </div>

                                <div className='flex justify-between items-center mt-8'>
                                    <span className='leading-[150%] text-[#7C7C7C]'>{format(e.published_at ?? '', 'dd MMMM yyyy', { locale: id })}</span>
                                    <p className='leading-[150%] text-custom-text-color font-semibold flex items-center gap-2'>Baca Selengkapnya <Icons name='arrow-forward' className='w-6 h-6 text-black'></Icons></p>
                                </div>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Cta
            title="Mulai transformasi senyuman Anda"
            description={`
                Senyuman Anda adalah ciri khas Anda. Biarkan kami memperbaikinya dengan perhatian, presisi, dan mata
                yang melihat keanggunan.
            `}
            image="proven-result/proven-result-cta"
            classNameTitle="text-2xl"
            buttonLabel="Pesan Sesi Anda Sekarang"
            />
        </PageWrapper>
    );
}
