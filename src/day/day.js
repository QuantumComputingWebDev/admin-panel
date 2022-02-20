import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    NumberField,
    DateInput,
    NumberInput,
    DateField,
    DeleteButton, ImageField, ImageInput
} from 'react-admin';
import EventIcon from '@material-ui/icons/Event';


const Title = ({ record }) => {
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

const Day = {
    list: (props) => (
        <List {...props} bulkActionButtons={false}>
            <Datagrid>
                <TextField source="id" />
                <DateField source="date" />
                <ImageField source="poster.path" label="poster photo" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    ),
    edit: (props) => (
        <Edit title={<Title />} {...props}>
            <SimpleForm>
                <DateInput source="date" />
                <ImageInput source="posterSrc" label="poster photo" accept="image/*">
                    <ImageField/>
                </ImageInput>
            </SimpleForm>
        </Edit>
    ),
    create: (props) => (
        <Create {...props}>
            <SimpleForm>
                <DateInput source="date" />
            </SimpleForm>
        </Create>
    ),
    icon: EventIcon
}

export default Day;