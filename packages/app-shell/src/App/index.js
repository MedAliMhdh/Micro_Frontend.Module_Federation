import React from "react";
import "./shell.css";

const Drawer = React.lazy(() => import("Drawer/app"));
const RightColumn = React.lazy(() => import("RightColumn/app"));
const Main = React.lazy(() => import("Main/app"));

const Shell = () => {
  return (
    <div className="shell">
      <div className="left">
        <React.Suspense fallback="...Loading">
          <Drawer />
        </React.Suspense>
      </div>
      <div className="center">
        <React.Suspense fallback="...Loading">
          <Main />
        </React.Suspense>
      </div>
      <div className="right">
        <React.Suspense fallback="...Loading">
          <RightColumn />
        </React.Suspense>
      </div>
    </div>
  );
};

export default Shell;
