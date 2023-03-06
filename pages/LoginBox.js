import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { Component } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from "@mui/material";
import theme from '../theme';
import {Container, Paper, TextField, Button, Box, Typography, Avatar, } from "@mui/material";
import { Diversity1 } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";


class LoginBox extends Component {
    student = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        
    };


    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        };
        this.handleRequest = this.handleRequest.bind(this);
    }

    handleRequest() {
        fetch("/stduents/login", {
           method: "post",
           body: JSON.stringify({
             email: this.state.idValue,
             password: this.state.pwValue
          }),
        })
        .then((response) => response.json())
        .then((result) => {
          if(result.message === "SUCCESS"){
            alert("You are logged in.");
           } else {
               alert("Please check your login information.");
           }
        });
    }

    render() {
        return (
            <Container maxwidth="xs">
                    <Box sx={{ p: 2, justifycontent: 'center' }}>
                        <Container>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign In
                            </Typography>
                        </Container>
                        <Paper elevation={1} sx={{ p: 2, m: 2 }}>
                            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus
                             value={this.state.email || ''} onChange={(e) => {this.setState({email: e.target.value})}}
                             />
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
                             value={this.state.password || ''} onChange={(e) => {this.setState({password: e.target.value})}}
                             />
                             <Link  to="/landing" >
                            <Button type="submit" variant="contained" sx={{m: 2 }}
                                onClick={this.handleRequest}
                            >Log In</Button>
                            </Link>
                        </Paper>
                    </Box>
            </Container>
        );
    }
}
export default LoginBox;