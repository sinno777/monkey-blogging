import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

// const HomePage = React.lazy(() => import("pages/HomePage"));

function App() {
  return (
    <div className="monkey-blogging-App">
      <AuthProvider>
        <Suspense>
          <Routes>
            <Route path="/" element={<></>}></Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
