import SideBar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex items-start ">
      <SideBar />
      <div className="bg-green-500   grow-[6]">Home Container</div>
    </div>
  );
}

export default Home;
