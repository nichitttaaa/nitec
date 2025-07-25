import { LogIn, MailPlus, ShoppingBasket, Heart, LogOut, UserIcon, PackageSearch } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { getMySelf } from "../../api/requests.ts";

import {useUserStore} from "../../stores/useUserStore.ts";
import {Users} from "lucide-react";

function NavBar() {
  const {user, setUser, clear} = useUserStore();

  const navigate = useNavigate();


  useEffect(() => {
    if (!user) {
      getMySelf().then((data) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <div className="w-screen h-auto px-50 md:px-30 py-2 flex items-center justify-center">
      <div className="w-full  bg-[#EAF1F1] rounded-4xl justify-between flex items-center  p-2">
        <div
          className="w-[150px] h-[60px] rounded-4xl  bg-[#E4EBED] flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="ml-7">
            <span className="font-bold text-3xl ">N</span>
            <span className="text-2xl">nitec.</span>
          </div>
        </div>

        {user ? (
          <div className=" flex items-center gap-4">
            <NavLink to="/cart" end>
              <button className="p-4 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all">
                <ShoppingBasket />
              </button>
            </NavLink>
            <button
              onClick={() => {
                navigate("/liked");
              }}
              className="p-4 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"
            >
              <Heart fill="#FF0000" stroke="#FF0000" />
            </button>
            <button
                onClick={() => {

                  navigate("/users");
                }}
                className="p-4 gap-2 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"
            >
              <span className="font-semibold hidden md:flex">Users</span>
              <Users />
            </button>
             <button
                onClick={() => {

                  navigate("/products");
                }}
                className="p-4 gap-2 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"
            >
              <span className="font-semibold hidden md:flex">Products</span>
              <PackageSearch />
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                clear()
                navigate("/");
              }}
              className="p-4 gap-2 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"
            >
              <span className="font-semibold hidden md:flex">Log out</span>
              <LogOut />
            </button>

            <button
              onClick={() => {
                navigate("/user");
              }}
              className="p-4 gap-2 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"
            >
              {user ? (
                <span className="font-semibold hidden md:flex">
                  {user?.firstName} {user?.lastName}
                </span>
              ) : (
                <div className=" !w-6 loader"></div>
              )}

              <UserIcon />
            </button>

              

          </div>


        ) : (
          <div className=" flex items-center gap-4">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="p-4 gap-2 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"
            >
              <span className="font-semibold hidden md:flex">Login</span>
              <LogIn />
            </button>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="p-4 gap-2 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"
            >
              <span className="font-semibold hidden md:flex">Register</span>
              <MailPlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
