import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
// import Icons from "./Icon"
import NavbarSheet from "./NavbarSheet"
// import PromoBar from "./PromoBar"
import { whatsappLink } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export default function Navbar({ settings }: { settings: Setting }) {

    const menuItems = [
        {
            label: "Our team",
            href: "/ourteam",
        },
        {
            label: "What we do",
            href: [
                {
                    label: "360 Smile Philosophy Session",
                    href: "/360smile",
                },
                {
                    label: "Treatments",
                    href: "/layanan",
                },
            ],
        },
        {
            label: "The Onyx Experience",
            href: "/fasilitas",
        },
        {
            label: "Proven Result",
            href: "/fasilitas",
        },
        {
            label: "Blog",
            href: "/blogs",
        }
    ]

    return (
        <>
            <header className="sticky top-0 z-[100] w-full shadow bg-custom-primary ">
                {/* <PromoBar headline={settings.highlight?.title ?? ''} /> */}
                <div className="container mx-auto flex h-16 md:h-20 md:max-w-5xl xl:max-w-6xl items-center justify-between px-4 xl:px-0">
                    <Link href="/" className="hidden md:flex md:items-center gap-2">
                        {/* <MountainIcon className="h-6 w-6 text-white" /> */}
                        <Image src="/logo.svg" alt="logo" className="w-36" width={24} height={24} priority />
                        <span className="sr-only">logo</span>
                    </Link>
                    {/* <div className="hidden md:flex gap-8"> */}
                    <nav className="hidden items-center gap-9 font-helvetica font-bold md:flex">
                        {menuItems.map((e) => (
                            typeof e.href === 'string' ? (
                                <Link
                                    key={e.label}
                                    href={e.href}
                                    className="text-custom-text-color hover:text-gray-400"
                                >
                                    {e.label}
                                </Link>
                            ) : (
                                <Popover key={e.label}>
                                    <PopoverTrigger className="text-custom-text-color hover:text-gray-400">{e.label}</PopoverTrigger>
                                    <PopoverContent className="p-4 flex flex-col gap-3 ml-[35%] z-[110] bg-black border-none text-white font-medium mt-2">
                                        {e.href.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </PopoverContent>
                                </Popover>
                            )
                        ))}
                    </nav>
                    {/* <div className="flex items-center gap-4"> */}
                    <Link href={whatsappLink(settings?.socials?.whatsapp ?? '')}>
                        <Button className="hidden md:flex text-md font-helvetica text-heading-2 font-semibold cursor-pointer drop-shadow bg-custom-brown rounded-none py-5 mx-4 hover:bg-custom-brown/50">
                            {/* <Icons name="whatsapp" className="h-6 w-6 text-heading-2" /> */}
                            Book Your Session
                        </Button>
                    </Link>
                    {/* </div> */}
                    {/* </div> */}

                    <NavbarSheet menuItems={menuItems} />
                </div>
            </header>
        </>
    )
}

// function MenuIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <line x1="4" x2="20" y1="12" y2="12" />
//             <line x1="4" x2="20" y1="6" y2="6" />
//             <line x1="4" x2="20" y1="18" y2="18" />
//         </svg>
//     )
// }

