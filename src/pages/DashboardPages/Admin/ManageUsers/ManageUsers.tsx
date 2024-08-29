import Button from "../../../../components/Button/Button";
import { useGetAllUsersQuery } from "../../../../redux/Features/Users/usersApi";
import UserTable from "./UserTable";


const ManageUsers = () => {

    const {data} = useGetAllUsersQuery({});

    return (
        <div>
             <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#364F53]">Manage Users</h1>

        <div>
          <Button variant="primary">
            Add New Bike
          </Button>
        </div>

      </div>

            <div className="mt-7">
            <UserTable users={data?.data}/>
            </div>
        </div>
    );
};

export default ManageUsers;