import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {register} from "../api/requests";
import type {RegisterData} from "../api/types";
import {toast} from "react-toastify";

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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8">

            <div className="bg-white/10 bg-opacity-50 backdrop-blur-md rounded-xl p-8 c w-full
    max-w-md shadow-2xl border border-white/20">
                <h3 className="text-3xl font-bold text-center text-white mb-6">Create your account</h3>
                <div className="space-y-4">
                    <div className="w-full flex flex-col items-start gap-1">
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
                            placeholder="Email"
                            className="w-full px-4 py-2 bg-transparent
            border border-gray-300 rounded text-while placegolder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500"
                            style={{borderColor: emailErrorMesage === "" ? "white" : "red"}}
                        />
                        {emailErrorMesage !== "" && (
                            <span className="text-red-500">{emailErrorMesage}</span>
                        )}
                    </div>

                    <div className="w-full flex flex-col items-start gap-1">
                        <input
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-2 bg-transparent
            border border-white rounded text-while placeholder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500"
                        />
                    </div>

                    <div className="w-full flex flex-col items-start gap-1">
                        <input
                            value={secondName}
                            onChange={(e) => {
                                setSecondName(e.target.value);
                            }}
                            type="text"
                            placeholder="Second Name"
                            className="w-full px-4 py-2 bg-transparent
            border rounded text-while placeholder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500 border-white"
                        />
                    </div>

                    <div className="w-full flex flex-col items-start gap-1">
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
                            placeholder="Password"
                            className={`w-full px-4 py-2 bg-transparent
            border border-gray-300 rounded text-while placeholder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500 ${
                                passwordErrorMesage !== "" ? "border-red-500" : "border-white"
                            }`}
                        />
                        {passwordErrorMesage !== "" && (
                            <span className="text-red-500">{passwordErrorMesage}</span>
                        )}
                    </div>

                    <div className="w-full flex flex-col items-start gap-1">
                        <input
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            type="password"
                            placeholder="Confirm password"
                            className="w-full px-4 py-2 bg-transparent
            border border-white rounded text-while placeholder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500"
                        />
                        {password !== confirmPassword && confirmPassword !== "" && (
                            <span className="text-red-500">Passwords does not match</span>
                        )}
                    </div>
                </div>
                <div className="p-2">
                    <button
                        type="button"
                        className="w-full p-2 bg-black text-white rounded-full border border-white
            hover:bg-blue-500 active: bg-cyan-400 transition-colors duration-200 cursor-pointer"
                        disabled={isDisabled}
                        onClick={() => {
                            onRegister()
                        }}
                    >
                        Register
                    </button>
                    <div className="text-center text-while ">
                        <span className="block cursor-default p-2">OR</span>
                        <button type="button"
                                className="w-full p-2 bg-black text-white rounded-full border border-white
            hover:bg-blue-500 active: bg-cyan-400 transition-colors duration-200 cursor-pointer">
                            <a
                                onClick={() => {
                                    navigate("/login");
                                }}
                            >
                                Log in here
                            </a>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
        ;
};

export default Register;
