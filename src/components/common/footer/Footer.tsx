import { images } from "../../../assets/img";

const Footer = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center items-center">
        <div className="h-[70px] w-[70px] overflow-hidden rounded-full bg-dark-secondary  border border-white ">
          <img
            src={images.profile}
            alt="user profile"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-center mb-5 text-2xl font-bold mt-2">Jone lee</p>
      <p className="text-center text-xl ">
        © 2022. All rights reserved by jone lee.
      </p>
    </div>
  );
};

export default Footer;
