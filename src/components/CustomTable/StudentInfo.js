import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";

const StudentDetailsTable = ({ studentData }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Roll No.</TableCell>
            <TableCell>Candidate Name</TableCell>
            <TableCell>Father Name</TableCell>
            <TableCell>Mother Name</TableCell>
            <TableCell>Application No.</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Shift</TableCell>
            <TableCell>Candidate Image</TableCell>
            <TableCell>Current Image</TableCell>
            <TableCell>Biometric</TableCell>
            <TableCell>Enrolled</TableCell>
            <TableCell>Verification</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentData.map((student, index) => (
            <TableRow key={student.rollNumber}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{student.rollNumber}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.fatherName || "N/A"}</TableCell>
              <TableCell>{student.motherName || "N/A"}</TableCell>
              <TableCell>{student.applicationNumber}</TableCell>
              <TableCell>{student.dob || "N/A"}</TableCell>
              <TableCell>{student.centerDetails.shift}</TableCell>
              <TableCell>
                <Avatar
                  src={student.photo}
                  alt="Candidate Image"
                  sx={{ width: 50, height: 50 }}
                />
              </TableCell>
              <TableCell>
                <Avatar
                  src={student.enrollmentData.newPicture}
                  alt="Current Image"
                  sx={{ width: 50, height: 50 }}
                />
              </TableCell>
              <TableCell>
                <Typography variant="body2">Left & Right Thumb</Typography>
              </TableCell>
              <TableCell>
                {student.enrollmentStatus.userEnrolled ? "Yes" : "No"}
              </TableCell>
              <TableCell>
                {student.enrollmentStatus.isPresent ? "Verified" : "Pending"}
              </TableCell>
              <TableCell>
                {student.enrollmentStatus.enrollmentTime || "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentDetailsTable;
