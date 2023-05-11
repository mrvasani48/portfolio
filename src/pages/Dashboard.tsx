import { Suspense, lazy } from "react";

const PersonalInfo = lazy(
  () => import("components/pages/dashboards/PersonalInfo")
);
const Features = lazy(() => import("components/pages/dashboards/Features"));
const Portfolio = lazy(() => import("components/pages/dashboards/Portfolio"));
const Dashboard = () => {
  return (
    <>
      <Suspense fallback="">
        <PersonalInfo />
      </Suspense>

      <Suspense fallback="">
        <Features />
      </Suspense>
      <Suspense fallback="">
        <Portfolio />
      </Suspense>
    </>
  );
};

export default Dashboard;
