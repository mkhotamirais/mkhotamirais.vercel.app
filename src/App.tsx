import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Page";
import Accordion from "./pages/components/accordion/Accordion";
import Pagination from "./pages/components/pagination/Pagination";
import Clock from "./pages/others/Clock";
import Stopwatch from "./pages/others/Stopwatch";
import SymbolColor from "./pages/others/SymbolColor";
import Memo from "./pages/react/Memo";
import UseContext from "./pages/react/UseContext";
import UseCallback from "./pages/react/UseCallback";
import UseMemo from "./pages/react/UseMemo";
import UseReducer from "./pages/react/UseReducer";
import UseRef from "./pages/react/UseRef";
import Motion from "./pages/animate/motion/Motion";
import Navbar from "./pages/components/navbar/Navbar";
import Navbar2 from "./pages/components/navbar2/Navbar2";
import { Toaster } from "react-hot-toast";
import { CopyAlert } from "./pages/tips/CopyAlert";
import ObjectTips from "./pages/tips/ObjectTips";
import Sticky from "./pages/tips/Sticky";
import UseInView from "./pages/tips/use-in-view/UseInView";
import Gsap from "./pages/animate/gsap/Gsap";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* components */}
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/navbar2" element={<Navbar2 />} />
        {/* apps */}
        <Route path="/clock" element={<Clock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/symbol-color" element={<SymbolColor />} />
        {/* react */}
        <Route path="/memo" element={<Memo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-context" element={<UseContext />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-ref" element={<UseRef />} />
        {/* animate */}
        <Route path="/motion" element={<Motion />} />
        <Route path="/gsap" element={<Gsap />} />
        {/* tips */}
        <Route path="/copy-alert" element={<CopyAlert />} />
        <Route path="/object-tips" element={<ObjectTips />} />
        <Route path="/sticky" element={<Sticky />} />
        <Route path="/use-in-view" element={<UseInView />} />
      </Routes>
    </BrowserRouter>
  );
}
