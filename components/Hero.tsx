import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { ThreeDCardDemo } from './ui/ThreeDCard';
import Image from 'next/image';
import WA from '@/public/wha.svg'

const Hero = () => {
  return (
    <div className="pb-20 pt-10">

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-12 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web Magic With React JS || Next JS</h2>
          <TextGenerateEffect
            words='Transforming Concepts into Seamless User Experiences'
            className='text-center text-[40px] md:text-5xl lg:text-[48px]'
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Hassan Jarko, A Full Stack Engineer based in Dubai
          </p>
          <ThreeDCardDemo />
          <div className='flex justify-center items-center gap-3 pb-5'>
            <p className='text-xl'>Let&apos;s chat on Whatsapp</p>
            <a href="https://wa.me/971509518842" target="_blank" rel="noopener noreferrer">
              <Image src={WA} width='30' height='50' alt='whatsapp logo' className='bg-green-400 rounded-full' />
            </a>
          </div>
          <a href='#projects'>
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
