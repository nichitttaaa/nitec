
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllUsers} from "../api/requests.ts";
import type {User} from "../api/types.ts"
import {ArrowDown} from "lucide-react";



const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        getAllUsers().then((data)=> {
            setUsers(data);
        })
    }, [])

    return (
        <div className="page-container scrollbar-hide bg-gradient-to-b from-[#D3DCDD] via-green-800 to-gray-300">
            <div className = "text-2xl flex justify-center items-center font-bold" >
                <span>Users</span>
            </div>

            <div className="flex flex-wrap gap-4 w-full h-full max-h-full overflow-y-auto scrollbar-hide items-center justify-center">

                {users.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => {
                            navigate(`/user/${user?.id}`);
                        }}
                        className="box-border  min-w-72 min-h-98 p-4 size-max rounded-2xl bg-white/30 backdrop-blur-md transform transition-all hover:scale-95 hover:border-black shadow-2xl border border-gray-300 flex flex-col cursor-pointer">
                        <span className="flex items-center justify-center mt-15 gap-2">User<ArrowDown/></span>
                        <div className="flex items-center gap-4 justify-center mt-8">
                            <ul>
                                <li><span>First Name: {user?.firstName}</span></li>
                                <li><span>Last Name: {user?.lastName}</span></li>

                                <li><span>email: {user?.email}</span></li>
                                <li><span>phone Number: {user?.phoneNumber || 'no number'}</span></li>
                                <li><span>Role: {user?.role}</span></li>
                            </ul>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    )
}

export default Users