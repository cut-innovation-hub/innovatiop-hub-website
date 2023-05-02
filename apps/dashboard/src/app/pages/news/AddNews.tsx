/* eslint-disable @typescript-eslint/ban-types */
import DashboardLayout from '../../layouts/DashboardLayout'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';

type Props = {}

const AddNews = (props: Props) => {
  const [value, setValue] = useState('');

  return (
    <DashboardLayout>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DashboardLayout>
  )
}

export default AddNews