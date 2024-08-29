"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaLaravel,
  FaJava,
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
  title: "My Programming Experience",
  description:
    "2+ years experience, handling 8 projects with 200 code commited and 14 programming technologies mastered",
  items: [
    {
      company: "UPN Veteran Jawa Timur as A Student",
      position: "Junior Full Stack Website Developer",
      time: "2022 - Present",
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
      school: "UPN Veteran Jawa Timur",
      degree: "Informatics Bachelor Degree",
      time: "2022 - Present",
    },
    {
      school: "Online Course Platform",
      degree: "Basic Programming Language Bootcamp",
      time: "2022 - Present",
    },
    {
      school: "SMA Negeri 3 Surabaya",
      degree: "Natural Sciences High School Diploma",
      time: "2019 - 2022",
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

const Resume = () => {
  return <div>Resume Page</div>;
};

export default Resume;
