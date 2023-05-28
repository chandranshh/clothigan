import { Checkbox, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userAuthLogin } from "../../features/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ResisterLogin() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const authState = useSelector((state) => state.userAuthLogin);
  const navigate = useNavigate();

  console.log(authState);

  const userAuth = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      dispatch(userAuthLogin(response.data));
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const dispatch = useDispatch();

  const handleRegisterData = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    await userAuth(registerData.email, registerData.password);
  };

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate("/"); //redirect to landing page after a successful login
    }
  }, [authState.isAuthenticated, navigate]);

  return (
    <div className="bg-pink-200 h-screen flex justify-center items-center">
      <div className="bg-white h-[40rem] w-[70rem] rounded-xl flex ">
        <div className="self-center ml-3 rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1674709997659-27eafd932120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
            alt="jeans"
            className="rounded-xl m-4 mr-6"
          />
        </div>
        <div className="ml-[8rem] w-[30%] mt-[6.5rem]">
          <div className="text-3xl">Welcome back!</div>
          <div className="text-[#606f7b] mt-3">
            Login to get exciting deals and products.
          </div>
          <div className="mt-6">
            <span className="ml-1 mb-2 inline-block">Your email</span>
            <Input
              name="email"
              size="md"
              placeholder="email"
              type="email"
              value={registerData.email}
              onChange={handleRegisterData}
            />
          </div>
          <div className="mt-6">
            <span className="ml-1 mb-2 inline-block">Password</span>
            <Input
              name="password"
              size="md"
              placeholder="password"
              type="password"
              value={registerData.password}
              onChange={handleRegisterData}
            />
          </div>
          <div className="mt-4">
            <Checkbox size="sm" defaultChecked>
              Remember me?
            </Checkbox>
          </div>
          <div className="mt-10 w-full">
            <Button
              onClick={handleRegister}
              className="w-full"
              colorScheme="blue"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResisterLogin;
