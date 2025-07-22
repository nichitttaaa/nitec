import { CalendarDays, Earth, Languages, Mail, UserIcon, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { getUserById } from "../api/requests";
import type { MySelfResponse } from "../api/types";
import moment from "moment";
/*import {useUserStore} from "../stores/useUserStore.ts";*/

const User = () => {
 /* const {user} = useUserStore() */
  const [user, setUser] = useState<MySelfResponse | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    getUserById(id).then((data) => {
      setUser(data);
    });
  }, []);

  const { t, i18n } = useTranslation();


  return (
    <div className=" overflow-auto w-full px-4 sm:px-8 md:px-16 lg:px-32 py-8  ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{user?.firstName} Account</h1>
        {/* <Switch defaultChecked /> */}
        <div className="flex items-center gap-2">
          <Button
            className="cursor-pointer"
            onClick={() => i18n.changeLanguage("ro")}
            color={i18n.language === "ro" ? "green" : undefined}
          >
            Romana
          </Button>
          <Button
            className="cursor-pointer"
            onClick={() => i18n.changeLanguage("en")}
            color={i18n.language === "en" ? "green" : undefined}
          >
            Engleza
          </Button>
        </div>
      </div>

      <div className=" border-gray-400   my-6 border-b" />

      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="lg:w-1/3">
          <UserRound className="w-20 h-20 text-gray-200 bg-gray-300 rounded-full p-2 my-3 " />
          <h2 className="text-xl font-semibold mb-2">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-gray-600 text-sm">{user?.email}</p>

          <div className="flex flex-col gap-5 mt-10">
            <p className="font-medium text-xl  text-orange-600">Personal information</p>
            <p className="font-medium text-xl text-gray-800  cursor-pointer">Billing & Payments</p>
            <p className="font-medium text-xl text-gray-800  cursor-pointer">Order History</p>
            <p className="font-medium text-xl text-gray-800  cursor-pointer">Gift Cards</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:w-2/3 ">
          <h2 className="text-2xl font-bold mb-6 mt-10">{t("user.title")}</h2>
          <p className="text-gray-500 mb-6 w-full max-w-[500px]">{t("user.description")}</p>
          <div className="grid grid-cols-2 sm:grid-cols-2  gap-6">
            <div>
              <div className="bg-white rounded-2xl shadow-sm border p-8 flex items-start justify-between hover:shadow-gray-500 transition">
                <div>
                  <p className="text-sm font-semibold">Name</p>
                  <p className="text-gray-700 mt-1 text-sm">
                    {user?.firstName} {user?.lastName}
                  </p>
                </div>
                <UserIcon className="text-orange-600" />
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-sm border p-8  flex items-start justify-between hover:shadow-gray-500 transition">
                <div>
                  <p className="text-sm font-semibold">Date of Birth</p>
                  <p className="text-gray-700 mt-1 text-sm">
                    {moment(user?.createdAt).format("D MMMM YYYY")}
                  </p>
                </div>
                <CalendarDays className="text-orange-600" />
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-sm border p-8 flex items-start justify-between hover:shadow-gray-500 transition ">
                <div>
                  <p className="text-sm font-semibold">Country Region</p>
                  <p className="text-gray-700 mt-1 text-sm">Giorgia , Tbilisi</p>
                </div>
                <Earth className="text-orange-600" />
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-sm border p-8 flex items-start justify-between hover:shadow-gray-500 transition ">
                <div>
                  <p className="text-sm font-semibold">Language</p>
                  <p className="text-gray-700 mt-1 text-sm">{i18n.language}</p>
                </div>
                <Languages className="text-orange-600" />
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-sm border p-8 flex items-start justify-between hover:shadow-gray-500 transition ">
                <div>
                  <p className="text-sm font-semibold">Contactable at</p>
                  <p className="text-gray-700 mt-1 text-sm">{user?.email}</p>
                </div>
                <Mail className="text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
