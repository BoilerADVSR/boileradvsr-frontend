import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import theme from './theme.js';
import LoginBox from './components/LoginBox.js'
import SignupBox from './components/SignupBox.js'
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import SearchCourse from './pages/SearchCourse'

const App = () =>{

    return (
        // <ThemeProvider theme={theme}>
        //     <CssBaseline/>
        //     <ResponsiveAppBar/>
        //     <LoginBox/>
        //     <SignupBox/>
        // </ThemeProvider>
        
        //<Home/>
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/signup" element={<SignupBox/>}/>
                    <Route path="/login" element={<LoginBox/>}/>
                    <Route path="/landing" element={<Landing/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/search" element={<SearchCourse/>}/>
                </Routes>
            </Router>
        </div>
    )

}

export default App