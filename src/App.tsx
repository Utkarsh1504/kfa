import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./page/Layout";
import PageNotFound from "./page/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
