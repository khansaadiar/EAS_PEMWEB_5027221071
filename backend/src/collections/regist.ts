import { CollectionConfig } from 'payload/types';

const registration: CollectionConfig = {
  slug: 'registrations',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'school',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Waiting', value: 'waiting' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Accepted', value: 'accepted' },
      ],
      defaultValue: 'waiting',
    },
    {
      name: 'registrationDate',
      type: 'date',
      required: true,
    },
  ],
};

export default registration;