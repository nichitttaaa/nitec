import {UserIcon} from "lucide-react";
import {useUserStore} from "../../stores";
import {useState} from "react";
import UserEditDialog from "../dialogs/UserEditDialog.tsx";

const UserDropdown = () => {
    const { user } = useUserStore();
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <button
            onClick={() => {
                setOpen(!open);
            }}
            className="relative p-4 gap-2 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"
        >
            {user ? (
                <span className="font-semibold hidden md:flex">
                  {user?.firstName} {user?.lastName}
                </span>
            ) : (
                <div className=" !w-6 loader"></div>
            )}

            <UserIcon />
            {open && (
            <div
                onClick={(e) => e.stopPropagation()}
                className="p-4 flex flex-col items-start gap-3 bg-white shadow-lg rounded-xl w-max border border-gray-500 absolute right-0 top-16 z-10">
                 <span className="font-semibold hidden md:flex">
                  {user?.firstName} {user?.lastName}
                </span>
                <span>{user?.email}</span>
                <span>{user?.phoneNumber}</span>
                <button
                    onClick={() => setOpenDialog(true)}
                    className="p-2 flex items-center justify-center bg-gray-300 rounded-sm cursor-pointer">Edit</button>
                {openDialog && (
                    <UserEditDialog open={openDialog} setOpen={setOpenDialog}/>
                )}
            </div>
                )}
        </button>
    )
}

export default UserDropdown