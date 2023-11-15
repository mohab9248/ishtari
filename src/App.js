import Slider from "react-slick";
import FirstGid from "./components/FirstGid";
import Header from "./components/Header";
import HorBar from "./components/HorBar";
import NavBar from "./components/NavBar";
import SinglesDay from "./components/SinglesDay";
import InfiniteScroll from "react-infinite-scroll-component";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import Umbrela from "./components/Umbrela";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className=" min-h-screen bg-gray-100">
        <div className="md:container">
          <div className="overflow-hidden container">
            <Umbrela />
            <FirstGid />
            <HorBar />
          </div>
          <div>
            <SinglesDay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
