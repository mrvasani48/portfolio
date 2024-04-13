import { Suspense, lazy } from "react";
const Dashboard = lazy(()=>import("../pages/Dashboard"));

export const DASHBOARD_ROUTES = [
  {
    path: "/",
    component: (
      <Suspense fallback="loading" >
        <Dashboard />
      </Suspense>
    )
  }
];
