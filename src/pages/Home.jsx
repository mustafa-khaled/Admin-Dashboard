import SideBar from "../components/sideBar/SideBar";
import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="grow-[6]">
        <Navbar />
        <div className="bg-green-500">Home Container</div>
      </div>
    </div>
  );
}

export default Home;
