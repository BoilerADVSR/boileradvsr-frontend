import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import theme from './theme.js';
import LoginBox from './components/LoginBox.js'
import SignupBox from './components/SignupBox.js'
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () =>{

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ResponsiveAppBar/>
            <LoginBox/>
            <SignupBox/>
        </ThemeProvider>
    )

}

export default App