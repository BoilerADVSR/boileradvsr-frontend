import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from "@mui/material";
import theme from '../theme';
import {Container, Paper, TextField, Button, Box, Typography, Avatar, } from "@mui/material";
import image from './backgroundimage.jpeg'
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SignupBox from "../components/SignupBox"

export default function SignUp() {
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
            <SignupBox/>
        </Container>
        </ThemeProvider>
        </div>
    );
}