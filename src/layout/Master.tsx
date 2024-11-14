import { Suspense, lazy } from "react";
import { Outlet } from "react-router";
const Header = lazy(() => import("../components/common/header/Header"));
const Footer = lazy(() => import("../components/common/footer/Footer"));

const Master = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback="">{/* <Header /> */}</Suspense>
      <Outlet />
      <Suspense fallback="">
        <Footer />
      </Suspense>
    </div>
  );
};

export default Master;
