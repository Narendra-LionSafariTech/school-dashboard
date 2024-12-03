import React from "react";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { Box, Typography, Button } from "@mui/material";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
import AnalyticsChart from "../customChart/AnalaticsChart";

const ExamCenterDetailsTable = ({ rows, columns, loading, selectedAnalytics }) => {
  // Ensure rows have unique IDs
  const rowsWithIds = rows.map((row, index) => ({
    id: row.id || index, // Use existing `id` or fallback to index
    ...row,
  }));

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Exam Center Details");
    XLSX.writeFile(workbook, "Exam_Center_Details.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Exam Center Details", 10, 10);
    const tableColumn = columns.map((col) => col.headerName);
    const tableRows = rows.map((row) => columns.map((col) => row[col.field]));
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });
    doc.save("Exam_Center_Details.pdf");
  };

  const CustomToolbar = () => (
    <GridToolbarContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Button onClick={exportToExcel} variant="contained" color="primary" sx={{ mr: 2 }}>
          Export to Excel
        </Button>
        <Button onClick={exportToPDF} variant="contained" color="secondary">
          Export to PDF
        </Button>
      </Box>
    </GridToolbarContainer>
  );

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
          rows={rowsWithIds} // Pass rows with unique IDs
          columns={columns}
          loading={loading}
          pageSize={10}
          components={{ Toolbar: CustomToolbar }}
        />
      </div>

      {selectedAnalytics && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Analytics for: {selectedAnalytics.centerName} ({selectedAnalytics.centerCode})
          </Typography>
          <AnalyticsChart data={selectedAnalytics} />
        </Box>
      )}
    </Box>
  );
};

export default ExamCenterDetailsTable;
