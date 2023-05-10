import { Suspense, lazy } from "react";

const PersonalInfo = lazy(
  () => import("components/pages/dashboards/PersonalInfo")
);
const Features = lazy(() => import("components/pages/dashboards/Features"));
const Dashboard = () => {
  return (
    <>
      <Suspense fallback="">
        <PersonalInfo />
      </Suspense>

      <Suspense fallback="">
        <Features />
      </Suspense>
    </>
  );
};

export default Dashboard;
