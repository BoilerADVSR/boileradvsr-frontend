import React from "react";
import axios from 'axios';
import Course from "./Course.js";

export default class CourseList extends React.Component {

    state = {
        courses: []
    }

    department = "STAT";

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
            <div>
                {this.state.courses.map(course => (
                    <Course
                        key = {course.Id}
                        title = {course.Title} 
                        number = {course.Number}
                        creditHours = {course.CreditHours}
                    />
                ))}
            </div>
        );
      }
}