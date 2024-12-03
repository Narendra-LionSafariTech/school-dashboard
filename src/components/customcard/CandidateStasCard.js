import React from "react";
import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material";

const CandidateStatsCard = ({ totalCandidates, candidateStats }) => {
  const calculatePercentage = (count) => ((count / totalCandidates) * 100).toFixed(2);

  const getProgressBarColor = (label) => {
    if (label.toLowerCase() === "present") {
      return "success";
    } else if (label.toLowerCase() === "absent") {
      return "warning";
    }
    return "primary"; // Default color
  };

  return (
    <Card
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "16px",
        height:"100%"
      }}
    >
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Students Info
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Total: {totalCandidates.toLocaleString()}
        </Typography>

        {candidateStats.map((stat, index) => (
          <Box key={index} mt={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography fontWeight="bold">{stat.label}</Typography>
              <Typography color="text.secondary">
                {stat.count.toLocaleString()} ({calculatePercentage(stat.count)}%)
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={calculatePercentage(stat.count)}
              sx={{
                height: 10,
                borderRadius: "5px",
                mt: 1,
                bgcolor: "lightgray",
                "& .MuiLinearProgress-bar": {
                  bgcolor: (theme) => theme.palette[getProgressBarColor(stat.label)].main,
                },
              }}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default CandidateStatsCard;
