import {Button, Table} from "@heroui/react";
import Link from "next/link";

const TableCard = ({users}) => {

  console.log(users);

  
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

            {
              users.map((user) => 
                 <Table.Row key={user._id}>

              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Link href={`/users/${user._id}`}>  <Button variant="secondary">Details</Button> </Link>
                <Link href={`/users/${user._id}`}> <Button variant="outline">Edit</Button> </Link>
                <Link href={`/users/${user._id}`}> <Button variant="danger">Delete</Button> </Link>
              </Table.Cell>
            </Table.Row>
              )
            }
           
           
          
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
        </div>
    );
};

export default TableCard;