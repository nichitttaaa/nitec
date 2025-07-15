import {useNavigate} from "react-router-dom";
import {useState} from "react";
import type {LoginData} from "../api/types";
import {getMySelf, login} from "../api/requests";
import {useUserStore} from "../stores/useUserStore.ts";

const LoginPage = () => {
    const {setUser} = useUserStore();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [emailErrorMesage, setEmailErrorMesage] = useState("");

    const [password, setPassword] = useState("");
    const [passwordErrorMesage, setPasswordErrorMesage] = useState("");

    const isDisabled = email === "" || password === "";

    const onLogin = () => {
        if (!email.includes("@")) {
            setEmailErrorMesage("Email must contain @");
            return;
        } else {
            setEmailErrorMesage("");
        }
        if (password.length < 6) {
            setPasswordErrorMesage("Password must contain more than 6 characters");
            return;
        } else {
            setPasswordErrorMesage("");
        }
        const payload: LoginData = {
            email: email,
            password: password,
        };
        login(payload)
            .then((data) => {
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);
                getMySelf().then((data) => {
                    setUser(data)
                    navigate("/products");
                })

            })
            .catch((err) => {
                if (err.response.data.message === "Wrong Credentials") {
                    setPasswordErrorMesage("Wrong Password");
                } else if (err.response.data.message === "User with this email do not exist") {
                    setEmailErrorMesage("User with this email do not exist");
                }
            });
    };

    return (
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8"

        >
            <div
                className="bg-white/10 bg-opacity-50 backdrop-blur-md rounded-xl p-8 c w-full
    max-w-md shadow-2xl border border-white/20"
            >
                <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>

                <div className="space-y-4">
                    <div className="w-full flex flex-col items-start gap-1">
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
                        {emailErrorMesage !== "" && <span className="text-red-500">{emailErrorMesage}</span>}
                    </div>

                    <div className="w-full flex flex-col items-start gap-1">
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 bg-transparent
            border border-gray-300 rounded text-while placeholder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500"
                        />
                        {passwordErrorMesage !== "" && (
                            <span className="text-red-500">{passwordErrorMesage}</span>
                        )}
                    </div>

                    <button
                        type="button"
                        className="w-full p-2 bg-black text-white rounded-full border border-white
            hover:bg-blue-500 active: bg-cyan-400 transition-colors duration-200 cursor-pointer"
                        disabled={isDisabled}
                        onClick={() => {
                            onLogin();
                        }}
                    >
                        Login
                    </button>
                </div>
                <div className="text-center text-while ">
                    <span className="block cursor-default p-2">OR</span>
                    <button type="button"
                            className="w-full p-2 bg-black text-white rounded-full border border-white
            hover:bg-blue-500 active: bg-cyan-400 transition-colors duration-200 cursor-pointer">
                        <a
                            onClick={() => {
                                navigate("/register");
                            }}
                        >
                            Signup
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
