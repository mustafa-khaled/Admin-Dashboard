import { widgetData } from "../../data/data";
import Widget from "./Widget";

function WidgetList() {
  return (
    <div className=" p-[20px] flex items-center gap-[20px] text-textColor">
      {widgetData.map((widget) => {
        return <Widget key={widget.id} widget={widget} />;
      })}
    </div>
  );
}

export default WidgetList;
