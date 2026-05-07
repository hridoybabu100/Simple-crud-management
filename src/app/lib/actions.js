import { revalidatePath } from "next/cache";


export const addUserdata = async(formData) => {
    "use server"
    const createuser = Object.fromEntries(formData.entries());

    const res = await fetch("http://localhost:5000/users",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(createuser)
    });

    const adduser = await res.json();
    // console.log("add user", adduser);

    if ( adduser.insertedId){
        revalidatePath('/users')
    }
    return adduser;
    



}

export const userDelId = async (userId) => {
  "use server";
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if( data.deletedCount > 0){
 revalidatePath('/users')
}
return data;

};
