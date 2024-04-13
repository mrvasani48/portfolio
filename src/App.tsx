import { Suspense } from "react";
import Master from "./layout/Master";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@mantine/carousel/styles.css";
import Dashboard from "pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={""}>
              <Master />
            </Suspense>
          }
        >
          {/* {DASHBOARD_ROUTES.map((routeItem, routeIndex) => {
            return (
              <Route
                key={routeIndex}
                path={routeItem.path}
                element={routeItem.component}
              />
            );
          })} */}
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={""}>
              <h1>Page not found </h1>
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
