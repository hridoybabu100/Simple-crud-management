'use client'
import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";


const TableCard = ({ users,deleteAction }) => {
  // console.log(users);

  const handledel = async(userId) => {
     await deleteAction(userId);
  }

  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    <Link href={`/users/${user._id}`}>
                      {" "}
                      <Button variant="secondary">Details</Button>{" "}
                    </Link>
                    
                      {" "}
                      <Link href={`/users/${user._id}/edit`}>
                      <Button variant="outline">Edit</Button>{" "}
                      </Link>
                   
               
                      {" "}
                      <AlertDialog>
                        <Button variant="danger">Delete User</Button>
                        <AlertDialog.Backdrop>
                          <AlertDialog.Container>
                            <AlertDialog.Dialog className="sm:max-w-100">
                              <AlertDialog.CloseTrigger />
                              <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                  Delete project permanently?
                                </AlertDialog.Heading>
                              </AlertDialog.Header>
                              <AlertDialog.Body>
                                <p>
                                  This will permanently delete{" "}
                                  <strong>My Name : {user.name}</strong> and all of
                                  its data. This action cannot be undone.
                                </p>
                              </AlertDialog.Body>
                              <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                  Cancel
                                </Button>
                                <Button onClick={() => handledel(user._id)} slot="close" variant="danger">
                                  Confirm Delete User
                                </Button>
                              </AlertDialog.Footer>
                            </AlertDialog.Dialog>
                          </AlertDialog.Container>
                        </AlertDialog.Backdrop>
                      </AlertDialog>{" "}
                   
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default TableCard;
