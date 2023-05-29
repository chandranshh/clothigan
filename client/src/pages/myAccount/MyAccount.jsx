import { useUserDataQuery } from "../../features/slices/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../features/slices/userDataSlice";
import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Input } from "@chakra-ui/react";

function MyAccount() {
  //dispatch setUserData
  const authState = useSelector((state) => state.userAuthLogin);
  const { data, isSuccess } = useUserDataQuery(authState._id);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.fetchedUserData.userData.user);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData(data));
    }
  }, [isSuccess, data, dispatch]);

  return (
    <div className="flex flex-col">
      <div className="font-sans">
        <Navbar />
      </div>
      <div className="h-full mt-[60px]">
        <div className="py-4 pl-3">
          <span className="text-5xl">Your account summary</span>
        </div>
        <div className="pl-8">
          <div className="flex w-[30rem] py-4">
            <div className="w-[30%] block px-2">Full Name : </div>
            <Input variant="filled" placeholder={userData?.fullName} />
          </div>
          <div className="flex w-[30rem] py-4">
            <div className="w-[30%] block px-2">Email : </div>
            <Input variant="filled" placeholder={userData?.email} />
          </div>
          <div className="flex w-[30rem] py-4">
            <div className="w-[30%] block px-2">Phone No. : </div>
            <Input variant="filled" placeholder={userData?.phone} />
          </div>
          <div className="flex w-[30rem] py-4">
            <div className="w-[30%] block px-2">Address : </div>
            <Input variant="filled" placeholder={userData?.address} />
          </div>
          <div className="flex w-[30rem] py-4">
            <div className="w-[30%] block px-2">Alt. Address :</div>
            <Input variant="filled" placeholder={userData?.address2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
