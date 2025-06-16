import {
  CalendarDays,
  Earth,
  Languages,
  Mail,
  UserIcon,
  UserRound,
} from "lucide-react";

const User = () => {
  return (
    <div className=" w-full px-4 sm:px-8 md:px-16 lg:px-32 py-8  ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Nespola Account</h1>
        <button className="bg-orange-600 text-white rounded-2xl px-4 py-1 cursor-pointer hover:bg-orange-700 transition">
          Sign out
        </button>
      </div>

      <div className=" border-gray-400   my-6 border-b" />

      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="lg:w-1/3">
          <UserRound className="w-20 h-20 text-gray-200 bg-gray-300 rounded-full p-2 my-3 " />
          <h2 className="text-xl font-semibold mb-2">Irakli Talavadze</h2>
          <p className="text-gray-600 text-sm">ikakodesign@gmail.com</p>

          <div className="flex flex-col gap-5 mt-10">
            <p className="font-medium text-xl  text-orange-600">
              Personal information
            </p>
            <p className="font-medium text-xl text-gray-800  cursor-pointer">
              Billing & Payments
            </p>
            <p className="font-medium text-xl text-gray-800  cursor-pointer">
              Order History
            </p>
            <p className="font-medium text-xl text-gray-800  cursor-pointer">
              Gift Cards
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:w-2/3 ">
          <h2 className="text-2xl font-bold mb-6 mt-10">Personal information</h2>
          <p className="text-gray-500 mb-6">
            Manage your personal information, including phone numbers and email
            address where you can <br />
             be contacted
          </p>
          <div
            className="grid grid-cols-2 sm:grid-cols-2  gap-6" >
            <div >
              <div className="bg-white rounded-2xl shadow-sm border p-8 flex items-start justify-between hover:shadow-gray-500 transition">
                <div>
                  <p className="text-sm font-semibold">Name</p>
                  <p className="text-gray-700 mt-1 text-sm">Irakli Talavadze</p>
                </div>
                <UserIcon className="text-orange-600" />
              </div>
            </div>

            <div >
              <div className="bg-white rounded-2xl shadow-sm border p-8  flex items-start justify-between hover:shadow-gray-500 transition">
                <div>
                  <p className="text-sm font-semibold">Date of Birth</p>
                  <p className="text-gray-700 mt-1 text-sm">07 July 1993</p>
                </div>
                <CalendarDays className="text-orange-600" />
              </div>
            </div>

            <div >
              <div className="bg-white rounded-2xl shadow-sm border p-8 flex items-start justify-between hover:shadow-gray-500 transition ">
                <div>
                  <p className="text-sm font-semibold">Country Region</p>
                  <p className="text-gray-700 mt-1 text-sm">
                    Giorgia , Tbilisi
                  </p>
                </div>
                <Earth className="text-orange-600" />
              </div>
            </div>

            <div >
              <div className="bg-white rounded-2xl shadow-sm border p-8 flex items-start justify-between hover:shadow-gray-500 transition ">
                <div>
                  <p className="text-sm font-semibold">Language</p>
                  <p className="text-gray-700 mt-1 text-sm">English</p>
                </div>
                <Languages className="text-orange-600" />
              </div>
            </div>

            <div >
              <div className="bg-white rounded-2xl shadow-sm border p-8 flex items-start justify-between hover:shadow-gray-500 transition ">
                <div>
                  <p className="text-sm font-semibold">Contactable at</p>
                  <p className="text-gray-700 mt-1 text-sm">
                    ikakodesign@gmail.com
                  </p>
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
