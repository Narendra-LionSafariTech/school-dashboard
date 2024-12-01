import React, { useState, useEffect } from "react";
import { Container, Grid2, Box, Paper, styled } from "@mui/material";
import HeaderTitle from "../../components/common/HeaderTitle";
import HeaderStatsCard from "../../components/customcard/HeaderStatsCard";
import Analytics from "../../components/customChart/Analatics";
import CandidateStatsCard from "../../components/customcard/CandidateStasCard";
import ExamCenterDetailsTable from "../../components/CustomTable/ExamCenterDetailsTable";
import { examCenters } from "../../data/examCenter";
import FilterComponent from "../../components/CustomTable/FilterComponent";
import columns from "../../data/ExamCenterColumn";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AdminDashboard = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedAnalytics, setSelectedAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  const [centerCode, setCenterCode] = useState("");
  const [shiftTime, setShiftTime] = useState("");
  const [examName, setExamName] = useState('');

  useEffect(() => {
    setRows(examCenters);
    setFilteredRows(examCenters);
    setLoading(false);
  }, []);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filtered = rows.filter((row) => {
      const matchesCenter = centerCode
        ? row.centerCode === centerCode
        : true;
      const matchesShift = shiftTime
        ? row.shiftTime === shiftTime
        : true;
      return matchesCenter && matchesShift;
    });
    setFilteredRows(filtered);
    setSelectedAnalytics(filtered[0] || null);
  };


  const analyticsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    values: [1000, 2000, 1500, 3000, 2500, 3500, 2000, 4000, 3000, 3700],
  };

  const totalCandidates = 5000;
  const candidateStats = [
    { label: "Present", count: 4500, percentage: 90 },
    { label: "Absent", count: 500, percentage: 10 },
  ];
  return (
    <div>
      <HeaderTitle
        title="2024_November_Raicher University Exam"
        subTitle="Exam Center Details"
      />

      <FilterComponent
        centerCode={centerCode}
        setCenterCode={setCenterCode}
        shiftTime={shiftTime}
        setShiftTime={setShiftTime}
        examName={examName}
        setExamName={setExamName}
        handleFilterSubmit={handleFilterSubmit}
        rows={rows}
      />
      <Container sx={{ mt: 4 }}>
        <Grid2 container spacing={3}>
          <Grid2 item size={{ xs: 12, sm: 4 }}>
            <HeaderStatsCard
              title="Active Sales"
              value="$32,912"
              change={12}
              detailsLink="#"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 4 }}>
            <HeaderStatsCard
              title="Product Revenue"
              value="$18,680"
              change={10}
              detailsLink="#"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 4 }}>
            <HeaderStatsCard
              title="Product Sold"
              value="$3,423"
              change={9}
              detailsLink="#"
            />
          </Grid2>

          <Grid2 item size={{ xs: 12, md: 8 }}>
            <Analytics data={analyticsData} />
          </Grid2>

          <Grid2 item size={{ xs: 12, md: 4 }}>
            <CandidateStatsCard
              totalCandidates={totalCandidates}
              candidateStats={candidateStats}
            />
          </Grid2>
        </Grid2>


        <ExamCenterDetailsTable
          rows={filteredRows}
          columns={columns}
          loading={loading}
          selectedAnalytics={selectedAnalytics}
        />
      </Container>
    </div>
  );
};

export default AdminDashboard;
