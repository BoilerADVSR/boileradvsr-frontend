import React, { Component } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from "@mui/material";
import theme from '../theme';
import { Container, Paper, TextField, Button, Box, Typography, Avatar, } from "@mui/material";
import image from './backgroundimage.jpeg'
import { Link } from 'react-router-dom';

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

class Home extends Component {

    render() {
        return (

            <div style={styles.bg}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container maxwidth="xs" alignitems="center" justifyContent="center" style={styles.content}>
                        <Grid container spacing={0} direction="column" alignitems="center" justifycontent="center" style={{ minHeight: '100vh' }}>
                            <Grid item xs={3}>
                                <Typography variant="h4">Welcome to</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h2" color="secondary"> <b>BoilerADVSR</b></Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h4">Your Virtual Purdue Advisor</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                
                                    <Button color="secondary" variant="contained" size="large" ><Link to="/signup" >Sign Up</Link></Button>
                                
                                
                                    <Button color="secondary"  variant="contained" size="large" sx={{ m: 4 }}><Link to="/login" >Log In</Link></Button>
                                
                            </Grid>
                        </Grid>
                    </Container>
                </ThemeProvider>
            </div>
        );
    }
}

export default Home;