

import { userUpdated } from "@/app/lib/actions";
import { getUserId } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const EditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserId(userId);
  // console.log('User Id', user);

  const updateWrapper = async (formData) => {
    "use server";
    console.log('formdata', formData);
    
    return userUpdated(formData,userId);
  };

  return (
    <div>
      <h1>User Edit</h1>
      <p>Name : {user.name}</p>
      <p>Name : {user.email}</p>
      <p>Name : {user.role}</p>
      <div className="max-w-1/2 mx-auto">
        <form action={updateWrapper} className="flex flex-col gap-4">
          <TextField
            className="w-full"
            defaultValue={user?.name}
            name="name"
            type="text"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            defaultValue={user?.email}
            name="email"
            type="email"
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            defaultValue={user?.role}
            name="role"
            type="tel"
          >
            <Label>Role</Label>
            <Input placeholder="Enter your rule" />
          </TextField>

          <div className="flex gap-2">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Edit User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
