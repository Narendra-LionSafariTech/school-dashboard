import React from "react";
import { Box } from "@mui/material";
import SubmitButton from "../customComponent/SubmitButton";

const FilterComponent = ({
  centerCode,
  setCenterCode,
  shiftTime,
  setShiftTime,
  examName,
  setExamName,
  handleFilterSubmit,
  rows,
}) => {
  const uniqueShiftTimes = [...new Set(rows.map((row) => row.shiftTime))];
  const uniqueExamNames = [...new Set(rows.map((row) => row.examName))];

  return (
    <Box
      component="form"
      onSubmit={handleFilterSubmit}
      sx={{
        display: "flex",
        gap: 2,
        mt: 4,
        mb: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ minWidth: 200 }}>
        <select
          value={centerCode}
          onChange={(e) => setCenterCode(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Center</option>
          {rows.map((row) => (
            <option key={row.centerCode} value={row.centerCode}>
              {row.centerName} ({row.centerCode})
            </option>
          ))}
        </select>
      </Box>
      <Box sx={{ minWidth: 200 }}>
        <select
          value={shiftTime}
          onChange={(e) => setShiftTime(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Shift</option>
          {uniqueShiftTimes.map((shift) => (
            <option key={shift} value={shift}>
              {shift}
            </option>
          ))}
        </select>
      </Box>
      <Box sx={{ minWidth: 200 }}>
        <select
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Exam</option>
          {uniqueExamNames.map((exam) => (
            <option key={exam} value={exam}>
              {exam}
            </option>
          ))}
        </select>
      </Box>
      <SubmitButton type="submit" color="primary" />
    </Box>
  );
};

export default FilterComponent;
