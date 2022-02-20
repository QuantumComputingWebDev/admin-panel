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
    ImageInput,
    ImageField
} from 'react-admin';
import PersonIcon from "@material-ui/icons/Person";

const Title = ({ record }) => {
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

const Speaker = {
    list: (props) => (
        <List {...props} bulkActionButtons={false}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="title" />
                <ImageField source="photo.path" label="person photo" />
                <ImageField source="poster.path" label="poster photo" />
                <TextField source="about" />
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
                <TextInput multiline source="about" />
                <ImageInput source="personSrc" label="person photo" accept="image/*">
                    <ImageField/>
                </ImageInput>
                <ImageInput source="posterSrc" label="poster photo" accept="image/*">
                    <ImageField/>
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

export default Speaker;
