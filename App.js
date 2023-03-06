import React, {Component} from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import theme from './theme.js';
import LoginBox from './pages/LoginBox.js'
import SignupBox from './pages/SignupBox.js'
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import SearchCourse from './pages/SearchCourse'

class App extends Component {
    render(){
        return (
            
                <BrowserRouter>
                    <Routes>
                        <Route path="/signup" element={<SignupBox />}/>
                        <Route path="/login" element={<LoginBox />}/>
                        <Route path="/landing" element={<Landing />}/>
                        <Route path="/profile" element={<Profile />}/>
                        <Route path="/search" element={<SearchCourse />}/>
                        <Route path="/" element={<Home />}/>
                    </Routes>
                </BrowserRouter>
            
        );
    }
}

export default App