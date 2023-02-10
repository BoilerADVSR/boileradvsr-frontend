import React from "react";
import axios from 'axios';
import Course from "./Course.js";
import Grid from '@mui/material/Grid';

export default class CourseList extends React.Component {

    state = {
        courses: []
    }

    department = "CS";

    componentDidMount() {
        axios.get(`https://api.purdue.io/odata/Courses?$filter=Subject/Abbreviation eq '`+this.department+`'&$orderby=Number asc`)
            .then(res => {
            const courses = res.data.value;
            console.log(courses);
            this.setState({ courses});
        })
    }

    render() {
        return (
            <Grid direction="rows" alignItems="center" justifyContent="center" container spacing={2}>
                {this.state.courses.map((course) => {
                    return (
                        <Grid key = {course.Id} item xs={4}>
                            <Course
                                title = {course.Title} 
                                number = {course.Number}
                                creditHours = {course.CreditHours}
                            />  
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}