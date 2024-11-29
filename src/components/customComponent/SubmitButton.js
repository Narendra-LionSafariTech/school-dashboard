import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({type,color,}) => {
  return (
    <Button
      type={type}
      variant="contained"
      color={color}
      size="large"
      sx={{
        padding: '10px 20px',
        borderRadius: '8px',
        textTransform: 'none',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'primary.dark',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
