import { Banner, PageWrapper } from "@/components";
import Cta from "@/components/Cta";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { metaData } from "@/lib/utils/metadata";
import { doctors } from "@/lib/data/doctor";
import Link from "next/link";
import Icons from "@/components/Icon";

export async function generateMetadata(): Promise<Metadata> {
  return metaData({
    title: 'Dokter',
    description: 'Dokter Gigi Terdekat di Medan, hubungi kami untuk konsultasi dengan dokter gigi profesional',
    images: [{ url: '/assets/images/banner-dokter.webp' }],
    path: '/dokter',
  });
}

export default async function Doctor() {

  return (
    <PageWrapper className="min-h-screen">
      <section className="relative w-full overflow-hidden">
        <Image
          src="/assets/images/doctor/doctor-banner.webp"
          alt="Banner Dokter"
          width={1920}
          height={1080}
          className="z-10 w-full h-full object-cover"
        />

        <div className='bg-custom-black md:bg-transparent md:absolute bottom-0 w-full h-full flex justify-center items-end'>
          <div className="w-full md:max-w-5xl xl:max-w-6xl z-20 md:mb-[12vh]">
            <div className="p-7 md:p-0 md:max-w-[55%] flex flex-col h-full text-white">
              <h1 className="text-4xl text-[40px] mb-2 md:text-6xl md:leading-[76px] font-bold">Our Team</h1>
              <p>A smile is more than aesthetics. It’s emotion, identity, and it’s our passion to design it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <div className="w-full md:max-w-5xl xl:max-w-6xl p-7 md:px-0 md:py-20 ">
          <div className="flex flex-wrap flex-col md:flex-row justify-between gap-6 md:gap-8 mb-6 md:mb-12">
            {doctors.map((item, index) => (
              (index <= 2) && <div className="bg-white md:w-[31%] drop-shadow-md" key={index}>
                <Image
                  src={`/assets/images/doctor/doctor-person-${index + 1}.webp`}
                  alt={`doctor-${item.slug}`}
                  width={500}
                  height={500}
                  className="w-full"
                />
                <div className="flex flex-col gap-3 p-4">
                  <h5 className="leading-[150%] text-lg font-bold text-custom-text-color">{item.name}</h5>
                  <p className="text-custom-text-color-2 mb-2">{item.excrept}</p>
                  <Link className="text-sm text-custom-text-color leading-[130%] font-semibold flex gap-2 items-center" href={`/ourteam/${item.slug}`}>
                    See detail & schedules <Icons name="arrow-long-right" className="w-4 h-4 text-custom-text-color" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap flex-col md:flex-row justify-between gap-6 md:gap-8 mb-6 md:mb-12">
            {doctors.map((item, index) => (
              (index > 2) && <div className="bg-white md:w-[22.5%] drop-shadow-md" key={index}>
                <Image
                  src={`/assets/images/doctor/doctor-person-${index + 1}.webp`}
                  alt={`doctor-${item.slug}`}
                  width={500}
                  height={500}
                  className="w-full"
                />
                <div className="flex flex-col gap-3 p-4">
                  <h5 className="leading-[150%] text-lg font-bold text-custom-text-color">{item.name}</h5>
                  <p className="text-custom-text-color-2 mb-2">{item.excrept}</p>
                  <Link className="text-sm text-custom-text-color leading-[130%] font-semibold flex gap-2 items-center" href={`/ourteam/${item.slug}`}>
                    See detail & schedules <Icons name="arrow-long-right" className="w-4 h-4 text-custom-text-color" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta
        title="Personalized Care by Trusted Hands"
        description={<>
          Each ONYX dentist brings years of skill, <br className="md:hidden" /> passion, and precision to your smile. <br />
          Choose your expert and take the first <br className="md:hidden" /> step today.
        </>}
        image="doctor/doctor-cta"
        classNameImage="mt-6"
        buttonLabel="Book Your Session Now"
      />
    </PageWrapper>
  );
}
