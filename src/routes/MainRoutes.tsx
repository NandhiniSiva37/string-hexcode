import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import Home from "../components/Home";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;
