// src/components/CustomTable/ExamCenterDetailsTable.js

import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import AnalyticsChart from "../customChart/AnalaticsChart";

const ExamCenterDetailsTable = ({
  rows,
  columns,
  loading,
  selectedAnalytics,
}) => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f7f9fc",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows.map((row, index) => ({
            ...row,
            id: index + 1,
          }))}
          columns={columns}
          loading={loading}
          pageSize={10}
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
        />
      </div>

      {selectedAnalytics && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Analytics for: {selectedAnalytics.centerName} (
            {selectedAnalytics.centerCode})
          </Typography>
          <AnalyticsChart data={selectedAnalytics} />
        </Box>
      )}
    </Box>
  );
};

export default ExamCenterDetailsTable;
