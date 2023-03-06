import React, { Component } from "react";
import {Container, Paper, Button, TextField, Box, Typography, Avatar, } from "@mui/material";
import { Link } from 'react-router-dom';

class SignupBox extends Component {
    emptyItem = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('/students' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/students');
    }

    render() {
        const {item} = this.state;
        return (
            <Container maxwidth="xs">
                    <Box sx={{ p: 2 }}>
                        <Avatar sx={{ m: 1}}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Paper elevation={1} sx={{ p: 2, m: 2 }}>
                            <TextField margin="normal" required fullWidth id="firstName" label="First Name" name="firstName" autoComplete="firstName" autoFocus 
                                value={item.firstName || ''} onChange={this.handleChange} 
                            />
                            <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lastName" autoFocus
                                value={item.lastName || ''} onChange={this.handleChange} 
                            />
                            <TextField margin="normal" required fullWidth id="email" label="Purdue Email Address" name="email" autoComplete="email" autoFocus
                                value={item.email || ''} onChange={this.handleChange}
                            />
                            <TextField margin="normal" required fullWidth id="emailConfirm" label="Confirm Purdue Email Address" name="email" autoComplete="email" autoFocus/>
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password"
                                value={item.password || ''} onChange={this.handleChange}
                            />
                            <TextField margin="normal" required fullWidth name="passwordConfirm" label="Confirm Password" type="password" id="passwordConfirm"/>
                            
                            <Button variant="contained" sx={{m: 2 }}  onSubmit={this.handleSubmit}>Sign Up</Button>
                            
                        </Paper>
                    </Box>
            </Container>
        );
    }
}

export default SignupBox;