import React from "react";
import {Container, Paper, TextField, Button, Box, Typography, Avatar, } from "@mui/material";

export default function SignUp() {
    return (
        <Container component="main" maxwidth="xs">
                <Box sx={{ p: 2 }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Paper elevation={1} sx={{ p: 2, m: 2 }}>
                        <TextField margin="normal" required fullWidth id="firstName" label="First Name" name="firstName" autoComplete="firstName" autoFocus/>
                        <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lastName" autoFocus/>
                        <TextField margin="normal" required fullWidth id="email" label="Purdue Email Address" name="email" autoComplete="email" autoFocus/>
                        <TextField margin="normal" required fullWidth id="emailConfirm" label="Confirm Purdue Email Address" name="email" autoComplete="email" autoFocus/>
                        <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password"/>
                        <TextField margin="normal" required fullWidth name="passwordConfirm" label="Confirm Password" type="password" id="passwordConfirm"/>
                        <Button variant="contained" sx={{m: 2 }}>Sign Up</Button>
                    </Paper>
                </Box>
        </Container>
    );
}