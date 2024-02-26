import { Create, SimpleForm, TextInput, CreateProps } from "react-admin"

const UserCreate = (props: CreateProps) => {
  return (
    <Create title="Create New User" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" multiline />
    </SimpleForm>
  </Create>
  )
}

export default UserCreate