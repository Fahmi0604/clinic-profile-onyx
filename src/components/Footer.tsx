import { Label } from './ui/label'
import Link from 'next/link'
import Icons from './Icon'
import Image from 'next/image'

export default async function Footer({ settings }: { settings: Setting }) {

    const menuItems = [
        {
            label: "Our team",
            href: "/dokter",
        },
        {
            label: "Our Expertise",
            href: "/layanan",
        },
        {
            label: "The Onyx Experience",
            href: "/fasilitas",
        },
        {
            label: "Our Proven Result",
            href: "/hasil",
        },
        {
            label: "Blog",
            href: "/blogs",
        }
    ]

    return (
        <footer className="w-full bg-footer p-7 md:px-[10%] md:py-10">
            <div className='flex flex-col md:flex-row md:mb-14'>
                <div className='w-full grid grid-cols-1 md:grid-cols-4 mb-6 md:mb-0 gap-6 items-start justify-between'>
                    <Link href="/" className="flex mt-2 min-h-[10vh]">
                        <Image src="/logo-footer.svg" alt="logo" width={24} height={24} className="text-white w-[60%] md:w-40" />
                        <span className="sr-only">logo</span>
                    </Link>
                    <div className="grid md:grid-cols-1 text-white font-bold">
                        {menuItems.map((e) => (
                            <Link
                                key={e.label}
                                href={e.href}
                                className="leading-[150%] pb-4 sm:pb-4 h-fit"
                            >
                                {e.label}
                            </Link>
                        ))}
                    </div>
                    <div className='flex flex-col text-white font-bold'>
                        <div className='pb-4 h-fit'>Instagram</div>
                        <div className='pb-4 h-fit'>Tiktok</div>
                        <div className='pb-4 h-fit'>Youtube</div>
                        <div className='pb-4 h-fit'>Facebook</div>
                    </div>
                    <div className='grid gap-4 text-white'>
                        <Label className='text-lg font-bold'>Our Location:</Label>
                        <p>{settings.contactInfo?.address ?? `Ruko Asia Millenium, Jl. Taman Permata No.65 Blok C-1, Binong, Kec. Curug, Kabupaten Tangerang, Banten 15811`}</p>

                        <Link className='flex items-center font-bold' href={settings?.mapUrl ?? 'https://maps.app.goo.gl/ZBsTVozJhT83xfez7'}>
                            <Icons name='place' className='w-6 h-6 text-white mr-2' /> See on Google Maps
                        </Link>
                    </div>
                </div>
            </div>

            <hr className='text-white' />
            <div className="leading-[150%] flex justify-center mt-6 text-white">
                Copyright © Onyx Dental Center 2025
            </div>
        </footer>
    )
}