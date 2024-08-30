import { useState } from "react";
import Button from "../../../../components/Button/Button";
import { useDeleteUserMutation } from "../../../../redux/Features/Users/usersApi";
import { TUser } from "./user.types";

const UserTable = ({ users }: { users: TUser }) => {

  const [selectedUserID, setSelectedUserID] = useState<string>("")

  const [deleteUser, {isLoading : isDeleting}] = useDeleteUserMutation();

  const handleDeleteUser = async () => {
    const userId = selectedUserID;
    console.log(userId);
    try {
      const res = await deleteUser(userId).unwrap();
      console.log(res);
      if(res.success){
        console.log("Success");
      }
  } catch (err) {
      console.log(err);
  }
  }
  return (
    <div className="w-full">
      <div className="overflow-x-auto font-Roboto w-full">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead className="">
            <tr>
              <th className="rounded-tl-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-left text-xs font-semibold text-white uppercase tracking-wider">
                User Name
              </th>

              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Role
              </th>
              <th className="rounded-tr-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: TUser) => (
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {user?.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {user?.email}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {user?.address}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {user?.role}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center gap-5 mt-4">
                    <Button onClick={() => {
                      setSelectedUserID(user?._id);
                      handleDeleteUser();
                    }} variant="warning" classNames="bg-rose-500">
                      {
                        isDeleting ? "Deleting..." : "Delete"
                      }
                    </Button>
                    <Button variant="secondary">Make Admin</Button>
                  </div>
                </td>
                {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
                  <RxCross2
                    onClick={() => handleDeleteCartItem(cartItem?._id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
