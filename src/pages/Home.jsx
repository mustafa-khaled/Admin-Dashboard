import SideBar from "../components/sideBar/SideBar";
import Navbar from "../components/navbar/Navbar";
import WidgetList from "../components/widget/WidgetList";
import Charts from "../components/charts/Charts";
import HomeTable from "../components/homeTable/HomeTable";

function Home() {
  return (
    <div className="flex w-full bg-bkg">
      <SideBar />
      <div className="flex-[6]">
        <Navbar />
        <WidgetList />
        <Charts />
        <HomeTable />
      </div>
    </div>
  );
}

export default Home;
