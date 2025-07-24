
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllUsers} from "../api/requests.ts";
import type {User} from "../api/types.ts"



const Users = () => {
const [users, setUsers] = useState<User[]>([]);
const navigate = useNavigate();
useEffect(() => {
    getAllUsers().then((data)=> {
        setUsers(data);
    })
}, [])

    return (
        <div className="page-container scrollbar-hide">
            <div className = "text-2xl flex justify-center items-center font-bold" >
                <span>User</span>
            </div>

            <div className="flex flex-wrap relative left-45 top-10 gap-8 w-full h-full max-h-full overflow-y-auto scrollbar-hide ">
                {users.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => {
                            navigate(`/user/${user?.id}`);
                        }}
                        className="box-border min-w-100 min-h-60 p-4 size-max rounded-2xl bg-[#EAF1F1] flex flex-col cursor-pointer border border-2 ">

                        <div className="border-2 rounded-full w-30 h-30 bg-cover bg-no-repeat ">
                            <img src="/nitec/public/titktokLogo.svg" alt=""/>
                        </div>
                        <div className="flex items-center gap-4  w-30 h-10 text-xl relative left-35 bottom-20">
                            <span>{user?.firstName}</span>
                            <span>{user?.lastName}</span>
                            
                        </div>
                        <div className="relative text-gray-600 flex flex-col ">
                        <span>{user?.email}</span>
                        <span>{user?.phoneNumber || 'no number'}</span>
                        <span>{user?.role}</span>
                        </div>
                        <button className="relative  bg-gradient-to-b w-30 h-12  from-[#1578bf] to-[#304b70] text-white font-bold text-[18px] border-none rounded-[30px] px-[28px] py-[14px] cursor-pointer hover:bg-gradient-to-b hover:from-[#0084ff] hover:to-[#2c1bc5] hover:translate-y-[-5px] transition-all duration-300 ease-in-out animate-[button-shimmer_2s_infinite] hover:animate-[button-particles_1s_ease-in-out_infinite] top-12 left-60 ">
                            Invite</button>
                        <button className="relative inline-block bg-gradient-to-b w-50 h-12 from-[#f3db23] to-[#d5ab12] text-white font-bold text-[18px] border-none rounded-[30px] px-[28px] py-[14px] cursor-pointer hover:bg-gradient-to-b hover:from-[#fff700] hover:to-[#ffbf00] hover:translate-y-[-5px] transition-all duration-300 ease-in-out animate-[button-shimmer_2s_infinite] hover:animate-[button-particles_1s_ease-in-out_infinite]  left-5 ">
                           + Add Friend</button>

                    </div>
                ))}

            </div>


        </div>
    )
}

export default Users