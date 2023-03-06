import React, { Component } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from "@mui/material";
import theme from '../theme';
import {Container, Paper, TextField, Button, Box, Typography, Avatar, } from "@mui/material";
import image from './backgroundimage.jpeg'
import { Diversity1 } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import ResponsiveAppBar from "../components/ResponsiveAppBar";


class Landing extends Component {

    styles = {
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

    emptyItem = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        validate: {
            emailState: '',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
    }
    
    async componentDidMount() {
        const student = await (await fetch(`/students/${this.props.match.params.id}`)).json();
        this.setState({item: student});
    }

    render() {
        const {state} = this.props.location;
        const {item} = this.state;
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ResponsiveAppBar/>
        <Container component="main" maxwidth="xs" alignitems="center" justifycontent="center">
            <Grid container spacing={0} direction="column" alignitems="center" justifycontent="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={3}>
                    <Typography color="secondary" variant="h3">Welcome back, {item.firstName}</Typography>
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
    );
    }
}

export default Landing;