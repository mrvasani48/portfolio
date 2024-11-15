import { Icon } from "@iconify/react";
import { Button } from "@mantine/core";

const plan = [
  "1 Page with Elementor",
  "Design Customization",
  "Responsive Design",
  "content upload",
  "design customizations",
  "2 Plugin/Extensions",
  "multipage Elementor",
  "Design Figma",
  "MAintaine Design",
  "Content Upload",
  "Design With XD",
  "8 Plugins/Extensions",
];
const StandardPlan = () => {
  return (
    <div className="p-10 pt-0 ">
      <div className="grid grid-cols-2 ">
        <div>
          <h2 className="text-2xl font-bold"> Design Make this Page </h2>
          <p className="py-3 text-sm text-gray-400"> Elementor</p>
        </div>
        <div className="flex justify-center items-center  ">
          <p className="text-theme font-semibold bg-dark-primary w-52 text-center p-5 rounded">
            $50.00
          </p>
        </div>
      </div>
      <p className="py-5 text-sm text-gray-400">
        Making this the first true generator on the Internet. It uses a
        dictionary & plugin Development.
      </p>
      <div className="grid grid-cols-2">
        {plan?.map((feature) => (
          <p
            key={feature}
            className="flex items-center gap-2 py-2 text-gray-400"
          >
            <Icon icon="material-symbols:done" className="text-gray-400" />
            {feature}
          </p>
        ))}
      </div>
      <Button className="mt-6 font-semibold rounded w-full p-5 bg-gray-800">
        <p className="flex justify-center items-center gap-2 text-theme">
          {" "}
          Order now
          <Icon icon="ep:right" className="text-theme text-xl" />
        </p>
      </Button>
      <div className="flex justify-evenly text-gray-400 text-sm my-5">
        <p className="flex justify-center items-center gap-1">
          {" "}
          <Icon
            icon="material-symbols-light:schedule-outline"
            className="text-gray-400"
          />{" "}
          2 Days Delivery
        </p>
        <p className="flex justify-center items-center gap-1">
          {" "}
          <Icon icon="mingcute:heartbeat-line" className="text-gray-400" />{" "}
          Unlimited Revission
        </p>{" "}
      </div>
    </div>
  );
};

export default StandardPlan;
