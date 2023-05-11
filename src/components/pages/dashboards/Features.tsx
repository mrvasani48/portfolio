import { Icon } from "@iconify/react";

const Features = () => {
  return (
    <>
      <p className="mt-20 mb-5 border-2 border-dark-600 features"></p>
      <div className="mt-10 ">
        <p className="text-xl mb-10 text-red-500 ">FEATURES</p>
        <h1 className="text-5xl font-bold">WHAT I DO </h1>
        <div className="grid grid-cols-3 mt-10 gap-12">
          <button className="group p-10 text-start shadow-lg shadow-dark-secondary hover:pt-5 ">
            <p className="text-red-500 text-5xl">
              <Icon icon="ph:list-fill" />
            </p>
            <p className="my-5 text-3xl">Business Strategy</p>
            <p className="text-xl pt-3">
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
            <p className="group-hover:visible invisible text-red-500 text-4xl pt-2">
              <Icon icon="material-symbols:arrow-right-alt" />
            </p>
          </button>
          <button className="group p-10 text-start shadow-lg shadow-dark-secondary hover:pt-5">
            <p className="text-red-500 text-5xl">
              <Icon icon="carbon:application-web" />
            </p>
            <p className="my-5 text-3xl">Website Development</p>
            <p className="text-xl pt-3">
              Good websites are not just about looks, they are about
              personality, providing value, and building trust
            </p>
            <p className="group-hover:visible invisible text-red-500 text-4xl pt-2">
              <Icon icon="material-symbols:arrow-right-alt" />
            </p>
          </button>
          <button className="group p-10 text-start shadow-lg shadow-dark-secondary hover:pt-5">
            <p className="text-red-500 text-5xl">
              <Icon icon="mdi:application-brackets-outline" />
            </p>
            <p className="my-5 text-3xl">App Development</p>
            <p className="text-xl pt-3">
              Good mobile apps are not just built with code, they are built with
              empathy, understanding, and attention to user needs
            </p>
            <p className="group-hover:visible invisible text-red-500 text-4xl pt-2">
              <Icon icon="material-symbols:arrow-right-alt" />
            </p>
          </button>
          <button className="group p-10 text-start shadow-lg shadow-dark-secondary hover:pt-5">
            <p className="text-red-500 text-5xl">
              <Icon icon="healthicons:desktop-app" />
            </p>
            <p className="my-5 text-3xl">Desktop Application</p>
            <p className="text-xl pt-3">
              Desktop applications offer unparalleled performance and
              functionality, while web-based applications provide accessibility
              and ease of use.
            </p>
            <p className="group-hover:visible invisible text-red-500 text-4xl pt-2">
              <Icon icon="material-symbols:arrow-right-alt" />
            </p>
          </button>
          <button className="group p-10 text-start shadow-lg shadow-dark-secondary hover:pt-5">
            <p className="text-red-500 text-5xl">
              <Icon icon="icon-park-outline:seo" />
            </p>
            <p className="my-5 text-3xl">Seo Strategy</p>
            <p className="text-xl pt-3">
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
            <p className="group-hover:visible invisible text-red-500 text-4xl pt-2">
              <Icon icon="material-symbols:arrow-right-alt" />
            </p>
          </button>
          <button className="group p-10 text-start shadow-lg shadow-dark-secondary hover:pt-5">
            <p className="text-red-500 text-5xl">
              <Icon icon="ph:list-fill" />
            </p>
            <p className="my-5 text-3xl">Digital marketing</p>
            <p className="text-xl pt-3">
              Digital marketing is online advertising to grow businesses and
              reach customers.
            </p>
            <p className="group-hover:visible invisible text-red-500 text-4xl pt-2">
              <Icon icon="material-symbols:arrow-right-alt" />
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;
