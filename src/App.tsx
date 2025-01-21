import Home from "@/scenes/about";
import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import NumericalInfo from "@/scenes/numericalInfo";
import Services from "@/scenes/services";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import Rules from "./scenes/rules";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.About
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.About);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Rules setSelectedPage={setSelectedPage} />
      <NumericalInfo setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
