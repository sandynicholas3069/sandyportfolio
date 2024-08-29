"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "Database Toko Buku IMS",
    description:
      'A database website development project for the case study "Toko Buku IMS"',
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Php" },
      { name: "MySql" },
    ],
    image: "/assets/Work/work1.png",
    href: "https://github.com/sandynicholas3069/DatabaseTokoBukuIMS",
  },
  {
    num: "02",
    category: "Web Development",
    title: "Website Personal CV",
    description: "A personal CV website development project",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Php" },
    ],
    image: "/assets/Work/work2.png",
    href: "https://github.com/sandynicholas3069/PersonalCVWebsite",
  },
  {
    num: "03",
    category: "Web Development",
    title: "Database CyberGym",
    description:
      'A database website development project for the case study "Cyber Gym"',
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Php" },
      { name: "MySql" },
    ],
    image: "/assets/Work/work3.png",
    href: "https://github.com/sandynicholas3069/DatabaseCyberGym",
  },
  {
    num: "04",
    category: "Web Development",
    title: "Database Ramadhanku",
    description:
      'A database website development project for the case study "Ramadhanku"',
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Php" },
      { name: "MySql" },
    ],
    image: "/assets/Work/work4.png",
    href: "https://github.com/sandynicholas3069/DatabaseRamadhanku",
  },
  {
    num: "05",
    category: "Web Development",
    title: "Website Destinasi Wisata Pantai Srau",
    description:
      'A database website development project for the case study "Destinasi Wisata Pantai Srau"',
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Php" },
      { name: "MySql" },
    ],
    image: "/assets/Work/work5.png",
    href: "https://github.com/nafispratama04/Pemweb",
  },
  {
    num: "06",
    category: "App Development",
    title: "App Sistem Manajemen Pegawai Kasir",
    description:
      'A database app development project for the case study "Sistem Manajemen Pegawai Kasir"',
    stack: [{ name: "Java" }],
    image: "/assets/Work/work6.png",
    href: "https://github.com/nafispratama04/PBO",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                <Link href={project.href}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Detail Code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[400px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className="w-full flex justify-center items-center"
                >
                  <div className="relative flex justify-center items-center w-full h-full overflow-hidden">
                    {/* Container div dengan ukuran lebih besar */}
                    <div className="relative flex justify-center items-center w-[600px] h-[300px]">
                      {" "}
                      {/* Ukuran container yang lebih besar */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={2000} // ukuran asli gambar
                        height={1000} // ukuran asli gambar
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Button Swipe */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
