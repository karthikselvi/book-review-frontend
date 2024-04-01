import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function DefaultStar({rate }) {
  return (
    <Box
    sx={{
      '& > legend': { mt: 2 },
    }}
  >
     <Rating style={{position:"static"}} name="read-only" value={rate} readOnly />
  </Box>
  )
}

export default DefaultStar