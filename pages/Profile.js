import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from "@mui/material";
import theme from '../theme';
import {Container, Paper, TextField, Button, Box, Typography, Avatar, } from "@mui/material";
import image from './backgroundimage.jpeg'
import { Diversity1 } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

export default function Profile() {
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
        <Container component="main" maxwidth="xs" alignitems="center" justifycontent="center">
            <Grid container spacing={0} direction="column" alignitems="center" justifycontent="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={3}>
                    <Typography color="secondary" variant="h3">Edit Your Profile</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="secondary" variant="h5">First Name</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="secondary" variant="h5">Last Name</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="secondary" variant="h5">Email</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="secondary" variant="h5">Major</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="secondary" variant="h5">Academic Advisor</Typography>
                </Grid>
            </Grid>
        </Container>
        </ThemeProvider>
        </div>
    );
}