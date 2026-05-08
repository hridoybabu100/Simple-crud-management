import { getUserId } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const EditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserId(userId);
  // console.log('User Id', user);

  return (
    <div>
      <h1>User Edit</h1>
      <p>Name : {user.name}</p>
      <div className="max-w-1/2 mx-auto">
        <form action={''} className="flex flex-col gap-4">
          <TextField className="w-full" name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField className="w-full" name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField className="w-full" name="role" type="tel">
            <Label>Role</Label>
            <Input placeholder="Enter your rule" />
          </TextField>
        
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Edit User
            </Button>
        
        </form>
      </div>
    </div>
  );
};

export default EditPage;
