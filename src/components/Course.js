import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Course({ title, number, creditHours}) {
  
    return (
        <Card variant="outlined" sx={{ bgcolor: '#1E1E1E', height: '90%', width: '50%'}}>
          <CardContent>
            <Typography sx={{color: '#CEB888', fontWeight: 'bold'}}>{title}</Typography>
            <Typography sx={{color: '#ffffff'}}>Course Number: {number}</Typography>
            <Typography sx={{color: '#ffffff'}}>Credit Hours: {creditHours}</Typography>
          </CardContent>
        </Card>
    )
};