import React from "react";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box} from "@mui/material";

const columns = [
  { field: "sNo", headerName: "S. No.", width: 70 },
  { field: "centerCode", headerName: "Center Code", width: 150 },
  { field: "centerName", headerName: "Center Name", width: 200 },
  { field: "examDate", headerName: "Exam Date", width: 150 },
  { field: "shiftTime", headerName: "Shift Time", width: 150 },
  { field: "totalCandidates", headerName: "Total Candidates", width: 150 },
  {
    field: "verificationDetails",
    headerName: "Present / Absent",
    width: 150,
    renderCell: (params) =>
      `${params.value.present} / ${params.value.absent}`,
  },
  {
    field: "centerStatus",
    headerName: "Center Status",
    width: 150,
    renderCell: (params) => {
      const status = params.value;
      const backgroundColor =
        status === "success" ? "#4caf50" : "orange";

      return (
        <Box
          sx={{
            padding: "5px 10px",
            borderRadius: "4px",
            textAlign: "center",
            // backgroundColor,
            // color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {status === "success" ? (
            <CheckCircleOutlineIcon />
          ) : (
            <WarningAmberIcon />
          )}
          {/* <Box component="span" sx={{ ml: 1 }}>
            {status === "success" ? "Success" : "Warning"}
          </Box> */}
        </Box>
      );
    },
  },
];

export default columns;
