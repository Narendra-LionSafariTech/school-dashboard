import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { examCenters } from '../../data/examCenter';
import TableHeaderTitle from './TableHeaderTitle';
import SubmitButton from '../customComponent/SubmitButton';
import AnalyticsChart from '../customChart/AnalaticsChart';

const columns = [
  { field: 'sNo', headerName: 'S. No.', width: 70 },
  { field: 'centerCode', headerName: 'Center Code', width: 150 },
  { field: 'centerName', headerName: 'Center Name', width: 200 },
  { field: 'examDate', headerName: 'Exam Date', width: 150 },
  { field: 'shiftTime', headerName: 'Shift Time', width: 150 },
  { field: 'totalCandidates', headerName: 'Total Candidates', width: 150 },
  {
    field: 'verificationDetails',
    headerName: 'Present / Absent',
    width: 150,
    renderCell: (params) =>
      `${params.value.present} / ${params.value.absent}`,
  },
  {
    field: 'centerStatus',
    headerName: 'Center Status',
    width: 150,
    renderCell: (params) => {
      const status = params.value;
      const backgroundColor =
        status === 'Completed'
          ? '#4caf50' 
          : status === 'Ongoing'
          ? '#f44336'
          : '#ff9800'; 
      return (
        <div
          style={{
            padding: '5px 10px',
            borderRadius: '4px',
            color: 'white',
            textAlign: 'center',
            backgroundColor,
          }}
        >
          {status}
        </div>
      );
    },
  },
];


const ExamCenterDetailsTable = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedAnalytics, setSelectedAnalytics] = useState(null); 
  const [loading, setLoading] = useState(true);

  const [centerCode, setCenterCode] = useState('');
  const [shiftTime, setShiftTime] = useState('');

  useEffect(() => {
    setRows(examCenters);
    setFilteredRows(examCenters); 
    setLoading(false);
  }, []);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filtered = rows.filter((row) => {
      const matchesCenter = centerCode ? row.centerCode === centerCode : true;
      const matchesShift = shiftTime ? row.shiftTime === shiftTime : true;
      return matchesCenter && matchesShift;
    });
    setFilteredRows(filtered);
    setSelectedAnalytics(filtered[0]);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f7f9fc' }}>
      <TableHeaderTitle
        title="2024_November_Raicher University Exam"
        subTitle="Exam Center Details"
      />

      <form
        onSubmit={handleFilterSubmit}
        style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
      >
        <select
          value={centerCode}
          onChange={(e) => setCenterCode(e.target.value)}
          style={{ padding: '10px' }}
        >
          <option value="">Select Center</option>
          {rows.map((row) => (
            <option key={row.centerCode} value={row.centerCode}>
              {row.centerName} ({row.centerCode})
            </option>
          ))}
        </select>
        <select
          value={shiftTime}
          onChange={(e) => setShiftTime(e.target.value)}
          style={{ padding: '10px' }}
        >
          <option value="">Select Shift</option>
          {[...new Set(rows.map((row) => row.shiftTime))].map((shift) => (
            <option key={shift} value={shift}>
              {shift}
            </option>
          ))}
        </select>
        <SubmitButton type="submit" color="primary" />
      </form>

      <DataGrid
        style={{ backgroundColor: 'white' }}
        rows={filteredRows.map((row, index) => ({
          ...row,
          id: index + 1,
        }))}
        columns={columns}
        loading={loading}
        pageSize={10}
        slots={{ toolbar: GridToolbar }}
        checkboxSelection
      />

      {selectedAnalytics && (
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ marginBottom: '20px' }}>
            Analytics for: {selectedAnalytics.centerName} (
            {selectedAnalytics.centerCode})
          </h3>
          <AnalyticsChart data={selectedAnalytics} />
        </div>
      )}
    </div>
  );
};

export default ExamCenterDetailsTable;
