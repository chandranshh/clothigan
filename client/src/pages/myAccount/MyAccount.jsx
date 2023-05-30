import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@chakra-ui/react";
import Navbar from "../../components/navbar/Navbar";
import { useUserDataQuery } from "../../features/slices/userAPI";
import { setUserData } from "../../features/slices/userDataSlice";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.userAuthLogin);
  const { data, isSuccess } = useUserDataQuery(authState._id);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.fetchedUserData.userData.user);
  const [editMode, setEditMode] = useState(false);
  const [toBeSendData, setToBeSendData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    address2: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setToBeSendData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData(data));
    }
  }, [isSuccess, data, dispatch]);

  const onSubmitHandler = () => {
    setEditMode(false);
    axios
      .put(`http://localhost:3001/user/${authState._id}`, {
        ...userData, // Include previous data
        ...toBeSendData, // Include updated data
      })
      .then((response) => {
        // Handle the response if needed
        console.log("Data updated successfully", response.data);
        window.location.reload();
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("Error updating data:", error);
      });
    navigate("/account");
  };

  useEffect(() => {
    console.log(toBeSendData);
  }, [toBeSendData]);

  return (
    <div className="flex flex-col">
      <div className="font-sans">
        <Navbar />
      </div>
      <div className="h-full mt-[60px]">
        <div className="py-4 pl-3">
          <span className="text-5xl">Your account summary</span>
        </div>
        <div className="pl-8 flex flex-col w-[30rem] items-center transition duration-200">
          <div className="flex w-[30rem] py-4">
            <div className="w-[30%] block px-2">Full Name:</div>
            {editMode ? (
              <Input
                name="fullName"
                onChange={onChangeHandler}
                variant="filled"
                value={toBeSendData.fullName}
              />
            ) : (
              <div className="bg-gray-100 w-full py-2 rounded-md">
                <span className="ml-4">
                  {userData?.fullName || "No data stored...."}
                </span>
              </div>
            )}
          </div>
          <div className="flex w-[30rem] py-4 ">
            <div className="w-[30%] block px-2">Email:</div>
            {editMode ? (
              <Input
                name="email"
                onChange={onChangeHandler}
                variant="filled"
                value={toBeSendData.email}
              />
            ) : (
              <div className="bg-gray-100 w-full py-2 rounded-md">
                <span className="ml-4">
                  {userData?.email || "No data stored...."}
                </span>
              </div>
            )}
          </div>
          <div className="flex w-[30rem] py-4">
            <div className="w-[30%] block px-2">Phone No.:</div>
            {editMode ? (
              <Input
                name="phone"
                onChange={onChangeHandler}
                variant="filled"
                value={toBeSendData.phone}
              />
            ) : (
              <div className="bg-gray-100 w-full py-2 rounded-md">
                <span className="ml-4">
                  {userData?.phone || "No data stored...."}
                </span>
              </div>
            )}
          </div>
          <div className="flex w-[30rem] py-4">
            <div className="w-[30%] block px-2">Address:</div>
            {editMode ? (
              <Input
                name="address"
                onChange={onChangeHandler}
                variant="filled"
                value={toBeSendData.address}
              />
            ) : (
              <div className="bg-gray-100 w-full py-2 rounded-md">
                <span className="ml-4">
                  {userData?.address || "No data stored...."}
                </span>
              </div>
            )}
          </div>
          <div className="flex w-[30rem] py-4">
            <div className="w-[30%] block px-2">Alt. Address:</div>
            {editMode ? (
              <Input
                name="address2"
                onChange={onChangeHandler}
                variant="filled"
                value={toBeSendData.address2}
              />
            ) : (
              <div className="bg-gray-100 w-full py-2 rounded-sm">
                <span className="ml-4">
                  {userData?.address2 || "No data stored...."}
                </span>
              </div>
            )}
          </div>
          {editMode ? (
            <Button onClick={onSubmitHandler}>Submit</Button>
          ) : (
            <Button className="" onClick={() => setEditMode(true)}>
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
