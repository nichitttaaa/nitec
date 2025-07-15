
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
                <span>Users</span>
            </div>

            <div className="flex flex-wrap gap-4 w-full h-full max-h-full overflow-y-auto scrollbar-hide">
                {users.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => {
                            navigate(`/user/${user?.id}`);
                        }}
                        className="box-border min-w-72 min-h-98 p-4 size-max rounded-2xl bg-[#EAF1F1] flex flex-col cursor-pointer">
                        <div className="flex items-center gap-4">
                            <span>{user?.firstName}</span>
                            <span>{user?.lastName}</span>
                        </div>
                        <span>{user?.email}</span>
                        <span>{user?.phoneNumber || 'no number'}</span>
                        <span>{user?.role}</span>
                    </div>
                ))}

            </div>


        </div>
    )
}

export default Users