import WidgetList from "../components/widget/WidgetList";
import Charts from "../components/charts/Charts";

function Home() {
  return (
    <div className="flex w-full ">
      <div className="flex-[6]">
        <WidgetList />
        <Charts />
      </div>
    </div>
  );
}

export default Home;
