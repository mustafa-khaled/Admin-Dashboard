import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sideBar/SideBar";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Chart from "../components/charts/Chart";
import TableComponent from "../components/homeTable/Table";

function Single() {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex-[6]">
        <Navbar />
        <div className="p-[20px] flex gap-[20px]">
          <div className="flex-[1]  p-[20px] shadow-md relative ">
            <div className="absolute right-[20px] top-[10px] cursor-pointer bg-blue-200 p-[3px] rounded-md">
              <BorderColorIcon className=" text-blue-500" />
            </div>
            <h1 className="mb-[20px] text-lg text-gray-700">Information</h1>
            <div className="flex  gap-[20px]">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <div>
                <h1 className="mb-[10px] text-gray-700 text-2xl">
                  Mustafa Khaled
                </h1>
                <div>
                  <div>
                    <span className="mr-[4px]">Email:</span>
                    <span>user@user.com</span>
                  </div>

                  <div>
                    <span className="mr-[4px]">Phone:</span>
                    <span>+201151747091</span>
                  </div>

                  <div>
                    <span className="mr-[4px]">Address:</span>
                    <span>Cairo , Egypt.</span>
                  </div>

                  <div>
                    <span className="mr-[4px]">Country:</span>
                    <span>Cairo.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2]  shadow-md">
            <Chart aspect={4 / 1} title="User Spending (Last 6 Month)" />
          </div>
        </div>
        <div className="p-[20px] shadow-md my-[10px] mx-[20px]">
          <h1 className="mb-[20px] text-lg text-gray-700 ">
            Last Transactions
          </h1>
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default Single;
