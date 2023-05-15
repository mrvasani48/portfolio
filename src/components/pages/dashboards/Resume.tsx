import { resumeName, resumeTab } from "helper/dashboards";
import { useState } from "react";
import Experience from "./resume/Experience";
import Interview from "./resume/Interview";
import ProfessionalSkills from "./resume/ProfessionalSkills";
import Education from "./resume/Education";

const Resume = () => {
  const [active, setActive] = useState<string>("education");
  return (
    <div id="resume">
      <div className="mt-16">
        <p className="text-xl text-red-500 text-center">
          1.5 + YEARS OF EXPERIENCE
        </p>
        <h2 className="text-gray-300 text-7xl text-center pt-10 mb-7">
          My Resume{" "}
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {resumeTab?.map((tab, index) => (
          <button
            key={index}
            className={`p-8 rounded-md  bg-dark-primary text-red-500 ${
              tab.name === active && "shadow-md shadow-slate-300"
            }`}
            onClick={() => setActive(tab?.name)}
          >
            <p className="capitalize"> {tab?.name}</p>
          </button>
        ))}
      </div>
      <div className="mt-5">
        {resumeTab
          ?.filter((tab) => tab.name === active)
          .map((tab, index) => {
            if (tab.name === resumeName.EDUCATION) {
              return <Education />;
            }
            if (tab.name === resumeName.EXPERIENCE) {
              return <Experience />;
            }
            if (tab.name === resumeName.PROFESSIONALSKILLS) {
              return <ProfessionalSkills />;
            }
            if (tab.name === resumeName.INTERVIEW) {
              return <Interview />;
            }
          })}
      </div>
      <p className="mt-20 mb-5 border-2 border-dark-600 features"></p>
    </div>
  );
};

export default Resume;
