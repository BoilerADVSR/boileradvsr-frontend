import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from "@mui/material";
import theme from '../theme';
import {Container, Paper, TextField, Button, Box, Typography, Avatar, } from "@mui/material";
import image from './backgroundimage.jpeg'
import { Diversity1 } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

export default function Landing() {
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
                    <Typography color="secondary" variant="h3">Welcome back, John</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h5">What would you like to do?</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Button color="secondary" variant="contained" size="large" sx={{m: 4 }} style={{fontSize: '24px', maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px'}}>Find A Course</Button>
                    <Button color="secondary" variant="contained" size="large" sx={{m: 4 }} style={{fontSize: '24px', maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px'}}>Plan A Semester</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button color="secondary" variant="contained" size="large" sx={{m: 4 }} style={{fontSize: '24px', maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px'}}>View My Transcript</Button>
                    <Button color="secondary" variant="contained" size="large" sx={{m: 4 }} style={{fontSize: '24px', maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px'}}>Contact My Advsior</Button>
                </Grid>
            </Grid>
        </Container>
        </ThemeProvider>
        </div>
    );
}