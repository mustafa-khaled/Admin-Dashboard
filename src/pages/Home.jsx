import WidgetList from "../components/widget/WidgetList";
import Charts from "../components/charts/Charts";
import HomeTable from "../components/homeTable/HomeTable";

function Home() {
  return (
    <div className="flex w-full ">
      <div className="flex-[6]">
        <WidgetList />

        <Charts />

        <HomeTable />
      </div>
    </div>
  );
}

export default Home;
