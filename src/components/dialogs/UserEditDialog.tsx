import {Button, Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";
import {type Dispatch, type SetStateAction, useState} from "react";
import {updateUser} from "../../api/requests.ts";
import {toast} from "react-toastify";
import {useUserStore} from "../../stores";

interface UserEditDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const UserEditDialog= ({open, setOpen}:UserEditDialogProps) => {
    const {user, setUser} = useUserStore()
    const [firstName, setFirstName] = useState(user?.firstName ?? "");
    const [lastName, setLastName] = useState(user?.lastName ?? "");
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber ?? "");


    const handleOpen = () => {
        setOpen(!open);
    }

    const handleEditUser = () => {
        const payload = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
        }
        updateUser(payload).then((data) => {
            setUser(data)
            setOpen(false);
            toast.success("User updated successfully");
        })
    }

    return(
        <Dialog open={open} handler={handleOpen} className="dialog_container">
            <DialogHeader>Edit User</DialogHeader>
            <DialogBody>
                <div className="w-full flex flex-col gap-4 items-center justify-center">
                    <div className="flex w-full flex-col items-start gap-2">
                        <label>User First name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            className="w-full rounded-lg border border-gray-500 bg-white px-3"
                            placeholder="First name"
                        />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <label>User Last name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            className="w-full rounded-lg border border-gray-500 bg-white px-3"
                            placeholder="Last name"
                        />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <label>User Phone number</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                            className="w-full rounded-lg border border-gray-500 bg-white px-3"
                            placeholder="Phone number"
                        />
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    className="mr-1"
                    onClick={handleOpen}
                >
                    <span>Cancel</span>
                </Button>
                <Button
                    variant="gradient"
                    color="green"
                    onClick={handleEditUser}
                    disabled={firstName === '' || lastName === ''}
                >
                    <span>Save</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default UserEditDialog;