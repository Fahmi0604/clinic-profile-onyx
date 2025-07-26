import { PageWrapper } from "@/components";
import Icons from "@/components/Icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/data/doctor";
import Image from "next/image";

export default async function DetailDoctor({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const doctor = doctors.find((d) => d.slug === slug);
    const index = doctors.findIndex((d) => d.slug === slug);
    return (<PageWrapper className="w-full min-h-screen flex justify-center bg-custom-primary">
        <section className="w-full p-7 md:px-0 md:py-20 md:max-w-5xl xl:max-w-6xl text-custom-text-color">
            <h1 className="text-5xl font-eb-garamond font-semibold leading-[150%] mb-4">{doctor?.name}</h1>
            <div className='flex gap-7 mb-14'>
                {doctor?.statistic && doctor?.statistic.map((s) => (
                    <div key={s.title} className='flex items-center gap-2'>
                        <Icons name='verified' className='w-6 h-6 ' />
                        <p className='font-bold'>{s.value}</p>
                        <p className=''>{s.title}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 mb-14">
                <Image
                    src={`/assets/images/doctor/doctor-detail-${index + 1}.webp`}
                    alt={`doctor-${slug}`}
                    width={500}
                    height={500}
                    className="w-full"
                />
                <div className="flex flex-col justify-between bg-custom-white-accent p-10">
                    <h2 className="leading-[130%] text-3xl font-eb-garamond font-semibold mb-4" >Profile</h2>

                    <div>
                        <div className='mb-4'>
                            <p className="text-custom-text-color-3">Year of experience</p>
                            <p className="font-bold">{doctor?.year_experience} Years</p>
                        </div>

                        <div className='mb-4'>
                            <p className="text-custom-text-color-3">Speciality</p>
                            <p className="font-bold">{doctor?.speciality}</p>
                        </div>

                        <div className='mb-4'>
                            <p className="text-custom-text-color-3">Education</p>
                            {doctor?.education.map((e) => (
                                <p className="font-bold" key={e}>{e}</p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="mb-4">{doctor?.description}</p>

                        <Button className="flex text-black font-helvetica font-semibold cursor-pointer bg-custom-brown rounded-none py-5 mb-4 md:mb-0 md:mr-4 hover:bg-custom-brown/70">
                            Make appointment now
                        </Button>
                    </div>
                </div>
            </div>

            <h2 className="text-4xl font-eb-garamond font-semibold leading-[47px] mb-4">Schedule</h2>
            <hr className="w-full border-custom-text-color mb-10" />
            <div className="grid grid-cols-7 mb-14">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div className="flex" key={day}>
                        <div className="bg-custom-green-accent w-1 mr-2" />
                        <div className="flex flex-col">
                            <p className='font-bold'>{day}</p>
                            <p className=''>{doctor?.schedule.find(f => f.day === day)?.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Accordion
                type='multiple'
                // collapsible
                className='w-full'
            >
                <AccordionItem className='border-none' value={`item-1`}>
                    <AccordionTrigger icon="chevron" iconClassName="size-8" className='text-4xl font-eb-garamond font-semibold leading-[47px] items-center border-none'>Continuing Education & Speaking Engagements</AccordionTrigger>
                    <hr className="w-full border-custom-text-color mb-4" />
                    <AccordionContent className='' >
                        {/* <hr className="w-full border-custom-text-color mb-4" /> */}
                        <ul className='list-disc pl-5'>
                            {doctor?.experience.map((e, i) => (
                                <li className='mb-4' key={i}>{e}</li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    </PageWrapper>)
}