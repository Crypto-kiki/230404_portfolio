import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Main from "./pages/main";
import Portfolio1 from "./pages/portfolio1";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen flex flex-col">
        <Header />
        <Routes>
          {/* Routes는 모든 페이지에 유지되어야 하기 때문 */}
          <Route path="/" element={<Main />} />
          <Route path="/portfolio1/:projectId" element={<Portfolio1 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
