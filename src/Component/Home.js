import { Link, Route, Routes } from "react-router-dom";
import TestFlex from "./TestFlex";
import TestGrid from "./TestGrid";
import TestSelect from "./TextSelect";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="test-grid" element={<TestGrid />} />
        <Route path="test-flex" element={<TestFlex />} />
        <Route path="test-select" element={<TestSelect />} />
      </Routes>
      <Link to={"test-grid"}>Test Grid</Link>
      <Link to={"test-flex"}>Test Flex</Link>
      <Link to={"test-select"}>Test Select</Link>
    </div>
  );
};

export default Home;
