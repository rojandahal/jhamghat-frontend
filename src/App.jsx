import "./App.css";
import DiscoverMenu from "./container/discovermenu/DiscoverMenu";
import HeroSection from "./container/herosection/HeroSection";
import About from "./container/main/About";
import NavItems from "./container/navigation/NavItems";
import NavMenu from "./container/navigation/navmenu";

function App() {
  return (
    <>
      <div>
        <NavMenu />
        <NavItems />
        <HeroSection />
				<About />
				<DiscoverMenu />
      </div>
    </>
  );
}

export default App;
