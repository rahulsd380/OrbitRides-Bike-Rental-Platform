
import Button from "../../../../components/Button/Button";
import { useChangeUserRoleToAdminMutation, useChangeUserRoleToUserMutation, useDeleteUserMutation } from "../../../../redux/Features/Users/usersApi";
import { TUser } from "./user.types";
import deleteIcon from "../../../../assets/Icons/delete.svg";
import { CustomToast } from "../../../../components/ToastMessage/ToastMessage";
import successIcon from "../../../../assets/Icons/successIcon.svg"
import errorIcon from "../../../../assets/Icons/error.svg"

const UserTable = ({ users }: { users: TUser }) => {

  const [deleteUser, {isLoading : isDeleting}] = useDeleteUserMutation();
  const [changeUserRoleToAdmin, {isLoading : isUpdating}] = useChangeUserRoleToAdminMutation();
  const [changeUserRoleToUser, {isLoading : isUpdatingUser}] = useChangeUserRoleToUserMutation();

  const handleDeleteUser = async (userId:string) => {
    console.log(userId);
    try {
      const res = await deleteUser(userId).unwrap();
      if(res.success){
        CustomToast({
          title: "User deleted successfully!",
          message: "Explore new bikes",
          icon: successIcon,
        });
      }
  } catch (err) {
    CustomToast({
      title: "Couldn't delete user.",
      icon: errorIcon,
    });
  }
  }

  const handleMakeAdmin = async (userId : string) => {
    console.log(userId);
    try {
      const res = await changeUserRoleToAdmin(userId).unwrap();
      console.log(res);
      if(res.success){
        console.log("Success");
      }
  } catch (err) {
      console.log(err);
  }
  }

  const handleMakeUser = async (userId : string) => {
    try {
      const res = await changeUserRoleToUser(userId).unwrap();
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
        <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-x-auto">
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
          <tbody className="w-full overflow-x-auto">
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

                    <button
                    onClick={() => {
                      handleDeleteUser(user?._id);
                    }} 
                    className="flex items-center gap-2">
                      <img src={deleteIcon} alt="" className="size-5" />
                      {
                        isDeleting? "Deleting..." : "Delete"
                      }
                    </button>
{
                       user?.role === "user" ?
                       <Button
                       classNames="w-[140px]"
                       onClick={() => {
                        handleMakeAdmin(user?._id);
                      }} 
                       variant="primary">
                        {
                        isUpdating? "Updating..." : "Make Admin"
                      }
                       </Button>

                       :
                       <Button 
                       onClick={() => {
                        handleMakeUser(user?._id);
                      }} 
                       variant="primary">
                        {
                        isUpdatingUser? "Updating..." : "Make User"
                      }
                       </Button>
                    }
                    
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
