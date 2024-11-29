import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TableHeaderTitle from './TableHeaderTitle';
import {student} from '../../data/customData'
const columns = [
  { field: 'id', headerName: 'No.', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'rollNumber', headerName: 'Roll No.', width: 200 },
  {
    field: 'image',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => (
      <Avatar src={params.value || 'https://via.placeholder.com/50'} alt="avatar" />
    ),
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: () => (
      <IconButton color="primary">
        <EditIcon />
      </IconButton>
    ),
  },
];

const AdminTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await GetOnboardedStudentList();
//         const teacherData = response.data.students;
//         const formattedRows = teacherData.map((teacher, index) => ({
//           id: index + 1,
//           firstName: teacher.name.firstName,
//           lastName: teacher.name.lastName,
//           gender: 'N/A', 
//           email: teacher.email,
//           mobile: teacher.contactInfo.phone,
//           image: teacher.avatar,
//         }));

//         setRows(formattedRows);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching teachers:', error);
//         setLoading(false);
//       }
//     };

//     fetchTeachers();
//   }, []);

useEffect(()=>{
        const formattedRows = student.map((student, index) => ({
          id: index + 1,
          firstName: student.name.firstName,
          lastName: student.name.lastName,
          gender: student.gender, 
          email: student.email,
          mobile: student.contactInfo.phone,
          rollNumber:student.rollNumber,
          image: student.avatar,
        }));
        setRows(formattedRows)
        setLoading(false);

},[])
  return (
    <div style={{ height: 600, width: '100%', marginTop: '20px' }}>
      <TableHeaderTitle title="Students" />
      <DataGrid
        style={{ backgroundColor: 'white' }}
        rows={rows}
        columns={columns}
        loading={loading}
        pageSize={10}
        slots={{ toolbar: GridToolbar }}
        checkboxSelection
      />
    </div>
  );
};

export default AdminTable;