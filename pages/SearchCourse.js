import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from "@mui/material";
import theme from '../theme';
import {Container, Paper, TextField, Button, Box, Typography, Avatar, } from "@mui/material";
import image from './backgroundimage.jpeg'
import { Diversity1 } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

export default function SearchCourse() {
    const styles = {
        bg: {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
        },
        content: {
            zIndex: 1,
        }
    };
    
    return (

        <div>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ResponsiveAppBar/>
        <Container component="main" maxwidth="xs" alignItems="center" justifyContent="center">
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={3}>
                    <Typography color="secondary" variant="h3"><b>Find a Course</b></Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField focused id="outlined-basic" color="secondary" label="Search Course by Name" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" sx={{m: 2 }}>Find</Button>
                </Grid>
            </Grid>
        </Container>
        </ThemeProvider>
        </div>
    );
}