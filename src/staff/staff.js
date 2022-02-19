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
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="title" />
                <ImageField source="src" title="name" />
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
                <ImageInput source="src" label="profile picture" accept="image/*">
                    <ImageField source="src" title="title" />
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
