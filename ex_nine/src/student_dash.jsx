import { Component } from "react";
import { DashboardHeader } from "./Dashboardhead";

import { StudentList } from "./Student_List";



class StudentDashboard extends Component{
    constructor(props)
    {
        super(props)

        this.state = {
            student_data : [
            {
                id: 1,
                name: "Dipak",
                course: "React",
                isEnrolled: true
            },
            {
                id: 2,
                name: "Hari",
                course: "Python",
                isEnrolled: true
            },
            {
                id: 3,
                name: "Sita",
                course: "AI/ML",
                isEnrolled: false
            }
        ], 
                }
            }

    render(){
        return(
            <>
                <DashboardHeader total_student={this.state.student_data.length} title="Student Dashboard"/>

                <StudentList student_data={this.state.student_data}/>
            </>
        )
    }
} 

export {StudentDashboard}