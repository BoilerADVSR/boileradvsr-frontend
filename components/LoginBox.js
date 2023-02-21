import React from "react";
import {Container, Paper, TextField, Button, Box, Typography, Avatar, } from "@mui/material";

export default function SignIn() {
    return (
        <Container component="main" maxwidth="xs">
                <Box sx={{ p: 2, justifyContent: 'center' }}>
                    <Container>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                    </Container>
                    <Paper elevation={1} sx={{ p: 2, m: 2 }}>
                        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
                        <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
                        <Button variant="contained" sx={{m: 2 }}>Log In</Button>
                    </Paper>
                </Box>
        </Container>
    );
}