import React from "react";
import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material";

const CandidateStatsCard = ({ totalCandidates, candidateStats }) => {
  const calculatePercentage = (count) => (count / totalCandidates) * 100;

  return (
    <Card
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Candidate Statistics
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Total: {totalCandidates.toLocaleString()}
        </Typography>

        {candidateStats.map((stat, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Typography fontWeight="bold">{stat.label}:</Typography>
            <Typography color="text.secondary">
              {stat.count.toLocaleString()} ({stat.percentage}%)
            </Typography>
          </Box>
        ))}

        <Box mt={3}>
          {candidateStats.map((stat, index) => (
            <Box key={index} mb={2}>
              <Typography fontWeight="bold">{stat.label}</Typography>
              <LinearProgress
                variant="determinate"
                value={calculatePercentage(stat.count)}
                sx={{ height: 10, borderRadius: "5px" }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CandidateStatsCard;
