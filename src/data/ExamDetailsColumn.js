import React from "react";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box } from "@mui/material";

const ExamDetailsColumns = [
    { field: "sNo", headerName: "S. No.", width: 70 },
    { field: "centerCode", headerName: "Center Code", width: 150 },
    { field: "centerName", headerName: "Center Name", width: 200 },
    { field: "shiftDate", headerName: "Exam Date", width: 150 },
    { field: "shiftTime", headerName: "Shift Time", width: 150 },
    { field: "totalStudents", headerName: "Total Candidates", width: 150 },
    {
        field: "presentStudents",
        headerName: "Present / Absent",
        width: 150,
        renderCell: (params) => {
            const { totalStudents, presentStudents } = params.row;
            return `${presentStudents} / ${totalStudents - presentStudents}`;
        },
    },
    {
        field: "centerStatus",
        headerName: "Center Status",
        width: 150,
        renderCell: (params) => {
            const status = params.row.centerStatus;
            return (
                <Box
                    sx={{
                        padding: "5px 10px",
                        borderRadius: "4px",
                        textAlign: "center",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {status ? (
                        <WarningAmberIcon 
                        sx={{
                            color: "#ffa500",
                        }}/>
                    ) : (
                        <CheckCircleOutlineIcon
                        sx={{color: "#2e7d32",}}/>
                    )}
                </Box>
            );
        },
    },
];


export default ExamDetailsColumns;
