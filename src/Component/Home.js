import { Route, Routes } from "react-router-dom";
import TestFlex from "./TestFlex";
import TestGrid from "./TestGrid";
import TestSelect from "./TextSelect";

const Home = () => {
  return (
    <div>
      <h1>Ini adalah home</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test-grid" element={<TestGrid />} />
        <Route path="test-flex" element={<TestFlex />} />
        <Route path="test-select" element={<TestSelect />} />
      </Routes>
      <li>Test Grid</li>
      <li>Test Flex</li>
      <li>Test Select</li>
    </div>
  );
};

export default Home;
