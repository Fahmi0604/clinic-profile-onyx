import { PageWrapper } from "@/components";
import Cta from "@/components/Cta";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { metaData } from "@/lib/utils/metadata";
import { cn } from "@/lib/utils";

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
    <PageWrapper className="min-h-screen bg-custom-primary">
      {/* <HeroPhilosophy /> */}
      <section className="relative w-full overflow-hidden">
        <Image
          src="/assets/images/experience/experience-banner.webp"
          alt="Banner Experience"
          width={1920}
          height={1080}
          className="z-10 w-full h-full object-cover"
        />

        <div className='bg-custom-black md:bg-transparent md:absolute bottom-0 w-full h-full flex justify-center items-end'>
          <div className="w-full md:max-w-5xl xl:max-w-6xl z-20 md:mb-[12vh]">
            <div className="p-7 md:p-0 flex flex-col h-full text-white">
              <h1 className="text-4xl text-[40px] mb-2 md:text-6xl md:leading-[76px] font-eb-garamond font-bold">The Onyx Experience</h1>
              <p>Each corner of ONYX is thoughtfully designed to elevate your senses and redefine what a dental experience can be.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-7 pt-7 md:py-20 space-y-12 md:space-y-24">
        <div className="w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between text-custom-text-color">
          <div className="px-7 md:px-0 md:w-[22%] xl:w-[24%]">
            <h2 className="leading-[130%] text-2xl md:leading-[47px] md:text-4xl font-eb-garamond font-semibold mb-4">Modern and Comfortable Clinic</h2>

            <p className="leading-[150%] md:leading-[130%] xl:max-w-[90%] mb-2">An elegant space where comfort meets design, curated for your comfort and aesthetic pleasure, making every visit feel exceptional</p>
            <ul className="list-disc pl-5">
              <li>Reception atelier</li>
              <li>Refreshments bar</li>
              <li>Aesthetic lounge</li>
              <li>Powder room</li>
            </ul>
          </div>
          <div className={cn("md:w-[50%] xl:w-[48%]")}>
            <Image
              src={`/assets/images/experience/experience-image-1.webp`}
              alt="experience-image-1"
              width={500}
              height={500}
              className="w-full md:h-[454px]"
            />
          </div>
          <div className={cn("md:w-[25%] xl:w-[24%] flex flex-col justify-between")}>
            <Image
              src={`/assets/images/experience/experience-image-2.webp`}
              alt="experience-image-2"
              width={500}
              height={500}
              className="w-full md:h-[215px]"
            />
            <Image
              src={`/assets/images/experience/experience-image-3.webp`}
              alt="experience-image-3"
              width={500}
              height={500}
              className="w-full md:h-[215px]"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between text-custom-text-color">
          <div className="px-7 md:px-0 md:w-[22%] xl:w-[24%]">
            <h2 className="leading-[130%] text-2xl md:leading-[47px] md:text-4xl font-eb-garamond font-semibold mb-4">Comfortable Care with Advanced Technology</h2>

            <p className="leading-[150%] md:leading-[130%] xl:max-w-[96.7%] mb-2">Enjoy precise, personalized care in a calming setting, complete with advanced technologies and thoughtful touches.</p>
            <ul className="list-disc pl-5">
              <li>The smile studio</li>
              <li>Dental microscope</li>
              <li>Intra oral scanner</li>
              <li>Airflow device</li>
            </ul>
          </div>
          <div className={cn("md:w-[25%] xl:w-[24%]")}>
            <Image
              src={`/assets/images/experience/experience-image-4.webp`}
              alt="experience-image-4"
              width={500}
              height={500}
              className="w-full md:h-[454px]"
            />
          </div>
          <div className={cn("md:w-[25%] xl:w-[24%]")}>
            <Image
              src={`/assets/images/experience/experience-image-5.webp`}
              alt="experience-image-5"
              width={500}
              height={500}
              className="w-full md:h-[454px]"
            />
          </div>
          <div className={cn("md:w-[25%] xl:w-[24%]")}>
            <Image
              src={`/assets/images/experience/experience-image-6.webp`}
              alt="experience-image-6"
              width={500}
              height={500}
              className="w-full md:h-[454px]"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between text-custom-text-color">
          <div className="px-7 md:px-0 md:w-[22%] xl:w-[24%]">
            <h2 className="leading-[130%] text-2xl md:leading-[47px] md:text-4xl font-eb-garamond font-semibold mb-4">Co-diagnosed by The Founders</h2>

            <p className="leading-[150%] md:leading-[130%] mb-2">Your smile design is carefully tailored and co-diagnosed by our passionate founders, ensuring it reflects both artistry and dental expertise.</p>
          </div>
          <div className={cn("md:w-[50%] xl:w-[48%]")}>
            <Image
              src={`/assets/images/experience/experience-image-7.webp`}
              alt="experience-image-7"
              width={500}
              height={500}
              className="w-full md:h-[454px]"
            />
          </div>
          <div className={cn("md:w-[25%] xl:w-[24%] flex flex-col justify-between")}>
            <Image
              src={`/assets/images/experience/experience-image-8.webp`}
              alt="experience-image-8"
              width={500}
              height={500}
              className="w-full md:h-[215px]"
            />
            <Image
              src={`/assets/images/experience/experience-image-9.webp`}
              alt="experience-image-9"
              width={500}
              height={500}
              className="w-full md:h-[215px]"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between text-custom-text-color">
          <div className="px-7 md:px-0 md:w-[22%] xl:w-[24%]">
            <h2 className="leading-[130%] text-2xl md:leading-[47px] md:text-4xl font-eb-garamond font-semibold mb-4">Fun place for the little smiles</h2>

            <p className="leading-[150%] md:leading-[130%] mb-2">Our clinic is designed for comfort and joy, turning dental visits into positive early memories.</p>
            <ul className="list-disc pl-5">
              <li>Kids treatment room</li>
              <li>Kids corner</li>
              <li>Kid-friendly dentist</li>
            </ul>
          </div>
          <div className={cn("md:w-[25%] xl:w-[24%]")}>
            <Image
              src={`/assets/images/experience/experience-image-10.webp`}
              alt="experience-image-10"
              width={500}
              height={500}
              className="w-full md:h-[455px]"
            />
          </div>
          <div className={cn("md:w-[50%] xl:w-[48%]")}>
            <Image
              src={`/assets/images/experience/experience-image-11.webp`}
              alt="experience-image-11"
              width={500}
              height={500}
              className="w-full md:h-[454px]"
            />
          </div>
        </div>
      </section>

      <Cta
        title="Designed to make you feel at ease"
        description={<>
          From our smile studio to our private treatment suites, every space is crafted to <br className="hidden md:block" />
          calm, care, and bring out your most radiant self.
        </>}
        image="experience/experience-cta"
        classNameTitle="text-2xl"
        buttonLabel="Book Your Session Now"
      />
    </PageWrapper>
  );
}
