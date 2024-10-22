import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import PrivateRoute from "./routes/privateRoute.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
          {privateRoutes.map((route, index) => {
            const PagePrivate = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <PrivateRoute>
                    <PagePrivate />
                  </PrivateRoute>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
