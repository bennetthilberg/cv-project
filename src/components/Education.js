import React, {useState} from 'react';

export default function Education(props){
    const edu = props.data;
    return(
        <div className="education">
            <p>{edu.school}</p>
            <p>{edu.major}</p>
            <p>{edu.degree}</p>
        </div>
    );
}