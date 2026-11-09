import { Component } from "react";
import {StudentCard} from "./Student";


class StudentList extends Component
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            student_data: this.props.student_data,
        }
    }

    render()
    {
        return(
            <>
                {this.state.student_data.map(student => <StudentCard key={student.id} id={student.id} name={student.name} course={student.course} isEnrolled={student.isEnrolled} />)}
            </>
        )
    }
}

export {StudentList};