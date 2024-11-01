import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import HomeId from "./pages/home/HomeId";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="onePage/:id" element={<HomeId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
