import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import Icons from './Icon';
import { cn, whatsappLink } from '@/lib/utils';
import { getSettings } from '@/lib/api';
import Link from 'next/link';

type CtaProps = {
    title: string | React.ReactNode
    description: string | React.ReactNode;
    image: string;
    classNameImage?: string;
    buttonLabel?: string;
    url?: string;
}

async function Cta(props: CtaProps) {
    const { title = '', description = '', image, classNameImage, buttonLabel, url } = props;

    const settings = await getSettings()

    return (
        <section className="w-full bg-custom-brown flex justify-center">
            <div className="w-full flex flex-col md:flex-row md:max-w-5xl xl:max-w-6xl pt-7 px-7 md:p-0">
                <div className='md:w-1/2 flex flex-col justify-center gap-6 text-custom-text-color mb-6 md:mb-0'>
                    <h2 className='leading-[130%] font-eb-garamond font-semibold text-3xl text-[32px] md:text-4xl'>{title}</h2>
                    <p className='leading-[150%] mb-2'>{description}</p>
                    <Link className='w-full md:w-fit' href={url || whatsappLink(settings.data.socials?.whatsapp ?? '')}>
                        <Button className="w-full flex text-black font-helvetica font-semibold cursor-pointer bg-white rounded-none !py-6 !px-10 hover:bg-white/70">
                            {/* <Icons name="whatsapp" className="md:hidden h-10 w-10" /> */}
                            {buttonLabel ?? "Book Your Session Now"}
                            <Icons name="whatsapp" className=" h-10 w-10" />
                        </Button>
                    </Link>
                </div>
                <div className='md:w-1/2'>
                    <Image
                        src={`/assets/images/${image}-desktop.webp`}
                        alt={'cta'}
                        width={1280}
                        height={720}
                        className={cn('w-full hidden md:block', classNameImage)}
                    />
                    <Image
                        src={`/assets/images/${image}-mobile.webp`}
                        alt={'cta'}
                        width={1280}
                        height={720}
                        className={cn('w-full md:hidden', classNameImage)}
                    />
                </div>
            </div>
        </section>
    )
}

export default Cta