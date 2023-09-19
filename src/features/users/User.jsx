import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Chart from "../../components/charts/Chart";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddEditUser from "./AddEditUser";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";

function User() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const user = { id: docSnap.id, ...docSnap.data() };
          setUserData(user);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setError("Error fetching user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Empty message={error} />;
  }

  return (
    <div className="p-[20px] flex gap-[20px] text-textColor">
      <div className="flex-[1] p-[20px] shadow-md relative bg-colorGrey2">
        <div className="absolute right-[20px] top-[10px] cursor-pointer bg-colorBrand hover:bg-hoverBrand p-[3px] rounded-md">
          {/* Pass the userData to userToEdit */}
          <AddEditUser userToEdit={userData}>
            <BorderColorIcon className="text-colorGrey" />
          </AddEditUser>
        </div>
        <h1 className="mb-[20px] text-lg">Information</h1>
        <div className="flex  gap-[20px]">
          <img
            src={userData?.img || "/default-user.jpg"}
            alt="User Avatar"
            className="w-[100px] h-[100px] rounded-full object-cover"
          />
          <div>
            <h1 className="mb-[10px]  text-2xl">{userData?.surName}</h1>
            <div>
              <div>
                <span className="mr-[4px]">Email:</span>
                <span>{userData?.email}</span>
              </div>

              <div>
                <span className="mr-[4px]">Phone:</span>
                <span>{userData?.phone}</span>
              </div>

              <div>
                <span className="mr-[4px]">Address:</span>
                <span>{userData?.address}</span>
              </div>

              <div>
                <span className="mr-[4px]">Country:</span>
                <span>{userData?.country}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2]  shadow-md ">
        <Chart aspect={3 / 1} title="User Spending (Last 6 Month)" />
      </div>
    </div>
  );
}

export default User;
