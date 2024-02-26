import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin'
import { UserProps } from '../../types/ListType'

const UserList = (props: UserProps) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <EditButton resource="users" />
        <DeleteButton resource="users" />
      </Datagrid>
    </List>
  )
}

export default UserList