import { priceName, priceTab } from "helper/dashboards";
import { lazy, useState } from "react";
const StaticPlan = lazy(() => import("./tabs/StaticPlan"));
const StandardPlan = lazy(() => import("./tabs/StandardPlan"));
const PremiumPlan = lazy(() => import("./tabs/PremiumPlan"));

const PriceModal = () => {
  const [active, setActive] = useState<string>("static");

  return (
    <div id="price" className="grid grid-cols-12 w-full ">
      <div className="col-span-5">
        <p className="text-theme text-center my-5 uppercase">Pricing</p>
        <h1 className="font-bold text-4xl text-center ">My Pricing</h1>
      </div>{" "}
      <div className="col-span-7  rounded-xl shadow-2xl shadow-dark-500">
        <div className="grid grid-cols-3 w-full p-5 ">
          {priceTab?.map((tab, index) => (
            <button
              key={index}
              className={`p-2 rounded-md  bg-dark-primary  shadow-dark-500 shadow-md  ${
                tab.name === active && " text-theme"
              }`}
              onClick={() => setActive(tab?.name)}
            >
              <p className="capitalize"> {tab?.name}</p>
            </button>
          ))}
        </div>
        <div className="mt-5">
          {priceTab
            ?.filter((tab) => tab.name === active)
            .map((tab) => {
              if (tab.name === priceName.STATIC) {
                return <StaticPlan />;
              }
              if (tab.name === priceName.STANDARD) {
                return <StandardPlan />;
              }
              if (tab.name === priceName.PREMIUM) {
                return <PremiumPlan />;
              }
            })}
        </div>
      </div>
      <p className="mt-20 mb-5 border-2 border-dark-600 features"></p>
    </div>
  );
};

export default PriceModal;
