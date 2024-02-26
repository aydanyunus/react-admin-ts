import { Datagrid, DeleteButton, EditButton, List, TextField, ListProps } from 'react-admin'

const UserList = (props: ListProps) => {
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