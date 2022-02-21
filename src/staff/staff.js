import * as React from "react";
import {
    Create,
    Datagrid,
    DeleteButton,
    Edit,
    EditButton,
    List,
    SelectField,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    ImageField,
    ImageInput
} from 'react-admin';
import PersonIcon from "@material-ui/icons/Person";

const Title = ({ record }) => {
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

const Staff = {
    list: (props) => (
        <List {...props} bulkActionButtons={false}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="title" />
                <ImageField source="photo.path" label="person photo" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    ),
    edit: (props) => (
        <Edit title={<Title />} {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="title" />
                <ImageInput source="src" label="person photo" accept="image/*">
                    <ImageField />
                </ImageInput>
            </SimpleForm>
        </Edit>
    ),
    create: (props) => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    ),
    icon: PersonIcon
}

export default Staff;
