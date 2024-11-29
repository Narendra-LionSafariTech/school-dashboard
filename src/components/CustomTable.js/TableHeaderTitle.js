import React from "react";
import HouseIcon from "@mui/icons-material/House";
import { Box, Typography } from "@mui/material";

const TableHeaderTitle = ({ title,subTitle }) => {
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      gap={2} 
      height="40px"
      marginY={2}
    >
      <HouseIcon color="primary" />
      <Typography 
        variant="h6" 
        fontWeight="600" 
        color="primary.main"
      >
        {subTitle} : {title}
      </Typography>
    </Box>
  );
};

export default TableHeaderTitle;
