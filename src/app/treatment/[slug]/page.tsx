import { PageWrapper } from "@/components";
import Icons from "@/components/Icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { treatments } from "@/lib/data/treatment";
import Image from "next/image";

export default async function DetailDoctor({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const treatment = treatments.find((d) => d.slug === slug);
    const index = treatments.findIndex((d) => d.slug === slug);
    return (<PageWrapper className="min-h-screen bg-custom-primary">
        <section className="relative w-full overflow-hidden flex flex-col-reverse md:flex-row mb-10 md:mb-20">
            <div className='bg-custom-white-accent md:absolute z-10 left-0 w-full h-full flex justify-center items-center'>
                <div className="w-full md:max-w-5xl xl:max-w-6xl z-20">
                    <div className="p-7 md:p-0 md:max-w-[37.5%] flex flex-col h-full text-custom-text-color">
                        <h1 className="text-3xl text-[32px] mb-2 md:text-6xl md:leading-[76px] font-eb-garamond font-semibold">{treatment?.title}</h1>
                        <p className="leading-[150%] md:leading-[24px] mb-10">{treatment?.subheading}</p>

                        <div className="flex flex-col gap-2">
                            {treatment?.description?.map((e, i) => {

                                let icon = '';
                                if (i === 0) icon = 'verified'
                                if (i === 1) icon = 'star-badge'
                                if (i === 2) icon = 'clock4'

                                return (<div key={i} className="flex gap-2 text-custom-text-color">
                                    <Icons name={icon as any} />
                                    <div className="flex flex-col">
                                        <h5 className="font-bold">{e.heading}</h5>
                                        <p>{e.list}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2" />
            <div className="md:w-1/2 z-30">
                <Image
                    src="/assets/images/proven-result/proven-result-banner.webp"
                    alt="Banner Proven Result"
                    width={1920}
                    height={1080}
                    className="z-30 w-full h-full object-cover"
                />
            </div>
        </section>

        <section className="hidden w-full md:flex justify-center">
            <div className="w-full flex flex-col md:max-w-5xl xl:max-w-6xl">
                <h1 className="font-eb-garamond font-semibold text-custom-text-color text-2xl md:text-4xl mb-6 md:mb-12">The Results</h1>
                <div className="flex flex-wrap flex-col md:flex-row justify-between gap-6 md:gap-8 mb-6 md:mb-12">
                    {treatment?.result && treatment?.result.map((item, index) => (
                        <div className="md:w-[31%]" key={index}>
                            <Image
                                src={item.image}
                                alt="section1"
                                width={500}
                                height={500}
                                className="w-full"
                            />
                            <p className="mt-2 text-custom-text-color-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </PageWrapper>)
}