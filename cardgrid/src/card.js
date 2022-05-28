import React from 'react'
import { GrMapLocation } from 'react-icons/gr';

export default function card(props){
    return(
        <div className="card">
            <div>
                <GrMapLocation /><span className="location">{props.location}</span>
            </div>
            <div className="title">
                {props.title}
                </div>
                <div className="date">{props.date}</div>
                <div className="description">{props.description}</div>
        </div>
    )
}