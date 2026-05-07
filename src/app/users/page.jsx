import { getUser } from "../lib/data";
import TableCard from "../table/page";


const UsersPage = async() => {

    const users =  await getUser();
    // console.log("All users", users);
    
    return (
        <div className="max-w-[80%] mx-auto my-10">
            <h1>User Management : {users.length} </h1>
            <div>
                <TableCard users={users}></TableCard>
            </div>
        </div>
    );
};

export default UsersPage;