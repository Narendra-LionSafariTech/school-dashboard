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
import ExamDetailsColumns from "../../data/ExamDetailsColumn";
import { getStudentInfo, getStudentCount } from "../../services/admin.services";

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
  const [isExamDetais, setIsExamDetails] = useState(true)

  const fetchExamData = async (examName, shift) => {
    try {
      const response = await getStudentCount(examName, shift);
      if (response.status === 200) {
        const centerSummaries = response.data.map((item, index) => ({
          sNo: index + 1,
          centerCode: item.centerCode,
          centerName: item.centerName,
          shiftDate: item.shiftDate,
          shiftTime: item.shiftTime,
          totalStudents: item.totalStudents,
          presentStudents: item.presentStudents,
          presentUnenrolledRollNumbers: item.presentUnenrolledRollNumbers,
          centerStatus: item.presentUnenrolledRollNumbers.length > 0,
        }));
  
        setRows(centerSummaries);
        setFilteredRows(centerSummaries);
        setCenterCode(centerSummaries.map((item) => item.centerCode));
      }
    } catch (error) {
      console.error("Error fetching exam data:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    const examDetails = JSON.parse(localStorage.getItem("examDetails"));
    if (examDetails) {
      const { examName, shift } = examDetails;
      setExamName(examName);
      setShiftTime(shift);

      const params = new URLSearchParams({ examName, shift });
      window.history.replaceState(null, "", `?${params.toString()}`);
      fetchExamData(examName, shift);
    }
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
      <Container sx={{ mt: 4 }}>
        <HeaderTitle
          title="2024_November_Raicher University Exam"
          subTitle="Exam"
        />

        <Grid2 container spacing={3}>
          <Grid2 item size={{ xs: 12, sm: 4 }}>
            <HeaderStatsCard
              title="Total Students"
              value="32,912"
              change={12}
              detailsLink="#"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 4 }}>
            <HeaderStatsCard
              title="Present Students"
              value="18,680"
              change={10}
              detailsLink="#"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 4 }}>
            <HeaderStatsCard
              title="Absent Students"
              value="3,423"
              change={9}
              detailsLink="#"
            />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={3} marginY={2}>
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

        {isExamDetais &&
          <ExamCenterDetailsTable
            rows={filteredRows}
            columns={ExamDetailsColumns}
            loading={loading}
          />
        }
        {!isExamDetais &&
          <ExamCenterDetailsTable
            rows={filteredRows}
            columns={columns}
            loading={loading}
            selectedAnalytics={selectedAnalytics}
          />
        }

      </Container>
    </div>
  );
};

export default AdminDashboard;
