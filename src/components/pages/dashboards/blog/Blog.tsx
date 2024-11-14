import { Icon } from "@iconify/react";
import { images } from "assets/img";

const Blog = () => {
  return (
    <div className="blog-container" id="blog">
      <div className="mt-16">
        <p className="text-sm text-theme text-center">
          {" "}
          Visit my blog and keep your feedback
        </p>
        <h2 className="text-gray-300 text-7xl text-center pt-10 mb-7">
          My Blog
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-20 mt-14">
        <div className="group p-10 rounded-xl shadow-2xl shadow-dark-500">
          <div className="overflow-hidden rounded-xl ">
            <img
              src={images.blog1}
              alt="portfolio app"
              className="rounded-xl group-hover:scale-125"
            />
          </div>
          <div className="flex justify-between items-center pt-5">
            <p className="text-sm text-theme">Canad</p>
            <p className="flex gap-1 items-center text-sm">
              <Icon icon="material-symbols:schedule-outline" /> 2 hour read
            </p>
          </div>
          <p className="text-gray-300 text-xl text-start pt-5 hover:text-theme">
            T-shirt design is the part of design
            <span className="group-hover:visible invisible ml-1 text-sm text-theme   ">
              <Icon icon="material-symbols:arrow-outward" className="inline " />
            </span>
          </p>
        </div>
        <div className="group p-10 rounded-xl shadow-2xl shadow-dark-500">
          <div className="overflow-hidden rounded-xl ">
            <img
              src={images.blog2}
              alt="portfolio app"
              className="rounded-xl group-hover:scale-125"
            />
          </div>
          <div className="flex justify-between items-center pt-5">
            <p className="text-sm text-theme">Development</p>
            <p className="flex gap-1 items-center text-sm">
              <Icon icon="material-symbols:schedule-outline" /> 2 hour read
            </p>
          </div>
          <p className="text-gray-300 text-xl text-start pt-5 hover:text-theme">
            The services provide for design{" "}
            <span className="group-hover:visible invisible ml-1 text-3xl text-theme   ">
              <Icon icon="material-symbols:arrow-outward" className="inline " />
            </span>
          </p>
        </div>
        <div className="group p-10 rounded-3xl shadow-2xl shadow-dark-500">
          <div className="overflow-hidden rounded-xl ">
            <img
              src={images.blog3}
              alt="portfolio app"
              className="rounded-xl group-hover:scale-125"
            />
          </div>
          <div className="flex justify-between items-center pt-5">
            <p className="text-sm text-theme">APP DESIGN</p>
            <p className="flex gap-1 items-center text-sm">
              <Icon icon="material-symbols:schedule-outline" /> 2 hour read
            </p>
          </div>
          <p className="text-gray-300 text-xl text-start pt-5 hover:text-theme">
            Mobile app landing design & app
            <span className="group-hover:visible invisible ml-1 text-sm text-theme   ">
              <Icon icon="material-symbols:arrow-outward" className="inline " />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
