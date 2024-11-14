import { Icon } from "@iconify/react";
import { images } from "assets/img";

const Portfolio = () => {
  return (
    <div id="PortFolio">
      <p className="mt-20 mb-5 border-2 border-dark-600 features"></p>
      <div className="mt-16">
        <p className="text-xl text-theme text-center">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <h2 className="text-gray-300 text-7xl text-center pt-10 mb-7">
          My Portfolio
        </h2>
        <div className="grid grid-cols-3 gap-20 mt-14">
          <div className="group p-10 rounded-3xl shadow-2xl shadow-dark-500">
            <div className="overflow-hidden rounded-xl ">
              <img
                src={images.portfolio1}
                alt="portfolio app"
                className="rounded-xl group-hover:scale-125"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-xl text-theme">Development</p>
              <p className="flex gap-1 items-center text-xl">
                <Icon icon="mdi:cards-heart-outline" /> 600
              </p>
            </div>
            <p className="text-gray-300 text-2xl text-start pt-5 hover:text-theme">
              The Service Provide For Design{" "}
              <span className="group-hover:visible invisible ml-1 text-3xl text-theme   ">
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="inline "
                />
              </span>
            </p>
          </div>
          <div className="group p-10 rounded-3xl shadow-2xl shadow-dark-500">
            <div className="overflow-hidden rounded-xl ">
              <img
                src={images.portfolio4}
                alt="portfolio app"
                className="rounded-xl group-hover:scale-125"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-xl text-theme">FIGMA</p>
              <p className="flex gap-1 items-center text-xl">
                <Icon icon="mdi:cards-heart-outline" /> 150
              </p>
            </div>
            <p className="text-gray-300 text-2xl text-start pt-5 hover:text-theme">
              Mobile App landing design & app maintain
              <span className="group-hover:visible invisible ml-1 text-3xl text-theme   ">
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="inline "
                />
              </span>
            </p>
          </div>
          <div className="group p-10 rounded-3xl shadow-2xl shadow-dark-500">
            <div className="overflow-hidden rounded-xl ">
              <img
                src={images.portfolio5}
                alt="portfolio app"
                className="rounded-xl group-hover:scale-125"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-xl text-theme">WEB DESIGN</p>
              <p className="flex gap-1 items-center text-xl">
                <Icon icon="mdi:cards-heart-outline" /> 4000
              </p>
            </div>
            <p className="text-gray-300 text-3xl text-start pt-5 hover:text-theme">
              Design for technology & service
              <span className="group-hover:visible invisible ml-1 text-3xl text-theme   ">
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="inline "
                />
              </span>
            </p>
          </div>
          <div className="group p-10 rounded-3xl shadow-2xl shadow-dark-500">
            <div className="overflow-hidden rounded-xl ">
              <img
                src={images.portfolio4}
                alt="portfolio app"
                className="rounded-xl group-hover:scale-125"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-xl text-theme">FIGMA</p>
              <p className="flex gap-1 items-center text-xl">
                <Icon icon="mdi:cards-heart-outline" /> 447
              </p>
            </div>
            <p className="text-gray-300 text-2xl text-start pt-5 hover:text-theme">
              Mobile app landing design & service
              <span className="group-hover:visible invisible ml-1 text-3xl text-theme   ">
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="inline "
                />
              </span>
            </p>
          </div>
          <div className="group p-10 rounded-3xl shadow-2xl shadow-dark-500">
            <div className="overflow-hidden rounded-xl ">
              <img
                src={images.portfolio5}
                alt="portfolio app"
                className="rounded-xl group-hover:scale-125"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-xl text-theme">WEB DESIGN</p>
              <p className="flex gap-1 items-center text-xl">
                <Icon icon="mdi:cards-heart-outline" /> 787
              </p>
            </div>
            <p className="text-gray-300 text-3xl text-start pt-5 hover:text-theme">
              Design technology & service
              <span className="group-hover:visible invisible ml-1 text-3xl text-theme   ">
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="inline "
                />
              </span>
            </p>
          </div>
          <div className="group p-10 rounded-3xl shadow-2xl shadow-dark-500">
            <div className="overflow-hidden rounded-xl ">
              <img
                src={images.portfolio6}
                alt="portfolio app"
                className="rounded-xl group-hover:scale-125"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-xl text-theme">WEB DESIGN</p>
              <p className="flex gap-1 items-center text-xl">
                <Icon icon="mdi:cards-heart-outline" /> 985
              </p>
            </div>
            <p className="text-gray-300 text-2xl text-start pt-5 hover:text-theme">
              App for Technology & service
              <span className="group-hover:visible invisible ml-1 text-3xl text-theme   ">
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="inline "
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="mt-20 mb-5 border-2 border-dark-600 features"></p>
    </div>
  );
};

export default Portfolio;
