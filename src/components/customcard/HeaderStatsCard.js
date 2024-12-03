import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const HeaderStatsCard = ({ title, value, change, detailsLink }) => {
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
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {value}
        </Typography>
        <Typography
          variant="body2"
          color={change > 0 ? "success.main" : "error.main"}
        >
          {change > 0 ? `+${change}%` : `${change}%`} 
        </Typography>
        {detailsLink && (
          <Box mt={1}>
            <Typography
              variant="body2"
              color="primary"
              component="a"
              href={detailsLink}
              style={{ textDecoration: "none" }}
            >
              See Details →
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default HeaderStatsCard;
