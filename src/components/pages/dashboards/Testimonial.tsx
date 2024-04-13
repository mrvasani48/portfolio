import { Icon } from "@iconify/react";
import { Carousel } from "@mantine/carousel";
import { images } from "assets/img";

const Testimonial = () => {
  return (
    <div>
      <div className="mt-16">
        <p className="text-md text-red-500 text-center uppercase">
          What client say{" "}
        </p>
        <h2 className="text-gray-300 text-7xl text-center pt-5 mb-7">
          Testimonial{" "}
        </h2>
      </div>
      <div className="mx-20">
        <Carousel
          slideSize="100%"
          withIndicators
          slideGap="md"
          controlsOffset="xs"
          loop
        >
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <Carousel.Slide key={i}>
                <div className="grid grid-cols-12 gap-0">
                  <div className="col-start-1 col-end-3 group p-10 rounded-3xl shadow-2xl shadow-dark-500 m-8 w-[395px]">
                    <div className="overflow-hidden rounded-xl ">
                      <img
                        src={
                          "https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--1st.png" ??
                          images.portfolio1
                        }
                        alt="portfolio app"
                        className="rounded-xl group-hover:scale-125 "
                      />
                    </div>
                    <div className="flex justify-between items-center pt-5">
                      <p className="text-xl text-red-500">Development</p>
                    </div>
                    <p className="text-gray-300 text-3xl text-start pt-5 hover:text-red-500">
                      Davei Luace{" "}
                    </p>
                    <p className="text-gray-300 text-xl text-start pt-5">
                      Chief Operating Manager
                    </p>
                  </div>
                  <div className="col-start-5 col-end-13 p-10 pb-0">
                    <div className="mt-10 mb-5">
                      <img src={images.quote} className="h-24" alt="img" />
                    </div>
                    <div className="shadow-2xl shadow-dark-500 my-10 p-5 rounded-md">
                      <div className="flex justify-between items-center p-10 ">
                        <div className="flex flex-col gap-5">
                          <h3 className="text-3xl">Android App Development</h3>
                          <p className="text-md">
                            via Upwork - Mar 4, 2015 - Aug 30, 2021
                          </p>
                        </div>
                        <div className="flex justify-center items-center gap-2  shadow-lg shadow-dark-500 p-3 rounded">
                          <Icon icon="twemoji:star" />
                          <Icon icon="twemoji:star" />
                          <Icon icon="twemoji:star" />
                          <Icon icon="twemoji:star" />
                          <Icon icon="twemoji:star" />
                        </div>
                      </div>
                      <p className="bg-dark-700 h-1 w-full px-20"></p>
                      <p className="p-10 text-xl ">
                        Maecenas finibus nec sem ut imperdiet. Ut tincidunt est
                        ac dolor aliquam sodales. Phasellus sed mauris
                        hendrerit, laoreet sem in, lobortis mauris hendrerit
                        ante. Ut tincidunt est ac dolor aliquam sodales
                        phasellus smauris .
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
