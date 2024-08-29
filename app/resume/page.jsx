"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaLaravel,
  FaJava,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiMysql, SiTaildwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "I am a 5th semester undergraduate student of Informatics bachelor degree and I am concerned about the Full Stack Website Developer role. Experienced with various languages, technologies, and applications that play a role in web-based programming. Have been a project manager in various course projects and ensure the website functions and looks as agreed with the client. Ensuring the front end and back end are well integrated so that every feature of the website runs as it should.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sandy Nicholas",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 822-2912-1208",
    },
    {
      fieldName: "Email",
      fieldValue: "sandynicholas1201@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesian, English",
    },
  ],
};

//experience data
const experience = {
  title: "My Experience",
  description:
    "2+ years experience, with 8 projects completed, 200 code commited, and 14 programming technologies mastered",
  items: [
    {
      company: "PT. Badan Emas Indonesia",
      position: "Freelance Website Developer",
      duration: "2024 - Present",
      location: "Indonesia",
    },
    {
      company: "Chaniel Youth Community",
      position: "Freelance Graphic Designer",
      duration: "2024 - Present",
      location: "Indonesia",
    },
    {
      company: "UPN Veteran Jawa Timur",
      position: "Junior Website Developer",
      duration: "2022 - Present",
      location: "Indonesia",
    },
    {
      company: "SMA Negeri 3 Surabaya",
      position: "Junior Graphic Designer",
      duration: "2019 - 2022",
      location: "Indonesia",
    },
  ],
};

//education data
const education = {
  title: "My Education",
  description:
    "5th semester Undergraduate Student of Informatics Bachelor Degree at UPN Veteran Jawa Timur",
  items: [
    {
      institution: "UPN Veteran Jawa Timur",
      degree: "Informatics Bachelor Degree",
      duration: "2022 - Present",
    },
    {
      institution: "Youtube Programming Chanel",
      degree: "Full Stack Web Developer Course",
      duration: "2022 - Present",
    },
    {
      institution: "Online Course Platform",
      degree: "Basic Programming Language Bootcamp",
      duration: "2022 - Present",
    },
    {
      institution: "SMA Negeri 3 Surabaya",
      degree: "Natural Sciences High School Diploma",
      duration: "2019 - 2022",
    },
  ],
};

//skills data
const skills = {
  title: "My Programming Skills",
  description:
    "I am well versed with various programming languages and technologies",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiTaildwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/*Content*/}
          <div className="min-h-[70vh] w-full">
            {/*Experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-autp xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={item.id}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/40">{item.company}</p>
                          </div>
                          <p className="text-white/90">{item.location}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*Education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-autp xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={item.id}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/40">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*Skills*/}
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>

            {/*About*/}
            <TabsContent value="about" className="w-full">
              About Me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
