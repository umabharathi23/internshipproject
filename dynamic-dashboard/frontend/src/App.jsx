import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./App.css";
import ActiveJobs from "./components/ActiveJobs";
import TotalJobViews from "./components/TotalJobViews";
import MostPopularJob from "./components/MostPopularJob";
import JobCredits from "./components/JobCredits";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [layouts, setLayouts] = useState({
    lg: [
      { i: "most-popular", x: 0, y: 0, w: 6, h: 4 },      // increased height
      { i: "active-jobs", x: 6, y: 0, w: 6, h: 4 },       // increased height
      { i: "job-credits", x: 0, y: 4, w: 6, h: 3 },       // increased height
      { i: "total-views", x: 6, y: 4, w: 6, h: 3 }        // increased height
    ],
    md: [
      { i: "most-popular", x: 0, y: 0, w: 5, h: 4 },       // increased height
      { i: "active-jobs", x: 5, y: 0, w: 5, h: 4 },        // increased height
      { i: "job-credits", x: 0, y: 4, w: 5, h: 3 },        // increased height
      { i: "total-views", x: 5, y: 4, w: 5, h: 3 }         // increased height
    ],
    sm: [
      { i: "most-popular", x: 0, y: 0, w: 6, h: 4 },       // increased height
      { i: "active-jobs", x: 0, y: 4, w: 6, h: 4 },        // increased height
      { i: "job-credits", x: 0, y: 8, w: 6, h: 3 },        // increased height
      { i: "total-views", x: 0, y: 11, w: 6, h: 3 }        // increased height
    ]
  });
  
  
  const widgets = {
    "most-popular": {
      title: "Most Popular Job",
      component: <MostPopularJob />
    },
    "active-jobs": {
      title: "Active Jobs",
      component: <ActiveJobs />
    },
    "job-credits": {
      title: "Job Credits",
      component: <JobCredits />
    },
    "total-views": {
      title: "Total Job Views",
      component: <TotalJobViews />
    }
  };

  const handleLayoutChange = (layout, allLayouts) => {
    setLayouts(allLayouts);
    localStorage.setItem("dashboard-layouts", JSON.stringify(allLayouts));
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <div className="top-bar">
        <h1 className="dashboard-title">Job Dashboard</h1>
      </div>

      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={150}
            onLayoutChange={handleLayoutChange}
            isDraggable={true}
            isResizable={true}
            margin={[20, 20]}
            useCSSTransforms={true}
          >
            {Object.keys(widgets).map((key) => (
              <div key={key} className="widget-container">
                <div className="widget-header">
                  <span className="drag-handle">⋮⋮</span>
                  {widgets[key].title}
                </div>
                <div className="widget-content">
                  {widgets[key].component}
                </div>
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
}

export default App;
