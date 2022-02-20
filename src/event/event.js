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
    DeleteButton, ImageField, ImageInput, useRecordContext
} from 'react-admin';
import EventIcon from '@material-ui/icons/Event';
import Avatar from '@material-ui/core/Avatar';


const Title = ({ record }) => {
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

const SpeakerAvatar = ({ record }) => {
    console.log(record)
    return <div>
        <span>{record.name}</span>
        {record.photo && record.photo.path && <Avatar src={record.photo.path} alt={record.name}/>}
    </div>
}

const Event = {
    list: (props) => (
        <List {...props} bulkActionButtons={false}>
            <Datagrid>
                <TextField source="id" />
                <DateField source="date" />
                <TextField source="title" />
                <ReferenceField source="speaker" reference="person">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="briefDescription" />
                <TextField source="description" />
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
                <TextInput source="title" />
                <ReferenceInput source="speaker" reference="speaker">
                    <SelectInput optionText={<SpeakerAvatar />} />
                </ReferenceInput>
                <TextInput source="briefDescription" />
                <TextInput source="description" />
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
                <TextInput source="title" />
                <ReferenceInput source="speaker" reference="speaker">
                    <SelectInput optionText={<SpeakerAvatar />} />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    ),
    icon: EventIcon
}

export default Event;