import React from "react";

const Education = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <div>
          <p className="py-2 text-red-500">2018-2022</p>
          <h2 className="text-5xl dark:text-white">Education Quality</h2>
          <div className="mt-10 py-10 pl-10">
            <div>
              <div className="grid grid-cols-12">
                <div className="col-span-10">
                  <h2 className="text-2xl py-4">
                    {" "}
                    Diploma in Web Development{" "}
                  </h2>
                  <p>BSE In CSE (2004 - 2008) </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="p-2 bg-dark-700 rounded-md text-red-500">
                    4.70/5
                  </p>
                </div>
              </div>
              <p className="py-5">
                Contrary to popular belief. Ut tincidunt est ac dolor aliquam
                sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                lobortis mauris hendrerit ante.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="py-2 text-red-500">2018-2022</p>
        <h2 className="text-5xl dark:text-white">Job Experience</h2>
      </div>
    </div>
  );
};

export default Education;
