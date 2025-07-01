import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/requests";
import type { RegisterData } from "../api/types";
import { toast } from "react-toastify";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailErrorMesage, setEmailErrorMesage] = useState("");
  const [passwordErrorMesage, setPasswordErrorMesage] = useState("");

  const navigate = useNavigate();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  const isDisabled =
    firstName === "" ||
    secondName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === "" ||
    password !== confirmPassword;

  const onRegister = () => {
    const payload: RegisterData = {
      email: email,
      firstName: firstName,
      lastName: secondName,
      password: password,
    };
    register(payload)
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        navigate("/products");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-900 to-blue-300 text-white flex p-8">
      {/* Left Section - JOIN US and tagline */}
      <div className="w-1/2 flex flex-col justify-center items-center pr-12">
        <div>
          <h1 className="text-5xl font-bold mb-6"> JOIN US</h1>
          <p className="text-2xl mb-2">Making your dream music come true</p>
          <p className="text-2xl font-semibold">stay with Sequios Sounds!</p>
          <button className="mb-12 text-2xl pt-10 font-bold hover:text-blue-300 transition-colors">
            About Us ↓
          </button>
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center">
        <div className="max-w-md">
          <div>
            <h3 className="text-2xl font-bold mb-8">Create your account</h3>

            <div className="space-y-6 mb-10">
              <div className="w-full flex flex-col items-start gap-1">
                <label className="block text-lg">Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailRegex.test(e.target.value)) {
                      setEmailErrorMesage("");
                    } else {
                      setEmailErrorMesage("Email is not valid");
                    }
                  }}
                  type="email"
                  className="w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-300 py-3"
                  style={{ borderColor: emailErrorMesage === "" ? "white" : "red" }}
                />
                {emailErrorMesage !== "" && (
                  <span className="text-red-500">{emailErrorMesage}</span>
                )}
              </div>

              <div>
                <label className="block text-lg mb-2">First Name</label>
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  className="w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-300 py-3"
                />
              </div>

              <div>
                <label className="block text-lg mb-2">Second Name</label>
                <input
                  value={secondName}
                  onChange={(e) => {
                    setSecondName(e.target.value);
                  }}
                  type="text"
                  className="w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-300 py-3"
                />
              </div>

              <div className="w-full flex flex-col items-start gap-1">
                <label className="block text-lg">Password</label>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordRegex.test(e.target.value)) {
                      setPasswordErrorMesage("");
                    } else {
                      setPasswordErrorMesage("Password must have number,symbol and uppercase");
                    }
                  }}
                  type="password"
                  className={`w-full bg-transparent border-b-2 focus:outline-none py-3 ${
                    passwordErrorMesage !== "" ? "border-red-500" : "border-white"
                  }`}
                />
                {passwordErrorMesage !== "" && (
                  <span className="text-red-500">{passwordErrorMesage}</span>
                )}
              </div>

              <div>
                <label className="block text-lg mb-2">Confirm Password</label>
                <input
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="password"
                  className="w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-300 py-3"
                />
                {password !== confirmPassword && confirmPassword !== "" && (
                  <span className="text-red-500">Passwords does not match</span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="text-blue-900 hover:text-blue-200 font-semibold text-lg cursor-pointer"
              >
                Log in here
              </button>
              <button
                onClick={() => {
                  onRegister();
                }}
                disabled={isDisabled}
                className="bg-blue-900 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-900"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
