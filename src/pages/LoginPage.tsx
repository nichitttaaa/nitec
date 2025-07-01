import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { LoginData } from "../api/types";
import { login } from "../api/requests";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = email === "" || password === "";

  const onLogin = () => {
    const payload: LoginData = {
      email: email,
      password: password,
    };
    login(payload).then((data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/products");
    });
  };

  return (
    <div
      className="absolute inset-0 bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: 'url("/src/assets/images/loginImage.png")' }}
    >
      <div
        className="bg-white/10 bg-opacity-50 backdrop-blur-md rounded-xl p-6 sm:p-8 w-full 
    max-w-md shadow-2xl border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>

        <div
          className="space-y-4"
          // onSubmit={() => {
          //   onLogin();
          // }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="Email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-transparent
            border border-gray-300 rounded text-while placegolder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-transparent
            border border-gray-300 rounded text-while placegolder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500"
          />
          <button
            type="button"
            className="w-full py-2 bg-black text-white rounded-full border border-white 
            hover:bg-blue-500 active: bg-cyan-400 transition-colors duration-200"
            disabled={isDisabled}
            onClick={() => {
              onLogin();
            }}
          >
            Login
          </button>
        </div>
        <div className="text-center text-while mt-4">
          <span className="block">OR</span>
          <a
            className="text-sm hower:underline"
            onClick={() => {
              navigate("/register");
            }}
          >
            Signup Page
          </a>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
