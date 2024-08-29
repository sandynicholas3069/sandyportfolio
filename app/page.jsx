import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent">
              Full Stack Website Developer
            </span>
            <h1 className="h1 mb-6 text-4xl">
              Hello I`m <br />
              <span className="text-5xl text-accent">Sandy Nicholas</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80 text-justify">
              I am a 5th semester undergraduate student of Informatics bachelor
              degree and I am concerned about the Full Stack Website Developer
              role. Experienced with various languages, technologies, and
              applications that play a role in web-based programming. Have been
              a project manager in various course projects and ensure the
              website functions and looks as agreed with the client. Ensuring
              the front end and back end are well integrated so that every
              feature of the website runs as it should.
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
