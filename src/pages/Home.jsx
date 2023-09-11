import SideBar from "../components/sideBar/SideBar";
import Navbar from "../components/navbar/Navbar";
import WidgetList from "../components/widget/WidgetList";

function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="grow-[6]">
        <Navbar />
        <WidgetList />
      </div>
    </div>
  );
}

export default Home;
