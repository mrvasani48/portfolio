import { images } from "assets/img";
import { Icon } from "@iconify/react";
import Typewriter from "typewriter-effect";

const PersonalInfo = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 mt-12 mb-5" id="home">
      <div className="my-4 mt-28 ">
        <p className="mb-8 font-bold uppercase"> welcome to my world</p>
        <h1 className="text-7xl font-bold">
          Hi, I’m{" "}
          <span className="text-dark-900 dark:text-red-600 font-bold">
            {" "}
            Jone Lee{" "}
          </span>
          <div className="flex gap-5 pt-5 font-bold">
            {" "}
            a
            <Typewriter
              options={{
                strings: ["Developer.", "Professional coder.", "Technologist."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h1>
        <p className="mt-20 text-lg pr-40 font-sans">
          As a skilled full-stack developer, I possess expertise in a wide range
          of programming languages, tools, and methodologies required for both
          front-end and back-end development. With a strong passion for
          innovation and a knack for problem-solving, I excel in collaborative
          environments and understand the significance of effective
          communication and teamwork in delivering successful projects.
        </p>
        <div className="mt-20 grid grid-cols-2">
          <div>
            <p className="uppercase">find with me</p>
            <div className="flex gap-10 mt-4">
              <a
                href="https://www.linkedin.com/in/kishan-vasani-3083961a5"
                target="_blank"
                rel="noreferrer"
                className="text-4xl bg-dark-secondary p-2 rounded-md  dark:text-red-500 text-white before:bottom-0  before:-z-10 before:rounded-md hover:shadow-md hover:shadow-dark-500"
              >
                <Icon icon="ri:linkedin-line" />
              </a>
              <a
                href="https://twitter.com/mrvasani48"
                target="_blank"
                rel="noreferrer"
                className="text-4xl bg-dark-secondary p-2 rounded-md  dark:text-red-500 text-white hover:shadow-md hover:shadow-dark-500"
              >
                <Icon icon="icon-park-outline:twitter" />
              </a>
              <a
                href="https://instagram.com/er.entwickler_48?igshid=ZGUzMzM3NWJiOQ=="
                target="_blank"
                rel="noreferrer"
                className="text-4xl bg-dark-secondary p-2 rounded-md  dark:text-red-500 text-white hover:shadow-md hover:shadow-dark-500"
              >
                <Icon icon="bxl:instagram" />
              </a>
            </div>
          </div>
          <div>
            <p className="uppercase">best skill on</p>
            <div className="flex gap-10 mt-4">
              <p className="text-4xl bg-dark-secondary dark:text-red-500 p-2 rounded-md text-white hover:shadow-md hover:shadow-dark-500">
                <Icon icon="fluent:window-dev-tools-20-regular" />
              </p>
              <p className="text-4xl bg-dark-secondary  dark:text-red-500 p-2 rounded-md text-white hover:shadow-md hover:shadow-dark-500">
                <Icon icon="fluent:code-js-16-regular" />
              </p>
              <p className="text-4xl bg-dark-secondary  dark:text-red-500 p-2 rounded-md text-white hover:shadow-md hover:shadow-dark-500">
                <Icon icon="mdi:react" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex ml-11 justify-center	rounded-xl thumbnail">
          <img src={images.profile} alt="user profile" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
