import ModalUsers from "@/components/ModalUsers/ModalUsers";
import { addUserdata, userDelId } from "../lib/actions";
import { getUser } from "../lib/data";
import TableCard from "../table/page";


const UsersPage = async() => {

    const users =  await getUser();
    // console.log("All users", users);
    
    return (
        <div className="max-w-[80%] mx-auto my-10">
            <div className="flex justify-between items-center py-10">
            <h1>User Management : {users.length} </h1>
            <div>
                <ModalUsers userAction={addUserdata}></ModalUsers>
            </div>

            </div>
            <div>
                <TableCard users={users} deleteAction={userDelId}></TableCard>
            </div>
        </div>
    );
};

export default UsersPage;